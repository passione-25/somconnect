const { Router } = require("express");
const pool = require("../db/pool");

const router = Router();

// List posts (optionally filter by sub_page_id)
router.get("/", async (req, res, next) => {
  try {
    const { sub_page_id } = req.query;
    let query = `
      SELECT p.*, sp.name AS sub_page_name
      FROM posts p
      JOIN sub_pages sp ON sp.id = p.sub_page_id
    `;
    const params = [];
    if (sub_page_id) {
      query += " WHERE p.sub_page_id = $1";
      params.push(sub_page_id);
    }
    query += " ORDER BY p.created_at DESC";
    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// Get single post
router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT p.*, sp.name AS sub_page_name
       FROM posts p
       JOIN sub_pages sp ON sp.id = p.sub_page_id
       WHERE p.id = $1`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: "Post not found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Create post
router.post("/", async (req, res, next) => {
  try {
    const { title, body, sub_page_id } = req.body;
    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return res.status(400).json({ error: "Title is required" });
    }
    if (!sub_page_id) {
      return res.status(400).json({ error: "sub_page_id is required" });
    }
    const { rows } = await pool.query(
      "INSERT INTO posts (title, body, sub_page_id) VALUES ($1, $2, $3) RETURNING *",
      [title.trim(), body || "", sub_page_id]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Delete post
router.delete("/:id", async (req, res, next) => {
  try {
    const { rowCount } = await pool.query(
      "DELETE FROM posts WHERE id = $1",
      [req.params.id]
    );
    if (rowCount === 0) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
