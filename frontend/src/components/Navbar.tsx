"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">
            SC
          </span>
          <span className="text-foreground">Som-Connect</span>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={`hover:text-indigo-600 transition-colors ${
              pathname === "/" ? "text-indigo-600 font-semibold" : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/subpages"
            className={`hover:text-indigo-600 transition-colors ${
              pathname === "/subpages" ? "text-indigo-600 font-semibold" : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Sub-pages
          </Link>
          <Link
            href="/create-subpage"
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-700 transition-colors"
          >
            + Create
          </Link>
        </div>
      </div>
    </nav>
  );
}
