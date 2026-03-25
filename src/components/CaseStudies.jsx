import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import FloatingBlobs from './FloatingBlobs';

const cases = [
  {
    client: 'Mattress City',
    desc: 'Complete social media overhaul and performance marketing that transformed brand awareness across all digital channels.',
    stats: [
      { numEnd: 120, prefix: '+', suffix: '%', label: 'Reach Growth' },
      { numEnd: 85, prefix: '+', suffix: '%', label: 'Engagement Rate' },
      { numEnd: 60, prefix: '+', suffix: '%', label: 'Video Views Growth' },
    ],
    logo: '/images/client-logo-mattress-city.webp',
  },
  {
    client: 'Brow Studio',
    desc: 'Built a brand from zero followers to a go-to beauty destination through bold visuals, storytelling, and influencer buzz.',
    stats: [
      { numEnd: 1.2, prefix: '', suffix: 'M+', label: 'Content Reach' },
      { numEnd: 85, prefix: '', suffix: 'K+', label: 'Video Views' },
      { numEnd: 3.5, prefix: '', suffix: 'K+', label: 'New Followers' },
    ],
    logo: '/images/client-logo-brow-studio.webp',
  },
  {
    client: 'Bangkok Prime Property',
    desc: 'Integrated digital advertising for premium real estate — driving qualified leads through precision targeting.',
    stats: [
      { numEnd: 403, prefix: '', suffix: 'K+', label: 'Impressions' },
      { numEnd: 17, prefix: '', suffix: 'K+', label: 'High-Intent Clicks' },
      { numEnd: 400, prefix: '', suffix: '+', label: 'Conversions' },
    ],
    logo: '/images/client-logo-bangkok-prime-property.webp',
  },
];

function CaseCard({ caseData, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      className={`case-card-v2 ${isEven ? 'reversed' : ''}`}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo Display Side */}
      <div className="case-visual">
        <div className="case-logo-display">
          <img src={caseData.logo} alt={caseData.client} />
        </div>
      </div>

      {/* Content Side */}
      <div className="case-info">
        <div className="case-info-label">Case Study</div>
        <h3 className="case-info-title">{caseData.client}</h3>
        <p className="case-info-desc">{caseData.desc}</p>

        <div className="case-stats-grid">
          {caseData.stats.map((stat, j) => (
            <div className="case-stat-v2" key={j}>
              <div className="case-stat-v2-value">
                <AnimatedCounter
                  end={stat.numEnd}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1800}
                />
              </div>
              <div className="case-stat-v2-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="casestudies-section" id="cases" style={{ position: 'relative' }}>
      <FloatingBlobs variant="cases" />
      <motion.div
        className="section-header section-header-dark"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-label" style={{ justifyContent: 'center' }}>
          <span>Results</span>
        </div>
        <h2>Case Studies That<br />Speak For Themselves</h2>
        <p>Real brands. Real strategies. Real measurable growth.</p>
      </motion.div>

      {cases.map((c, i) => (
        <CaseCard key={i} caseData={c} index={i} />
      ))}
    </section>
  );
}
