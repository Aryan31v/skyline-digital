import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="urgent-tag mb-6">Limited Offer: No Join Fee</div>
            <h1 className="text-7xl md:text-9xl mb-8 tracking-[-0.04em]">
              Forge<br />
              Your <span className="text-primary">Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-text-dim max-w-md mb-10 leading-relaxed">
              Experience the future of fitness. High-performance equipment, elite trainers, and a results-driven community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-[4px] h-14 px-10 text-base font-extrabold uppercase tracking-wider bg-primary text-black hover:bg-primary/90">
                Book Free Session
              </Button>
              <Button size="lg" variant="outline" className="rounded-[4px] h-14 px-10 text-base font-extrabold uppercase tracking-wider border-white hover:bg-white/10">
                View Plans
              </Button>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
          >
            {[
              { label: 'Active Members', value: '2,500+' },
              { label: 'Expert Trainers', value: '50+' },
              { label: 'Modern Equipment', value: '150+' },
              { label: 'Success Stories', value: '98%' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full -mr-20 -mb-20" />
    </section>
  );
}
