import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContactWidget() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const buttons = [
    {
      name: 'Phone',
      href: 'tel:0994629391',
      color: '#E91E8C',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25.94l-2.2 2.2z"/>
          {/* Signal waves */}
          <path d="M14.5 2c0 0 3.5 1 5.5 3s3 5.5 3 5.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M14.5 5c0 0 2 .7 3.25 1.95S19.5 10 19.5 10" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'LINE',
      href: 'https://line.me/R/ti/p/@697dnwwy',
      color: '#06C755',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
      ),
    },
    {
      name: 'Messenger',
      href: 'https://m.me/61588122304637',
      color: '#FFFFFF',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#0084FF">
          <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.26 5.887-3.26-6.559 6.763z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="floating-contact-widget">
      {buttons.map((btn, i) => (
        <motion.a
          key={btn.name}
          href={btn.href}
          target={btn.name === 'Phone' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="floating-contact-btn"
          style={{ backgroundColor: btn.color }}
          aria-label={btn.name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {btn.icon}
        </motion.a>
      ))}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="floating-contact-btn floating-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
