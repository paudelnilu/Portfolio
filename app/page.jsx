import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="border-t border-line" />
        <About />
        <hr className="border-t border-line" />
        <Experience />
        <hr className="border-t border-line" />
        <Projects />
        <hr className="border-t border-line" />
        <Skills />
        <hr className="border-t border-line" />
        <Education />
        <hr className="border-t border-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
