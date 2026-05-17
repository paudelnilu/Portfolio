'use client';

import { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (barRef.current) barRef.current.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed left-0 top-0 z-[9999] h-[2px] w-0 bg-accent transition-[width] duration-100"
    />
  );
}
