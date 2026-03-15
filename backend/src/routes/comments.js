const { Router } = require("express");
const pool = require("../db/pool");

const router = Router();

// List comments for a post
router.get("/", async (req, res, next) => {
  try {
    const { post_id } = req.query;
    if (!post_id) return res.status(400).json({ error: "post_id query param is required" });
    const { rows } = await pool.query(
      "SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at ASC",
      [post_id]
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// Create comment
router.post("/", async (req, res, next) => {
  try {
    const { body, post_id, parent_comment_id } = req.body;
    if (!body || typeof body !== "string" || body.trim().length === 0) {
      return res.status(400).json({ error: "Body is required" });
    }
    if (!post_id) {
      return res.status(400).json({ error: "post_id is required" });
    }
    const { rows } = await pool.query(
      "INSERT INTO comments (body, post_id, parent_comment_id) VALUES ($1, $2, $3) RETURNING *",
      [body.trim(), post_id, parent_comment_id || null]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Delete comment
router.delete("/:id", async (req, res, next) => {
  try {
    const { rowCount } = await pool.query(
      "DELETE FROM comments WHERE id = $1",
      [req.params.id]
    );
    if (rowCount === 0) return res.status(404).json({ error: "Comment not found" });
    res.json({ message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
