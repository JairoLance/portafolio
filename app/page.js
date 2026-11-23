import BgClouds from "@/components/BgClouds";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Animations from "@/components/Animations";

export default function Home() {
  return (
    <div className="page">
      <BgClouds />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Animations />
    </div>
  );
}
