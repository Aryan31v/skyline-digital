import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import KineticText from './common/KineticText';

const Timings = () => {
  const schedule = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ];

  // Repeat schedule to fill the line for continuous loop
  const repeatedSchedule = [...schedule, ...schedule, ...schedule, ...schedule];

  return (
    <section id="timings" className="py-20 bg-clinic-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <KineticText className="text-4xl font-bold mb-4">Clinic Hours</KineticText>
          <p className="text-gray-600">Available throughout the week for your convenience</p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 px-8"
        >
          {repeatedSchedule.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 flex items-center gap-6 p-8 rounded-3xl min-w-[350px] transition-all duration-300 ${item.closed
                  ? 'bg-red-50 text-red-600 border border-red-100'
                  : 'bg-white shadow-xl border border-clinic-green/5'
            }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.closed ? 'bg-red-100' : 'bg-clinic-green/10'}`}>
                <Clock className={item.closed ? 'text-red-600' : 'text-clinic-green'} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">{item.day}</h4>
                <p className={item.closed ? 'font-medium' : 'text-gray-500'}>{item.hours}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-6 flex justify-center">
        <div className="max-w-xl p-6 bg-clinic-green/5 rounded-3xl border border-clinic-green/10 flex gap-4">
          <Clock className="text-clinic-green w-6 h-6 flex-shrink-0" />
          <p className="text-sm text-gray-600 italic">
            * Timings are subject to change on public holidays. We recommend calling us at <span className="font-bold text-clinic-green">+00 00000 00000</span> for confirmation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timings;
