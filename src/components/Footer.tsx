import Link from "next/link";
import { Container } from "@/components/Container";

const serviceLinks = [
  { label: "Data Engineering", href: "/services#data-engineering" },
  { label: "Security & Compliance", href: "/services#security-compliance" },
  { label: "AI-Accelerated Delivery", href: "/services#ai-delivery" },
  { label: "Microsoft Platform", href: "/services#microsoft-platform" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link
              href="/"
              className="flex items-center text-xl font-heading font-bold text-white tracking-tight"
            >
              <span className="w-2 h-2 bg-teal rounded-sm inline-block mr-2" />
              KLEARPATH
            </Link>
            <p className="mt-4 text-slate-light leading-relaxed">
              Enterprise technology consulting that transforms complexity into
              clarity. Data, security, and AI solutions built for scale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-light hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-light hover:text-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@klearpath.com"
                  className="text-slate-light hover:text-teal-light transition-colors"
                >
                  hello@klearpath.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-slate-light hover:text-teal-light transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <p className="text-slate-light text-sm">
            &copy; 2026 Klearpath. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
