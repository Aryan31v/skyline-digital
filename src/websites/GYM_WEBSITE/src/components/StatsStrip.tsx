import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function StatsStrip() {
  return (
    <section className="py-6 container mx-auto px-10">
      <div className="bg-surface border border-surface-accent rounded-[20px] p-8 flex flex-wrap justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-4xl font-black text-primary tracking-tighter">1.2k+</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-text-dim">Active Members</div>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-4xl font-black text-primary tracking-tighter">15</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-text-dim">Pro Trainers</div>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-4xl font-black text-primary tracking-tighter">24/7</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-text-dim">Facility Access</div>
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-8 hidden lg:flex">
          <div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#ffd700] text-[#ffd700]" />
              ))}
            </div>
            <div className="text-xs font-medium text-text-dim">Rated 4.9/5 by our athletes</div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end border-l border-white/10 pl-8">
          <div className="text-[10px] font-black uppercase tracking-widest text-text-dim mb-1">Elite Membership</div>
          <div className="text-2xl font-black text-white tracking-tighter">
            $49<span className="text-xs text-text-dim ml-1">/mo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
