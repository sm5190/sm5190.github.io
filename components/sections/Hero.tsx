"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const typedSequence = siteData.typedRoles.flatMap((role, i) => [
    role,
    i < siteData.typedRoles.length - 1 ? 2000 : 2000,
  ]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden contour-bg"
    >
      <Image
        src="/img/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 xl:ml-[280px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-xl border border-[var(--border-color)] p-8 backdrop-blur-sm md:p-12"
          style={{ background: "var(--card-bg)" }}
        >
          <p className="font-[family-name:var(--font-mono)] text-sm tracking-widest text-[var(--accent-seaglass)]">
            {siteData.tagline}
          </p>

          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
            {siteData.name}
          </h1>

          <div className="mt-4 h-8 font-[family-name:var(--font-body)] text-lg text-[var(--text-muted)] md:text-xl">
            <TypeAnimation
              sequence={typedSequence}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-[var(--accent-copper)]"
            />
          </div>

          <div className="meridian-rule my-8" />

          <div className="space-y-4 text-[var(--text-muted)]">
            {siteData.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${siteData.email}`} variant="copper">
              <Mail className="h-4 w-4" />
              Email me
            </Button>
            <Button
              href="https://github.com/sm5190"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Button>
            <Button
              href={siteData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
