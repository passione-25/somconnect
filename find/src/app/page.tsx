import Link from "next/link";

const featuredListings = [
  {
    type: "Job" as const,
    title: "Senior Software Engineer",
    description: "Join our growing engineering team to build scalable web applications serving the Somali diaspora.",
    location: "Minneapolis, MN",
  },
  {
    type: "Business" as const,
    title: "Mogadishu Grill",
    description: "Authentic Somali cuisine in the heart of the city. Catering available for events and gatherings.",
    location: "Columbus, OH",
  },
  {
    type: "Event" as const,
    title: "Somali Tech Summit 2025",
    description: "Annual conference bringing together Somali tech professionals for networking and knowledge sharing.",
    location: "Toronto, ON",
  },
  {
    type: "Job" as const,
    title: "Community Outreach Coordinator",
    description: "Help connect Somali families with essential services and community resources.",
    location: "Seattle, WA",
  },
  {
    type: "Business" as const,
    title: "Dalmar Financial Services",
    description: "Providing financial planning, tax preparation, and business consulting for Somali entrepreneurs.",
    location: "Minneapolis, MN",
  },
  {
    type: "Event" as const,
    title: "Young Professionals Mixer",
    description: "Monthly networking event for Somali professionals under 35. Food, drinks, and great conversation.",
    location: "London, UK",
  },
];

const typeBadgeColors: Record<string, string> = {
  Job: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Business: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  Event: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Search Bar */}
      <section className="text-center space-y-4 pt-6">
        <h1 className="text-4xl font-bold text-foreground">
          Find What You Need
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Connect with Somali professionals, businesses, and events worldwide
        </p>
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search jobs, businesses, events..."
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-lg shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <Link
          href="/jobs"
          className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
            Jobs
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Browse job listings from Somali-owned companies and organizations
          </p>
        </Link>

        <Link
          href="/businesses"
          className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-amber-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-amber-700"
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25H9Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400">
            Businesses
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover and support Somali-owned businesses in your area
          </p>
        </Link>

        <Link
          href="/events"
          className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-purple-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700"
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3a.75.75 0 0 1 1.5 0v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400">
            Events
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Find networking events, conferences, and community gatherings
          </p>
        </Link>
      </section>

      {/* Featured Listings */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Listings</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredListings.map((listing) => (
            <div
              key={listing.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${typeBadgeColors[listing.type]}`}
              >
                {listing.type}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {listing.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {listing.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                  </svg>
                  {listing.location}
                </span>
                <a
                  href="#"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
