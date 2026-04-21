/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ProductGrid } from "./components/sections/ProductGrid";
import { CategoryShowcase } from "./components/sections/CategoryShowcase";
import { TrustSignals } from "./components/sections/TrustSignals";
import { Newsletter } from "./components/sections/Newsletter";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/layout/CartDrawer";
import { ProductDetails } from "./components/ui/ProductDetails";
import { products, categories } from "./data/products";
import { Product, CartItem } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App({ onBack }: { onBack: () => void }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasSeenExitIntent, setHasSeenExitIntent] = useState(false);

  // Exit intent logic
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenExitIntent) {
        setShowExitIntent(true);
        setHasSeenExitIntent(true);
  }
};

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
}, [hasSeenExitIntent]);

  const handleAddToCart = (product: Product, quantity: number = 1, variants: Record<string, string> = {}) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
  }
      return [...prev, { ...product, quantity, selectedVariants: variants }];
});
    setIsCartOpen(true);
};

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
};

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
};

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
};

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // In a real app, this would filter products or redirect to search page
};

  return (
    <>
      <button onClick={onBack} className="fixed top-4 left-4 z-[9999] bg-white/80 backdrop-blur text-black px-4 py-2 rounded-full shadow-lg font-bold border border-black/10 hover:scale-105 transition-transform">← Back to Home</button>
      <div className="min-h-screen flex flex-col">
        <Navbar 
          cartItems={cartItems} 
          onOpenCart={() => setIsCartOpen(true)} 
          onSearch={handleSearch}
        />
        
        <main className="flex-1 w-full max-w-[1800px] mx-auto px-4 md:px-12 py-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
            }
          }
        }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Hero Section */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
          }}
              className="lg:col-span-8 lg:row-span-2 bento-card bento-hero p-0 min-h-[400px]"
            >
              <Hero />
            </motion.div>

            {/* Featured Product / Product Grid (adapted) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
          }}
              className="lg:col-span-4 lg:row-span-3 bento-card bento-featured overflow-y-auto min-h-[500px] p-0"
            >
              <ProductGrid 
                title="FEATURED" 
                subtitle="Top Picks"
                products={products.filter(p => p.isBestSeller || p.isNew).slice(0, 2)} 
                onAddToCart={(p) => handleAddToCart(p)}
                onViewDetails={handleViewDetails}
                columns={{ default: 1, sm: 2, lg: 1, xl: 1 }}
              />
            </motion.div>

            {/* Trust Signals */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
          }}
              className="lg:col-span-4 bento-card bento-trust flex items-center justify-center"
            >
              <TrustSignals />
            </motion.div>

            {/* Newsletter / Social Proof */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
          }}
              className="lg:col-span-4 bento-card bento-newsletter p-0 min-h-[300px]"
            >
              <Newsletter />
            </motion.div>

            {/* Category Showcase */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
          }}
              className="lg:col-span-8 bento-card bento-categories p-0 min-h-[300px]"
            >
              <CategoryShowcase categories={categories} />
            </motion.div>

            {/* Full Product Grid */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
          }}
              className="lg:col-span-12 mt-8"
            >
              <ProductGrid 
                title="ALL COLLECTIONS" 
                subtitle="Precision Engineered"
                products={products} 
                onAddToCart={(p) => handleAddToCart(p)}
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          </motion.div>
        </main>

        <Footer />

        {/* Overlays */}
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        <ProductDetails 
          product={selectedProduct}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          onAddToCart={handleAddToCart}
        />

        {/* Exit Intent Popup */}
        <AnimatePresence>
          {showExitIntent && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowExitIntent(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white rounded-[2rem] overflow-hidden max-w-lg w-full shadow-2xl"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-4 right-4 rounded-full z-10"
                  onClick={() => setShowExitIntent(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
                
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="h-48 sm:h-full bg-muted relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-bold leading-tight">Wait! Don't leave yet.</h3>
                      <p className="text-sm text-muted-foreground">
                        Get <span className="text-primary font-bold">15% OFF</span> your first order when you join our inner circle today.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full h-12 rounded-xl font-bold">Claim My Discount</Button>
                      <button 
                        className="w-full text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setShowExitIntent(false)}
                      >
                        No thanks, I prefer full price
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Sticky Mobile Add to Cart (Simulated for Product Details) */}
        <AnimatePresence>
          {isDetailsOpen && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-background/80 backdrop-blur-lg border-t md:hidden"
            >
              <Button 
                className="w-full h-14 rounded-xl text-lg font-bold shadow-xl shadow-black/10"
                onClick={() => selectedProduct && handleAddToCart(selectedProduct)}
              >
                Add to Cart — ${selectedProduct?.price}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
