import { Sparkles } from 'lucide-react';

const items = [
  'Business Websites',
  'E-commerce Stores',
  'Restaurant Sites',
  'Portfolio Pages',
  'Healthcare Sites',
  'Fitness & Gyms',
  'Landing Pages',
  'Blog & Content',
  'Real Estate',
  'Photography',
];

export default function Marquee() {
  return (
    <div className="relative py-6 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 overflow-hidden">
      <div className="flex">
        <div className="animate-marquee flex gap-0 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-white text-sm font-semibold px-6">
              <Sparkles size={12} className="text-white/60" />
              {item}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex gap-0 whitespace-nowrap" aria-hidden>
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-white text-sm font-semibold px-6">
              <Sparkles size={12} className="text-white/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
