import { useState } from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { StarDoodle, DotsDoodle, PlusDoodle, CircleDoodle } from './Doodles';

const classicFeatures = [
  'Up to 5 custom-designed pages',
  'Fully mobile responsive across all devices',
  'Contact form with email delivery',
  'Basic on-page SEO setup',
  'Fast delivery — 3 to 5 business days',
  '1 round of revisions included',
];

const premiumFeatures = [
  'Everything in Classic',
  'Fully custom design system',
  'Advanced micro-animations & transitions',
  'CRM or third-party API integration',
  'E-commerce or booking system',
  'Copywriting & content strategy support',
  'Priority support & ongoing retainer option',
];

type BudgetKey = 'small' | 'mid' | 'large';

interface BudgetResult {
  title: string;
  body: string;
  cta: string;
  href: string;
  colorClass: string;
}

const budgetResults: Record<BudgetKey, BudgetResult> = {
  small: {
    title: 'Classic is your fit.',
    body: "We'll build you a clean, professional website that gives your business immediate credibility. Designed to look great, load fast, and bring in customers — delivered in days, not months.",
    cta: 'Get a Classic Quote',
    href: '#contact',
    colorClass: 'from-sky-500 to-cyan-500',
  },
  mid: {
    title: "You're in the sweet spot.",
    body: 'You could go Classic with extra features, or kick off a focused Premium project. A quick conversation will make the right path obvious — no pressure, just clarity.',
    cta: "Let's Figure It Out Together",
    href: 'https://wa.me/919227191101',
    colorClass: 'from-sky-500 to-cyan-500',
  },
  large: {
    title: 'Premium is built for you.',
    body: "We'll scope a fully bespoke project: a custom design system, integrations, and a digital presence that matches the scale and ambition of your business.",
    cta: 'Discuss My Premium Project',
    href: 'https://wa.me/919227191101',
    colorClass: 'from-amber-500 to-orange-500',
  },
};

const budgetOptions: { key: BudgetKey; label: string }[] = [
  { key: 'small', label: 'Under $500' },
  { key: 'mid', label: '$500 – $5,000' },
  { key: 'large', label: 'Over $5,000' },
];

export default function Pricing() {
  const [selected, setSelected] = useState<BudgetKey | null>(null);

  return (
    <section id="pricing" className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute top-16 right-20 animate-float-slow pointer-events-none">
        <StarDoodle color="#F59E0B" size={30} className="opacity-35" />
      </div>
      <div className="absolute bottom-28 left-16 animate-pulse-soft pointer-events-none">
        <DotsDoodle color="#0EA5E9" size={38} className="opacity-30" />
      </div>
      <div className="absolute top-1/3 left-8 animate-float-medium pointer-events-none">
        <PlusDoodle color="#06B6D4" size={22} className="opacity-40" />
      </div>
      <div className="absolute bottom-40 right-12 animate-spin-reverse pointer-events-none">
        <CircleDoodle color="#F59E0B" size={44} className="opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-4 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">
            Investment
          </span>
          <h2 className="reveal text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Priced Around<br />
            <span className="gradient-text">Your Goals</span>
          </h2>
          <p className="reveal delay-100 text-lg text-slate-500 max-w-xl mx-auto">
            No rigid menus. No guessing games. Every project is scoped to what your business actually needs and what makes sense for you to invest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="reveal hover-lift rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-md flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-sky-400 to-cyan-400" />
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest uppercase bg-sky-50 text-sky-700 border border-sky-100 rounded-full px-3 py-1">
                  Classic
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Simple. Effective. Fast.</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-7">
                Perfect for local businesses, service providers, and anyone ready to establish a professional online presence that actually brings in customers.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {classicFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={16} className="text-sky-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                <p className="text-xs text-slate-400 mb-0.5">Projects typically start from</p>
                <p className="text-2xl font-black text-slate-800">
                  $500 <span className="text-sm font-medium text-slate-400">and up</span>
                </p>
                <p className="text-xs text-slate-400 mt-1">Final price depends on pages, features, and timeline.</p>
              </div>
              <a
                href="#contact"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300"
                data-hover="Get Quote"
              >
                Get a Classic Quote
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="reveal delay-100 hover-lift rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/20 shadow-2xl shadow-slate-900/20 flex flex-col">
            <div className="h-1.5 bg-gradient-to-r from-amber-400 to-orange-400" />
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full px-3 py-1">
                  <Sparkles size={11} />
                  Premium
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Custom. Powerful. Unforgettable.</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-7">
                For established businesses who want a website that sets them apart from every competitor — not a template, but a digital flagship.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-amber-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 rounded-2xl border border-amber-500/15" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <p className="text-xs text-slate-500 mb-0.5">Investment</p>
                <p className="text-2xl font-black text-white">Scoped to your project</p>
                <p className="text-xs text-slate-500 mt-1">We quote after understanding your exact needs — no surprises.</p>
              </div>
              <a
                href="https://wa.me/919227191101"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300"
                data-hover="Discuss"
              >
                <MessageCircle size={15} />
                Discuss My Project
              </a>
            </div>
          </div>
        </div>

        <div className="reveal bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 section-bg-dots opacity-5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/8 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
                Not sure which fits you?
              </h3>
              <p className="text-slate-400 text-base max-w-md mx-auto">
                Answer one question and we'll point you in the right direction instantly.
              </p>
            </div>

            <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
              What's your rough budget?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              {budgetOptions.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`px-6 py-3 rounded-2xl text-sm font-bold border transition-all duration-300 ${
                    selected === key
                      ? 'bg-white text-slate-900 border-white scale-[1.04] shadow-lg'
                      : 'text-slate-300 border-white/15 hover:text-white hover:border-white/30'
                  }`}
                  style={selected !== key ? { background: 'rgba(255,255,255,0.06)' } : undefined}
                >
                  {label}
                </button>
              ))}
            </div>

            <div
              className={`transition-all duration-500 ease-out ${
                selected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              {selected && (
                <div className="max-w-lg mx-auto text-center rounded-2xl px-8 py-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <h4 className="text-xl font-black text-white mb-3">{budgetResults[selected].title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{budgetResults[selected].body}</p>
                  <a
                    href={budgetResults[selected].href}
                    target={budgetResults[selected].href.startsWith('http') ? '_blank' : undefined}
                    rel={budgetResults[selected].href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`btn-glow inline-flex items-center gap-2 bg-gradient-to-r ${budgetResults[selected].colorClass} text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-300`}
                  >
                    {budgetResults[selected].cta}
                    <ArrowRight size={15} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
