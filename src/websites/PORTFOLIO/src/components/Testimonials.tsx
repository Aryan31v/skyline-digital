import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export function Testimonials() {
  return (
    <section className="py-32 bg-[#070707] overflow-hidden relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Social Proof</h2>
          <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight">Client Stories</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-3xl glass border border-border relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
