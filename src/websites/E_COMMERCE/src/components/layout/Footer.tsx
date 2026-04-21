import { Twitter, Facebook, Youtube, ArrowUp, Instagram } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 border-t border-white/5">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="/" className="text-3xl font-display font-bold tracking-widest uppercase">
              ORIZON<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Crafting premium digital essentials for the modern lifestyle. 
              Designed with precision, built for performance.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-white transition-all text-primary-foreground/60">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-white transition-all text-primary-foreground/60">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-white transition-all text-primary-foreground/60">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent hover:text-white transition-all text-primary-foreground/60">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold uppercase tracking-widest text-xs text-accent">Collections</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Audio Essentials</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Wearable Tech</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Home Office</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold uppercase tracking-widest text-xs text-accent">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Warranty Info</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold uppercase tracking-widest text-xs text-accent">Our Store</h4>
            <div className="space-y-4">
              <p className="text-sm text-primary-foreground/60">
                123 Innovation Drive<br />
                Tech Valley, CA 94043
              </p>
              <p className="text-sm text-primary-foreground/60">
                hello@orizon.design<br />
                +1 (555) 000-1234
              </p>
              <div className="pt-4">
                <Button variant="outline" className="w-full rounded-xl h-12 font-bold uppercase tracking-widest text-[10px] border-white/10 hover:bg-white/5 text-primary-foreground">
                  Find a Store
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary-foreground/40">
            © 2026 ORIZON DESIGN INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-primary-foreground/40 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-primary-foreground/40 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-primary-foreground/40 hover:text-accent transition-colors">Cookies</a>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 border border-white/10 text-primary-foreground/60 hover:bg-white/5"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
