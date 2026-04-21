import { useState } from "react";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Product } from "../../types";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        className="group border-none bg-transparent overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <CardContent className="p-0 relative">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
              isHovered ? "scale-110" : "scale-100"
        }`}
            referrerPolicy="no-referrer"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-accent text-white hover:bg-accent border-none font-bold text-[10px] px-2 py-0.5 rounded-sm">
                NEW
              </Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-black text-white hover:bg-black border-none font-bold text-[10px] px-2 py-0.5 rounded-sm">
                BEST SELLER
              </Badge>
            )}
            {product.isLimited && (
              <Badge variant="destructive" className="font-bold text-[10px] px-2 py-0.5">
                LIMITED
              </Badge>
            )}
          </div>

          {/* Quick Actions Overlay */}
          <div 
            className={`absolute inset-0 bg-black/5 flex items-center justify-center gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
        }`}
          >
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full h-10 w-10 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
              onClick={() => onViewDetails(product)}
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full h-10 w-10 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button (Mobile/Tablet visible, Desktop hover) */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
            <Button 
              className="w-full h-11 bg-accent text-white hover:bg-accent/90 shadow-xl font-semibold rounded-xl"
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1 px-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                {product.category}
              </p>
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">
                ${product.price}
              </p>
              {product.originalPrice && (
                <p className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`} 
                />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">
              ({product.reviewsCount})
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}
