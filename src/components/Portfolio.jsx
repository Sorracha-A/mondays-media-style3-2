import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingBlobs from './FloatingBlobs';

const clients = [
  { name: 'Mattress City', logo: '/images/client-logo-mattress-city.webp' },
  { name: 'Balooami', logo: '/images/client-logo-balooami.webp' },
  { name: 'Brow Studio', logo: '/images/client-logo-brow-studio.webp' },
  { name: 'Bangkok Prime Property', logo: '/images/client-logo-bangkok-prime-property.webp', smaller: true },
  { name: 'Cabana Pattaya', logo: '/images/client-logo-cabana.webp', darken: true },
  { name: 'Starita Bangkok', logo: '/images/client-logo-starita.webp' },
  { name: 'Phenomenal Estate', logo: '/images/client-logo-phenomenal-estate.webp', scaleUp: true },
  { name: 'DBT', logo: '/images/client-logo-dbt.webp' },
  { name: 'Tum 20', logo: '/images/client-logo-tum20.webp' },
  { name: '24 BLVD', logo: '/images/client-logo-24blvd-white.webp', invert: true },
];

export default function Portfolio() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="portfolio-section" id="portfolio" style={{ position: 'relative' }}>
      <FloatingBlobs variant="portfolio" />
      <motion.div
        className="section-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-label section-label-light" style={{ justifyContent: 'center' }}>
          <span>Our Clients</span>
        </div>
        <h2>Brands That<br />Trust Us</h2>
        <p>Over 100 brands have partnered with us to elevate their digital presence and drive real results.</p>
      </motion.div>

      <div className="bento-grid">
        {clients.map((client, i) => (
          <motion.div
            className="bento-item"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bento-item-inner">
              <img
                className={`bento-item-logo${client.invert ? ' logo-invert' : ''}${client.smaller ? ' logo-smaller' : ''}${client.darken ? ' logo-darken' : ''}${client.scaleUp ? ' logo-scale-up' : ''}`}
                src={client.logo}
                alt={client.name}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
