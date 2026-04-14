import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  StarDoodle, SparkDoodle, CircleDoodle, WaveDoodle,
  ArrowDoodle, DotsDoodle, PlusDoodle, ZigZagDoodle,
  BracketsDoodle, RocketDoodle, CloudDoodle
} from './Doodles';

const TYPING_WORDS = ['Restaurants', 'Online Stores', 'Clinics', 'Gyms', 'Agencies', 'Portfolios'];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  const parallax = (strength: number) => ({
    transform: `translate(${mousePos.x * strength}px, ${mousePos.y * strength}px)`,
    transition: 'transform 0.3s ease-out',
  });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/50 to-cyan-50/30"
    >
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl animate-blob pointer-events-none"
        style={parallax(-18)}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-blob pointer-events-none"
        style={{ ...parallax(14), animationDelay: '3s' }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-100/50 rounded-full blur-2xl animate-blob pointer-events-none"
        style={{ ...parallax(-10), animationDelay: '6s' }}
      />

      <div className="absolute inset-0 section-bg-dots opacity-60 pointer-events-none" />

      <div className="absolute top-24 left-8 animate-float-slow pointer-events-none" style={parallax(20)}>
        <StarDoodle color="#0EA5E9" size={36} />
      </div>
      <div className="absolute top-32 right-16 animate-float-medium pointer-events-none" style={parallax(-15)}>
        <SparkDoodle color="#F59E0B" size={28} />
      </div>
      <div className="absolute top-16 left-1/3 animate-spin-slow pointer-events-none" style={parallax(12)}>
        <CircleDoodle color="#06B6D4" size={48} />
      </div>
      <div className="absolute bottom-32 left-16 animate-float-fast pointer-events-none" style={parallax(22)}>
        <WaveDoodle color="#0369A1" size={70} />
      </div>
      <div className="absolute bottom-48 right-12 animate-wiggle pointer-events-none" style={parallax(-18)}>
        <BracketsDoodle color="#F97316" size={42} />
      </div>
      <div className="absolute top-1/2 right-8 animate-float-slow pointer-events-none" style={parallax(16)}>
        <DotsDoodle color="#0EA5E9" size={40} />
      </div>
      <div className="absolute top-1/3 left-6 animate-float-medium pointer-events-none" style={parallax(-20)}>
        <PlusDoodle color="#0369A1" size={24} />
      </div>
      <div className="absolute bottom-24 left-1/3 animate-bounce-soft pointer-events-none" style={parallax(10)}>
        <ZigZagDoodle color="#06B6D4" size={60} />
      </div>
      <div className="absolute top-20 right-1/3 animate-float-fast pointer-events-none" style={parallax(-12)}>
        <RocketDoodle color="#EF4444" size={36} />
      </div>
      <div className="absolute bottom-40 right-1/3 animate-float-slow pointer-events-none" style={parallax(18)}>
        <CloudDoodle color="#0EA5E9" size={52} />
      </div>
      <div className="absolute top-40 left-1/4 animate-float-medium pointer-events-none" style={parallax(-8)}>
        <ArrowDoodle color="#F97316" size={38} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 bg-white/80 border border-sky-100 rounded-full px-4 py-2 text-xs font-semibold text-sky-600 mb-8 shadow-sm"
            style={parallax(5)}
          >
            <Sparkles size={12} className="text-amber-400" />
            Professional Web Design Studio
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.08] tracking-tight mb-6">
            Websites That<br />
            <span className="gradient-text">Win Clients</span><br />
            <span className="text-slate-400 font-light text-4xl lg:text-5xl">for</span>{' '}
            <span className="gradient-text-warm relative">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
            I build stunning, fast, and conversion-focused websites that make your business stand out and attract more customers — guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendar.google.com/calendar/r/eventedit?text=Website+Discovery+Call&details=Let%27s+discuss+your+website+project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-7 py-4 rounded-2xl shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.03] transition-all duration-300"
              data-hover="Book Call"
            >
              Book a Free Call
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="group flex items-center justify-center gap-2.5 bg-white/80 border border-slate-200 text-slate-700 font-semibold px-7 py-4 rounded-2xl hover:border-sky-300 hover:text-sky-600 hover:bg-sky-50/50 transition-all duration-300"
              data-hover="See Work"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12">
            {[
              { num: '50+', label: 'Websites Built' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '3 Days', label: 'Avg. Delivery' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black gradient-text">{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block" style={parallax(-8)}>
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-cyan-50 rounded-[3rem] rotate-6 shadow-2xl" />
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl overflow-hidden">
                <div className="h-8 bg-slate-100 flex items-center gap-1.5 px-4">
                  {['bg-red-400', 'bg-amber-400', 'bg-green-400'].map((c, i) => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                  <div className="flex-1 mx-4 h-3 bg-slate-200 rounded-full" />
                </div>
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Website design preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-xl animate-float-slow">
              <div className="text-xs font-semibold text-slate-500 mb-1">New Project</div>
              <div className="text-sm font-bold text-slate-800">Cafe Website Live!</div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xs">★</span>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl animate-float-medium" style={{ animationDelay: '1.5s' }}>
              <div className="text-xs text-slate-500">Delivery time</div>
              <div className="text-lg font-black gradient-text">3 Days</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
