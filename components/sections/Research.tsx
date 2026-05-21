"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { researchData } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

export function Research() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="research">
      <SectionTitle>Research & Publication</SectionTitle>

      <div className="space-y-4">
        {researchData.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 p-6 text-left"
              >
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--accent-copper)]">
                    {item.type}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={cn(
                    "mt-1 h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[var(--border-color)] px-6 pb-6">
                      <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
                        {item.description}
                      </p>

                      {item.publication && (
                        <blockquote className="mt-4 border-l-2 border-[var(--accent-sand)] pl-4 text-sm italic text-[var(--text-muted)]">
                          {item.publication}
                        </blockquote>
                      )}

                      <div className="mt-4 flex flex-wrap gap-4">
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-[var(--accent-seaglass)] hover:text-[var(--accent-copper)]"
                          >
                            View project
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {item.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-[var(--accent-seaglass)] hover:text-[var(--accent-copper)]"
                          >
                            {link.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
