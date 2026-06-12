import { useRef, useEffect, useState, useCallback } from 'react';

export function useMagneticButton(strength = 0.3, radius = 120) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!element || window.innerWidth < 768) return;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < radius) {
      const pull = (1 - distance / radius) * strength;
      positionRef.current = {
        x: distanceX * pull,
        y: distanceY * pull,
      };
    } else {
      positionRef.current = { x: 0, y: 0 };
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      element.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
    });
  }, [strength, radius]);

  const handleMouseLeave = useCallback(() => {
    const element = ref.current;
    if (!element || window.innerWidth < 768) return;
    positionRef.current = { x: 0, y: 0 };
    element.style.transform = 'translate(0, 0)';
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref };
}

export function useStagger(total: number, baseDelay = 0.05, staggerAmount = 0.08) {
  return Array.from({ length: total }, (_, i) => baseDelay + i * staggerAmount);
}

export function useRipple() {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const idRef = useRef(0);

  const triggerRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element || window.innerWidth < 768) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = idRef.current++;
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  return { ref, ripples, triggerRipple };
}
