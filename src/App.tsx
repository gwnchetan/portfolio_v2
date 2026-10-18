import { useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import HeroBackground from './components/HeroBackground'
import AboutSection from './components/about/AboutSection'
import SkillsSection from './components/skills/SkillsSection'
import ProjectsSection from './components/projects/ProjectsSection'
import ContactSection from './components/ContactSection'

function App() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const revealGroups = [
      '.about-heading, .about-intro-area, .about-quicklook-wrap, .about-pillars, .about-beyond',
      '.projects-header, .projects-card',
      '.skills-header, .skill-card, .skills-summary',
      '.contact-info, .contact-form, .site-footer-inner > *',
    ]
    const elements = revealGroups.flatMap((selector) =>
      [...document.querySelectorAll<HTMLElement>(selector)],
    )

    if (elements.length === 0) return

    document.documentElement.classList.add('has-scroll-reveal')
    revealGroups.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.classList.add('scroll-reveal')
        element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 75}ms`)
      })
    })

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-scroll-reveal')
      elements.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return (
    <div className="portfolio-page">
      <Navbar />
      <main className="portfolio-main">
        <section className="hero-section" id="home">
          <HeroBackground />
          <div className="hero-content">
            <div className="hero-title-lockup">
              <p className="hero-script">Hi, I’m</p>
              <h1 className="hero-name">Chetan</h1>
              <svg className="hero-underline" viewBox="0 0 420 28" aria-hidden="true">
                <path d="M 8 20 C 105 7, 254 4, 410 11" />
              </svg>
              <svg className="hero-sparkles" viewBox="0 0 76 60" aria-hidden="true">
                <path d="M 13 29 18 9 M 33 32 48 10 M 49 43 68 36" />
              </svg>
            </div>
            <p className="hero-kicker">
              A DEVELOPER WHO TURNS
              <br />
              IDEAS INTO REAL THINGS.
            </p>
            <p className="hero-description">
              I build web apps, explore new tech and love
              <br />
              creating clean designs and useful products.
            </p>
            <div className="hero-actions">
              <a className="hero-cta" href="#projects">
                Explore My Work
                <svg viewBox="0 0 18 18" aria-hidden="true">
                  <path d="M4 14 14 4M5 4h9v9" />
                </svg>
              </a>
              <a className="hero-scroll-link" href="#about">
                <svg viewBox="0 0 18 32" aria-hidden="true">
                  <path d="M9 2v25m-6-6 6 6 6-6" />
                </svg>
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <i />
            <span>PORTFOLIO 2026</span>
          </div>
        </section>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
