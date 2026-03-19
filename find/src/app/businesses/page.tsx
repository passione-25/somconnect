const businesses = [
  {
    name: "Mogadishu Grill",
    category: "Restaurant",
    location: "Columbus, OH",
    rating: 4.8,
    stars: 5,
    description: "Authentic Somali cuisine featuring traditional dishes like bariis iskukaris, suqaar, and fresh sambusa.",
  },
  {
    name: "Dalmar Financial Services",
    category: "Finance",
    location: "Minneapolis, MN",
    rating: 4.6,
    stars: 5,
    description: "Full-service financial planning, tax preparation, and business consulting for the Somali community.",
  },
  {
    name: "Kaafi Digital Agency",
    category: "Tech",
    location: "Toronto, ON",
    rating: 4.9,
    stars: 5,
    description: "Web development, mobile apps, and digital marketing solutions for businesses worldwide.",
  },
  {
    name: "Barwaaqo Health Clinic",
    category: "Healthcare",
    location: "Seattle, WA",
    rating: 4.7,
    stars: 5,
    description: "Culturally-sensitive healthcare services with multilingual staff fluent in Somali, Arabic, and English.",
  },
  {
    name: "Hilib Fresh Market",
    category: "Grocery",
    location: "Minneapolis, MN",
    rating: 4.5,
    stars: 4,
    description: "Fresh halal meats, spices, and imported goods from East Africa. Weekly delivery available.",
  },
  {
    name: "Sahan Legal Advisors",
    category: "Legal",
    location: "London, UK",
    rating: 4.8,
    stars: 5,
    description: "Immigration, business, and family law services with expertise in diaspora community legal needs.",
  },
  {
    name: "Iftin Beauty Studio",
    category: "Beauty",
    location: "Columbus, OH",
    rating: 4.4,
    stars: 4,
    description: "Professional hair styling, henna art, and skincare treatments rooted in Somali beauty traditions.",
  },
  {
    name: "Geel Transport & Logistics",
    category: "Logistics",
    location: "San Diego, CA",
    rating: 4.3,
    stars: 4,
    description: "Reliable shipping and logistics connecting the Somali diaspora with East Africa and beyond.",
  },
];

const categoryColors: Record<string, string> = {
  Restaurant: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  Finance: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  Tech: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Healthcare: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  Grocery: "bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-300",
  Legal: "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300",
  Beauty: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
  Logistics: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
};

function StarRating({ filled, total }: { filled: number; total: number }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < filled ? "text-amber-500" : "text-gray-300 dark:text-gray-600"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function BusinessesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Business Directory</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Discover and support Somali-owned businesses in your area
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
            placeholder="Search businesses..."
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-gray-500"
          />
        </div>
        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option>All Categories</option>
          <option>Restaurant</option>
          <option>Tech</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Legal</option>
          <option>Grocery</option>
          <option>Beauty</option>
          <option>Logistics</option>
        </select>
        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option>All Locations</option>
          <option>Minneapolis, MN</option>
          <option>Columbus, OH</option>
          <option>Toronto, ON</option>
          <option>London, UK</option>
        </select>
      </div>

      {/* Business Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {businesses.map((biz) => (
          <div
            key={biz.name}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-start justify-between gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[biz.category]}`}>
                {biz.category}
              </span>
              <div className="flex items-center gap-1 text-sm">
                <StarRating filled={biz.stars} total={5} />
                <span className="text-gray-500 dark:text-gray-400">({biz.rating})</span>
              </div>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-foreground">{biz.name}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{biz.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                {biz.location}
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
    </div>
  );
}
