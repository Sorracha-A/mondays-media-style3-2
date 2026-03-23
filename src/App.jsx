import './App.css'
import CustomCursor from './components/CustomCursor'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import HowWeWork from './components/HowWeWork'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CurveDivider } from './components/CurveDivider'
import FloatingContactWidget from './components/FloatingContactWidget'

const DARK = '#0A0A0A'
const LIGHT = '#FBF8EF'
const TERRA = '#CC4A1F'

function App() {
  return (
    <>
      {/* Global overlays */}
      <div className="noise-overlay" />
      <ProgressBar />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* 1. Hero (dark bg) */}
      <Hero />

      {/* Marquee (terracotta bg) */}
      <Marquee />

      {/* Transition: terracotta marquee -> light about */}
      <CurveDivider topColor={TERRA} bottomColor={LIGHT} />

      {/* 2. About / Who We Are (light bg) */}
      <About />

      {/* Transition: light about -> dark process */}
      <CurveDivider topColor={LIGHT} bottomColor={DARK} />

      {/* 3. How We Work (dark bg) */}
      <HowWeWork />

      {/* Transition: dark process -> light services */}
      <CurveDivider topColor={DARK} bottomColor={LIGHT} />

      {/* 4. Services (light bg) */}
      <Services />

      {/* Transition: light services -> dark portfolio */}
      <CurveDivider topColor={LIGHT} bottomColor={DARK} />

      {/* 5. Portfolio (dark bg) */}
      <Portfolio />

      {/* Dark marquee */}
      <Marquee dark />

      {/* Transition: dark portfolio/marquee -> light case studies */}
      <CurveDivider topColor={DARK} bottomColor={LIGHT} />

      {/* 6. Case Studies (light bg) */}
      <CaseStudies />

      {/* Transition: light case studies -> dark contact */}
      <CurveDivider topColor={LIGHT} bottomColor={DARK} />

      {/* 7. Contact (dark bg) */}
      <Contact />

      {/* 8. Footer (dark bg) */}
      <Footer />

      {/* Floating contact widget */}
      <FloatingContactWidget />
    </>
  )
}

export default App
