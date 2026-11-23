import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  );
}
