"use client";

import { useState } from "react";
import { createComment, type Comment } from "@/lib/api";

interface CommentSectionProps {
  postId: number;
  initialComments: Comment[];
}

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

export default function CommentSection({ postId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || submitting) return;
    setSubmitting(true);
    try {
      const comment = await createComment({ body: body.trim(), post_id: postId });
      setComments((prev) => [...prev, comment]);
      setBody("");
    } catch {
      // silently ignore errors
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">{comments.length} Comments</h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add a comment..."
          rows={3}
          className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 resize-none"
        />
        <button
          type="submit"
          disabled={!body.trim() || submitting}
          className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        >
          {submitting ? "Posting..." : "Comment"}
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm text-foreground whitespace-pre-wrap">{comment.body}</p>
            <time className="mt-2 block text-xs text-gray-500">{timeAgo(comment.created_at)}</time>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
