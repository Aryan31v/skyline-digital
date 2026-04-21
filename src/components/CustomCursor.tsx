import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const rafRef = useRef<number>(0);
  const trailRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const animate = () => {
      trailRef.current = {
        x: trailRef.current.x + (posRef.current.x - trailRef.current.x) * 0.12,
        y: trailRef.current.y + (posRef.current.y - trailRef.current.y) * 0.12,
  };
      setTrail({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(animate);
};
    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
};

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-hover]');
      if (interactive) {
        setIsHovering(true);
        setHoverText(interactive.getAttribute('data-hover') || '');
  } else {
        setIsHovering(false);
        setHoverText('');
  }
};

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
};
}, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-multiply"
        style={{
          left: trail.x,
          top: trail.y,
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
          background: isHovering
            ? 'rgba(14, 165, 233, 0.18)'
            : 'transparent',
          border: `2px solid ${isHovering ? '#0EA5E9' : '#0369A1'}`,
          transition: 'width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease, transform 0.15s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
    }}
      >
        {hoverText && (
          <span className="text-[9px] font-semibold text-sky-600 whitespace-nowrap">
            {hoverText}
          </span>
        )}
      </div>

      <div
        className="fixed pointer-events-none z-[10000] rounded-full bg-sky-500"
        style={{
          left: pos.x,
          top: pos.y,
          width: isClicking ? 6 : 8,
          height: isClicking ? 6 : 8,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.1s, height 0.1s',
    }}
      />
    </>
  );
}
