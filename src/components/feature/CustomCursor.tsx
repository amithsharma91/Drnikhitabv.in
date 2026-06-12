import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor="pointer"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor="pointer"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <style>{`
        .custom-cursor { pointer-events: none; position: fixed; z-index: 9999; mix-blend-mode: difference; }
        .cursor-dot { width: 8px; height: 8px; background: white; border-radius: 50%; transition: transform 0.1s ease-out; }
        .cursor-ring { width: 40px; height: 40px; border: 1.5px solid rgba(255,255,255,0.6); border-radius: 50%; transition: transform 0.15s ease-out, width 0.3s ease-out, height 0.3s ease-out, border-color 0.3s ease-out; }
        .cursor-ring.hovering { width: 60px; height: 60px; border-color: rgba(216,140,165,0.8); }
        .cursor-ring.clicking { transform: scale(0.9); }
        .cursor-dot.clicking { transform: scale(1.5); }
        @media (max-width: 767px) { .custom-cursor { display: none !important; } }
        body { cursor: none; }
        @media (max-width: 767px) { body { cursor: auto; } }
      `}</style>
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <div className={`cursor-dot ${isClicking ? 'clicking' : ''}`} />
      </div>
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <div className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`} />
      </div>
    </>
  );
}
