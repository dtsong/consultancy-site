import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Klearpath Solutions. Tell us about your data, AI, and digital transformation challenges.",
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
                <p className="text-slate-mid">info@klearpathsolutions.com</p>
                <p className="text-sm text-slate-light mt-2">
                  We respond within one business day.
                </p>
              </div>

              {/* Phone card */}
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h3 className="text-lg font-heading font-semibold text-navy">
                  Call Us
                </h3>
                <p className="text-slate-mid">(858) 727-0627</p>
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
                <p className="text-slate-mid">Sacramento, CA</p>
                <p className="text-sm text-slate-light mt-2">
                  Available for remote engagements nationwide.
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
                <p className="text-slate-mid">Monday to Friday</p>
                <p className="text-sm text-slate-light mt-2">
                  9:00 AM to 6:00 PM PT
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
