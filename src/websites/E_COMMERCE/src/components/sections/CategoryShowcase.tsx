import { Category } from "../../types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryShowcaseProps {
  categories: Category[];
}

export function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  return (
    <section className="h-full w-full p-8 flex flex-col bg-transparent">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-display font-bold tracking-tight uppercase">
          Collections
        </h2>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-primary">
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
        {categories.map((category, index) => (
          <motion.a
            key={category.id}
            href={`#${category.id}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-muted aspect-square md:aspect-auto"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-sm md:text-base font-display font-bold text-white tracking-widest uppercase text-center">
                {category.name}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
