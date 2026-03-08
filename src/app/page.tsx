import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

export const metadata = {
  title: "Klearpath — Enterprise Data Engineering & Security Consultancy",
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
];

const differentiators = [
  {
    label: "01",
    title: "Enterprise Experience",
    description:
      "Our engineers have built data platforms for Fortune 500 organizations processing billions of records. We understand the complexity of enterprise environments.",
  },
  {
    label: "02",
    title: "AI-Accelerated",
    description:
      "We use AI tools in our own delivery work daily. We help you adopt AI where it genuinely helps — and avoid the hype-driven implementations that don't.",
  },
  {
    label: "03",
    title: "Microsoft-Native",
    description:
      "Deep specialization across Azure, M365, Power Platform, and Dynamics. We're not generalists stretching into Microsoft — it's all we do.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-offwhite bg-hero-pattern py-24 md:py-32 lg:py-40">
        <Container>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy max-w-4xl leading-tight">
            Enterprise data platforms, built with precision.
          </h1>
          <p className="text-lg md:text-xl text-slate-mid mt-6 max-w-2xl leading-relaxed">
            Klearpath helps enterprise organizations design, secure, and
            optimize their data infrastructure on the Microsoft stack.
          </p>
          <div className="flex gap-4 mt-10">
            <Button variant="primary" href="/services">
              Explore Our Services
            </Button>
            <Button variant="outline" href="/contact">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What We Do"
            subtitle="End-to-end data engineering and security for organizations that run on Microsoft."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            subtitle="We bring deep Microsoft expertise and pragmatic AI adoption to enterprise data challenges."
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
            Trusted by enterprise teams across industries
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-32 bg-gray-100 rounded-md inline-flex items-center justify-center text-slate-light text-xs"
              >
                Logo
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-navy bg-grid-pattern-dark text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Ready to transform your data infrastructure?
          </h2>
          <p className="text-lg text-slate-light mt-4 max-w-2xl mx-auto">
            Let&apos;s discuss how Klearpath can help your organization build a
            data platform that lasts.
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
