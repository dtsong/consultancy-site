import Link from "next/link";
import { type ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
  children?: ReactNode;
}

export function Card({
  title,
  description,
  icon,
  href,
  className = "",
  children,
}: CardProps) {
  const content = (
    <>
      {icon && (
        <div className="text-teal mb-4 w-12 h-12">{icon}</div>
      )}
      <h3 className="text-xl font-heading font-semibold text-navy mb-3">
        {title}
      </h3>
      <p className="text-slate-mid leading-relaxed">{description}</p>
      {children}
    </>
  );

  const baseClasses = `bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal/30 transition-colors ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`block ${baseClasses} hover:shadow-lg transition-shadow`}
      >
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
