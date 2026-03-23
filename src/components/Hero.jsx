import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Warm gradient background from customer assets */}
      <div className="hero-gradient-mesh">
        <img className="hero-bg-image" src="/images/gradient-bg-warm-peach.webp" alt="" fetchPriority="high" />
        <img
          className="mesh-blob mesh-blob-1 mesh-blob-drift-1"
          src="/images/decorative-blob-orange-warm-dark.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <img
          className="mesh-blob mesh-blob-2 mesh-blob-drift-2"
          src="/images/decorative-blob-colorful-dark.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <img
          className="mesh-blob mesh-blob-3 mesh-blob-drift-3"
          src="/images/decorative-blob-gradient-dark.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="hero-content">
        {/* Brand name — v4 layout: MON / DAYS / MEDIA each on own line */}
        <h1 className="hero-brand-name">
          {/* MON — slide from left */}
          <motion.span
            className="hero-line hero-line-mon"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          >
            MON
          </motion.span>
          {/* DAYS — slide from right */}
          <motion.span
            className="hero-line hero-line-days"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
          >
            DAYS
          </motion.span>
          {/* MEDIA — letter-spacing squeeze */}
          <motion.span
            className="hero-line hero-line-media"
            initial={{ opacity: 0, letterSpacing: '40px' }}
            animate={{ opacity: 1, letterSpacing: '20px' }}
            transition={{ delay: 1.0, duration: 1.2, ease: 'easeOut' }}
          >
            MEDIA
          </motion.span>
        </h1>

        {/* Thai subtitle — appear */}
        <motion.p
          className="hero-thai"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          มัน(ส์)เดย์
        </motion.p>

        {/* Tagline — float up */}
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8, ease: 'easeOut' }}
        >
          All-In Marketing. All-Out Creative.
        </motion.p>

        {/* CTA Buttons — float up */}
        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
        >
          <a href="#contact" className="btn-primary">Start Your Project</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
