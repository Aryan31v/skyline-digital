import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App({ onBack }: { onBack: () => void }) {
  return (
    <>
      <button onClick={onBack} className="fixed top-4 left-4 z-[9999] bg-white/80 backdrop-blur text-black px-4 py-2 rounded-full shadow-lg font-bold border border-black/10 hover:scale-105 transition-transform">← Back to Home</button>
      <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
