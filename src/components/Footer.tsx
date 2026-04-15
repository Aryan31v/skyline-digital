import { Code2, Mail, MessageCircle, Instagram, Heart, Video } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Video, href: 'https://calendar.app.google/uUr6nzLxhRMkAoiK6', label: 'Book a Meeting' },
  { icon: MessageCircle, href: 'https://wa.me/919227191101', label: 'WhatsApp' },
  { icon: Instagram, href: 'https://www.instagram.com/the_learner_09/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:vadhelaryan31@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Web<span className="text-sky-400">Craft</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building beautiful, high-performing websites that help businesses grow and attract more clients.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 tracking-wide">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/8 rounded-xl flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-sky-500/15 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-5 text-sm text-slate-400">
              <a href="mailto:vadhelaryan31@gmail.com" className="hover:text-sky-400 transition-colors">
                vadhelaryan31@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <span>© {new Date().getFullYear()} WebCraft. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> for great businesses
          </span>
        </div>
      </div>
    </footer>
  );
}
