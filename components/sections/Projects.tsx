"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeCategory);

  const featured = projectsData.projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects" alt>
      <SectionTitle>Projects</SectionTitle>

      {featured.length > 0 && activeCategory === "all" && (
        <div className="mb-12">
          <h3 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--accent-copper)]">
            Featured
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mb-8 flex flex-wrap gap-2">
        {projectsData.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm transition-colors",
              activeCategory === cat.id
                ? "text-[var(--bg-deep)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            )}
          >
            {activeCategory === cat.id && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-[var(--accent-seaglass)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered
            .filter((p) => !(activeCategory === "all" && p.featured))
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}
