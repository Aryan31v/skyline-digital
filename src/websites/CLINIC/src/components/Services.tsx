import { motion } from 'framer-motion';
import { Stethoscope, Activity, HeartPulse, UserRound, Clock, Calendar, ArrowRight } from 'lucide-react';
const doctorImage = "/websites/CLINIC/src_assets/doctor-final-cropped.png";

const Services = () => {
  const allServices = [
    { icon: Stethoscope, title: "General Consultation", desc: "Comprehensive health checkups and personalized care plans for all ages and conditions." },
    { icon: Activity, title: "Preventive Care", desc: "Regular screenings, vaccinations, and lifestyle guidance to prevent illness before it starts." },
    { icon: HeartPulse, title: "Chronic Disease", desc: "Expert management for diabetes, hypertension, and other long-term health conditions." },
    { icon: UserRound, title: "Family Medicine", desc: "Holistic healthcare solutions tailored for every member of your family, from infants to seniors." },
    { icon: Clock, title: "Emergency Care", desc: "Quick response and urgent medical attention for non-life-threatening critical health needs." },
    { icon: Calendar, title: "Health Education", desc: "Continuous guidance on nutrition, fitness, and wellness to empower your journey to better health." }
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Doctor Image (Left Side) - Restored to Normal Size */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex items-end justify-center min-h-[500px] md:min-h-[850px]"
          >
            <img
              src={doctorImage}
              alt="Doctor Specialist"
              className="w-full h-auto max-h-[850px] object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* Services List (Right Side) */}
          <div className="w-full md:w-1/2 space-y-12">
            <div className="space-y-4">
              <span className="text-clinic-green font-bold text-sm uppercase tracking-widest block">Premium Medical Care</span>
              <h2 className="text-4xl md:text-5xl font-bold text-clinic-charcoal leading-tight">
                Our Healthcare Services
              </h2>
              <p className="text-clinic-charcoal/60 leading-relaxed max-w-lg">
                We provide a wide range of medical services to ensure your family stays healthy and supported through every stage of life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {allServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="w-12 h-12 bg-clinic-green/10 text-clinic-green rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-clinic-green group-hover:text-white">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-clinic-charcoal mb-2">{service.title}</h3>
                  <p className="text-clinic-charcoal/50 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-clinic-green text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
