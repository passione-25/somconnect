"use client";

const MAIN_URL = process.env.NEXT_PUBLIC_MAIN_URL || "http://localhost:3000";
const FIND_URL = process.env.NEXT_PUBLIC_FIND_URL || "http://localhost:3002";
const FORUM_URL = process.env.NEXT_PUBLIC_FORUM_URL || "http://localhost:3003";

const sites = [
  { name: "SomConnect Main", href: MAIN_URL, active: false },
  { name: "SomConnect Find", href: FIND_URL, active: false },
  { name: "SomConnect Forum", href: FORUM_URL, active: true },
];

export default function SiteNav() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center gap-1 px-4 text-sm">
        <span className="mr-3 font-bold text-indigo-400">SomConnect</span>
        {sites.map((site) => (
          <a
            key={site.name}
            href={site.href}
            className={`rounded px-3 py-1 transition-colors ${
              site.active
                ? "bg-indigo-600 text-white font-medium"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {site.name.replace("SomConnect ", "")}
          </a>
        ))}
      </div>
    </div>
  );
}
