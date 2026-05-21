"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, X } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TechTag } from "@/components/ui/TechTag";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 shadow-2xl focus:outline-none">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)]">
              {project.title}
            </Dialog.Title>
            <Dialog.Close className="rounded-md p-1 text-[var(--text-muted)] transition-colors hover:text-[var(--accent-copper)]">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>

          <ProjectImage
            src={project.image}
            alt={project.title}
            variant="modal"
            className="mt-4 rounded-lg border border-[var(--border-color)]"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>

          <Dialog.Description className="mt-4 leading-relaxed text-[var(--text-muted)]">
            {project.description}
          </Dialog.Description>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[var(--accent-seaglass)] transition-colors hover:text-[var(--accent-copper)]"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
