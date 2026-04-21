import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Project } from '@/types';
import { CaseStudyDialog } from './CaseStudyDialog';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <CaseStudyDialog project={project}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group cursor-pointer glass p-6 rounded-2xl hover:border-accent transition-all duration-300"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2">{project.category}</div>
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-6">
            {project.metrics?.slice(0, 2).map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-2xl font-black font-display tracking-tight leading-none">{metric.value}</span>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </CaseStudyDialog>
  );
}
