"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTransition } from "react";

export function ProgressBar() {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition(); // React hook
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    // Start loader
    setIsVisible(true);
    setProgress(20);

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + Math.random() * 5 : prev));
    }, 100);

    // Complete loader after "navigation"
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 200);
    }, 800); // simulate realistic load

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-200 ease-out shadow-lg shadow-blue-500/50"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer"
        style={{ left: `${progress - 20}%` }}
      />
    </div>
  );
}
