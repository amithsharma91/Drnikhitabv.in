import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  gap?: number;
}

export default function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  direction = 'left',
  gap = 24,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [duplicates, setDuplicates] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = container.firstElementChild;
    if (!content) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = content.scrollWidth;
    const needed = Math.ceil((containerWidth / contentWidth) * 2) + 1;
    setDuplicates(Math.max(needed, 2));
  }, []);

  const directionStyle = direction === 'left' ? 'normal' : 'reverse';

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex items-center"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: directionStyle,
          animationPlayState: isPaused ? 'paused' : 'running',
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: duplicates * 2 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 flex items-center" style={{ gap: `${gap}px` }}>
            {children}
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}
