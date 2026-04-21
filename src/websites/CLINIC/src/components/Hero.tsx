import { motion } from 'framer-motion';
import { ArrowRight, Phone, UserRound } from 'lucide-react';
const heroImg = "/websites/CLINIC/src_assets/hero.png";
import FloatingDoodle from './FloatingDoodle';
import { DOODLE_PATHS } from '../utils/doodlePaths';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Custom Doodles - Balanced Scattering */}
      <FloatingDoodle path={DOODLE_PATHS.DNA} size={220} initialX={5} initialY="10%" scrollRange={[-180, 180]} />
      <FloatingDoodle path={DOODLE_PATHS.PILL} size={70} initialX={85} initialY="5%" scrollRange={[120, -120]} />
      <FloatingDoodle path={DOODLE_PATHS.CAPSULE} size={60} initialX={70} initialY={80} scrollRange={[180, -180]} />
      <FloatingDoodle path={DOODLE_PATHS.SCRIBBLE} size={140} initialX={20} initialY="75%" scrollRange={[50, -50]} color="#4A6741" opacity={0.1} />
      <FloatingDoodle path={DOODLE_PATHS.THERMOMETER} size={80} initialX={40} initialY="5%" scrollRange={[-80, 80]} />
      <FloatingDoodle path={DOODLE_PATHS.HEART_PULSE} size={90} initialX={60} initialY="60%" scrollRange={[100, -100]} color="#C2410C" />

      {/* New Balancing Doodles */}
      <FloatingDoodle path={DOODLE_PATHS.KIT} size={110} initialX={95} initialY="30%" scrollRange={[-150, 150]} />
      <FloatingDoodle path={DOODLE_PATHS.BOTTLE} size={90} initialX={10} initialY="50%" scrollRange={[100, -100]} />
      <FloatingDoodle path={DOODLE_PATHS.TOOTH} size={70} initialX={30} initialY="25%" scrollRange={[-80, 80]} />


      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 bg-clinic-cream">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
      }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-clinic-green/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 60, 0]
      }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 -left-20 w-80 h-80 bg-clinic-orange/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 bg-clinic-green/10 text-clinic-green rounded-full text-sm font-semibold mb-6">
            Trusted Healthcare in Your City
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-clinic-charcoal">
            Compassionate Care <br />
            <span className="text-clinic-green italic">You Can Trust</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            At YOUR CLINIC, we combine medical excellence with a warm, community-focused approach to ensure your family's health is in the best hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+000000000000" className="btn-secondary flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }}
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src={heroImg}
              alt="Medical Professional"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Stats - Now bobs like a doodle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
              x: [0, 5, 0]
        }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              delay: 0.5
        }}
            className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-clinic-orange/10 rounded-full flex items-center justify-center">
                <UserRound className="text-clinic-orange w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-clinic-charcoal">5000+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Happy Patients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
