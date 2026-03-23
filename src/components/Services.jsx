import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingBlobs from './FloatingBlobs';

const services = [
  {
    num: '01',
    title: 'Branding',
    tags: ['Research + Insights', 'Strategy', 'Design', 'Tone of Voice'],
    image: '/images/service-branding-new.webp',
  },
  {
    num: '02',
    title: 'Content',
    tags: ['Content Pillar', 'Video Pillar', 'Art Work + Caption'],
    image: '/images/service-advertising-new.webp',
  },
  {
    num: '03',
    title: 'Advertising',
    tags: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'TikTok Ads', 'E-commerce', 'SEO'],
    image: '/images/service-influencer-new.webp',
  },
  {
    num: '04',
    title: 'Production',
    tags: ['Studio', 'Pack Shot Photography', 'Video Shooting', 'Website'],
    image: '/images/service-content-new.webp',
  },
  {
    num: '05',
    title: 'Influencer',
    tags: ['Nano', 'Micro', 'Macro', 'Mega Influencers'],
    image: '/images/service-production-new.webp',
  },
];

export default function Services() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="services-section" id="services" style={{ position: 'relative' }}>
      <FloatingBlobs variant="services" />
      <motion.div
        className="services-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-label" style={{ justifyContent: 'center', color: '#CC4A1F' }}>
          <span>What We Do</span>
        </div>
        <h2>Services That<br />Drive Results</h2>
        <p>
          End-to-end marketing solutions tailored to your brand's unique needs.
          From concept to conversion, we have you covered.
        </p>
      </motion.div>

      <div className="services-scroll-container">
        <div className="services-track">
          {services.map((service, i) => (
            <motion.div
              className="service-card"
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <div className="service-card-number">Service {service.num}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <div className="service-card-tags">
                  {service.tags.map((tag, j) => (
                    <span key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
