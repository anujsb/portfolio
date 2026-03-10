import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <Hero />
        </div>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}