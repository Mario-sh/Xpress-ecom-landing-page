import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

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
    
    // Set target date to 3 days from when the user first visits
    const getTargetDate = () => {
      const stored = localStorage.getItem('xpress_ecom_countdown');
      if (stored) {
        return parseInt(stored, 10);
      }
      const target = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem('xpress_ecom_countdown', target.toString());
      return target;
    };

    const targetDate = getTargetDate();

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null; // Return nothing on server to avoid hydration mismatch
  }

  const timeBlocks = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 mb-8 border rounded-2xl bg-brand-950/30 border-brand-500/20">
      <div className="flex items-center gap-2 mb-4 text-brand-400">
        <Timer className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-semibold tracking-wide uppercase">Fermeture des inscriptions</span>
      </div>
      <div className="flex gap-4 sm:gap-6">
        {timeBlocks.map((block, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-2 rounded-xl bg-gray-900 border border-gray-800 shadow-inner">
              <span className="text-2xl sm:text-3xl font-display font-bold text-gray-100">
                {block.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
