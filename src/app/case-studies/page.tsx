import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { getAllCaseStudies } from "@/lib/content";

export const metadata = {
  title: "Case Studies",
  description:
    "See how Klearpath has helped enterprise organizations transform their data platforms and automate compliance.",
};

function CheckIcon() {
  return (
    <svg
      className="size-4 text-teal shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5l3.5 3.5L13 4" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="Case Studies"
            subtitle="Real results for real organizations. See how we've helped enterprise teams transform their data infrastructure."
          />
        </Container>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-teal/30 hover:shadow-lg transition-all"
              >
                <span className="inline-block text-xs font-medium text-teal bg-teal/10 px-3 py-1 rounded-full mb-4">
                  {cs.frontmatter.industry}
                </span>
                <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                  {cs.frontmatter.title}
                </h3>
                <p className="text-slate-mid leading-relaxed mb-6">
                  {cs.frontmatter.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {cs.frontmatter.results.slice(0, 2).map((result) => (
                    <li key={result} className="flex items-start gap-2 text-sm text-navy">
                      <CheckIcon />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-teal font-medium text-sm">
                  Read case study &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-offwhite text-center">
        <Container>
          <h2 className="text-2xl font-heading font-bold text-navy">
            Have a similar challenge?
          </h2>
          <Button variant="primary" href="/contact" className="mt-6">
            Let&apos;s Talk
          </Button>
        </Container>
      </section>
    </>
  );
}
