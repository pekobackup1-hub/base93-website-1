import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary:
      "bg-base-deep text-white shadow-soft hover:bg-base-lavender focus-visible:outline-base-amethyst",
    secondary:
      "border border-base-deep/15 bg-white text-base-deep hover:border-base-amethyst hover:bg-base-grey/60 focus-visible:outline-base-amethyst",
    light:
      "border border-white/20 bg-white text-base-deep hover:bg-base-light focus-visible:outline-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
