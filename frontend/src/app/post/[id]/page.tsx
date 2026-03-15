import Link from "next/link";
import VoteButtons from "@/components/VoteButtons";
import CommentSection from "@/components/CommentSection";
import { getPost, getComments, type Post, type Comment } from "@/lib/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

function timeAgo(dateStr: string): string {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let post: Post;
  let comments: Comment[] = [];

  try {
    post = await getPost(Number(id));
    comments = await getComments(Number(id));
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <article className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex gap-4">
          <VoteButtons postId={post.id} initialCount={post.vote_count} />
          <div className="flex-1 min-w-0">
            <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
              <Link
                href={`/sp/${post.sub_page_id}`}
                className="font-semibold text-indigo-600 hover:underline"
              >
                sp/{post.sub_page_name}
              </Link>
              <span>·</span>
              <time>{timeAgo(post.created_at)}</time>
            </div>
            <h1 className="text-xl font-bold text-foreground">{post.title}</h1>
            {post.body && (
              <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {post.body}
              </div>
            )}
          </div>
        </div>
      </article>

      <CommentSection postId={post.id} initialComments={comments} />
    </div>
  );
}
