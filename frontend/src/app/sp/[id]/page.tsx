import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getSubPage, getPosts, type SubPage, type Post } from "@/lib/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function SubPageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let subPage: SubPage;
  let posts: Post[] = [];

  try {
    subPage = await getSubPage(Number(id));
    posts = await getPosts(Number(id));
  } catch {
    notFound();
  }

  return (
    <div>
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-indigo-600">sp/{subPage.name}</h1>
        {subPage.description && (
          <p className="mt-2 text-gray-600 dark:text-gray-400">{subPage.description}</p>
        )}
        <div className="mt-4">
          <Link
            href={`/sp/${id}/create-post`}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            + New Post
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-gray-500">No posts in this sub-page yet. Be the first to post!</p>
        )}
      </div>
    </div>
  );
}
