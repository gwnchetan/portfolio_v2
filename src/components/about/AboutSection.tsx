import AboutHeading from './AboutHeading'
import AboutIntro from './AboutIntro'
import BeyondCode from './BeyondCode'
import PillarGrid from './PillarCard'
import QuickLookCard from './QuickLookCard'
import StickyNote from './StickyNote'
import './AboutSection.scss'

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-container about-container">
        <div className="about-layout">
          <div className="about-left">
            <AboutHeading />
            <QuickLookCard />
          </div>

          <div className="about-right">
            <StickyNote />
            <div className="about-intro-area">
              <AboutIntro />
            </div>
            <PillarGrid />
            <BeyondCode />
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutSection
