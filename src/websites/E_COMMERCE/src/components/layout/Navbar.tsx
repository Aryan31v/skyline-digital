import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "../../types";

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onSearch: (query: string) => void;
}

export function Navbar({ cartItems, onOpenCart, onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-6"
  }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                <a href="#" className="text-2xl font-display font-bold">Collections</a>
                <a href="#" className="text-2xl font-display font-bold">New Arrivals</a>
                <a href="#" className="text-2xl font-display font-bold">Best Sellers</a>
                <a href="#" className="text-2xl font-display font-bold">About Us</a>
              </div>
            </SheetContent>
          </Sheet>
          
          <a href="/" className="text-2xl font-display font-bold tracking-widest uppercase">
            ORIZON<span className="text-accent">.</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary/60 transition-colors">Collections</a>
          <a href="#" className="text-sm font-medium hover:text-primary/60 transition-colors">New Arrivals</a>
          <a href="#" className="text-sm font-medium hover:text-primary/60 transition-colors">Best Sellers</a>
          <a href="#" className="text-sm font-medium hover:text-primary/60 transition-colors">About</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <AnimatePresence>
            {isSearchOpen ? (
              <motion.form
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearchSubmit}
                className="relative hidden sm:block"
              >
                <Input
                  autoFocus
                  placeholder="Search products..."
                  className="h-9 pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 h-9 w-9"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
          </AnimatePresence>

          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Heart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={onOpenCart}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
