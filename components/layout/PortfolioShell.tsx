"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { BackToTop } from "@/components/layout/BackToTop";

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="min-h-screen xl:ml-[280px]">{children}</main>
      <BackToTop />
    </>
  );
}
