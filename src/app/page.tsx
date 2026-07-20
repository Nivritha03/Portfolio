import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Patents } from "@/components/sections/Patents";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Patents />
      <TerminalSection />
      <Experience />
    </main>
  );
}
