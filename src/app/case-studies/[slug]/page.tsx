import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { MDXContent } from "@/components/MDXContent";
import {
  getAllCaseStudies,
  getContentBySlug,
  type CaseStudyFrontmatter,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { frontmatter } = getContentBySlug<CaseStudyFrontmatter>(
    "case-studies",
    slug
  );
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

function CheckIcon() {
  return (
    <svg
      className="size-5 text-teal shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4.5 4.5L16 5" />
    </svg>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const { frontmatter, content } = getContentBySlug<CaseStudyFrontmatter>(
    "case-studies",
    slug
  );

  const metaItems = [
    { label: "Client", value: frontmatter.client },
    { label: "Industry", value: frontmatter.industry },
    { label: "Services", value: frontmatter.services.join(", ") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-offwhite bg-grid-pattern">
        <Container>
          <Link
            href="/case-studies"
            className="text-sm text-teal hover:text-teal-dark mb-8 inline-block"
          >
            &larr; Back to Case Studies
          </Link>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy">
            {frontmatter.title}
          </h1>
          <p className="text-xl text-slate-mid mt-4 max-w-3xl">
            {frontmatter.description}
          </p>
        </Container>
      </section>

      {/* Meta Bar */}
      <section className="py-6 border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap gap-8">
            {metaItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-widest text-slate-light font-medium">
                  {item.label}
                </p>
                <p className="text-sm text-navy font-medium mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-12 bg-teal/5">
        <Container>
          <h2 className="text-lg font-heading font-semibold text-navy mb-6">
            Key Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontmatter.results.map((result) => (
              <div
                key={result}
                className="bg-white rounded-xl p-6 border border-teal/10"
              >
                <CheckIcon />
                <p className="text-navy font-medium text-sm mt-2">{result}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <MDXContent source={content} />
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-offwhite text-center">
        <Container>
          <h2 className="text-2xl font-heading font-bold text-navy">
            Facing a similar challenge?
          </h2>
          <Button variant="primary" href="/contact" className="mt-6">
            Discuss Your Project
          </Button>
        </Container>
      </section>
    </>
  );
}
