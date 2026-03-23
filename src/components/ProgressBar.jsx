import { useRef, useEffect } from 'react';

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        if (total > 0 && barRef.current) {
          barRef.current.style.transform = `scaleX(${window.scrollY / total})`;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="progress-bar"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
