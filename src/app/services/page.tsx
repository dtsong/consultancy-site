import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { MDXContent } from "@/components/MDXContent";
import { getAllServices } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Enterprise data engineering, security & compliance, AI-accelerated delivery, and Microsoft platform consulting.",
};

function ServiceIcon({ icon }: { icon: string }) {
  const className = "size-12 text-teal";

  switch (icon) {
    case "database":
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="24" cy="12" rx="16" ry="6" />
          <path d="M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
          <path d="M8 24c0 3.3 7.2 6 16 6s16-2.7 16-6" />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M24 4L6 14v10c0 12 8 18 18 22 10-4 18-10 18-22V14L24 4z" />
        </svg>
      );
    case "zap":
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="26,4 10,28 24,28 22,44 38,20 24,20 26,4" />
        </svg>
      );
    case "grid":
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6" y="6" width="16" height="16" rx="2" />
          <rect x="26" y="6" width="16" height="16" rx="2" />
          <rect x="6" y="26" width="16" height="16" rx="2" />
          <rect x="26" y="26" width="16" height="16" rx="2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="End-to-end data engineering and security consulting for enterprise Microsoft environments."
          />
        </Container>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.slug}
          className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-offwhite"}`}
        >
          <Container>
            <div className="lg:grid lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2 mb-8 lg:mb-0">
                <ServiceIcon icon={service.frontmatter.icon} />
                <h3 className="text-3xl font-heading font-bold text-navy mt-4">
                  {service.frontmatter.title}
                </h3>
                <p className="text-lg text-slate-mid mt-4">
                  {service.frontmatter.description}
                </p>
              </div>
              <div className="lg:col-span-3">
                <MDXContent source={service.content} />
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-navy bg-grid-pattern-dark text-center">
        <Container>
          <h2 className="text-3xl font-heading font-bold text-white">
            Need help choosing?
          </h2>
          <p className="text-lg text-slate-light mt-4">
            We&apos;ll help you identify the right engagement for your
            organization.
          </p>
          <Button variant="primary" href="/contact" className="mt-8">
            Schedule a Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
