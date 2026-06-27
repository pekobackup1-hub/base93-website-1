import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";

const navItems = ["Platform", "Coverage", "Partners", "How It Works", "Contact"];

const stats = [
  ["51", "countries/markets"],
  ["14", "UAE free zones"],
  ["10+", "CSP network countries"],
  ["Partner-led", "incorporation workflows"],
];

const problems = [
  "Scattered jurisdiction rules",
  "Manual document collection",
  "Unclear setup timelines",
  "Partner coordination gaps",
  "KYC and AML requirements",
  "Renewal tracking across entities",
];

const audiences = [
  {
    title: "Entrepreneurs & SMEs",
    copy: "Find the right setup pathway, submit documents, and track your company formation with clear visibility.",
    cue: "01",
  },
  {
    title: "CSPs & Incorporation Agents",
    copy: "Expand your reach, manage client workflows, and coordinate setup requests through a structured digital layer.",
    cue: "02",
  },
  {
    title: "Law Firms & Corporate Advisors",
    copy: "Support clients with multi-jurisdiction formation coverage, partner coordination, and documentation-led workflows.",
    cue: "03",
  },
  {
    title: "Free Zones & Channel Partners",
    copy: "Create a cleaner setup journey for customers while keeping visibility across applications, documents, and status updates.",
    cue: "04",
  },
];

const capabilities = [
  "51-country incorporation coverage",
  "14 UAE free zone pathways",
  "Verified CSP network",
  "Digital document collection",
  "KYC/AML workflow support",
  "Formation status tracking",
  "Renewal and compliance visibility",
  "Partner/customer dashboard",
  "API-ready infrastructure",
  "White-label-ready workflows",
  "Centralized communication",
  "Structured application management",
];

const coverage = [
  {
    region: "Middle East",
    countries: ["UAE", "Qatar", "Bahrain", "Oman", "Saudi Arabia"],
  },
  {
    region: "Asia Pacific",
    countries: [
      "India",
      "Singapore",
      "Hong Kong",
      "South Korea",
      "China",
      "Australia",
      "Malaysia",
      "Philippines",
      "Vietnam",
      "Bangladesh",
      "Pakistan",
      "Georgia",
      "Indonesia",
      "Kazakhstan",
    ],
  },
  {
    region: "Europe",
    countries: [
      "United Kingdom",
      "Germany",
      "Cyprus",
      "Estonia",
      "Poland",
      "Turkey",
      "Romania",
      "Uzbekistan",
      "Spain",
      "Hungary",
      "Switzerland",
      "Italy",
    ],
  },
  {
    region: "Americas",
    countries: [
      "USA",
      "Panama",
      "Mexico",
      "Chile",
      "Brazil",
      "Colombia",
      "Canada",
    ],
  },
  {
    region: "Africa",
    countries: ["Nigeria", "Mauritius", "Egypt", "Seychelles"],
  },
  {
    region: "Offshore / International Business Centers",
    countries: [
      "British Virgin Islands",
      "Anguilla",
      "Bahamas",
      "Marshall Islands",
      "Cayman Islands",
      "Belize",
      "Samoa",
      "Saint Vincent and The Grenadines",
      "Saint Kitts and Nevis",
    ],
  },
];

const featuredMarkets = [
  "UAE",
  "Singapore",
  "United Kingdom",
  "USA",
  "Germany",
  "Hong Kong",
  "India",
  "Saudi Arabia",
];

const freeZones = [
  "RAKEZ",
  "Innovation City",
  "IFZA",
  "Meydan",
  "SPC",
  "Masdar City Free Zone",
  "Shams",
  "Ajman Free Zone",
  "Dubai South",
  "DUQE",
  "DWTC",
  "DMCC",
  "ADGM",
];

const steps = [
  {
    title: "Select jurisdiction",
    copy: "Choose from UAE and global setup pathways based on the business need.",
  },
  {
    title: "Submit requirements",
    copy: "Collect documents, shareholder details, KYC information, and setup requirements digitally.",
  },
  {
    title: "Coordinate with partners",
    copy: "Route formation requests through verified CSPs and jurisdiction partners.",
  },
  {
    title: "Track and manage",
    copy: "Monitor application status, documents, renewals, and compliance milestones.",
  },
];

const partnerBenefits = [
  "Expand jurisdiction coverage without building every local network from scratch.",
  "Keep customer ownership while Base93 powers the workflow layer.",
  "Reduce manual back-and-forth.",
  "Standardize formation requests.",
  "Track customer progress from one dashboard.",
  "Add white-label or partner-led formation workflows later.",
];

