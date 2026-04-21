import { motion } from 'framer-motion';
import { Search, Map, Zap, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const iconMap: Record<string, any> = {
  Search,
  Map,
  Zap,
  TrendingUp,
};

export function Process() {
  return (
    <section id="process" className="py-32 bg-[#020202] relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-none">
            A systematic approach to <span className="text-muted-foreground">creative problem solving</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_DATA.process.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-white/[0.02] hover:border-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-muted-foreground mb-2">Step 0{index + 1}</div>
                <h4 className="text-xl font-bold font-display mb-4">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
