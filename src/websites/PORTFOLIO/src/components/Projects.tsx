import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="work" className="py-32 bg-[#000000] relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-none">
              Featured <span className="text-muted-foreground">Projects</span>
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground max-w-xs"
          >
            A curated selection of my best work, focusing on results and user-centric solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
