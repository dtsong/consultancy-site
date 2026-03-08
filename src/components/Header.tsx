"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { MobileMenu } from "@/components/MobileMenu";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-xl font-heading font-bold text-navy tracking-tight"
          >
            <span className="w-2 h-2 bg-teal rounded-sm inline-block mr-2" />
            KLEARPATH
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-dark hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/contact"
              className="text-sm !px-4 !py-2"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-navy hover:text-teal transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
