import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata = {
  title: "About",
  description:
    "Learn about Klearpath — our story, values, and the team behind enterprise data engineering and security consulting.",
};

const values = [
  {
    title: "Outcomes Over Hours",
    description:
      "We measure success by what we deliver, not how long it takes. If we can solve your problem in two weeks instead of two months, that\u2019s what we\u2019ll recommend.",
  },
  {
    title: "Transfer, Don\u2019t Trap",
    description:
      "Every engagement includes knowledge transfer. Your team should be able to operate, maintain, and extend everything we build \u2014 without calling us.",
  },
  {
    title: "Honest Technical Advice",
    description:
      "We\u2019ll tell you when a simpler solution will work. We\u2019ll push back when an approach won\u2019t scale. We\u2019d rather lose a project than set you up for failure.",
  },
];

const team = [
  {
    name: "Daniel Song",
    title: "Principal Consultant",
    bio: "15+ years building enterprise data platforms. Former data architecture lead at a Fortune 100 financial services firm. Microsoft Certified Azure Solutions Architect.",
  },
  {
    name: "Team Member",
    title: "Senior Data Engineer",
    bio: "Specializes in Azure Synapse, Databricks, and dbt. Built data platforms processing 50B+ records daily. Deep expertise in data modeling and pipeline optimization.",
  },
  {
    name: "Team Member",
    title: "Security & Compliance Lead",
    bio: "10+ years in enterprise security. Led compliance automation initiatives for healthcare and financial services organizations. CISSP, CISM certified.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="About Klearpath"
            subtitle="We help enterprise organizations build data platforms they can trust."
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
              Klearpath was founded by data engineers who spent years inside
              Fortune 500 organizations building enterprise data platforms. We
              lived the daily reality of complex migrations, strict compliance
              requirements, and technology decisions that had to hold up for
              years, not months.
            </p>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              Over time, we saw how much value was lost to poor vendor
              implementations, overcomplicated architectures, and consultancies
              that prioritized billable hours over outcomes. Projects that should
              have taken weeks dragged on for quarters. Teams were left with
              systems they didn&apos;t understand and couldn&apos;t maintain.
            </p>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              We built Klearpath to be the consultancy we wished we&apos;d had:
              technically deep, pragmatically focused, and genuinely invested in
              leaving clients better than we found them. We bring the same rigor
              we applied inside the enterprise &mdash; but without the overhead,
              politics, or misaligned incentives.
            </p>
            <p className="text-lg text-slate-dark leading-relaxed mb-6">
              Every engagement ends with your team owning and understanding the
              solution &mdash; not dependent on us. That&apos;s not just a
              philosophy; it&apos;s how we structure every project from day one.
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
            subtitle="Microsoft-certified engineers with deep enterprise experience."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            We&apos;d love to hear about your data challenges.
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
