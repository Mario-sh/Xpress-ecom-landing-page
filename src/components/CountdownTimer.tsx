import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const getTargetDate = () => {
      const stored = localStorage.getItem('xpress_ecom_countdown');
      if (stored) return parseInt(stored, 10);
      const target = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem('xpress_ecom_countdown', target.toString());
      return target;
    };

    const targetDate = getTargetDate();

    const tick = () => {
      const diff = targetDate - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  const blocks = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div
      className="flex flex-col items-center p-5 mb-8 rounded-2xl"
      style={{ background: 'rgba(79,123,255,0.05)', border: '1px solid rgba(79,123,255,0.15)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: '#9CA3AF' }}>
          Fermeture des inscriptions
        </span>
      </div>

      {/* Blocks */}
      <div className="flex items-center gap-2 sm:gap-3">
        {blocks.map((block, i) => (
          <>
            <div key={block.label} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-1.5"
                style={{ background: '#080B14', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: '#4B5563' }}>
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="font-display font-bold text-xl mb-4" style={{ color: 'rgba(79,123,255,0.4)' }}>:</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
