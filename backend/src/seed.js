const pool = require("./db/pool");
const migrate = require("./db/migrate");

async function seed() {
  await migrate();

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Create sub-pages
    const subPages = [
      { name: "technology", description: "Discuss the latest in tech, gadgets, and software." },
      { name: "gaming", description: "All things gaming — news, reviews, and discussions." },
      { name: "science", description: "Share and discuss scientific discoveries and research." },
      { name: "music", description: "For music lovers — share tracks, discuss artists, and more." },
      { name: "movies", description: "Movie reviews, recommendations, and discussions." },
    ];

    const subPageIds = [];
    for (const sp of subPages) {
      const { rows } = await client.query(
        `INSERT INTO sub_pages (name, description) VALUES ($1, $2)
         ON CONFLICT (name) DO UPDATE SET description = $2
         RETURNING id`,
        [sp.name, sp.description]
      );
      subPageIds.push(rows[0].id);
    }

    // Create posts
    const posts = [
      { title: "What programming language should I learn in 2025?", body: "I'm new to coding and looking for advice on where to start. Any recommendations?", sub_page_idx: 0 },
      { title: "Next.js 15 is here — what's new?", body: "Let's discuss the latest features in Next.js 15, including the new compiler and improved caching.", sub_page_idx: 0 },
      { title: "Best indie games of 2025", body: "Share your favorite indie game discoveries this year!", sub_page_idx: 1 },
      { title: "The new James Webb telescope images are incredible", body: "NASA just released new deep field images. The detail is astounding.", sub_page_idx: 2 },
      { title: "What album changed your life?", body: "For me it was OK Computer by Radiohead. What about you?", sub_page_idx: 3 },
      { title: "Dune Part 3 — confirmed!", body: "Denis Villeneuve has confirmed a third Dune film. What are your thoughts?", sub_page_idx: 4 },
    ];

    const postIds = [];
    for (const p of posts) {
      const { rows } = await client.query(
        "INSERT INTO posts (title, body, sub_page_id) VALUES ($1, $2, $3) RETURNING id",
        [p.title, p.body, subPageIds[p.sub_page_idx]]
      );
      postIds.push(rows[0].id);
    }

    // Create comments
    const comments = [
      { body: "Definitely start with JavaScript — it's everywhere!", post_idx: 0 },
      { body: "Python is great for beginners. Very readable syntax.", post_idx: 0 },
      { body: "The new server components are a game changer.", post_idx: 1 },
      { body: "Celeste is still my top pick. Masterpiece.", post_idx: 2 },
      { body: "These images make you feel so small in the universe.", post_idx: 3 },
      { body: "Kid A is also phenomenal. Great taste!", post_idx: 4 },
      { body: "Can't wait! The casting has been perfect so far.", post_idx: 5 },
    ];

    for (const c of comments) {
      await client.query(
        "INSERT INTO comments (body, post_id) VALUES ($1, $2)",
        [c.body, postIds[c.post_idx]]
      );
    }

    // Add some votes
    for (let i = 0; i < postIds.length; i++) {
      const voteCount = Math.floor(Math.random() * 20) + 1;
      for (let j = 0; j < voteCount; j++) {
        const value = Math.random() > 0.2 ? 1 : -1;
        await client.query(
          `INSERT INTO votes (post_id, value, voter_ip) VALUES ($1, $2, $3)
           ON CONFLICT (post_id, voter_ip) DO NOTHING`,
          [postIds[i], value, `seed-${i}-${j}`]
        );
      }
      // Update vote_count
      await client.query(
        `UPDATE posts SET vote_count = (
           SELECT COALESCE(SUM(value), 0) FROM votes WHERE post_id = $1
         ) WHERE id = $1`,
        [postIds[i]]
      );
    }

    await client.query("COMMIT");
    console.log("Seed data inserted successfully");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seeding failed:", err.message);
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

seed().catch(() => process.exit(1));
