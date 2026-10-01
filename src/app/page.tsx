import Assistant from "@/components/Assistant";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NeuralBackground from "@/components/NeuralBackground";
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <Nav />
      <main>
        <Hero />
        <Assistant />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
