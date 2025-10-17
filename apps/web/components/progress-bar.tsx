// components/progress-bar.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Start loading
    setIsVisible(true);
    setProgress(10);

    const timer1 = setTimeout(() => setProgress(30), 100);
    const timer2 = setTimeout(() => setProgress(50), 200);
    const timer3 = setTimeout(() => setProgress(70), 300);
    const timer4 = setTimeout(() => setProgress(90), 400);

    // Complete when route change is done
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 200);
    }, 600);

    return () => {
      [timer1, timer2, timer3, timer4, completeTimer].forEach(clearTimeout);
      setIsVisible(false);
      setProgress(0);
    };
  }, [pathname, searchParams]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-200 ease-out shadow-lg shadow-blue-500/50"
        style={{ width: `${progress}%` }}
      />
      {/* Shimmer effect */}
      <div
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-45 animate-shimmer"
        style={{ left: `${progress - 20}%` }}
      />
    </div>
  );
}
