import { ShoppingBag, Utensils, Briefcase, User, Stethoscope, Dumbbell, ArrowRight } from 'lucide-react';
import { StarDoodle, WaveDoodle, PlusDoodle, SparkDoodle } from './Doodles';

const services = [
  {
    icon: Briefcase,
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and generate leads for your business.',
    color: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    tag: 'Most Popular',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Stores',
    description: 'Fully functional online stores with payment integration to sell products worldwide.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    tag: '',
  },
  {
    icon: Utensils,
    title: 'Restaurant & Cafe',
    description: 'Mouth-watering websites with menus, reservations, and online ordering.',
    color: 'from-red-500 to-rose-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
    tag: '',
  },
  {
    icon: User,
    title: 'Portfolio & Creative',
    description: 'Stunning portfolios that showcase your work and attract top-tier clients.',
    color: 'from-cyan-500 to-teal-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    tag: '',
  },
  {
    icon: Stethoscope,
    title: 'Clinics & Healthcare',
    description: 'Clean, trustworthy websites for medical practices with appointment booking.',
    color: 'from-emerald-500 to-green-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    tag: '',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    description: 'High-energy websites for gyms, trainers and wellness studios.',
    color: 'from-slate-700 to-slate-900',
    bg: 'bg-slate-50',
    border: 'border-slate-100',
    tag: '',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-12 right-16 animate-float-slow pointer-events-none">
        <StarDoodle color="#0EA5E9" size={32} className="opacity-40" />
      </div>
      <div className="absolute bottom-16 left-20 animate-wiggle pointer-events-none">
        <WaveDoodle color="#F59E0B" size={64} className="opacity-35" />
      </div>
      <div className="absolute top-1/2 left-8 animate-float-medium pointer-events-none">
        <PlusDoodle color="#06B6D4" size={22} className="opacity-40" />
      </div>
      <div className="absolute bottom-32 right-24 animate-float-fast pointer-events-none">
        <SparkDoodle color="#F97316" size={26} className="opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-4 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">
            What We Build
          </span>
          <h2 className="reveal text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Every Business Deserves a<br />
            <span className="gradient-text">Great Website</span>
          </h2>
          <p className="reveal delay-100 text-lg text-slate-500 max-w-xl mx-auto">
            From local shops to growing companies — we craft websites tailored to your specific industry and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal hover-lift group relative ${service.bg} border ${service.border} rounded-3xl p-7 delay-${(i % 4) * 100}`}
              >
                {service.tag && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold bg-sky-500 text-white rounded-full px-2.5 py-1">
                    {service.tag}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 group/link"
                >
                  Get started
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
