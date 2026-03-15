import Link from "next/link";
import VoteButtons from "./VoteButtons";
import type { Post } from "@/lib/api";

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

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <VoteButtons postId={post.id} initialCount={post.vote_count} />
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2 text-xs text-gray-500">
          <Link
            href={`/sp/${post.sub_page_id}`}
            className="font-semibold text-indigo-600 hover:underline"
          >
            sp/{post.sub_page_name}
          </Link>
          <span>·</span>
          <time>{timeAgo(post.created_at)}</time>
        </div>
        <Link href={`/post/${post.id}`}>
          <h2 className="text-base font-semibold text-foreground hover:text-indigo-600 transition-colors leading-snug">
            {post.title}
          </h2>
        </Link>
        {post.body && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {post.body}
          </p>
        )}
      </div>
    </article>
  );
}
