const { Router } = require("express");
const pool = require("../db/pool");

const router = Router();

// List all sub-pages
router.get("/", async (_req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT sp.*, COUNT(p.id)::int AS post_count
       FROM sub_pages sp
       LEFT JOIN posts p ON p.sub_page_id = sp.id
       GROUP BY sp.id
       ORDER BY sp.created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// Get single sub-page by id
router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM sub_pages WHERE id = $1",
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: "Sub-page not found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// Create sub-page
router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({ error: "Name is required" });
    }
    const { rows } = await pool.query(
      "INSERT INTO sub_pages (name, description) VALUES ($1, $2) RETURNING *",
      [name.trim(), description || ""]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    if (err.code === "23505") {
      return res.status(409).json({ error: "A sub-page with this name already exists" });
    }
    next(err);
  }
});

module.exports = router;
