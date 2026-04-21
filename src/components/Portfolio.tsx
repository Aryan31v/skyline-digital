import { ExternalLink, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CircleDoodle, StarDoodle, ZigZagDoodle } from './Doodles';

const templates = [
  {
    path: '/Restaurant',
    title: 'Restaurant',
    category: 'Restaurant',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-red-500 to-orange-400',
    tags: ['Menu', 'Reservations', 'Gallery'],
},
  {
    path: '/Ecommerce',
    title: 'E-commerce',
    category: 'Online Store',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-amber-500 to-yellow-400',
    tags: ['Shop', 'Cart', 'Payments'],
},
  {
    path: '/Corporate',
    title: 'Corporate',
    category: 'Business',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-sky-600 to-blue-500',
    tags: ['Services', 'Blog', 'CTA'],
},
  {
    path: '/Portfolio',
    title: 'Portfolio',
    category: 'Personal',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-slate-700 to-slate-500',
    tags: ['Projects', 'About', 'Hire Me'],
},
  {
    path: '/Clinic',
    title: 'Clinics',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-emerald-500 to-teal-500',
    tags: ['Booking', 'Doctors', 'Services'],
},
  {
    path: '/Gym',
    title: 'Fitness',
    category: 'Gym',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=700',
    color: 'from-rose-500 to-red-500',
    tags: ['Classes', 'Membership', 'Trainers'],
},
];

export default function Portfolio() {
  const navigate = useNavigate();

  const handleDemoNavigation = (path: string) => {
    // Save current scroll position before navigating
    sessionStorage.setItem('homeScrollPos', window.scrollY.toString());
    navigate(path);
  };

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
                    <button
                      onClick={() => handleDemoNavigation(item.path)}
                      className="flex items-center gap-1.5 bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                    >
                      <Eye size={12} />
                      Preview
                    </button>
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

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/45 hover:scale-[1.03] transition-all duration-300"
            data-hover="Let's Build"
          >
            Want something like this? Let's build yours
          </a>
        </div>
      </div>
    </section>
  );
}
