import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
}
};

  return (
    <section className="h-full w-full text-primary-foreground p-8 flex flex-col justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
      
      <div className="relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tighter">
            JOIN THE <br /><span className="text-primary-foreground/40 italic">INNER CIRCLE.</span>
          </h2>
          <p className="text-xs text-primary-foreground/60 text-balance">
            Get early access to new collections and exclusive offers.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
          >
            <p className="text-sm font-bold">Welcome to the Circle.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <Input
              type="email"
              placeholder="Your email"
              className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-0 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button size="sm" className="w-full h-10 bg-white text-black hover:bg-white/90 rounded-lg font-bold group">
              Subscribe
              <Send className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
