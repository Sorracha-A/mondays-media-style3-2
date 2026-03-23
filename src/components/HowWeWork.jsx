import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingBlobs from './FloatingBlobs';

const steps = [
  {
    num: '01',
    title: 'Define Your Brand',
    desc: 'Deep-dive research into your market, audience, and competition. We uncover the story your brand was meant to tell.',
  },
  {
    num: '02',
    title: 'Brand Identity',
    desc: 'Crafting a visual and verbal identity that is distinctive, memorable, and authentically yours — from logo to tone of voice.',
  },
  {
    num: '03',
    title: 'Marketing Strategy',
    desc: 'Data-driven strategies tailored to your goals. We map every touchpoint for maximum reach, engagement, and conversion.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Bringing your brand to life across all channels — content, ads, social, influencers, and beyond. Executed with precision.',
  },
  {
    num: '05',
    title: 'Loyalty',
    desc: 'Building lasting relationships between your brand and its community. We turn customers into advocates.',
  },
];

function TimelineStep({ step, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-step ${isLeft ? 'step-left' : 'step-right'}`}
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="timeline-step-content">
        <div className="timeline-step-number">{step.num}</div>
        <h3 className="timeline-step-title">{step.title}</h3>
        <p className="timeline-step-desc">{step.desc}</p>
      </div>
      <div className="timeline-dot" />
      <div className="timeline-spacer" />
    </motion.div>
  );
}

export default function HowWeWork() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="how-section" id="process" style={{ position: 'relative' }}>
      <FloatingBlobs variant="process" />
      <motion.div
        className="section-header"
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-label section-label-light" style={{ justifyContent: 'center' }}>
          <span>Our Process</span>
        </div>
        <h2>The Mondays Media<br />Framework</h2>
        <p>Five proven steps to transform your brand from invisible to unforgettable.</p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line" />
        {steps.map((step, i) => (
          <TimelineStep key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
