import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

export const metadata = {
  title: "Klearpath Solutions - Data, AI & Digital Transformation Consulting",
};

const services = [
  {
    title: "Data Engineering",
    description:
      "Design and build scalable data platforms on Azure that your team can operate with confidence.",
    icon: (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <ellipse cx={24} cy={12} rx={14} ry={5} />
        <path d="M10 12v12c0 2.76 6.27 5 14 5s14-2.24 14-5V12" />
        <path d="M10 24v12c0 2.76 6.27 5 14 5s14-2.24 14-5V24" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    description:
      "Implement security frameworks that protect sensitive data and satisfy auditors.",
    icon: (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M24 4L6 12v12c0 11.1 7.68 21.48 18 24 10.32-2.52 18-12.9 18-24V12L24 4z" />
        <path d="M17 24l5 5 10-10" />
      </svg>
    ),
  },
  {
    title: "AI-Accelerated Delivery",
    description:
      "Integrate AI into your delivery workflows to ship faster without sacrificing rigor.",
    icon: (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M28 4L12 28h12L20 44l16-24H24L28 4z" />
      </svg>
    ),
  },
  {
    title: "Microsoft Platform",
    description:
      "Unlock the full potential of your Microsoft licensing and technology investment.",
    icon: (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x={6} y={6} width={16} height={16} rx={2} />
        <rect x={26} y={6} width={16} height={16} rx={2} />
        <rect x={6} y={26} width={16} height={16} rx={2} />
        <rect x={26} y={26} width={16} height={16} rx={2} />
      </svg>
    ),
  },
  {
    title: "Data Visualization & BI",
    description:
      "Transform raw data into actionable insights with Power BI dashboards and self-service analytics.",
    icon: (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x={6} y={28} width={8} height={14} rx={1} />
        <rect x={20} y={18} width={8} height={24} rx={1} />
        <rect x={34} y={8} width={8} height={34} rx={1} />
        <path d="M6 8l14 10 14-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Process Improvement",
    description:
      "Lean Six Sigma methodology and Smartsheet project management to eliminate waste and accelerate delivery.",
    icon: (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx={24} cy={24} r={18} />
        <path d="M16 24l5 5 10-10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    label: "01",
    title: "Outcomes Over Hours",
    description:
      "We measure success by what we deliver, not how long it takes. Clear success criteria. Full handoff to your team.",
  },
  {
    label: "02",
    title: "AI-Powered, Not AI-Hyped",
    description:
      "We use AI in our own delivery daily. We help you adopt it where it works and avoid the implementations that waste budget.",
  },
  {
    label: "03",
    title: "Microsoft-Native",
    description:
      "Azure, M365, Power Platform, Dynamics. Not generalists stretching into Microsoft. It's our core expertise.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-offwhite bg-hero-pattern py-24 md:py-32 lg:py-40">
        <Container>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy max-w-4xl leading-tight">
            See your business - and the path forward - more clearly than ever.
          </h1>
          <p className="text-lg md:text-xl text-slate-mid mt-6 max-w-2xl leading-relaxed">
            Klearpath Solutions helps organizations harness data, AI, and the
            Microsoft platform to maximize efficiency, quality, and value.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button variant="primary" href="/assess">
              Discover Your AI Opportunities
            </Button>
            <Button variant="outline" href="/services">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What We Do"
            subtitle="Data platforms, security, AI adoption, and process improvement for organizations on the Microsoft stack."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href="/services"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="Why Klearpath"
            subtitle="We replace manual processes with scalable solutions and transfer ownership to your team."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {differentiators.map((item) => (
              <div key={item.title}>
                <span className="text-teal text-4xl font-heading font-bold">
                  {item.label}
                </span>
                <h3 className="text-xl font-heading font-semibold text-navy mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <Container>
          <p className="text-sm font-medium text-slate-light uppercase tracking-widest mb-10 text-center">
            Trusted by teams across industries
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Biotech", "Healthcare", "Financial Services", "Manufacturing", "Technology"].map((industry) => (
              <div
                key={industry}
                className="h-10 w-32 bg-gray-100 rounded-md inline-flex items-center justify-center text-slate-light text-xs"
              >
                {industry}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Assessment CTA Section */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              Where does AI fit in your organization?
            </h2>
            <p className="text-lg text-slate-mid mt-4 max-w-2xl mx-auto">
              Take our 4-minute assessment and get personalized AI use case
              recommendations tailored to your industry and regulatory environment.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/assess">
                Take the AI Readiness Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-navy bg-grid-pattern-dark text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Ready to move faster with better data?
          </h2>
          <p className="text-lg text-slate-light mt-4 max-w-2xl mx-auto">
            Tell us about your challenges. We respond within one business day.
          </p>
          <div className="mt-8">
            <Button variant="primary" href="/contact">
              Start a Conversation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
