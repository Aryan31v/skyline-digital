import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: "Viktor Drago",
    specialty: "Strength & Conditioning",
    image: "/websites/GYM_WEBSITE/assets/viktor.png",
    bio: "Former Olympic weightlifter with 15+ years of experience in building elite athletes."
},
  {
    name: "Elena Rossi",
    specialty: "Nutrition & Fat Loss",
    image: "/websites/GYM_WEBSITE/assets/elena.png",
    bio: "Certified nutritionist specializing in sustainable body transformations and metabolic health."
},
  {
    name: "Jaxson Pierce",
    specialty: "HIIT & Mobility",
    image: "/websites/GYM_WEBSITE/assets/jaxson.png",
    bio: "Movement specialist focused on functional fitness and injury prevention for high-intensity training."
}
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Master <span className="text-primary">Coaches</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our trainers aren't just instructors—they are industry leaders dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-4">
                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">{t.specialty}</div>
                <h3 className="text-3xl mb-4">{t.name}</h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-white/70 mb-6 leading-relaxed">
                    {t.bio}
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
