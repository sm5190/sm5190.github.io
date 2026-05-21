"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

function SkillBar({
  name,
  level,
  category,
}: {
  name: string;
  level: number;
  category: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-[var(--text-primary)]">{name}</span>
        <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--text-muted)]">
          {category}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--bg-elevated)]">
        <motion.div
          className="h-full rounded-full bg-[var(--accent-seaglass)]"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const categories = [...new Set(skillsData.skills.map((s) => s.category))];

  return (
    <SectionWrapper id="skills">
      <SectionTitle subtitle="Technologies I work with across backend, cloud, and applied AI.">
        Skills
      </SectionTitle>

      <div className="grid gap-10 lg:grid-cols-2">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--accent-copper)]">
              {category}
            </h3>
            <div className="space-y-5">
              {skillsData.skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    category={skill.category}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
