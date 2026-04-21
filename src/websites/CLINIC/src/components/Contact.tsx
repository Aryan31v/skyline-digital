import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import FloatingDoodle from './FloatingDoodle';
import { DOODLE_PATHS } from '../utils/doodlePaths';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-clinic-cream relative overflow-hidden">
      {/* Custom Doodles - Balanced Scattering */}
      <FloatingDoodle path={DOODLE_PATHS.TOOTH} size={110} initialX={85} initialY="5%" scrollRange={[-150, 150]} />
      <FloatingDoodle path={DOODLE_PATHS.CAPSULE} size={80} initialX={5} initialY="70%" scrollRange={[120, -120]} />
      <FloatingDoodle path={DOODLE_PATHS.BOTTLE} size={100} initialX={45} initialY="10%" scrollRange={[-80, 80]} />
      <FloatingDoodle path={DOODLE_PATHS.HEART_PULSE} size={90} initialX={15} initialY="25%" scrollRange={[100, -100]} color="#c2410c" />
      <FloatingDoodle path={DOODLE_PATHS.SCRIBBLE} size={250} initialX={30} initialY="50%" scrollRange={[50, -50]} color="#4A6741" opacity={0.1} />
      <FloatingDoodle path={DOODLE_PATHS.KIT} size={100} initialX={70} initialY="75%" scrollRange={[-100, 100]} />

      {/* New Scattering */}
      <FloatingDoodle path={DOODLE_PATHS.PILL} size={50} initialX={20} initialY="15%" scrollRange={[80, -80]} />
      <FloatingDoodle path={DOODLE_PATHS.DNA} size={130} initialX={95} initialY="45%" scrollRange={[-120, 120]} />
      <div className="max-w-7xl mx-auto">
        <div className="bg-clinic-green/5 p-8 md:p-16 rounded-[40px] border border-clinic-green/10 shadow-sm relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-clinic-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-clinic-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-clinic-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      123 Clinic Street, Medical District,<br />
                      City Name, State 000000, Country
                    </p>
                    <p className="text-clinic-orange text-xs font-bold mt-2">Plus Code: XXXX+XX City</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-clinic-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-clinic-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <a href="tel:+000000000000" className="text-gray-600 text-sm hover:text-clinic-green transition-colors">
                      +00 00000 00000
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-clinic-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-clinic-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Emergency</h4>
                    <p className="text-gray-600 text-sm">
                      Available during clinic hours. For after-hours emergencies, please visit the nearest hospital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map Placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-lg h-64 bg-clinic-beige relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <MapPin className="text-clinic-green w-10 h-10 mb-4" />
                  <p className="font-bold text-clinic-charcoal mb-2">Find us on Google Maps</p>
                  <p className="text-xs text-gray-500 mb-4">XXXX+XX City, State</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2 px-6 text-xs"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl shadow-xl border-white"
            >
              <h3 className="text-2xl font-bold mb-8">Book an Appointment</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-clinic-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-clinic-green outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+00 00000 00000"
                      className="w-full bg-clinic-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-clinic-green outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full bg-clinic-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-clinic-green outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message (Optional)</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-clinic-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-clinic-green outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-orange w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
