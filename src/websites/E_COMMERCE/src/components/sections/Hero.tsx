import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-full w-full overflow-hidden flex items-center p-8 md:p-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Background"
          className="h-full w-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-wider uppercase mb-3">
              New Collection 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter text-balance text-white">
              THE CORE <br />
              <span className="text-white/40">COLLECTION.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-white/60 max-w-md text-balance"
          >
            Precision engineering meets aesthetic minimalism. Designed for those who seek more with less.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="h-12 px-6 text-sm group rounded-xl bg-white text-black hover:bg-white/90">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
