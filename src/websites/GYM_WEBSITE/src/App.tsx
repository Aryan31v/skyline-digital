/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import SocialProof from './components/SocialProof';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import TransformationGallery from './components/TransformationGallery';
import LeadCapture from './components/LeadCapture';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App({ onBack }) {
  return (
    <>
      <button onClick={onBack} className="fixed top-4 left-4 z-[9999] bg-white/80 backdrop-blur text-black px-4 py-2 rounded-full shadow-lg font-bold border border-black/10 hover:scale-105 transition-transform">← Back to Home</button>
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main className="space-y-6 pb-24">
        <Hero />
        <StatsStrip />
        <SocialProof />
        <Programs />
        <WhyChooseUs />
        <Trainers />
        <Pricing />
        <TransformationGallery />
        <LeadCapture />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <ExitIntentPopup />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/10 md:hidden z-40">
        <button className="w-full h-14 bg-primary text-black font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20">
          Join Now - 7 Days Free
        </button>
      </div>
    </div>
    </>
  );
}
