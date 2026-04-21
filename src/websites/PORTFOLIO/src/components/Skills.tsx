import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { Badge } from './ui/badge';

export function Skills() {
  const categories = ['Design', 'Development', 'Strategy'];

  return (
    <section className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight">Tools & Capabilities</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl glass border border-border hover:border-accent/30 transition-all"
            >
              <h4 className="text-xl font-bold font-display mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category}
              </h4>
              <div className="space-y-8">
                {PORTFOLIO_DATA.skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
