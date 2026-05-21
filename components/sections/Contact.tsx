"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteData } from "@/lib/data";
import { copyToClipboard } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(siteData.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SectionWrapper id="contact" alt>
      <SectionTitle>Ping me anytime</SectionTitle>

      <div className="mx-auto max-w-xl rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--accent-copper)]">
          <Mail className="h-6 w-6" />
        </div>

        <p className="text-[var(--text-muted)]">
          Open to backend, cloud, and applied AI opportunities.
        </p>

        <a
          href={`mailto:${siteData.email}`}
          className="mt-4 block font-[family-name:var(--font-display)] text-xl text-[var(--text-primary)] transition-colors hover:text-[var(--accent-copper)]"
        >
          {siteData.email}
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${siteData.email}`} variant="copper">
            Send email
          </Button>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] px-5 py-2.5 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent-seaglass)] hover:text-[var(--accent-seaglass)]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy email
              </>
            )}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
