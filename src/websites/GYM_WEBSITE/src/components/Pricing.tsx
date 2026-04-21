import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const plans = [
  {
    name: "Basic",
    price: "29",
    desc: "Perfect for casual gym-goers looking for quality equipment.",
    features: [
      "Access to all gym equipment",
      "Locker room & showers",
      "Free initial orientation",
      "Mobile app access",
      "24/7 Access"
    ],
    popular: false
},
  {
    name: "Pro",
    price: "59",
    desc: "Our most popular plan for serious fitness enthusiasts.",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 Personal training session/mo",
      "Nutrition consultation",
      "Recovery zone access",
      "Guest passes (2/mo)"
    ],
    popular: true
},
  {
    name: "Elite",
    price: "99",
    desc: "The ultimate package for those who want the absolute best.",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom meal planning",
      "Private locker & laundry",
      "Biometric progress tracking",
      "VIP lounge access"
    ],
    popular: false
}
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Choose Your <span className="text-primary">Plan</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your goals and lifestyle.
          </p>
          
          <div className="mt-8 inline-flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            <Button variant="ghost" className="rounded-full px-6 bg-primary text-black hover:bg-primary/90">Monthly</Button>
            <Button variant="ghost" className="rounded-full px-6 text-white hover:text-primary">Yearly (Save 20%)</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[20px] border transition-all duration-500 ${
                plan.popular 
                  ? 'bg-surface border-primary scale-105 z-10 shadow-[0_0_40px_rgba(204,255,0,0.1)]' 
                  : 'bg-surface border-surface-accent'
          }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black font-black px-4 py-1 text-[10px] uppercase tracking-widest rounded-[2px]">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl mb-2 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className="text-text-dim text-sm">/mo</span>
                </div>
                <p className="mt-4 text-sm text-text-dim leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 ${plan.popular ? 'text-primary' : 'text-text-dim'}`} />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full h-14 rounded-[4px] font-black uppercase tracking-widest transition-all ${
                  plan.popular 
                    ? 'bg-[#ccff00] text-[#000000] hover:bg-[#d9ff33] shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]' 
                    : 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/40 hover:border-white/60'
            }`}
              >
                Get Started
              </Button>
              
              <p className="mt-4 text-center text-[10px] text-muted-foreground uppercase tracking-widest">
                No long-term contracts. Cancel anytime.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Looking for corporate memberships? <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">Contact us for custom pricing.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
