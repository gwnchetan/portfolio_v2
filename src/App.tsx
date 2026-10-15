import Navbar from './components/Navbar'
import './App.css'
import HeroBackground from './components/HeroBackground'



function App() {
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
      </main>
    </div>
  )
}

export default App
