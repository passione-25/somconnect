import PostCard from "@/components/PostCard";
import Link from "next/link";
import { getPosts, getSubPages, type Post, type SubPage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let posts: Post[] = [];
  let subPages: SubPage[] = [];
  let error = "";

  try {
    [posts, subPages] = await Promise.all([getPosts(), getSubPages()]);
  } catch {
    error = "Could not connect to the API. Make sure the backend is running on port 3001.";
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      {/* Main feed */}
      <div>
        <h1 className="mb-4 text-2xl font-bold">Home Feed</h1>
        {error && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
            {error}
          </div>
        )}
        <div className="space-y-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {posts.length === 0 && !error && (
            <p className="text-sm text-gray-500">No posts yet. Create a sub-page and start posting!</p>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 font-semibold">Popular Sub-pages</h2>
          <div className="space-y-2">
            {subPages.slice(0, 5).map((sp) => (
              <Link
                key={sp.id}
                href={`/sp/${sp.id}`}
                className="flex items-center justify-between rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium text-indigo-600">sp/{sp.name}</span>
                <span className="text-xs text-gray-500">{sp.post_count} posts</span>
              </Link>
            ))}
          </div>
          <Link
            href="/subpages"
            className="mt-3 block text-center text-sm text-indigo-600 hover:underline"
          >
            View all sub-pages →
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-2 font-semibold">About Kulmi Forum</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A modern community forum where you can create Sub-pages, share posts, comment, and vote.
          </p>
        </div>
      </aside>
    </div>
  );
}
