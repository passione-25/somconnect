const { Router } = require("express");
const pool = require("../db/pool");

const router = Router();

// Vote on a post (upvote: value=1, downvote: value=-1)
router.post("/", async (req, res, next) => {
  try {
    const { post_id, value } = req.body;
    if (!post_id) return res.status(400).json({ error: "post_id is required" });
    if (value !== 1 && value !== -1) {
      return res.status(400).json({ error: "value must be 1 or -1" });
    }

    // Use forwarded IP or remote address as anonymous voter identifier
    const voterIp =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown";

    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      // Upsert vote
      const { rows } = await client.query(
        `INSERT INTO votes (post_id, value, voter_ip)
         VALUES ($1, $2, $3)
         ON CONFLICT (post_id, voter_ip) DO UPDATE SET value = $2
         RETURNING *`,
        [post_id, value, voterIp]
      );

      // Recalculate vote_count on the post
      await client.query(
        `UPDATE posts SET vote_count = (
           SELECT COALESCE(SUM(value), 0) FROM votes WHERE post_id = $1
         ) WHERE id = $1`,
        [post_id]
      );

      await client.query("COMMIT");

      const postResult = await pool.query(
        "SELECT vote_count FROM posts WHERE id = $1",
        [post_id]
      );

      res.json({
        vote: rows[0],
        vote_count: postResult.rows[0]?.vote_count ?? 0,
      });
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  } catch (err) {
    next(err);
  }
});

// Vote on a comment (upvote: value=1, downvote: value=-1)
router.post("/comment", async (req, res, next) => {
  try {
    const { comment_id, value } = req.body;
    if (!comment_id) return res.status(400).json({ error: "comment_id is required" });
    if (value !== 1 && value !== -1) {
      return res.status(400).json({ error: "value must be 1 or -1" });
    }

    const voterIp =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown";

    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      // Upsert comment vote
      const { rows } = await client.query(
        `INSERT INTO comment_votes (comment_id, value, voter_ip)
         VALUES ($1, $2, $3)
         ON CONFLICT (comment_id, voter_ip) DO UPDATE SET value = $2
         RETURNING *`,
        [comment_id, value, voterIp]
      );

      // Recalculate vote_count on the comment
      await client.query(
        `UPDATE comments SET vote_count = (
           SELECT COALESCE(SUM(value), 0) FROM comment_votes WHERE comment_id = $1
         ) WHERE id = $1`,
        [comment_id]
      );

      await client.query("COMMIT");

      const commentResult = await pool.query(
        "SELECT vote_count FROM comments WHERE id = $1",
        [comment_id]
      );

      res.json({
        vote: rows[0],
        vote_count: commentResult.rows[0]?.vote_count ?? 0,
      });
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
