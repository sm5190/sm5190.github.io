"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  alt = false,
}: SectionWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-4 px-6 py-20 lg:px-12",
        alt && "bg-[var(--bg-elevated)]",
        className
      )}
    >
      {mounted ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
}
