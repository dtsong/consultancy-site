import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Klearpath. Tell us about your data engineering and security challenges.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-offwhite bg-grid-pattern">
        <Container>
          <SectionHeading
            title="Get in Touch"
            subtitle="Tell us about your data challenges. We'll respond within one business day."
          />
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="lg:grid lg:grid-cols-5 lg:gap-16">
            {/* Left column - Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right column - Contact info */}
            <div className="lg:col-span-2 mt-12 lg:mt-0 space-y-8">
              {/* Email card */}
              <div className="bg-offwhite rounded-2xl p-8">
                <svg
                  className="text-teal w-6 h-6 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <h3 className="text-lg font-heading font-semibold text-navy">
                  Email Us
                </h3>
                <p className="text-slate-mid">hello@klearpath.com</p>
                <p className="text-sm text-slate-light mt-2">
                  We respond within one business day.
                </p>
              </div>

              {/* Location card */}
              <div className="bg-offwhite rounded-2xl p-8">
                <svg
                  className="text-teal w-6 h-6 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h3 className="text-lg font-heading font-semibold text-navy">
                  Based In
                </h3>
                <p className="text-slate-mid">United States</p>
                <p className="text-sm text-slate-light mt-2">
                  Available for remote engagements worldwide.
                </p>
              </div>

              {/* Hours card */}
              <div className="bg-offwhite rounded-2xl p-8">
                <svg
                  className="text-teal w-6 h-6 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-heading font-semibold text-navy">
                  Working Hours
                </h3>
                <p className="text-slate-mid">Monday – Friday</p>
                <p className="text-sm text-slate-light mt-2">
                  9:00 AM – 6:00 PM ET
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
