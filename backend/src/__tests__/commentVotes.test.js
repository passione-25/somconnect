const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const express = require("express");
const pool = require("../db/pool");
const migrate = require("../db/migrate");
const votesRouter = require("../routes/votes");
const commentsRouter = require("../routes/comments");

let server;
let baseUrl;

async function request(path, options) {
  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  const body = await res.json();
  return { status: res.status, body };
}

describe("Comment Votes", () => {
  let postId;
  let commentId;
  let subCommentId;

  before(async () => {
    await migrate();
    // Clean up test data
    await pool.query("DELETE FROM comment_votes");
    await pool.query("DELETE FROM votes");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM posts");
    await pool.query("DELETE FROM sub_pages");

    // Create test sub-page, post, comment, and sub-comment
    const sp = await pool.query(
      "INSERT INTO sub_pages (name, description) VALUES ('test-sp', 'test') RETURNING id"
    );
    const p = await pool.query(
      "INSERT INTO posts (title, body, sub_page_id) VALUES ('Test Post', 'body', $1) RETURNING id",
      [sp.rows[0].id]
    );
    postId = p.rows[0].id;

    const c = await pool.query(
      "INSERT INTO comments (body, post_id) VALUES ('Top-level comment', $1) RETURNING id",
      [postId]
    );
    commentId = c.rows[0].id;

    const sc = await pool.query(
      "INSERT INTO comments (body, post_id, parent_comment_id) VALUES ('Sub-comment reply', $1, $2) RETURNING id",
      [postId, commentId]
    );
    subCommentId = sc.rows[0].id;

    // Start test server
    const app = express();
    app.use(express.json());
    app.use("/api/votes", votesRouter);
    app.use("/api/comments", commentsRouter);
    server = app.listen(0);
    baseUrl = `http://localhost:${server.address().port}`;
  });

  after(async () => {
    server?.close();
    await pool.query("DELETE FROM comment_votes");
    await pool.query("DELETE FROM votes");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM posts");
    await pool.query("DELETE FROM sub_pages");
    await pool.end();
  });

  it("returns 400 when comment_id is missing", async () => {
    const { status, body } = await request("/api/votes/comment", {
      method: "POST",
      body: JSON.stringify({ value: 1 }),
    });
    assert.equal(status, 400);
    assert.equal(body.error, "comment_id is required");
  });

  it("returns 400 when value is invalid", async () => {
    const { status, body } = await request("/api/votes/comment", {
      method: "POST",
      body: JSON.stringify({ comment_id: commentId, value: 0 }),
    });
    assert.equal(status, 400);
    assert.equal(body.error, "value must be 1 or -1");
  });

  it("upvotes a top-level comment", async () => {
    const { status, body } = await request("/api/votes/comment", {
      method: "POST",
      body: JSON.stringify({ comment_id: commentId, value: 1 }),
    });
    assert.equal(status, 200);
    assert.equal(body.vote_count, 1);
    assert.equal(body.vote.comment_id, commentId);
    assert.equal(body.vote.value, 1);
  });

  it("downvotes a sub-comment", async () => {
    const { status, body } = await request("/api/votes/comment", {
      method: "POST",
      body: JSON.stringify({ comment_id: subCommentId, value: -1 }),
    });
    assert.equal(status, 200);
    assert.equal(body.vote_count, -1);
    assert.equal(body.vote.comment_id, subCommentId);
    assert.equal(body.vote.value, -1);
  });

  it("allows changing a vote (upsert)", async () => {
    // Vote was +1, change to -1
    const { status, body } = await request("/api/votes/comment", {
      method: "POST",
      body: JSON.stringify({ comment_id: commentId, value: -1 }),
    });
    assert.equal(status, 200);
    assert.equal(body.vote_count, -1);
    assert.equal(body.vote.value, -1);
  });

  it("returns vote_count in comments list", async () => {
    const { status, body } = await request(
      `/api/comments?post_id=${postId}`
    );
    assert.equal(status, 200);
    assert.ok(Array.isArray(body));
    const topComment = body.find((c) => c.id === commentId);
    assert.ok(topComment);
    assert.equal(typeof topComment.vote_count, "number");
    assert.equal(topComment.vote_count, -1);

    const subComment = body.find((c) => c.id === subCommentId);
    assert.ok(subComment);
    assert.equal(subComment.vote_count, -1);
  });

  it("new comments have vote_count 0", async () => {
    const { status, body } = await request("/api/comments", {
      method: "POST",
      body: JSON.stringify({ body: "Fresh comment", post_id: postId }),
    });
    assert.equal(status, 201);
    assert.equal(body.vote_count, 0);
  });
});
