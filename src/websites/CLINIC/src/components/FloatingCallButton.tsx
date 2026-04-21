import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+000000000000"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-clinic-orange text-white rounded-full shadow-2xl flex items-center justify-center"
    >
      <Phone className="w-7 h-7" />
    </motion.a>
  );
};

export default FloatingCallButton;
