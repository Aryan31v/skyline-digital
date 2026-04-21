import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dumbbell, Users, Zap, Target, Heart, Trophy } from 'lucide-react';

const programs = [
  {
    title: "Strength Training",
    desc: "Build massive power and muscle with our elite strength programs and equipment.",
    icon: Dumbbell,
    color: "primary"
},
  {
    title: "Group Classes",
    desc: "High-energy sessions led by world-class instructors to keep you motivated.",
    icon: Users,
    color: "secondary"
},
  {
    title: "Personal Coaching",
    desc: "1-on-1 guidance tailored to your specific goals and body composition.",
    icon: Target,
    color: "primary"
},
  {
    title: "HIIT & Cardio",
    desc: "Burn maximum calories and improve endurance with our intense cardio zones.",
    icon: Zap,
    color: "secondary"
},
  {
    title: "Yoga & Recovery",
    desc: "Balance your intensity with mobility, flexibility, and recovery sessions.",
    icon: Heart,
    color: "primary"
},
  {
    title: "Athlete Prep",
    desc: "Specialized training for competitive athletes looking for that extra edge.",
    icon: Trophy,
    color: "secondary"
}
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-4">Our <span className="text-primary">Programs</span></h2>
            <p className="text-muted-foreground">
              We offer a wide range of specialized programs designed to push your limits and help you achieve the results you've always wanted.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8 h-14 font-bold uppercase tracking-widest border-2">
            View All Programs
          </Button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1
          }
        }
      }}
        >
          {programs.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
          }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
          }}
              className="h-full"
            >
              <Card className="group relative overflow-hidden border-surface-accent bg-surface hover:border-primary transition-all duration-500 h-full rounded-xl shadow-lg hover:shadow-primary/10">
                <CardContent className="p-8">
                  <motion.div 
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 ${
                      p.color === 'primary' ? 'bg-primary text-black' : 'bg-white/10 text-white'
                }`}
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <p.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors tracking-tight font-bold">{p.title}</h3>
                  <p className="text-text-dim text-sm mb-8 leading-relaxed">
                    {p.desc}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-white font-bold uppercase tracking-widest group-hover:text-primary transition-colors text-xs">
                    Learn More <Zap className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
                
                {/* Decorative background number */}
                <div className="absolute -bottom-4 -right-4 text-8xl font-display font-black opacity-[0.02] select-none group-hover:opacity-[0.05] transition-opacity">
                  0{i + 1}
                </div>
                
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
