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
  },
  {
    title: "CSPs & Incorporation Agents",
    copy: "Expand your reach, manage client workflows, and coordinate setup requests through a structured digital layer.",
  },
  {
    title: "Law Firms & Corporate Advisors",
    copy: "Support clients with multi-jurisdiction formation coverage, partner coordination, and documentation-led workflows.",
  },
  {
    title: "Free Zones & Channel Partners",
    copy: "Create a cleaner setup journey for customers while keeping visibility across applications, documents, and status updates.",
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
    <header className="sticky top-0 z-50 border-b border-base-deep/10 bg-white/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center">
          <Image
            src="/brand/base93-logo-dark.png"
            alt="Base93"
            width={176}
            height={31}
            priority
            className="h-auto w-36 md:w-44"
          />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${slug(item)}`}
              className="text-sm font-semibold text-base-lavender transition hover:text-base-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-base-amethyst"
            >
              {item}
            </a>
          ))}
        </div>
        <Button href="#contact">Contact Us</Button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-base-grey/45">
      <div className="absolute inset-x-0 top-0 h-48 bg-white" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-base-amethyst">
            Enterprise formation infrastructure
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-base-deep md:text-7xl">
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
          <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="border-l border-base-deep/15 pl-4"
              >
                <dt className="text-2xl font-semibold text-base-deep">
                  {value}
                </dt>
                <dd className="mt-1 text-sm leading-5 text-base-lavender">
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
    <div className="relative min-h-[520px] rounded-lg border border-white/18 purple-gradient p-4 shadow-soft md:p-6">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="relative h-full rounded-md border border-white/15 bg-white/92 p-4 backdrop-blur md:p-5">
        <div className="flex items-center justify-between border-b border-base-deep/10 pb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/base93-mark.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8"
            />
            <div>
              <p className="text-sm font-semibold text-base-deep">
                Formation layer
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
                  className="rounded-md border border-white bg-white p-3 text-center text-sm font-semibold text-base-deep"
                >
                  {market}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    <div className="rounded-md border border-base-deep/10 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-base-deep">{title}</p>
          <p className="mt-1 text-xs text-base-lavender">{meta}</p>
        </div>
        <span className="rounded-full bg-base-grey px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-base-lavender">
          {value}
        </span>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section id="platform" className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr]">
        <SectionHeader
          eyebrow="Problem"
          title="Formation workflows are fragmented."
          copy="Global company formation often depends on scattered requirements, manual collection, and unclear handoffs between customers, advisors, CSPs, and jurisdiction partners."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((item) => (
            <div
              key={item}
              className="rounded-md border border-base-deep/10 bg-base-grey/55 p-5 text-base font-semibold text-base-deep"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const flow = [
    "Select jurisdiction",
    "Collect requirements",
    "Coordinate partners",
    "Track documents",
    "Monitor progress",
    "Manage renewals",
  ];

  return (
    <section className="bg-base-deep px-5 py-20 text-white md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solution"
          title="One platform for jurisdictions, partners, documents, and status."
          copy="Base93 creates a structured digital layer for the formation journey, helping teams move from requirements to partner-led execution with clearer visibility."
          tone="dark"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {flow.map((item, index) => (
            <div
              key={item}
              className="rounded-md border border-white/12 bg-white/6 p-6"
            >
              <p className="text-sm font-semibold text-base-light">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{item}</h3>
            </div>
          ))}
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
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-md border border-base-deep/10 p-6 transition hover:border-base-amethyst hover:shadow-soft"
            >
              <h3 className="text-xl font-semibold text-base-deep">
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
    <section className="bg-base-grey/55 px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Everything needed to manage formation workflows."
          copy="From coverage and partner coordination to documents, dashboards, renewals, and API-ready infrastructure."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-md border border-base-deep/10 bg-white p-5 text-sm font-semibold leading-6 text-base-deep"
            >
              {capability}
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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <SectionHeader
            eyebrow="Coverage"
            title="Coverage across global incorporation markets."
            copy="Base93 supports incorporation workflows across 51 countries and markets, organized for scan-friendly evaluation by region."
          />
          <div className="rounded-lg border border-base-deep/10 bg-base-deep p-6 text-white shadow-soft">
            <div className="grid grid-cols-3 gap-3">
              {["UAE", "Singapore", "United Kingdom", "USA", "Germany", "Hong Kong"].map(
                (country) => (
                  <div
                    key={country}
                    className="rounded-md border border-white/12 bg-white/8 p-4 text-sm font-semibold"
                  >
                    {country}
                  </div>
                ),
              )}
            </div>
            <p className="mt-5 text-sm leading-6 text-base-light">
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
              className="group rounded-md border border-base-deep/10 bg-base-grey/45 p-5 open:bg-white open:shadow-soft"
              open={group.region === "Middle East" || group.region === "Asia Pacific"}
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-base-deep">
                <span className="flex items-center justify-between gap-4">
                  {group.region}
                  <span className="text-sm text-base-amethyst">
                    {group.countries.length} markets
                  </span>
                </span>
              </summary>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-base-deep/10 bg-white px-3 py-1.5 text-sm text-base-lavender"
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
    <section className="bg-base-grey/55 px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="UAE ecosystem"
          title="Coverage across leading UAE business hubs."
          copy="Base93 supports UAE free zone pathways through clean workflow visibility and partner-led setup coordination."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {freeZones.map((zone) => (
            <div
              key={zone}
              className="rounded-md border border-base-deep/10 bg-white p-5 text-sm font-semibold text-base-deep"
            >
              {zone}
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
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-md border border-base-deep/10 p-6">
              <p className="text-sm font-semibold text-base-amethyst">
                Step {index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-base-deep">
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
    <section id="partners" className="bg-base-deep px-5 py-20 text-white md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr]">
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
        <div className="grid gap-3 sm:grid-cols-2">
          {partnerBenefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-md border border-white/12 bg-white/6 p-5 text-sm leading-6 text-base-light"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg border border-base-deep/10 bg-base-grey/45 p-6 md:p-10">
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
                className="rounded-md border border-base-deep/10 bg-white p-5 text-sm font-semibold text-base-deep"
              >
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
    <section id="contact" className="bg-base-grey/55 px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Build your global formation layer with Base93."
            copy="Tell us about your formation workflow, partner network, or jurisdiction coverage need. The Base93 team can route enquiries through connect@base93.com once backend handling is connected."
          />
          <div className="mt-10 rounded-md border border-base-deep/10 bg-white p-5">
            <p className="text-sm font-semibold text-base-deep">
              Future routing
            </p>
            <a
              className="mt-2 inline-block text-base font-semibold text-base-amethyst underline-offset-4 hover:underline"
              href="mailto:connect@base93.com"
            >
              connect@base93.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-base-deep px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Image
            src="/brand/base93-logo-white.png"
            alt="Base93"
            width={188}
            height={33}
            className="h-auto w-40"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-base-light">
            Enterprise infrastructure for global company formation.
          </p>
          <p className="mt-5 text-sm text-base-light">Base93 Limited</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
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
