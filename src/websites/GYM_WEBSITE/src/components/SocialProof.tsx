import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Member for 2 years",
    content: "The environment here is unmatched. I've been to many gyms, but IronPulse is the only place where the trainers actually care about your progress.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    rating: 5
},
  {
    name: "Sarah Jenkins",
    role: "Weight Loss Program",
    content: "Lost 30lbs in 6 months. The group classes are intense but so rewarding. The community keeps you motivated every single day.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5
},
  {
    name: "Marcus Thorne",
    role: "Athlete",
    content: "Best equipment in the city. If you're serious about your training, this is the only place to be. The recovery zone is a game changer.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5
}
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Real Results. <span className="text-primary">Real People.</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Join thousands of members who have already started their transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-surface border border-surface-accent p-8 rounded-[20px] relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-8 italic text-white/90">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-primary uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Teaser */}
        <div className="mt-20 glass p-1 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                alt="Before"
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Day 1</div>
            </div>
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                alt="After"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black">Day 180</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
