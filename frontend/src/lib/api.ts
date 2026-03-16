const isServer = typeof window === "undefined";
const API_BASE = isServer
  ? (process.env.API_URL_INTERNAL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api")
  : (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api");

export interface SubPage {
  id: number;
  name: string;
  description: string;
  created_at: string;
  post_count: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  sub_page_id: number;
  sub_page_name: string;
  vote_count: number;
  created_at: string;
}

export interface Comment {
  id: number;
  body: string;
  post_id: number;
  parent_comment_id: number | null;
  created_at: string;
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || "API request failed");
  }
  return res.json();
}

// Sub-pages
export const getSubPages = () => apiFetch<SubPage[]>("/subpages");
export const getSubPage = (id: number) => apiFetch<SubPage>(`/subpages/${id}`);
export const createSubPage = (data: { name: string; description: string }) =>
  apiFetch<SubPage>("/subpages", { method: "POST", body: JSON.stringify(data) });

// Posts
export const getPosts = (subPageId?: number) =>
  apiFetch<Post[]>(subPageId ? `/posts?sub_page_id=${subPageId}` : "/posts");
export const getPost = (id: number) => apiFetch<Post>(`/posts/${id}`);
export const createPost = (data: { title: string; body: string; sub_page_id: number }) =>
  apiFetch<Post>("/posts", { method: "POST", body: JSON.stringify(data) });

// Comments
export const getComments = (postId: number) =>
  apiFetch<Comment[]>(`/comments?post_id=${postId}`);
export const createComment = (data: { body: string; post_id: number; parent_comment_id?: number }) =>
  apiFetch<Comment>("/comments", { method: "POST", body: JSON.stringify(data) });

// Votes
export const vote = (postId: number, value: 1 | -1) =>
  apiFetch<{ vote_count: number }>("/votes", {
    method: "POST",
    body: JSON.stringify({ post_id: postId, value }),
  });
