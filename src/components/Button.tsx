import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
};

const baseStyles =
  "inline-block px-6 py-3 rounded-lg font-heading font-semibold text-sm tracking-wide transition-colors";

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
