import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
    <section className="section-padding bg-clinic-charcoal text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <KineticText className="text-4xl font-bold mb-4">What Our Patients Say</KineticText>
        <p className="text-white/60 max-w-2xl mx-auto">
          Your health and satisfaction are our greatest achievements. Here's what some of our patients have to say about their experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${star < review.rating ? 'text-clinic-orange-light fill-clinic-orange-light' : 'text-white/20'}`}
                />
              ))}
            </div>
            <KineticText className="text-white/80 italic mb-8 leading-relaxed">
              {`"${review.text}"`}
            </KineticText>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-clinic-green rounded-full flex items-center justify-center font-bold">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
