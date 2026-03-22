# Kulmi

A multi-site platform connecting Somali professionals worldwide, built with **Next.js**, **Express.js**, and **PostgreSQL**.

## Platform Overview

Kulmi consists of three interconnected websites, each running in its own container:

| Site | Port | Description |
| ---- | ---- | ----------- |
| **Kulmi Main** | 3000 | Landing page — introduces the platform and links to other sites |
| **Kulmi Find** | 3002 | Listing directory — jobs, businesses, and networking events |
| **Kulmi Forum** | 3003 | Community forum — sub-pages, posts, comments, and voting |
| **Backend API** | 3001 | Express.js REST API serving the Forum |

A shared top navigation bar on every site allows users to switch between Main, Find, and Forum.

## Features

### Kulmi Main (Landing Page)
- Hero section with platform introduction
- Feature highlights (Jobs, Businesses, Networking)
- Community stats and "How It Works" guide

### Kulmi Find (Listing Directory)
- **Jobs** — Browse job listings from Somali-owned companies
- **Businesses** — Discover and support Somali-owned businesses
- **Events** — Find networking events, conferences, and gatherings
- Search and category filtering

### Kulmi Forum (Community)
- **Sub-pages** — Create and browse topic-based community spaces
- **Posts** — Share content within sub-pages with titles and body text
- **Comments** — Discuss posts with a comment system
- **Voting** — Upvote and downvote posts
- **No authentication required** — Open access for quick community building

## Tech Stack

| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Frontend | Next.js 16, React 19, Tailwind CSS |
| Backend  | Express.js 5, Node.js             |
| Database | PostgreSQL 17                      |
| Docker   | Multi-container with Docker Compose |

## Project Structure

```
kulmi/
├── main/              # Kulmi Main — landing page
│   └── src/
│       ├── app/       # App Router pages
│       └── components/# UI components (SiteNav, ThemeProvider)
├── find/              # Kulmi Find — listing directory
│   └── src/
│       ├── app/       # App Router pages (jobs, businesses, events)
│       └── components/# UI components (Navbar, SiteNav, ThemeProvider)
├── forum/             # Kulmi Forum — community forum
│   └── src/
│       ├── app/       # App Router pages (posts, sub-pages)
│       ├── components/# UI components (Navbar, SiteNav, PostCard, etc.)
│       └── lib/       # API client utilities
├── backend/           # Express.js API server
│   └── src/
│       ├── db/        # Database connection & migrations
│       ├── routes/    # API route handlers
│       ├── index.js   # Server entry point
│       └── seed.js    # Sample data seeder
├── docker-compose.yml # Multi-container orchestration
├── RESEARCH.md        # Inspiration research & SWOT analysis
└── README.md
```

## Getting Started

### Option 1: Docker Compose (Recommended)

```bash
docker compose up --build
```

This starts all services:
- **Kulmi Main** → [http://localhost:3000](http://localhost:3000)
- **Kulmi Find** → [http://localhost:3002](http://localhost:3002)
- **Kulmi Forum** → [http://localhost:3003](http://localhost:3003)
- **Backend API** → [http://localhost:3001](http://localhost:3001)

### Option 2: Local Development

#### Prerequisites

- Node.js 18+
- PostgreSQL 14+

#### 1. Database Setup

```bash
sudo -u postgres psql -c "CREATE USER kulmi WITH PASSWORD 'kulmi';"
sudo -u postgres psql -c "CREATE DATABASE kulmi OWNER kulmi;"
```

#### 2. Backend Setup

```bash
cd backend
cp .env.example .env    # Edit .env if your DB config differs
npm install
npm run seed            # Creates tables and inserts sample data
npm run dev             # Starts the API on http://localhost:3001
```

#### 3. Forum Setup

```bash
cd forum
npm install
npm run dev             # Starts on http://localhost:3000 (or set PORT=3003)
```

#### 4. Main Site Setup

```bash
cd main
npm install
npm run dev             # Starts on http://localhost:3000
```

#### 5. Find Site Setup

```bash
cd find
npm install
npm run dev             # Starts on http://localhost:3000 (or set PORT=3002)
```

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

## Forum Pages

- `/` — Home feed with all posts and popular sub-pages sidebar
- `/subpages` — Browse all sub-pages
- `/sp/:id` — View a sub-page and its posts
- `/sp/:id/create-post` — Create a new post in a sub-page
- `/post/:id` — View a post with comments and voting
- `/create-subpage` — Create a new sub-page

## Find Pages

- `/` — Browse all categories with featured listings
- `/jobs` — Job listings directory
- `/businesses` — Business directory
- `/events` — Networking events directory
