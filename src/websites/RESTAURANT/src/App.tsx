import { motion } from "framer-motion";
import { Utensils, Calendar, MapPin, MessageCircle, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Beef Wellington",
    description: "Prime beef fillet, mushroom duxelles, puff pastry with red wine jus.",
    price: "$48",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Truffle Risotto",
    description: "Wild mushrooms, parmesan reggiano, and fresh black truffle shavings.",
    price: "$32",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Roasted Duck Breast",
    description: "Honey-glazed with cherry reduction and creamy parsnip puree.",
    price: "$42",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Seared Scallops",
    description: "Cauliflower silk, pancetta crisp, and garden herb oil.",
    price: "$36",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80"
  }
];

export default function App({ onBack }) {
  return (
    <>
      <button onClick={onBack} className="fixed top-4 left-4 z-[9999] bg-white/80 backdrop-blur text-black px-4 py-2 rounded-full shadow-lg font-bold border border-black/10 hover:scale-105 transition-transform">← Back to Home</button>
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tighter text-primary uppercase">
            The Gilded Fork
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-primary">
            <Utensils size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" 
            alt="Fine Dining Atmosphere"
            className="w-full h-full object-cover opacity-80 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-primary font-medium tracking-[0.3em] uppercase text-xs mb-6">
              Est. 2012 • Downtown Metropolis
            </span>
            <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter text-white">
              The Gilded Fork <br />
              <span className="italic font-normal text-white/90">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Culinary excellence in every detail. Discover a world of refined flavors and artisanal craft.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-6 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Utensils, label: "View Menu", href: "#menu" },
            { icon: Calendar, label: "Book a Table", href: "#book" },
            { icon: MapPin, label: "Get Directions", href: "#map" }
          ].map((action, idx) => (
            <motion.a
              key={idx}
              href={action.href}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-500"
            >
              <action.icon className="text-primary group-hover:scale-110 transition-transform duration-500" size={32} />
              <span className="uppercase tracking-[0.2em] text-sm font-semibold">{action.label}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-medium tracking-widest uppercase text-xs mb-4 block">Our Selection</span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">Signature Dishes</h2>
            </div>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Our menu is a living tribute to seasonal ingredients, sourced from local artisans and prepared with classical techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-8">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-serif text-xl">{item.price}</span>
                </div>
                <p className="text-white/50 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="group inline-flex items-center gap-4 border border-white/20 px-10 py-5 hover:border-primary hover:text-primary transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              View Full Menu
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 mb-10">
            <Utensils className="text-primary" size={24} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
            A Professional Home for Your Food
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
            The Gilded Fork is more than just a restaurant; it's a celebration of heritage and innovation. Founded in the heart of Metropolis, we take pride in sourcing the finest local ingredients to create seasonal masterpieces that tell a story.
          </p>
          <div className="flex items-center justify-center gap-8 opacity-40">
            <Instagram size={20} />
            <Facebook size={20} />
            <Twitter size={20} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-bold tracking-tighter text-primary mb-6 uppercase">
              The Gilded Fork
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              Experience the art of fine dining where every plate is a canvas and every flavor a memory.
            </p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white/80">Location</h4>
            <p className="text-white/40 text-sm leading-loose">
              123 Culinary Boulevard<br />
              Downtown Metropolis<br />
              United Kingdom
            </p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-white/80">Contact</h4>
            <p className="text-white/40 text-sm leading-loose">
              Phone: +44 20 7946 0958<br />
              Email: reservations@gilded-fork.com<br />
              Social: @gildedfork_dining
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest">
          <p>© 2024 The Gilded Fork. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl shadow-green-500/20 group"
        >
          <MessageCircle size={24} />
          <span className="font-bold text-sm hidden md:inline">Contact on WhatsApp</span>
        </motion.a>
      </div>
    </div>
    </>
  );
}
