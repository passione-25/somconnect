# Som-Connect

A modern community forum inspired by Reddit, built with **Next.js**, **Express.js**, and **PostgreSQL**. Instead of "subreddits", Som-Connect uses **Sub-pages** as community spaces.

![Som-Connect Home Page](https://github.com/user-attachments/assets/46c4af27-4dfe-4fa3-9964-ddceb9a48c9c)

## Features

- **Sub-pages** — Create and browse topic-based community spaces (similar to subreddits)
- **Posts** — Share content within sub-pages with titles and body text
- **Comments** — Discuss posts with a comment system
- **Voting** — Upvote and downvote posts
- **Modern UI** — Clean, responsive design with Tailwind CSS
- **No authentication required** — Open access for quick community building

## Tech Stack

| Layer    | Technology          |
| -------- | ------------------- |
| Frontend | Next.js 16, React 19, Tailwind CSS |
| Backend  | Express.js 5, Node.js              |
| Database | PostgreSQL 16                       |

## Project Structure

```
somconnect/
├── frontend/          # Next.js application
│   └── src/
│       ├── app/       # App Router pages
│       ├── components/# Reusable UI components
│       └── lib/       # API client utilities
├── backend/           # Express.js API server
│   └── src/
│       ├── db/        # Database connection & migrations
│       ├── routes/    # API route handlers
│       ├── index.js   # Server entry point
│       └── seed.js    # Sample data seeder
├── RESEARCH.md        # Inspiration research & SWOT analysis
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### 1. Database Setup

```bash
# Create the database and user
sudo -u postgres psql -c "CREATE USER somconnect WITH PASSWORD 'somconnect';"
sudo -u postgres psql -c "CREATE DATABASE somconnect OWNER somconnect;"
```

### 2. Backend Setup

```bash
cd backend
cp .env.example .env    # Edit .env if your DB config differs
npm install
npm run seed            # Creates tables and inserts sample data
npm run dev             # Starts the API on http://localhost:3001
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev             # Starts the UI on http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| GET    | `/api/health`             | Health check             |
| GET    | `/api/subpages`           | List all sub-pages       |
| GET    | `/api/subpages/:id`       | Get a sub-page           |
| POST   | `/api/subpages`           | Create a sub-page        |
| GET    | `/api/posts`              | List posts (optional `?sub_page_id=`) |
| GET    | `/api/posts/:id`          | Get a post               |
| POST   | `/api/posts`              | Create a post            |
| DELETE | `/api/posts/:id`          | Delete a post            |
| GET    | `/api/comments?post_id=`  | List comments for a post |
| POST   | `/api/comments`           | Create a comment         |
| DELETE | `/api/comments/:id`       | Delete a comment         |
| POST   | `/api/votes`              | Vote on a post           |

## Pages

- `/` — Home feed with all posts and popular sub-pages sidebar
- `/subpages` — Browse all sub-pages
- `/sp/:id` — View a sub-page and its posts
- `/sp/:id/create-post` — Create a new post in a sub-page
- `/post/:id` — View a post with comments and voting
- `/create-subpage` — Create a new sub-page
