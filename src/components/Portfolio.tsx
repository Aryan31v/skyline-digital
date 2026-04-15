import { ExternalLink, Eye, Sparkles, MessageCircle } from 'lucide-react';
import { CircleDoodle, StarDoodle, ZigZagDoodle } from './Doodles';

const templates = [
  {
    title: 'Restaurant',
    category: 'Restaurant',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-red-500 to-orange-400',
    tags: ['Menu', 'Reservations', 'Gallery'],
    link: 'https://restaurant-tau-blue.vercel.app/',
  },
  {
    title: 'E-commerce',
    category: 'Online Store',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-amber-500 to-yellow-400',
    tags: ['Shop', 'Cart', 'Payments'],
    link: 'https://e-commerce-tau-ruddy.vercel.app/',
  },
  {
    title: 'Corporate',
    category: 'Business',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-sky-600 to-blue-500',
    tags: ['Services', 'Blog', 'CTA'],
    link: 'https://corporate-website-nine-black.vercel.app/',
  },
  {
    title: 'Portfolio',
    category: 'Personal',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-slate-700 to-slate-500',
    tags: ['Projects', 'About', 'Hire Me'],
    link: 'https://portfolio-website-lilac-three-13.vercel.app/',
  },
  {
    title: 'Clinics',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-emerald-500 to-teal-500',
    tags: ['Booking', 'Doctors', 'Services'],
    link: 'https://clinic-sigma-ten.vercel.app/',
  },
  {
    title: 'Fitness',
    category: 'Gym',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-rose-500 to-red-500',
    tags: ['Classes', 'Membership', 'Trainers'],
    link: 'https://gym-website-phi-ecru.vercel.app/',
  },
];

const premiumTemplate = {
  title: 'Luxury Real Estate',
  image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tags: ['Custom Animations', 'Property Search', 'Lead Capture System', 'CRM Integration', 'WhatsApp Widget', '3D Gallery'],
  link: '#',
  description: 'A bespoke digital experience for a high-end real estate brand. Full custom design system, cinematic micro-interactions, and a property search engine built entirely from scratch to convert high-intent buyers.',
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-16 left-12 animate-spin-slow pointer-events-none">
        <CircleDoodle color="#0EA5E9" size={52} className="opacity-30" />
      </div>
      <div className="absolute top-24 right-20 animate-float-fast pointer-events-none">
        <StarDoodle color="#F59E0B" size={28} className="opacity-40" />
      </div>
      <div className="absolute bottom-20 left-1/3 animate-wiggle pointer-events-none">
        <ZigZagDoodle color="#06B6D4" size={64} className="opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-4 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">
            Our Work
          </span>
          <h2 className="reveal text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Real Websites,<br />
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="reveal delay-100 text-lg text-slate-500 max-w-xl mx-auto">
            A selection of websites we've crafted for businesses across different industries. Each one built to convert visitors into paying customers.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-200" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">Classic Builds</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((item, i) => (
            <div
              key={item.title}
              className={`portfolio-card reveal reveal-scale hover-lift group rounded-3xl overflow-hidden bg-white shadow-md border border-slate-100 delay-${(i % 3) * 100}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img w-full h-full object-cover"
                />
                <div className={`card-overlay absolute inset-0 bg-gradient-to-br ${item.color} bg-opacity-90 flex flex-col items-center justify-center gap-4`}>
                  <div className="flex gap-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                    >
                      <Eye size={12} />
                      Preview
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center gap-1.5 bg-white/20 border border-white/40 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white/30 transition-all"
                    >
                      <ExternalLink size={12} />
                      Build Mine
                    </a>
                  </div>
                </div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white text-[10px] font-bold px-3 py-1 rounded-full`}>
                  {item.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium bg-slate-100 text-slate-500 rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 mb-20">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/45 hover:scale-[1.03] transition-all duration-300"
            data-hover="Let's Build"
          >
            Want something like this? Let's build yours
          </a>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-200" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            <Sparkles size={13} className="text-amber-500" />
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Premium Build</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-200" />
        </div>

        <p className="reveal text-center text-slate-500 text-base max-w-xl mx-auto mb-10">
          For businesses ready to invest in a digital experience that operates at a completely different level — fully bespoke, no templates, no compromises.
        </p>

        <div className="reveal portfolio-card group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-slate-900/30">
          <div className="lg:grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={premiumTemplate.image}
                alt={premiumTemplate.title}
                className="card-img w-full h-full object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-gradient-to-br from-amber-600/85 to-orange-500/85 flex items-center justify-center gap-4">
                <a
                  href={premiumTemplate.link}
                  className="flex items-center gap-1.5 bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                >
                  <Eye size={12} />
                  Preview
                </a>
                <a
                  href="https://wa.me/919227191101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white/20 border border-white/40 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <ExternalLink size={12} />
                  Get a Quote
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/70 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                <Sparkles size={9} />
                Premium Tier
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={15} className="text-amber-400" />
                <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">Fully Custom</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">{premiumTemplate.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{premiumTemplate.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {premiumTemplate.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold bg-white/8 text-amber-300 border border-amber-500/20 rounded-full px-3 py-1" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919227191101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/45 hover:scale-[1.03] transition-all duration-300"
                  data-hover="Let's Talk"
                >
                  <MessageCircle size={15} />
                  Discuss This Project
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 border border-white/15 text-slate-300 font-semibold px-6 py-3 rounded-2xl hover:border-amber-500/40 hover:text-amber-300 transition-all duration-300"
                >
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
