"use client";

import { useState } from "react";
import { submitLead } from "@/app/actions/submit-lead";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      message: formData.message,
      source: "CONTACT_FORM",
    });

    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
  }

  function resetForm() {
    setFormData({ name: "", email: "", company: "", message: "" });
    setSubmitted(false);
    setError(null);
  }

  if (submitted) {
    return (
      <div className="bg-teal/5 rounded-2xl p-8 text-center">
        <svg
          className="w-16 h-16 mx-auto text-teal"
          fill="none"
          viewBox="0 0 64 64"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="32" cy="32" r="28" />
          <path d="M20 33l8 8 16-16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="text-xl font-heading font-semibold text-navy mt-4">
          Message Sent
        </h3>
        <p className="text-slate-mid mt-2">
          Thank you for reaching out. We&apos;ll get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="text-teal font-medium mt-6 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-slate-dark focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy mb-2 font-heading"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy mb-2 font-heading"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-navy mb-2 font-heading"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy mb-2 font-heading"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} min-h-[160px] resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-teal text-white font-heading font-semibold py-3 px-6 rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
