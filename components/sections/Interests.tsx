"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Cloud, Server } from "lucide-react";
import { resumeData } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const iconMap = {
  server: Server,
  cloud: Cloud,
  bot: Bot,
  brain: Brain,
} as const;

export function Interests() {
  return (
    <SectionWrapper id="interests">
      <SectionTitle>Interests</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {resumeData.interests.map((interest, index) => {
          const Icon = iconMap[interest.icon as keyof typeof iconMap] ?? Server;
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 transition-shadow hover:border-[var(--accent-seaglass)] hover:shadow-[0_8px_30px_rgba(74,155,142,0.08)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--accent-seaglass)] transition-colors group-hover:border-[var(--accent-copper)] group-hover:text-[var(--accent-copper)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {interest.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
