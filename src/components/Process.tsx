import { MessageCircle, Palette, Code2, Rocket } from 'lucide-react';
import { ArrowDoodle, StarDoodle, DotsDoodle } from './Doodles';

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Discovery Call',
    description: 'We chat about your business, goals, and what you need from your website. No technical jargon, just a friendly conversation.',
    color: 'bg-sky-500',
    glow: 'shadow-sky-500/30',
},
  {
    num: '02',
    icon: Palette,
    title: 'Design & Plan',
    description: 'We design a custom layout for your brand — colors, fonts, sections — and share it with you for feedback.',
    color: 'bg-amber-500',
    glow: 'shadow-amber-500/30',
},
  {
    num: '03',
    icon: Code2,
    title: 'Build & Develop',
    description: 'Your website comes to life with clean code, fast loading speeds, and mobile-friendly design built in.',
    color: 'bg-cyan-500',
    glow: 'shadow-cyan-500/30',
},
  {
    num: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description: "We review together, make any final tweaks, and launch. We're here for ongoing support whenever you need it.",
    color: 'bg-rose-500',
    glow: 'shadow-rose-500/30',
},
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-20 left-16 animate-float-medium pointer-events-none">
        <ArrowDoodle color="#F59E0B" size={40} className="opacity-40" />
      </div>
      <div className="absolute bottom-24 right-16 animate-float-slow pointer-events-none">
        <StarDoodle color="#0EA5E9" size={30} className="opacity-35" />
      </div>
      <div className="absolute top-1/2 right-12 animate-pulse-soft pointer-events-none">
        <DotsDoodle color="#06B6D4" size={38} className="opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-4 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">
            How It Works
          </span>
          <h2 className="reveal text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            From Idea to Live<br />
            <span className="gradient-text">In 4 Simple Steps</span>
          </h2>
          <p className="reveal delay-100 text-lg text-slate-500 max-w-xl mx-auto">
            A smooth, transparent process with zero stress. We handle everything so you can focus on running your business.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sky-200 via-amber-200 to-cyan-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className={`reveal hover-lift flex flex-col items-center text-center delay-${i * 100}`}>
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-xl ${step.glow} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-3 text-xs font-black text-slate-300">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              );
        })}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-3xl p-10 lg:p-14 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 section-bg-dots opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              Ready to get started?
            </h3>
            <p className="text-sky-100 text-lg mb-8 max-w-md mx-auto">
              Book a free 15-minute call and let's talk about your website. No commitment required.
            </p>
            <a
              href="https://calendar.app.google/uUr6nzLxhRMkAoiK6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-4 rounded-2xl hover:scale-[1.04] transition-all duration-300 shadow-lg"
              data-hover="Book!"
            >
              Book Your Free Call on Google Meet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
