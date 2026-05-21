"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { resumeData } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

function TimelineItem({
  title,
  subtitle,
  period,
  location,
  details,
  bullets,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  period: string;
  location?: string;
  details?: string[];
  bullets?: string[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-[var(--accent-copper)] bg-[var(--bg-deep)]" />
      <div className="absolute bottom-0 left-[5px] top-5 w-px bg-[var(--accent-sand)] opacity-30 last:hidden" />

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group w-full text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
              {title}
            </h4>
            {subtitle && (
              <p className="mt-0.5 text-[var(--accent-seaglass)]">{subtitle}</p>
            )}
            <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-[var(--text-muted)]">
              {period}
              {location && ` · ${location}`}
            </p>
          </div>
          {(bullets || details) && (
            <ChevronDown
              className={cn(
                "mt-1 h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-200 group-hover:text-[var(--accent-copper)]",
                open && "rotate-180"
              )}
            />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (bullets || details) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {details && (
              <ul className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
                {details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            {bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-muted)]">
                {bullets.map((b) => (
                  <li key={b.slice(0, 40)}>{b}</li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Timeline() {
  return (
    <SectionWrapper id="resume" alt>
      <SectionTitle>Education & Experience</SectionTitle>

      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--accent-copper)]">
            Education
          </h3>
          <div className="space-y-8">
            {resumeData.education.map((item, i) => (
              <TimelineItem
                key={item.degree}
                title={item.degree}
                period={item.period}
                location={item.institution}
                details={item.details}
                bullets={item.coursework}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--accent-copper)]">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {resumeData.experience.map((item, i) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                title={item.company}
                subtitle={item.role}
                period={item.period}
                location={item.location}
                bullets={item.highlights}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