const trustItems = [
  "Verified CSP network",
  "Structured documentation",
  "KYC/AML workflow support",
  "Partner-led execution",
  "Renewal tracking",
  "Clear customer status visibility",
];

const flow = [
  "Jurisdiction",
  "Requirements",
  "Partner routing",
  "Documents",
  "Progress",
  "Renewals",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Audience />
      <Capabilities />
      <GlobalCoverage />
      <UaeCoverage />
      <HowItWorks />
      <PartnerValue />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-deep/10 bg-white/82 shadow-[0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-base-amethyst">
          <Image
            src="/brand/base93-logo-dark.png"
            alt="Base93"
            width={176}
            height={31}
            priority
            className="h-auto w-36 md:w-44"
          />
        </a>
        <div className="hidden items-center rounded-full border border-base-deep/10 bg-white/72 px-2 py-1 shadow-[0_14px_38px_rgba(43,36,65,0.07)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${slug(item)}`}
              className="rounded-full px-4 py-2 text-sm font-semibold text-base-lavender transition hover:bg-base-grey/70 hover:text-base-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-amethyst"
            >
              {item}
            </a>
          ))}
        </div>
        <Button href="#contact" className="hidden sm:inline-flex">
          Contact Us
        </Button>
        <Button href="#contact" className="sm:hidden">
          Contact
        </Button>
      </nav>
      <div className="border-t border-base-deep/5 px-5 pb-3 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${slug(item)}`}
              className="shrink-0 rounded-full border border-base-deep/10 bg-white/75 px-3 py-1.5 text-xs font-semibold text-base-lavender"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="premium-shell relative bg-white px-5 pb-20 pt-12 md:pb-28 md:pt-20 lg:px-8">
      <div className="absolute inset-0 bg-grid opacity-45" aria-hidden="true" />
      <div
        className="pulse-glow absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-base-light/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-base-deep/10 bg-white/78 px-3 py-2 shadow-[0_18px_48px_rgba(43,36,65,0.08)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-base-amethyst shadow-[0_0_0_6px_rgba(125,104,192,0.12)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-base-lavender">
              Enterprise formation infrastructure
            </span>
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] text-base-deep md:text-7xl lg:text-[5.55rem]">
            Global Company Formation Infrastructure
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-base-lavender md:text-xl">
            Base93 helps businesses, advisors, and partners manage incorporation
            workflows across 51 countries and 14 UAE free zones through verified
            CSP networks, structured documentation, workflow visibility, and
            partner-led execution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Contact Us</Button>
            <Button href="#coverage" variant="secondary">
              Explore Coverage
            </Button>
          </div>
          <dl className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="surface-card reveal-up rounded-md p-4"
              >
                <dt className="text-2xl font-semibold leading-none text-base-deep">
                  {value}
                </dt>
                <dd className="mt-2 text-sm leading-5 text-base-lavender">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[620px] lg:min-h-[680px]">
      <div
        className="absolute inset-8 rounded-full bg-base-light/55 blur-3xl"
        aria-hidden="true"
      />
      <div className="dark-surface relative h-full overflow-hidden rounded-lg border border-white/15 p-4 shadow-[0_34px_110px_rgba(43,36,65,0.28)] md:p-6">
        <div className="mesh-lines absolute inset-0 opacity-80" aria-hidden="true" />
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/15" aria-hidden="true" />
        <div className="absolute bottom-10 left-8 h-16 w-16 rounded-full bg-base-light/20 blur-2xl" aria-hidden="true" />

        <div className="surface-card relative mx-auto max-w-xl rounded-lg p-4 md:p-5">
          <div className="flex items-center justify-between border-b border-base-deep/10 pb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/base93-mark.png"
                alt=""
                width={38}
                height={38}
                className="h-9 w-9"
              />
              <div>
                <p className="text-sm font-semibold text-base-deep">
                  Formation control layer
                </p>
                <p className="text-xs text-base-lavender">
                  Jurisdiction workflow visibility
                </p>
              </div>
            </div>
            <span className="rounded-full bg-base-light px-3 py-1 text-xs font-semibold text-base-deep">
              Live workflow
            </span>
          </div>

          <div className="grid gap-4 pt-5 md:grid-cols-[1fr_0.82fr]">
            <div className="space-y-4">
              <DashboardCard
                title="Jurisdiction path"
                meta="UAE free zone"
                value="Requirements mapped"
              />
              <DashboardCard
                title="Documentation"
                meta="KYC, UBO, shareholders"
                value="Collection in progress"
              />
              <DashboardCard
                title="Partner routing"
                meta="Verified CSP network"
                value="Assigned"
              />
              <DashboardCard
                title="Renewals"
                meta="Compliance milestones"
                value="Timeline prepared"
              />
            </div>
            <div className="rounded-md border border-base-deep/10 bg-base-grey/65 p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-base-deep">
                  Setup progress
                </p>
                <p className="text-xs font-semibold text-base-amethyst">
                  Abstract view
                </p>
              </div>
              <div className="space-y-5">
                {["Select", "Collect", "Verify", "Submit"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-base-deep text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-white">
                      <div
                        className="h-2 rounded-full bg-base-amethyst"
                        style={{ width: `${88 - index * 14}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["UAE", "SG", "UK", "US"].map((market) => (
                  <div
                    key={market}
                    className="rounded-md border border-white bg-white p-3 text-center text-sm font-semibold text-base-deep shadow-[0_8px_22px_rgba(43,36,65,0.08)]"
                  >
                    {market}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FloatingCard
          className="float-slow left-0 top-20 max-w-[15rem] -translate-x-2 md:absolute"
          label="Partner network"
          value="10+ countries"
        />
        <FloatingCard
          className="float-delayed bottom-20 right-0 max-w-[15rem] translate-x-2 md:absolute"
          label="Renewal timeline"
          value="Milestones tracked"
        />
        <div className="absolute bottom-8 left-1/2 hidden w-[72%] -translate-x-1/2 rounded-full border border-white/15 bg-white/8 p-2 backdrop-blur md:block">
          <div className="grid grid-cols-5 gap-2">
            {["UAE", "UK", "SG", "US", "DE"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/12 px-3 py-2 text-center text-xs font-semibold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className={`surface-card hidden rounded-lg p-4 md:block ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-base-amethyst">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-base-deep">{value}</p>
    </div>
  );
}

function DashboardCard({
  title,
  meta,
  value,
}: {
  title: string;
  meta: string;
  value: string;
}) {
  return (
    <div className="group rounded-md border border-base-deep/10 bg-white p-4 shadow-[0_10px_28px_rgba(43,36,65,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-base-amethyst/35 hover:shadow-[0_18px_44px_rgba(43,36,65,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-base-deep">{title}</p>
          <p className="mt-1 text-xs text-base-lavender">{meta}</p>
        </div>
        <span className="rounded-full bg-base-grey px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-base-lavender transition group-hover:bg-base-light group-hover:text-base-deep">
          {value}
        </span>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section id="platform" className="relative bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="soft-divider absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1fr]">
        <SectionHeader
          eyebrow="Problem"
          title="Formation workflows are fragmented."
          copy="Global company formation often depends on scattered requirements, manual collection, and unclear handoffs between customers, advisors, CSPs, and jurisdiction partners."
        />
        <div className="relative min-h-[420px] rounded-lg border border-base-deep/10 bg-base-grey/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <div className="absolute inset-0 bg-grid opacity-35" aria-hidden="true" />
          <div className="relative grid h-full gap-3 sm:grid-cols-2">
            {problems.map((item, index) => (
              <div
                key={item}
                className={`surface-card reveal-up rounded-md p-5 ${
                  index % 3 === 1 ? "sm:translate-y-6" : ""
                } ${index % 3 === 2 ? "sm:-translate-y-3" : ""}`}
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-base-deep text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base font-semibold text-base-deep">{item}</p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 right-6 hidden rounded-full border border-base-amethyst/20 bg-white/84 px-4 py-2 text-sm font-semibold text-base-lavender shadow-[0_16px_44px_rgba(43,36,65,0.1)] backdrop-blur md:block">
            Base93 brings the flow into one operating layer
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="dark-surface relative px-5 py-20 text-white md:py-28 lg:px-8">
      <div className="mesh-lines absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solution"
          title="One platform for jurisdictions, partners, documents, and status."
          copy="Base93 creates a structured digital layer for the formation journey, helping teams move from requirements to partner-led execution with clearer visibility."
          tone="dark"
        />
        <div className="mt-12 overflow-hidden rounded-lg border border-white/12 bg-white/7 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.18)] backdrop-blur">
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {flow.map((item, index) => (
              <div
                key={item}
                className="relative rounded-md border border-white/12 bg-white/8 p-5"
              >
                {index < flow.length - 1 ? (
                  <span
                    className="absolute right-[-1.15rem] top-1/2 z-10 hidden h-px w-6 bg-base-light/45 xl:block"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-base-deep">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item}</h3>
                <div className="mt-5 h-1.5 rounded-full bg-white/12">
                  <div
                    className="h-1.5 rounded-full bg-base-light"
                    style={{ width: `${92 - index * 8}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Ecosystem"
          title="Built for the formation ecosystem."
          copy="A digital operating layer for the groups that initiate, advise, process, and distribute company formation pathways."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className={`surface-card reveal-up group rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-base-amethyst/45 ${
                index % 2 === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-base-deep text-sm font-semibold text-white shadow-[0_16px_36px_rgba(43,36,65,0.22)] transition group-hover:bg-base-amethyst">
                  {audience.cue}
                </span>
                <span className="h-2 w-2 rounded-full bg-base-amethyst shadow-[0_0_0_8px_rgba(125,104,192,0.1)]" />
              </div>
              <h3 className="text-xl font-semibold leading-tight text-base-deep">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-base-lavender">
                {audience.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="premium-shell bg-base-grey/50 px-5 py-20 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Everything needed to manage formation workflows."
          copy="From coverage and partner coordination to documents, dashboards, renewals, and API-ready infrastructure."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability}
              className={`surface-card reveal-up group rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-base-amethyst/40 ${
                index === 0 || index === 1 ? "lg:col-span-2 lg:p-7" : ""
              }`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="rounded-full bg-base-light px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-base-deep">
                  {index < 2 ? "Coverage pillar" : `Module ${index + 1}`}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-base-deep/10 text-xs font-semibold text-base-amethyst transition group-hover:bg-base-deep group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className={`${index < 2 ? "text-xl" : "text-sm"} font-semibold leading-6 text-base-deep`}>
                {capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalCoverage() {
  return (
    <section id="coverage" className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1fr]">
          <SectionHeader
            eyebrow="Coverage"
            title="Coverage across global incorporation markets."
            copy="Base93 supports incorporation workflows across 51 countries and markets, organized for scan-friendly evaluation by region."
          />
          <div className="dark-surface relative min-h-[350px] overflow-hidden rounded-lg border border-white/12 p-6 text-white shadow-[0_28px_90px_rgba(43,36,65,0.2)]">
            <div className="world-orbit absolute inset-8 opacity-80" aria-hidden="true" />
            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
              {featuredMarkets.map((country, index) => (
                <span
                  key={country}
                  className={`rounded-md border border-white/12 bg-white/10 p-3 text-sm font-semibold backdrop-blur transition hover:bg-white/18 ${
                    index % 3 === 1 ? "sm:translate-y-7" : ""
                  }`}
                >
                  {country}
                </span>
              ))}
            </div>
            <p className="relative mt-12 max-w-xl text-sm leading-6 text-base-light">
              Featured markets shown for orientation. Availability may vary by
              entity type, jurisdiction, shareholder structure, and partner
              requirements.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((group) => (
            <details
              key={group.region}
              className="surface-card group rounded-lg p-5 transition duration-300 open:border-base-amethyst/35 open:shadow-[0_24px_68px_rgba(43,36,65,0.14)]"
              open={group.region === "Middle East" || group.region === "Asia Pacific"}
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-base-deep">
                <span className="flex items-center justify-between gap-4">
                  <span>{group.region}</span>
                  <span className="rounded-full bg-base-light px-3 py-1 text-sm text-base-deep">
                    {group.countries.length} markets
                  </span>
                </span>
              </summary>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-base-deep/10 bg-white px-3 py-1.5 text-sm text-base-lavender transition hover:border-base-amethyst/40 hover:bg-base-light/55 hover:text-base-deep"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function UaeCoverage() {
  return (
    <section className="premium-shell bg-base-grey/55 px-5 py-20 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="UAE ecosystem"
          title="Coverage across leading UAE business hubs."
          copy="Base93 supports UAE free zone pathways through clean workflow visibility and partner-led setup coordination."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {freeZones.map((zone, index) => (
            <div
              key={zone}
              className={`surface-card group rounded-md p-5 transition duration-300 hover:-translate-y-1 hover:border-base-amethyst/40 ${
                index === 5 || index === 12 ? "lg:col-span-2" : ""
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-base-amethyst">
                UAE pathway
              </p>
              <p className="mt-4 text-base font-semibold text-base-deep">
                {zone}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-base-lavender">
          Coverage and workflows may vary by free zone, activity, license type,
          and eligibility. Names are shown as coverage references, not as
          endorsement claims.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="From jurisdiction selection to company setup, tracked in one place."
          copy="A clear operating path for customers, partners, and internal teams."
        />
        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-base-amethyst/30 to-transparent lg:block" />
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="surface-card reveal-up relative rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-base-amethyst/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-base-deep text-sm font-semibold text-white shadow-[0_18px_40px_rgba(43,36,65,0.2)]">
                {index + 1}
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-base-amethyst">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-base-deep">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-base-lavender">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerValue() {
  return (
    <section id="partners" className="dark-surface relative px-5 py-20 text-white md:py-28 lg:px-8">
      <div className="mesh-lines absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.84fr_1fr]">
        <div>
          <SectionHeader
            eyebrow="Partners"
            title="Add global formation infrastructure to your business."
            copy="For CSPs, law firms, consultants, free zones, and channel partners that need broader coverage and cleaner workflow operations."
            tone="dark"
          />
          <div className="mt-8">
            <Button href="#contact" variant="light">
              Partner With Base93
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-white/12 bg-white/7 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.16)] backdrop-blur">
          <div className="grid gap-3 sm:grid-cols-2">
            {partnerBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`rounded-md border border-white/12 bg-white/8 p-5 text-sm leading-6 text-base-light transition hover:bg-white/12 ${
                  index === 0 || index === 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-base-light text-xs font-semibold text-base-deep">
                  {index + 1}
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="surface-card mx-auto max-w-7xl rounded-lg p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeader
            eyebrow="Trust"
            title="Structured for trust, documentation, and visibility."
            copy="Base93 is designed to support documentation-led workflows, KYC visibility, partner coordination, and renewal tracking without making legal or tax guarantees."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-md border border-base-deep/10 bg-white p-5 text-sm font-semibold text-base-deep shadow-[0_10px_30px_rgba(43,36,65,0.06)]"
              >
                <span className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-base-light text-xs font-semibold text-base-deep">
                  OK
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="premium-shell bg-base-grey/55 px-5 py-20 md:py-28 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Build your global formation layer with Base93."
            copy="Tell us about your formation workflow, partner network, or jurisdiction coverage need. The Base93 team can route enquiries through connect@base93.com once backend handling is connected."
          />
          <div className="surface-card mt-10 rounded-lg p-6">
            <p className="text-sm font-semibold text-base-deep">
              Future routing
            </p>
            <a
              className="mt-2 inline-block text-base font-semibold text-base-amethyst underline-offset-4 hover:underline"
              href="mailto:connect@base93.com"
            >
              connect@base93.com
            </a>
            <div className="mt-6 grid gap-3 text-sm text-base-lavender sm:grid-cols-2">
              <p className="rounded-md bg-base-grey/70 p-4">
                Partner, CSP, and advisor enquiries can be routed into CRM.
              </p>
              <p className="rounded-md bg-base-grey/70 p-4">
                Backend integration is prepared as a TODO in the form handler.
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="dark-surface px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.35fr]">
        <div>
          <Image
            src="/brand/base93-logo-white.png"
            alt="Base93"
            width={188}
            height={33}
            className="h-auto w-40"
          />
          <p className="mt-6 max-w-sm text-sm leading-6 text-base-light">
            Enterprise infrastructure for global company formation.
          </p>
          <p className="mt-8 text-sm text-base-light">Base93 Limited</p>
        </div>
        <div className="grid gap-8 rounded-lg border border-white/12 bg-white/7 p-6 sm:grid-cols-3">
          <FooterGroup
            title="Navigate"
            links={["Platform", "Coverage", "Partners", "How It Works", "Contact"]}
          />
          <FooterGroup title="Legal" links={["Privacy Policy", "Terms"]} />
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <a
              href="mailto:connect@base93.com"
              className="mt-4 block text-sm text-base-light underline-offset-4 hover:underline"
            >
              connect@base93.com
            </a>
            <p className="mt-4 text-sm text-base-light">Social placeholder</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={link.includes("Policy") || link === "Terms" ? "#" : `#${slug(link)}`}
              className="text-sm text-base-light underline-offset-4 hover:underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function slug(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}
