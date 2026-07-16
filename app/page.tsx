import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection compact />
      <FeaturedProjects />
      <Faq />
      <CtaSection />
    </>
  );
}
