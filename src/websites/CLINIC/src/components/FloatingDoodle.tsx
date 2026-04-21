import { motion, useScroll, useTransform, MotionValue, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface FloatingDoodleProps {
  path: string;
  size?: number;
  initialX: number; // Percentage 0-100
  initialY: string; // e.g. "20%"
  scrollRange?: [number, number];
  rotate?: number;
  color?: string;
  opacity?: number;
  strokeWidth?: number;
  doctorX?: MotionValue<number>; // Listen to doctor's position for repulsion
}

const FloatingDoodle = ({
  path,
  size = 64,
  initialX,
  initialY,
  scrollRange = [-100, 100],
  rotate = 0,
  color = "#1F2937",
  opacity = 0.3,
  strokeWidth = 3,
  doctorX
}: FloatingDoodleProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Basic horizontal parallax
  const xBase = useTransform(scrollYProgress, [0, 1], scrollRange);

  // Manual repel offset to ensure it works in real-time
  const repelOffset = useMotionValue(0);
  const smoothRepel = useSpring(repelOffset, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (!doctorX) return;

    return doctorX.on("change", (latestDoctorX) => {
      const distance = initialX - latestDoctorX;
      const range = 25; // Detection range (%)
      const maxForce = 150; // Push force (px)

      if (Math.abs(distance) < range) {
        const factor = (range - Math.abs(distance)) / range;
        repelOffset.set((distance > 0 ? 1 : -1) * factor * maxForce);
  } else {
        repelOffset.set(0);
  }
});
}, [doctorX, initialX, repelOffset]);

  // Combine transforms
  const xCombined = useTransform([xBase, smoothRepel], ([base, repel]) => {
    return (base as number) + (repel as number);
});

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: initialY,
        left: `${initialX}%`,
        x: xCombined,
        rotate: rotate,
        zIndex: 0,
        pointerEvents: 'none'
  }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: opacity }}
      viewport={{ once: true }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          y: [-40, 20, -40], // Significantly increased range
          rotate: [0, 15, -15, 0] // Increased rotation
    }}
        transition={{
          duration: 3 + Math.random() * 2, // Faster loop
          repeat: Infinity,
          ease: "easeInOut"
    }}
      >
        <path d={path} />
      </motion.svg>

    </motion.div>
  );
};

export default FloatingDoodle;
