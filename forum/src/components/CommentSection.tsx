"use client";

import { useState } from "react";
import { createComment, voteComment, type Comment } from "@/lib/api";

interface CommentSectionProps {
  postId: number;
  initialComments: Comment[];
}

type CommentNode = Comment & { children: CommentNode[] };

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

function buildCommentTree(comments: Comment[]): CommentNode[] {
  const map = new Map<number, CommentNode>();
  const roots: CommentNode[] = [];

  for (const c of comments) {
    map.set(c.id, { ...c, children: [] });
  }
  for (const c of comments) {
    const node = map.get(c.id)!;
    if (c.parent_comment_id && map.has(c.parent_comment_id)) {
      map.get(c.parent_comment_id)!.children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

function CommentItem({
  comment,
  depth,
  postId,
  onCommentAdded,
  onVoteChanged,
}: {
  comment: CommentNode;
  depth: number;
  postId: number;
  onCommentAdded: (comment: Comment) => void;
  onVoteChanged: (commentId: number, newCount: number) => void;
}) {
  const [replying, setReplying] = useState(false);
  const [replyBody, setReplyBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [voting, setVoting] = useState(false);

  const handleVote = async (value: 1 | -1) => {
    if (voting) return;
    setVoting(true);
    try {
      const res = await voteComment(comment.id, value);
      onVoteChanged(comment.id, res.vote_count);
    } catch {
      // silently ignore vote errors
    } finally {
      setVoting(false);
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyBody.trim() || submitting) return;
    setSubmitting(true);
    try {
      const newComment = await createComment({
        body: replyBody.trim(),
        post_id: postId,
        parent_comment_id: comment.id,
      });
      onCommentAdded(newComment);
      setReplyBody("");
      setReplying(false);
    } catch {
      // silently ignore errors
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={depth > 0 ? "ml-6 border-l-2 border-gray-200 pl-4 dark:border-gray-700" : ""}>
      <div className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-0.5 text-xs">
          <button
            onClick={() => handleVote(1)}
            disabled={voting}
            className="rounded p-0.5 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-gray-500 hover:text-indigo-600 disabled:opacity-50"
            aria-label="Upvote comment"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3l7 8H3l7-8z" />
            </svg>
          </button>
          <span className="font-semibold text-foreground min-w-[2ch] text-center">{comment.vote_count}</span>
          <button
            onClick={() => handleVote(-1)}
            disabled={voting}
            className="rounded p-0.5 hover:bg-red-100 dark:hover:bg-red-900 transition-colors text-gray-500 hover:text-red-600 disabled:opacity-50"
            aria-label="Downvote comment"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 17l-7-8h14l-7 8z" />
            </svg>
          </button>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground whitespace-pre-wrap">{comment.body}</p>
          <div className="mt-2 flex items-center gap-3">
            <time className="text-xs text-gray-500">{timeAgo(comment.created_at)}</time>
            <button
              type="button"
              onClick={() => setReplying(!replying)}
              className="text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              {replying ? "Cancel" : "Reply"}
            </button>
          </div>

        {replying && (
          <form onSubmit={handleReply} className="mt-3">
            <textarea
              value={replyBody}
              onChange={(e) => setReplyBody(e.target.value)}
              placeholder="Write a reply..."
              rows={2}
              className="w-full rounded-lg border border-gray-300 bg-white p-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 resize-none"
            />
            <button
              type="submit"
              disabled={!replyBody.trim() || submitting}
              className="mt-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              {submitting ? "Posting..." : "Reply"}
            </button>
          </form>
        )}
        </div>
      </div>

      {comment.children.length > 0 && (
        <div className="mt-3 space-y-3">
          {comment.children.map((child) => (
            <CommentItem
              key={child.id}
              comment={child}
              depth={depth + 1}
              postId={postId}
              onCommentAdded={onCommentAdded}
              onVoteChanged={onVoteChanged}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentSection({ postId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleCommentAdded = (comment: Comment) => {
    setComments((prev) => [...prev, comment]);
  };

  const handleVoteChanged = (commentId: number, newCount: number) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, vote_count: newCount } : c))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || submitting) return;
    setSubmitting(true);
    try {
      const comment = await createComment({ body: body.trim(), post_id: postId });
      handleCommentAdded(comment);
      setBody("");
    } catch {
      // silently ignore errors
    } finally {
      setSubmitting(false);
    }
  };

  const tree = buildCommentTree(comments);

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
        {tree.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            depth={0}
            postId={postId}
            onCommentAdded={handleCommentAdded}
            onVoteChanged={handleVoteChanged}
          />
        ))}
        {comments.length === 0 && (
          <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
