import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface KineticTextProps {
  children: string;
  delay?: number;
  className?: string;
}

const KineticText = ({ children, delay = 0, className = "" }: KineticTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Use chars and lines for better control over the reveal
    const split = new SplitType(textRef.current, { types: 'chars,lines' });

    const ctx = gsap.context(() => {
      gsap.from(split.chars, {
        opacity: 0,
        y: 80,
        rotateX: -45,
        stagger: 0.02,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        delay: delay,
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [children, delay]);

  return (
    <div ref={textRef} className={`perspective-1000 ${className}`} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default KineticText;
