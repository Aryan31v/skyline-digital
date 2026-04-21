import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin, Zap, Award, Users } from 'lucide-react';

const usps = [
  {
    title: "24/7 Access",
    desc: "Train on your own schedule. Our facilities are open around the clock for members.",
    icon: Clock
},
  {
    title: "Premium Equipment",
    desc: "The latest machines from Hammer Strength, Rogue, and Life Fitness.",
    icon: Zap
},
  {
    title: "Certified Experts",
    desc: "Every trainer on our floor is certified and has years of transformation experience.",
    icon: Award
},
  {
    title: "Prime Location",
    desc: "Conveniently located in the heart of the city with ample private parking.",
    icon: MapPin
},
  {
    title: "Safe Environment",
    desc: "Highest standards of cleanliness and security for your peace of mind.",
    icon: ShieldCheck
},
  {
    title: "Vibrant Community",
    desc: "Join a network of like-minded individuals who push each other to be better.",
    icon: Users
}
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black opacity-[0.01] whitespace-nowrap select-none pointer-events-none">
        IRON PULSE FITNESS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Why We Are The <br />
              <span className="text-primary">Best In The City</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              We don't just provide space and equipment. We provide the ecosystem required for elite-level transformation. From our atmosphere to our technology, everything is optimized for your performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {usps.map((usp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <usp.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{usp.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{usp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                alt="Gym Interior"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-2xl max-w-[240px] hidden md:block">
              <div className="text-4xl font-display font-black text-primary mb-2">10+</div>
              <div className="text-sm font-bold uppercase tracking-widest leading-tight">Years of Excellence in Fitness</div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
