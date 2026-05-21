import { Hero } from "@/components/sections/Hero";
import { Interests } from "@/components/sections/Interests";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Interests />
      <Timeline />
      <Skills />
      <Projects />
      <Research />
      <Contact />
      <footer className="border-t border-[var(--border-color)] px-6 py-8 text-center text-sm text-[var(--text-muted)] xl:ml-0">
        <p>© {new Date().getFullYear()} Shutonu Mitra</p>
      </footer>
    </>
  );
}
