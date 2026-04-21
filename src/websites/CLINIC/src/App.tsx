import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Timings from './components/Timings';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

export default function App({ onBack }) {
  return (
    <>
      <button onClick={onBack} className="fixed top-4 left-4 z-[9999] bg-white/80 backdrop-blur text-black px-4 py-2 rounded-full shadow-lg font-bold border border-black/10 hover:scale-105 transition-transform">← Back to Home</button>
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Timings />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
    </>
  );
}
