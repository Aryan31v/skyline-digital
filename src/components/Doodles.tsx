interface DoodleProps {
  className?: string;
  color?: string;
  size?: number;
}

export function StarDoodle({ className = '', color = '#0EA5E9', size = 40 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 4L22.5 16H35L25 23.5L28.5 36L20 29L11.5 36L15 23.5L5 16H17.5L20 4Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function SparkDoodle({ className = '', color = '#F59E0B', size = 32 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 2V30M2 16H30M7 7L25 25M25 7L7 25" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CircleDoodle({ className = '', color = '#06B6D4', size = 50 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className}>
      <circle cx="25" cy="25" r="20" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="25" cy="25" r="12" stroke={color} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function WaveDoodle({ className = '', color = '#0369A1', size = 80 }: DoodleProps) {
  return (
    <svg width={size} height={size * 0.35} viewBox="0 0 80 28" fill="none" className={className}>
      <path d="M2 14C10 6 18 22 26 14C34 6 42 22 50 14C58 6 66 22 74 14"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ArrowDoodle({ className = '', color = '#F97316', size = 44 }: DoodleProps) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 44 35" fill="none" className={className}>
      <path d="M2 18C12 18 25 10 38 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M30 3L38 8L30 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartDoodle({ className = '', color = '#EF4444', size = 36 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 30C18 30 4 20 4 11C4 7 7 4 11 4C14 4 16.5 6 18 8C19.5 6 22 4 25 4C29 4 32 7 32 11C32 20 18 30 18 30Z"
        stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function TriangleDoodle({ className = '', color = '#06B6D4', size = 38 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" className={className}>
      <path d="M19 4L34 32H4L19 4Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function DotsDoodle({ className = '', color = '#0EA5E9', size = 44 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className={className}>
      {[8, 22, 36].map(cx =>
        [8, 22, 36].map(cy => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill={color} opacity="0.5" />
        ))
      )}
    </svg>
  );
}

export function SpiralDoodle({ className = '', color = '#F59E0B', size = 52 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className={className}>
      <path d="M26 26C26 26 14 22 14 14C14 8 19 6 24 8C30 10 32 17 29 22C26 27 18 28 13 24C8 20 10 12 16 9"
        stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function PlusDoodle({ className = '', color = '#0369A1', size = 28 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <path d="M14 4V24M4 14H24" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ZigZagDoodle({ className = '', color = '#06B6D4', size = 70 }: DoodleProps) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 70 28" fill="none" className={className}>
      <path d="M2 22L14 6L26 22L38 6L50 22L62 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function BracketsDoodle({ className = '', color = '#F97316', size = 50 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className}>
      <path d="M18 8C14 8 12 10 12 14V24C12 28 10 30 6 30C10 30 12 32 12 36V46C12 48 14 50 18 50" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M32 8C36 8 38 10 38 14V24C38 28 40 30 44 30C40 30 38 32 38 36V46C38 48 36 50 32 50" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CloudDoodle({ className = '', color = '#0EA5E9', size = 60 }: DoodleProps) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 60 38" fill="none" className={className}>
      <path d="M12 30C6 30 2 26 2 20C2 14 6.5 10 12 10C12.5 10 13 10 13.5 10.1C15 6 18.5 4 22 4C27 4 31 8 31 13C31.5 13 32 13 32.5 13C38 13 42 17 42 22C42 27 38 30 32.5 30H12Z"
        stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function RocketDoodle({ className = '', color = '#EF4444', size = 44 }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className={className}>
      <path d="M22 4C22 4 36 8 36 22C36 32 28 38 22 40C16 38 8 32 8 22C8 8 22 4 22 4Z" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M18 40L14 44M26 40L30 44" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="20" r="4" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}
