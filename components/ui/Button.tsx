import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "copper" | "outline" | "ghost";
}

export function Button({
  className,
  variant = "copper",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200",
        variant === "copper" &&
          "bg-[var(--accent-copper)] text-white hover:bg-[var(--accent-copper-hover)]",
        variant === "outline" &&
          "border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent-seaglass)] hover:text-[var(--accent-seaglass)]",
        variant === "ghost" &&
          "text-[var(--accent-seaglass)] hover:text-[var(--accent-seaglass-hover)]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
