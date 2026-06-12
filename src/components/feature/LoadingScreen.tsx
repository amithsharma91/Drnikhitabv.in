import { useEffect, useState, useRef } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const DURATION = 2500;
    const PAUSE_AFTER = 300;
    const startTime = Date.now();
    let rafId: number;

    const logoTimer = setTimeout(() => setLogoVisible(true), 100);
    const barTimer = setTimeout(() => setBarVisible(true), 400);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setPercent(Math.round(eased * 100));

      if (raw < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onCompleteRef.current(), 500);
        }, PAUSE_AFTER);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(barTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center transition-opacity duration-500 ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#FFF8FB' }}
    >
      <div className="flex flex-col items-center gap-10 px-6 w-full max-w-xl mx-auto">
        {/* Logo */}
        <div
          className="transition-all duration-800 ease-out"
          style={{
            width: 'clamp(150px, 40vw, 480px)',
            opacity: logoVisible ? 1 : 0,
            transform: logoVisible ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          <img
            src="https://storage.readdy-site.link/project_files/537556cb-a0de-4c81-8866-d48774229505/968d003d-8f3f-4710-a43e-26ce0ca55ac4_7025-removebg-preview.png"
            alt="Dr. Nikhita B Vadvadgi"
            className="w-full h-auto"
          />
        </div>

        {/* Percentage + Progress Bar */}
        <div
          className="w-full flex flex-col items-center gap-4 transition-all duration-500"
          style={{
            opacity: barVisible ? 1 : 0,
            transform: barVisible ? 'translateY(0)' : 'translateY(6px)',
          }}
        >
          <span className="text-foreground-700 text-lg font-medium tracking-widest font-sans tabular-nums">
            {percent}%
          </span>

          <div
            className="w-full h-[3px] rounded-full overflow-hidden"
            style={{ backgroundColor: '#EAEAEA' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${percent}%`,
                background: 'linear-gradient(90deg, #D88CA5, #A8D8F0)',
                transition: 'width 50ms linear',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
