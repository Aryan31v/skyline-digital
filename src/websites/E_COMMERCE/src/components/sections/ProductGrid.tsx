import { Product } from "../../types";
import { ProductCard } from "../ui/ProductCard";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  title?: string;
  subtitle?: string;
  columns?: {
    default?: number;
    sm?: number;
    lg?: number;
    xl?: number;
};
}

export function ProductGrid({ 
  products, 
  onAddToCart, 
  onViewDetails, 
  title, 
  subtitle,
  columns = { default: 1, sm: 2, lg: 3, xl: 4 }
}: ProductGridProps) {
  return (
    <section className="w-full p-4 md:p-6 bg-transparent">
      {(title || subtitle) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            {subtitle && (
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tighter">
                {title}
              </h2>
            )}
          </div>
        </div>
      )}

      <div className={`grid grid-cols-${columns.default || 1} sm:grid-cols-${columns.sm || 2} lg:grid-cols-${columns.lg || 3} xl:grid-cols-${columns.xl || 4} gap-6`}>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard 
              product={product} 
              onAddToCart={onAddToCart} 
              onViewDetails={onViewDetails} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
