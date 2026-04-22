import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import KineticText from './common/KineticText';

const Testimonials = () => {
  const reviews = [
    {
      name: "Patient Name",
      role: "Local Resident",
      text: "The doctors at this clinic are extremely professional and caring. I've been visiting them for some time now and the service is always top-notch.",
      rating: 5
    },
    {
      name: "Patient Name",
      role: "Patient",
      text: "Very clean clinic and minimal waiting time. They explain the diagnosis clearly which is very helpful. Highly recommended for family checkups.",
      rating: 5
    },
    {
      name: "Patient Name",
      role: "Patient",
      text: "Compassionate care indeed. The staff is very polite and the treatment I received was excellent.",
      rating: 4
    }
  ];

  return (
    <section className="section-padding bg-clinic-charcoal text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-clinic-green/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <KineticText className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          What Our Patients Say
        </KineticText>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/60 max-w-2xl mx-auto text-lg"
        >
          Your health and satisfaction are our greatest achievements. Here's what some of our patients have to say about their experience.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2 + (i * 0.1),
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            whileHover={{ y: -10 }}
            className="group bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col h-full"
          >
            <div className="mb-8 flex justify-between items-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star < review.rating ? 'text-clinic-orange-light fill-clinic-orange-light' : 'text-white/20'}`}
                  />
                ))}
              </div>
              <Quote className="w-10 h-10 text-white/5 group-hover:text-clinic-green/20 transition-colors duration-500" />
            </div>

            <KineticText className="text-white/90 text-lg italic mb-10 leading-relaxed flex-grow" delay={0.4 + (i * 0.1)}>
              {review.text}
            </KineticText>

            <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
              <div className="w-14 h-14 bg-gradient-to-br from-clinic-green to-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-lg group-hover:text-clinic-green transition-colors">{review.name}</h4>
                <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
