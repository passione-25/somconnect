const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Somali Tech Solutions",
    location: "Minneapolis, MN",
    type: "Full-time",
    posted: "2 days ago",
    description: "Build scalable web applications using React, Node.js, and cloud infrastructure for diaspora services.",
  },
  {
    title: "Community Outreach Coordinator",
    company: "Somali Family Services",
    location: "Seattle, WA",
    type: "Full-time",
    posted: "5 days ago",
    description: "Connect Somali families with essential community resources, healthcare, and educational programs.",
  },
  {
    title: "Marketing Manager",
    company: "Dahabshiil Group",
    location: "London, UK",
    type: "Full-time",
    posted: "1 week ago",
    description: "Lead digital marketing campaigns targeting the Somali diaspora across Europe and North America.",
  },
  {
    title: "Freelance Translator (Somali-English)",
    company: "GlobalBridge Language Services",
    location: "Remote",
    type: "Remote",
    posted: "3 days ago",
    description: "Provide accurate translations for legal, medical, and business documents between Somali and English.",
  },
  {
    title: "Restaurant Manager",
    company: "Mogadishu Grill",
    location: "Columbus, OH",
    type: "Full-time",
    posted: "4 days ago",
    description: "Oversee daily restaurant operations, manage staff, and maintain quality standards for authentic Somali cuisine.",
  },
  {
    title: "Data Analyst",
    company: "Hormuud Analytics",
    location: "Toronto, ON",
    type: "Full-time",
    posted: "1 day ago",
    description: "Analyze business data to provide actionable insights for growth strategy and market expansion.",
  },
  {
    title: "Youth Program Assistant",
    company: "Somali Community Center",
    location: "San Diego, CA",
    type: "Part-time",
    posted: "6 days ago",
    description: "Support after-school programs and mentorship initiatives for Somali youth in the local community.",
  },
  {
    title: "UX Designer",
    company: "Kaafi Digital",
    location: "Remote",
    type: "Remote",
    posted: "2 days ago",
    description: "Design user-friendly interfaces for mobile apps serving East African communities worldwide.",
  },
];

const typeBadgeColors: Record<string, string> = {
  "Full-time": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  "Part-time": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  Remote: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
};

export default function JobsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Job Listings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Find opportunities with Somali-owned companies and organizations worldwide
        </p>
      </div>

      {/* Filter / Search */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-gray-500"
          />
        </div>
        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option>All Types</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Remote</option>
        </select>
        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option>All Locations</option>
          <option>Minneapolis, MN</option>
          <option>Toronto, ON</option>
          <option>London, UK</option>
          <option>Remote</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-foreground">{job.title}</h2>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeBadgeColors[job.type]}`}>
                    {job.type}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">{job.company}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{job.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
                </svg>
                {job.posted}
              </span>
              <a
                href="#"
                className="ml-auto text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
