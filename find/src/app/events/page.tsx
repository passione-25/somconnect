const events = [
  {
    name: "Somali Tech Summit 2025",
    date: "August 15-17, 2025",
    location: "Toronto, ON",
    type: "Conference",
    description: "Three-day conference featuring keynotes, workshops, and networking for Somali tech professionals.",
    attendees: 350,
  },
  {
    name: "Young Professionals Mixer",
    date: "July 20, 2025",
    location: "London, UK",
    type: "Meetup",
    description: "Monthly networking event for Somali professionals under 35. Enjoy food, drinks, and great conversation.",
    attendees: 80,
  },
  {
    name: "Entrepreneurship Workshop",
    date: "July 28, 2025",
    location: "Minneapolis, MN",
    type: "Workshop",
    description: "Learn how to start and grow your business. Covering business plans, funding, and marketing strategies.",
    attendees: 45,
  },
  {
    name: "Somali Women in Business Forum",
    date: "August 5, 2025",
    location: "Columbus, OH",
    type: "Conference",
    description: "Empowering Somali women entrepreneurs through panel discussions, mentorship, and resource sharing.",
    attendees: 200,
  },
  {
    name: "Coding Bootcamp Info Session",
    date: "July 15, 2025",
    location: "Seattle, WA",
    type: "Workshop",
    description: "Free info session about our 12-week coding bootcamp designed for the Somali community. No experience needed.",
    attendees: 30,
  },
  {
    name: "Healthcare Professionals Meetup",
    date: "August 10, 2025",
    location: "San Diego, CA",
    type: "Meetup",
    description: "Quarterly meetup for Somali healthcare workers to network, share experiences, and discuss community health.",
    attendees: 60,
  },
  {
    name: "Diaspora Investment Summit",
    date: "September 1-2, 2025",
    location: "Minneapolis, MN",
    type: "Conference",
    description: "Exploring investment opportunities in Somalia and East Africa. Featuring industry experts and policymakers.",
    attendees: 500,
  },
  {
    name: "Resume & Interview Skills Workshop",
    date: "July 22, 2025",
    location: "Toronto, ON",
    type: "Workshop",
    description: "Hands-on workshop to polish your resume, practice interviews, and learn job search strategies.",
    attendees: 35,
  },
];

const typeBadgeColors: Record<string, string> = {
  Conference: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  Meetup: "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
  Workshop: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
};

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Networking Events</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Find conferences, meetups, and workshops for Somali professionals
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
            placeholder="Search events..."
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-900 dark:placeholder:text-gray-500"
          />
        </div>
        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option>All Types</option>
          <option>Conference</option>
          <option>Meetup</option>
          <option>Workshop</option>
        </select>
        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option>All Locations</option>
          <option>Minneapolis, MN</option>
          <option>Toronto, ON</option>
          <option>London, UK</option>
          <option>Columbus, OH</option>
        </select>
      </div>

      {/* Event Listings */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.name}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-foreground">{event.name}</h2>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeBadgeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>

              <div className="flex flex-col items-start gap-1 text-sm sm:items-end sm:text-right">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-500">
                    <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                  </svg>
                  {event.date}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                {event.location}
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
                </svg>
                {event.attendees} attending
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
