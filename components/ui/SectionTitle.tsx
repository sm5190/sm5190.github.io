import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  children,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl">
        {children}
      </h2>
      <div className="section-title-bar mt-3" />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">{subtitle}</p>
      )}
    </div>
  );
}
