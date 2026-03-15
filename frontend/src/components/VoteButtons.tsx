"use client";

import { useState } from "react";
import { vote } from "@/lib/api";

interface VoteButtonsProps {
  postId: number;
  initialCount: number;
}

export default function VoteButtons({ postId, initialCount }: VoteButtonsProps) {
  const [count, setCount] = useState(initialCount);
  const [voting, setVoting] = useState(false);

  const handleVote = async (value: 1 | -1) => {
    if (voting) return;
    setVoting(true);
    try {
      const res = await vote(postId, value);
      setCount(res.vote_count);
    } catch {
      // silently ignore vote errors
    } finally {
      setVoting(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-0.5 text-sm">
      <button
        onClick={() => handleVote(1)}
        disabled={voting}
        className="rounded p-1 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-gray-500 hover:text-indigo-600 disabled:opacity-50"
        aria-label="Upvote"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 3l7 8H3l7-8z" />
        </svg>
      </button>
      <span className="font-semibold text-foreground min-w-[2ch] text-center">{count}</span>
      <button
        onClick={() => handleVote(-1)}
        disabled={voting}
        className="rounded p-1 hover:bg-red-100 dark:hover:bg-red-900 transition-colors text-gray-500 hover:text-red-600 disabled:opacity-50"
        aria-label="Downvote"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 17l-7-8h14l-7 8z" />
        </svg>
      </button>
    </div>
  );
}
