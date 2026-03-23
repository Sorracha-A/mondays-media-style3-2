import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const startTime = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="counter-animate">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
