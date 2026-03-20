const FIND_URL = process.env.NEXT_PUBLIC_FIND_URL || "http://localhost:3002";
const FORUM_URL = process.env.NEXT_PUBLIC_FORUM_URL || "http://localhost:3003";

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07c0 1.09-.89 1.98-1.98 1.98H5.73c-1.09 0-1.98-.89-1.98-1.98v-4.07m16.5 0a2.18 2.18 0 0 0 .74-1.64V8.47c0-1.09-.89-1.97-1.98-1.97h-2.97V4.52c0-1.09-.89-1.97-1.98-1.97h-2.12c-1.09 0-1.98.88-1.98 1.97V6.5H7.73c-1.1 0-1.98.88-1.98 1.97v4.04c0 .63.27 1.2.74 1.64m16.5 0a2.2 2.2 0 0 1-.74.36l-5.08 1.27a4.04 4.04 0 0 1-1.94 0l-5.08-1.27a2.2 2.2 0 0 1-.74-.36m6.62-7.65v-2h-2.1v2" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V6.75A2.25 2.25 0 0 1 6 4.5h4.5a2.25 2.25 0 0 1 2.25 2.25V21m-9 0h9m0 0h3.75M15.75 21V10.5A2.25 2.25 0 0 1 18 8.25h.75a2.25 2.25 0 0 1 2.25 2.25V21m-7.5-6h.008v.008H12.75V15Zm0-3h.008v.008H12.75V12Zm0-3h.008v.008H12.75V9Zm-3 6h.008v.008H9.75V15Zm0-3h.008v.008H9.75V12Zm0-3h.008v.008H9.75V9Zm-3 6h.008v.008H6.75V15Zm0-3h.008v.008H6.75V12Z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
    </svg>
  );
}

const features = [
  {
    icon: BriefcaseIcon,
    title: "Find Jobs & Talent",
    description:
      "Browse hundreds of job listings or post opportunities to connect with skilled Somali professionals across every industry.",
  },
  {
    icon: BuildingIcon,
    title: "Grow Your Business",
    description:
      "List your Somali-owned business in our directory, reach new customers, and access resources to scale your enterprise.",
  },
  {
    icon: UsersIcon,
    title: "Build Your Network",
    description:
      "Join networking events, participate in community discussions, and forge meaningful professional connections worldwide.",
  },
];

const stats = [
  { value: "10,000+", label: "Professionals" },
  { value: "500+", label: "Businesses" },
  { value: "50+", label: "Cities" },
];

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and showcase your skills, experience, and professional background to the community.",
  },
  {
    number: "02",
    title: "Explore Opportunities",
    description: "Discover jobs, businesses, events, and discussions tailored to Somali professionals.",
  },
  {
    number: "03",
    title: "Connect & Grow",
    description: "Build relationships, collaborate on projects, and advance your career alongside your community.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <GlobeIcon className="h-4 w-4" />
              The Premier Somali Professional Network
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Connecting Somali Professionals{" "}
              <span className="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100 sm:text-xl">
              SomConnect is the platform where Somali professionals find opportunities, grow their businesses, and build
              lasting connections across the globe.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={FIND_URL}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
              >
                Find Opportunities
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={FORUM_URL}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
              >
                Join the Forum
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              SomConnect brings together the tools and community you need to thrive professionally.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-foreground/10 bg-background p-8 shadow-sm transition-all hover:border-indigo-500/30 hover:shadow-md dark:bg-white/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 leading-7 text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-foreground/10 bg-gradient-to-r from-indigo-50 to-purple-50 py-16 dark:from-indigo-950/30 dark:to-purple-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-medium text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-foreground/60">
              Get started in three simple steps and join a thriving community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-500/25">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 leading-7 text-foreground/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircleIcon className="mx-auto mb-6 h-12 w-12 text-indigo-200" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Connect?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Join thousands of Somali professionals already using SomConnect to advance their careers and businesses.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={FIND_URL}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
              >
                Find Opportunities
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={FORUM_URL}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
              >
                Join the Forum
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <GlobeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              SomConnect
            </div>
            <nav className="flex gap-6 text-sm text-foreground/60">
              <a href={FIND_URL} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                Find
              </a>
              <a href={FORUM_URL} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                Forum
              </a>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} SomConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
