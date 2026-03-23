import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import FloatingBlobs from './FloatingBlobs';

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="about-section" id="about" ref={ref}>
      <FloatingBlobs variant="about" />
      <div className="about-container">
        <motion.div
          className="about-image-col"
          variants={fadeInLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="about-image-wrapper">
            <img
              src="/images/about-photo.webp"
              alt="Mondays Media creative visual"
              loading="lazy"
            />
          </div>
          <div className="about-image-accent" />
        </motion.div>

        <motion.div
          className="about-text-col"
          variants={fadeInRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="section-label">
            <span>Who We Are</span>
          </div>

          <h2 className="about-headline">
            We Are Not<br />
            Just A <span className="highlight">Digital</span><br />
            Agency
          </h2>

          <p className="about-description">
            We are a full-service creative powerhouse driven by strategy and fueled by bold ideas.
            At Mondays Media, we transform brands through purposeful marketing that resonates,
            engages, and converts. Not just ads — ideas with impact. From research and insights
            to execution and loyalty, we are your brand's most dedicated partner.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-number">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="about-stat-label">Brands Served</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="about-stat-label">Campaigns</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
