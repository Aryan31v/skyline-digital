import { CheckCircle2, Heart } from 'lucide-react';
import { SpiralDoodle, HeartDoodle, StarDoodle, WaveDoodle, CircleDoodle } from './Doodles';

const highlights = [
  'Custom designs for every project — never copy-paste templates',
  'Mobile-first & responsive across all screen sizes',
  'SEO optimised to help Google find your site',
  'Fast loading speeds (under 2 seconds)',
  'Ongoing support & maintenance available',
  'Transparent pricing, no hidden fees',
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-br from-slate-50 to-sky-50/40 overflow-hidden">
      <div className="absolute top-16 right-20 animate-spin-reverse pointer-events-none">
        <CircleDoodle color="#0EA5E9" size={44} className="opacity-25" />
      </div>
      <div className="absolute bottom-20 left-16 animate-float-slow pointer-events-none">
        <SpiralDoodle color="#F59E0B" size={46} className="opacity-35" />
      </div>
      <div className="absolute top-1/2 right-8 animate-float-medium pointer-events-none">
        <HeartDoodle color="#EF4444" size={28} className="opacity-30" />
      </div>
      <div className="absolute top-24 left-1/3 animate-wiggle pointer-events-none">
        <StarDoodle color="#06B6D4" size={24} className="opacity-30" />
      </div>
      <div className="absolute bottom-36 right-1/3 animate-float-fast pointer-events-none">
        <WaveDoodle color="#0369A1" size={56} className="opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal-left">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-cyan-100 rounded-[2.5rem] rotate-3 shadow-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-50 rounded-[2.5rem] -rotate-2 shadow-lg" />
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Studio"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent p-6">
                <div className="text-white font-bold text-lg">Our Team</div>
                <div className="text-sky-300 text-sm">Web Design & Development</div>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 shadow-xl animate-float-slow">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-rose-500 fill-rose-500" />
                <div>
                  <div className="text-xs text-slate-500">Passion for</div>
                  <div className="text-sm font-bold text-slate-800">Great Design</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-xl animate-float-medium" style={{ animationDelay: '2s' }}>
              <div className="text-xs text-slate-500">Experience</div>
              <div className="text-xl font-black gradient-text">5+ Years</div>
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-4 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">
            About Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            We Turn Your Vision Into a<br />
            <span className="gradient-text">Website That Works</span>
          </h2>

          <p className="text-slate-500 leading-relaxed mb-4">
            We are a team of passionate web designers and AI automation specialists who love helping businesses grow through beautiful, functional digital solutions.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            We help businesses across multiple industries get online and start attracting customers. Our approach combines clean design with proven conversion strategies and AI efficiency so your website actually grows your business.
          </p>

          <div className="space-y-3 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="btn-glow flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-sky-500/25 hover:scale-[1.03] transition-all"
              data-hover="Say Hi"
            >
              Let's Work Together
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-2xl hover:border-sky-300 hover:text-sky-600 transition-all"
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
