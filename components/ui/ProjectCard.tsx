"use client";

import { GitHubIcon } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TechTag } from "@/components/ui/TechTag";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onSelect: (project: Project) => void;
}

export function ProjectCard({
  project,
  featured = false,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "project-card group overflow-hidden rounded-xl border bg-[var(--bg-surface)] transition-shadow duration-200",
        featured && "lg:col-span-1"
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="relative block w-full overflow-hidden"
      >
        <ProjectImage src={project.image} alt={project.title} variant="card" />
        <div className="pointer-events-none absolute inset-0 bg-[var(--accent-copper)] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      </button>

      <div className="p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
          {project.title}
        </h3>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-[var(--accent-copper)] transition-colors hover:text-[var(--accent-copper-hover)]"
          >
            View details
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[var(--accent-seaglass)] transition-colors hover:text-[var(--accent-seaglass-hover)]"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
