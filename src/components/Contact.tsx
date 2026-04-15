import { Mail, Video, Instagram, MessageCircle, Send } from 'lucide-react';
import { StarDoodle, DotsDoodle, PlusDoodle, SparkDoodle, ZigZagDoodle } from './Doodles';

const contactOptions = [
  {
    icon: Video,
    label: 'Book a Meeting',
    subtext: 'Free 15 min Discovery Call',
    href: 'https://calendar.app.google/uUr6nzLxhRMkAoiK6',
    color: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/30',
    cta: 'Schedule Now',
    external: true,
  },
  {
    icon: MessageCircle,
    label: 'Message on WhatsApp',
    subtext: '+91 92271 91101',
    href: 'https://wa.me/919227191101',
    color: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/30',
    cta: 'Message Me',
    external: true,
  },
  {
    icon: Instagram,
    label: 'DM on Instagram',
    subtext: '@the_learner_09',
    href: 'https://www.instagram.com/the_learner_09/',
    color: 'from-rose-500 to-pink-600',
    glow: 'shadow-rose-500/30',
    cta: 'Open Instagram',
    external: true,
  },
  {
    icon: Mail,
    label: 'Send an Email',
    subtext: 'vadhelaryan31@gmail.com',
    href: 'mailto:vadhelaryan31@gmail.com',
    color: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/30',
    cta: 'Send Email',
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-16 right-16 animate-float-slow pointer-events-none">
        <StarDoodle color="#0EA5E9" size={30} className="opacity-35" />
      </div>
      <div className="absolute bottom-24 left-20 animate-pulse-soft pointer-events-none">
        <DotsDoodle color="#06B6D4" size={40} className="opacity-30" />
      </div>
      <div className="absolute top-1/3 left-10 animate-float-medium pointer-events-none">
        <PlusDoodle color="#F59E0B" size={22} className="opacity-40" />
      </div>
      <div className="absolute top-20 left-1/2 animate-float-fast pointer-events-none">
        <SparkDoodle color="#F97316" size={24} className="opacity-30" />
      </div>
      <div className="absolute bottom-36 right-1/3 animate-wiggle pointer-events-none">
        <ZigZagDoodle color="#0EA5E9" size={56} className="opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-4 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">
            Get In Touch
          </span>
          <h2 className="reveal text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Ready to Build Your<br />
            <span className="gradient-text">Dream Website?</span>
          </h2>
          <p className="reveal delay-100 text-lg text-slate-500 max-w-lg mx-auto">
            Choose how you'd like to reach out. I respond quickly and would love to hear about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <a
                key={opt.label}
                href={opt.href}
                target={opt.external ? '_blank' : undefined}
                rel={opt.external ? 'noopener noreferrer' : undefined}
                className={`reveal hover-lift group flex flex-col items-center text-center p-7 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 delay-${i * 100}`}
                data-hover={opt.cta}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${opt.color} flex items-center justify-center mb-5 shadow-xl ${opt.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1">{opt.label}</h3>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">{opt.subtext}</p>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r ${opt.color} bg-clip-text text-transparent`}>
                  {opt.cta}
                  <Send size={10} className="opacity-60" style={{ color: '#0EA5E9' }} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 section-bg-dots opacity-5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle size={20} className="text-sky-400" />
                <span className="text-sky-400 text-sm font-semibold">Quick Message</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">
                Not sure where to start?<br />
                <span className="text-sky-400">Just say hello.</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Tell me a bit about your business and what you're looking for. I'll get back to you with ideas and a quote — usually within a few hours.
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;
                const name = (target.elements.namedItem('name') as HTMLInputElement).value;
                const email = (target.elements.namedItem('email') as HTMLInputElement).value;
                const message = (target.elements.namedItem('message') as HTMLTextAreaElement).value;
                window.location.href = `mailto:vadhelaryan31@gmail.com?subject=Website Enquiry from ${name}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="col-span-1 bg-white/8 border border-white/10 text-white placeholder-slate-500 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="col-span-1 border border-white/10 text-white placeholder-slate-500 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={4}
                required
                className="w-full border border-white/10 text-white placeholder-slate-500 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
              <button
                type="submit"
                className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-sky-500/25 hover:scale-[1.02] hover:shadow-sky-500/40 transition-all duration-300"
              >
                Send Message
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
