const express = require("express");
const cors = require("cors");
require("dotenv").config();

const migrate = require("./db/migrate");
const subPagesRouter = require("./routes/subPages");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const votesRouter = require("./routes/votes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", name: "Som-Connect API" });
});

// Routes
app.use("/api/subpages", subPagesRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/votes", votesRouter);

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

async function start() {
  try {
    await migrate();
    app.listen(PORT, () => {
      console.log(`Som-Connect API running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
}

start();

module.exports = app;
