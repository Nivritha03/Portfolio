import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingElements />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <LeadershipSection />
      <ContactSection />
    </main>
  )
}
