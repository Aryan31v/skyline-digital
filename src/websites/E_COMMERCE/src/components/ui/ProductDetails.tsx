import { useState } from "react";
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  RefreshCw,
  Share2,
  Heart
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Product } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

interface ProductDetailsProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, variants: Record<string, string>) => void;
}

export function ProductDetails({ product, isOpen, onClose, onAddToCart }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedVariants);
    onClose();
};

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background rounded-3xl border-none shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Image Gallery */}
          <div className="bg-muted p-6 md:p-12 flex flex-col gap-6 h-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-black text-white">NEW</Badge>}
                {product.isLimited && <Badge variant="destructive">LIMITED EDITION</Badge>}
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImage === idx ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
              }`}
                >
                  <img src={img} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col h-full overflow-y-auto">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50">
                    {product.category}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  {product.name}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`} 
                      />
                    ))}
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm text-muted-foreground">{product.reviewsCount} Reviews</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-display font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
                {product.stock < 10 && (
                  <Badge variant="outline" className="text-destructive border-destructive font-bold ml-auto animate-pulse">
                    ONLY {product.stock} LEFT
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <Separator />

              {/* Variants */}
              {product.variants?.map((variant) => (
                <div key={variant.name} className="space-y-3">
                  <p className="text-sm font-bold uppercase tracking-wider">{variant.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map((option) => (
                      <Button
                        key={option}
                        variant={selectedVariants[variant.name] === option ? "default" : "outline"}
                        className="rounded-xl h-10 px-4"
                        onClick={() => setSelectedVariants({ ...selectedVariants, [variant.name]: option })}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center border rounded-xl h-14 px-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  className="flex-1 h-14 text-lg font-bold rounded-xl shadow-xl shadow-black/10 group"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                  <Separator orientation="vertical" className="mx-4 h-6 bg-white/20" />
                  ${(product.price * quantity).toLocaleString()}
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">2yr Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RefreshCw className="h-5 w-5 text-muted-foreground" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">30-Day Returns</span>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="features" className="pt-8">
                <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-8">
                  <TabsTrigger 
                    value="features" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 font-bold uppercase tracking-widest text-xs"
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger 
                    value="shipping" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-3 font-bold uppercase tracking-widest text-xs"
                  >
                    Shipping
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="pt-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="pt-6 text-sm text-muted-foreground leading-relaxed">
                  We offer free standard shipping on all orders over $200. Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
