import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';

export function About() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group border border-border">
              <img
                src="https://picsum.photos/seed/alex/800/1000"
                alt="Jason K."
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-black font-display leading-tight mb-8 tracking-tight">
              I believe that great design is a <span className="text-accent italic">competitive advantage</span>.
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{PORTFOLIO_DATA.about.story}</p>
              <p className="font-medium text-foreground italic border-l-2 border-accent pl-6 py-2">
                "{PORTFOLIO_DATA.about.philosophy}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-black font-display text-accent mb-2">8+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black font-display text-accent mb-2">150+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
