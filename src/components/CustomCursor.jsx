import { useRef, useEffect } from 'react';

export default function CustomCursor() {
  const ref = useRef(null);
  const visible = useRef(false);

  useEffect(() => {
    const el = ref.current;

    const onMove = (e) => {
      if (el) {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        if (!visible.current) {
          visible.current = true;
          el.style.opacity = '1';
        }
      }
    };

    const onOver = () => {
      hovering.current = true;
      if (el) el.classList.add('hovering');
    };
    const onOut = () => {
      hovering.current = false;
      if (el) el.classList.remove('hovering');
    };

    // Use event delegation instead of per-element listeners
    const onPointerOver = (e) => {
      if (e.target.closest('a, button, .service-card, .bento-item, .case-study-card')) {
        onOver();
      }
    };
    const onPointerOut = (e) => {
      if (e.target.closest('a, button, .service-card, .bento-item, .case-study-card')) {
        onOut();
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('pointerout', onPointerOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="custom-cursor"
      style={{ opacity: 0 }}
    />
  );
}
