import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { PORTFOLIO_DATA } from '../constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505] bg-grid">
      {/* Background Glows */}
      <div className="glow top-[-100px] right-[-100px] opacity-60" />
      <div className="glow bottom-[-200px] left-[-100px] opacity-40" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-8"
          >
            Product Designer & Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[110px] font-black font-display tracking-[-0.05em] leading-[0.85] mb-10 text-gradient"
          >
            Turning <br />
            Ambition into <br />
            High-Revenue <br />
            Products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            I design conversion-focused digital experiences for early-stage startups and high-growth SaaS brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="rounded-xl px-12 h-18 text-lg font-bold group bg-accent hover:bg-accent/90 text-white shadow-[0_0_30px_rgba(255,78,0,0.3)] transition-all hover:scale-105">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-12 h-18 text-lg font-bold border-white/10 hover:bg-white/5 text-white transition-all">
              View Archives
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
