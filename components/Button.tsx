import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-base-deep text-white shadow-[0_16px_45px_rgba(43,36,65,0.22)] hover:-translate-y-0.5 hover:bg-base-lavender hover:shadow-[0_20px_58px_rgba(43,36,65,0.28)] focus-visible:outline-base-amethyst",
    secondary:
      "border border-base-deep/12 bg-white/86 text-base-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur hover:-translate-y-0.5 hover:border-base-amethyst/45 hover:bg-white hover:shadow-[0_16px_42px_rgba(43,36,65,0.1)] focus-visible:outline-base-amethyst",
    light:
      "border border-white/30 bg-white text-base-deep shadow-[0_18px_50px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-base-light focus-visible:outline-white",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition duration-300 group-hover:translate-x-0.5"
      >
        -&gt;
      </span>
    </Link>
  );
}
