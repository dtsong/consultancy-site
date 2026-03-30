import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata = {
  title: "About",
  description:
    "Learn about Klearpath Solutions, our story, values, and the team behind our data, AI, and digital transformation consulting.",
};

const values = [
  {
    title: "Outcomes Over Hours",
    description:
      "We measure success by what we deliver, not how long it takes. If we can solve your problem in two weeks instead of two months, that's what we'll recommend.",
  },
  {
    title: "Transfer, Don't Trap",
    description:
      "Every engagement includes knowledge transfer. Your team should be able to operate, maintain, and extend everything we build without calling us.",
  },
  {
    title: "Honest Technical Advice",
    description:
      "We'll tell you when a simpler solution will work. We'll push back when an approach won't scale. We'd rather lose a project than set you up for failure.",
  },
];

const team = [
  {
    name: "Matthew Dillane",
    title: "Founder",
    bio: "15+ years in the biotech industry. ASQ Certified Manager of Quality/Organizational Excellence, Six Sigma Black Belt, and Certified Quality Auditor. Drives Klearpath's focus on process improvement and quality-driven digital transformation.",
  },
  {
    name: "Marcus Wilson",
    title: "Consulting Partner",
    bio: "Sacramento-based business and technology consultant. UC Davis MBA, Cal Poly SLO BS in Business Administration. Brings cross-functional expertise in operations, strategy, and client delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="About Klearpath Solutions"
            subtitle="We help organizations see their business and the path forward more clearly than ever."
            centered
          />
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-navy mb-6">
              Our Story
            </h2>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              Klearpath Solutions exists to replace slow, manual processes with
              scalable automated solutions that your team can own and operate.
            </p>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              Too many organizations invest in technology that never delivers.
              Projects drag on. Teams get systems they can&apos;t maintain.
              Data sits unused while decisions get made on gut feel.
            </p>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              We combine data engineering, the Microsoft platform, Lean Six Sigma,
              and AI to deliver measurable improvements. Not recommendations.
              Not slide decks. Working solutions with clear ROI.
            </p>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              Every engagement ends with your team owning the solution. That&apos;s
              how we structure every project from day one.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-offwhite">
        <Container>
          <SectionHeading title="What We Believe" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title}>
                <div className="w-12 h-1 bg-teal rounded-full mb-6" />
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-mid leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Team"
            subtitle="Experienced consultants with deep expertise in data, quality, and digital transformation."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name + member.title}
                className="bg-offwhite rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-slate-light"
                  >
                    <circle cx={20} cy={14} r={6} />
                    <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-teal font-medium mt-1">
                  {member.title}
                </p>
                <p className="text-slate-mid text-sm mt-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy bg-grid-pattern-dark text-center">
        <Container>
          <h2 className="text-3xl font-heading font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-light mt-4">
            We&apos;d love to hear about your challenges.
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
