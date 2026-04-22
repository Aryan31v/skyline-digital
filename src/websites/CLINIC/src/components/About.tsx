import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope } from 'lucide-react';
const aboutImg = "https://clinic-sigma-ten.vercel.app/assets/about-BeJP3txX.png";
import KineticText from './common/KineticText';
import { DOODLE_PATHS } from '../utils/doodlePaths';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Custom Doodles - Balanced Scattering */}
      <FloatingDoodle path={DOODLE_PATHS.KIT} size={140} initialX={80} initialY="10%" scrollRange={[-120, 120]} />
      <FloatingDoodle path={DOODLE_PATHS.THERMOMETER} size={110} initialX={5} initialY="20%" scrollRange={[150, -150]} />
      <FloatingDoodle path={DOODLE_PATHS.DNA} size={160} initialX={90} initialY="60%" scrollRange={[80, -80]} />
      <FloatingDoodle path={DOODLE_PATHS.TOOTH} size={70} initialX={15} initialY="75%" scrollRange={[-100, 100]} />
      <FloatingDoodle path={DOODLE_PATHS.PILL} size={50} initialX={50} initialY="85%" scrollRange={[50, -50]} color="#C2410C" />

      {/* Scattered on other side */}
      <FloatingDoodle path={DOODLE_PATHS.CAPSULE} size={60} initialX={35} initialY="30%" scrollRange={[100, -100]} />
      <FloatingDoodle path={DOODLE_PATHS.BOTTLE} size={90} initialX={65} initialY="45%" scrollRange={[-120, 120]} />
      <FloatingDoodle path={DOODLE_PATHS.HEART_PULSE} size={80} initialX={95} initialY="25%" scrollRange={[60, -60]} color="#C2410C" />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <KineticText className="text-4xl font-bold mb-6">Dedicated to Your Well-being</KineticText>
            <p className="text-gray-600 mb-6 leading-relaxed">
              YOUR CLINIC was founded on the principles of selfless service and medical integrity. Located in the heart of your community, we have become a beacon of trust for hundreds of families.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to provide accessible, high-quality healthcare that doesn't just treat symptoms but cares for the whole person. We believe in building long-term relationships with our patients based on transparency and results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: HeartPulse, title: "Patient First", desc: "Personalized care plans" },
                { icon: Stethoscope, title: "Expert Care", desc: "Experienced professionals" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-clinic-green/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-clinic-green w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-clinic-charcoal">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, -1, 0]
        }}
            transition={{
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Clinic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-clinic-beige rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-clinic-green/10 rounded-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
