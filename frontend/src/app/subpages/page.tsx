import Link from "next/link";
import { getSubPages, type SubPage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function SubPagesPage() {
  let subPages: SubPage[] = [];
  let error = "";

  try {
    subPages = await getSubPages();
  } catch {
    error = "Could not load sub-pages. Make sure the backend is running.";
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Sub-pages</h1>
        <Link
          href="/create-subpage"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          + New Sub-page
        </Link>
      </div>

      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="space-y-3">
        {subPages.map((sp) => (
          <Link
            key={sp.id}
            href={`/sp/${sp.id}`}
            className="block rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-indigo-600 text-lg">sp/{sp.name}</h2>
              <span className="text-sm text-gray-500">{sp.post_count} posts</span>
            </div>
            {sp.description && (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{sp.description}</p>
            )}
          </Link>
        ))}
        {subPages.length === 0 && !error && (
          <p className="text-sm text-gray-500">No sub-pages yet. Create the first one!</p>
        )}
      </div>
    </div>
  );
}
