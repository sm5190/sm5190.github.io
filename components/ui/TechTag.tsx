import { cn } from "@/lib/utils";

export function TechTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs",
        "border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--accent-seaglass)]",
        className
      )}
    >
      {children}
    </span>
  );
}
