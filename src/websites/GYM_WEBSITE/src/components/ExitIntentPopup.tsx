import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
  }
};

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
}, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass rounded-[2.5rem] overflow-hidden shadow-2xl border-primary/20"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-10 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 neon-glow">
                <Gift className="w-10 h-10 text-black" />
              </div>
              
              <h2 className="text-4xl mb-4">Wait! Don't <span className="text-primary">Quit Yet.</span></h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We noticed you're leaving. Get a <strong>20% Discount</strong> on your first month if you sign up in the next 10 minutes!
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <div className="text-xs font-black uppercase tracking-widest text-primary mb-2">Your Exclusive Code</div>
                <div className="text-3xl font-display font-black tracking-widest">IRON20</div>
              </div>

              <Button 
                onClick={() => setIsVisible(false)}
                className="w-full h-16 rounded-xl bg-[#ccff00] text-[#000000] font-black uppercase tracking-widest text-lg hover:bg-[#d9ff33] neon-glow"
              >
                Claim Discount Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="mt-6 text-xs text-muted-foreground uppercase tracking-widest hover:text-white transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
