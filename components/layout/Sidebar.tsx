"use client";

import Image from "next/image";
import {
  BookOpen,
  Code,
  Folder,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  User,
  X,
} from "lucide-react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ScholarIcon,
} from "@/components/ui/SocialIcons";
import { useEffect, useState } from "react";
import { siteData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

const iconMap = {
  user: User,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  code: Code,
  folder: Folder,
  "book-open": BookOpen,
  mail: Mail,
} as const;

const socialIconMap = {
  github: GitHubIcon,
  "graduation-cap": ScholarIcon,
  mail: Mail,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = siteData.nav.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navContent = (
    <>
      <div className="flex flex-col items-center px-6 pb-6 pt-8 text-center">
        <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-[var(--accent-sand)] border-opacity-30">
          <Image
            src="/img/profile.jpg"
            alt="Shutonu Mitra"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)]">
          {siteData.name}
        </h1>
        <p className="mt-1 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[var(--accent-seaglass)]">
          {siteData.tagline}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {siteData.social.map((link) => {
            const IconComponent =
              socialIconMap[link.icon as keyof typeof socialIconMap] ?? Mail;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-copper)] hover:text-[var(--accent-copper)]"
              >
                <IconComponent className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        <ul className="space-y-1">
          {siteData.nav.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? User;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-all duration-200",
                    isActive
                      ? "border-l-2 border-[var(--accent-copper)] bg-[var(--bg-elevated)] pl-[10px] text-[var(--accent-copper)]"
                      : "border-l-2 border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={siteData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
            >
              <BookOpen className="h-4 w-4 shrink-0" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="border-t border-[var(--border-color)] p-4">
        <button
          type="button"
          onClick={toggleTheme}
          className="flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border-color)] px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent-sand)] hover:text-[var(--text-primary)]"
        >
          {theme === "dark" ? (
            <>
              <Sun className="h-4 w-4" /> Light mode
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" /> Dark mode
            </>
          )}
        </button>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] xl:hidden"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 xl:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-full w-[280px] flex-col border-r border-[var(--border-color)] bg-[var(--bg-surface)] transition-transform duration-300 xl:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navContent}
      </aside>
    </>
  );
}
