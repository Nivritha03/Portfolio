import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Patents } from "@/components/sections/Patents";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Hero />
      <Skills />
      <Projects />
      <Patents />
      <Experience />
    </main>
  );
}
