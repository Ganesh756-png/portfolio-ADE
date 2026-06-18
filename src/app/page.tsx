import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Internship from "@/components/Internship";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Dynamic Network Canvas Background */}
      <ParticleBackground />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Page Sections */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
