import SkillCategoryCard from './SkillCategoryCard'
import { learningPrinciples, skillCategories, technologyCount } from './skillsData'
import { portfolioStats } from '../../data/stats'
import './SkillsSection.scss'

function SkillsSection() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <svg
        className="skills-curve"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="skills-curve__path"
          d="M-18 390 C95 382 183 534 318 565 S492 573 560 414 S700 231 828 262 S975 293 1008 357 C1040 451 893 577 727 740 S797 879 1018 918"
        />
        <circle className="skills-curve__node" cx="8" cy="392" r="5" />
        <circle className="skills-curve__node" cx="828" cy="262" r="5" />
        <circle className="skills-curve__node" cx="727" cy="740" r="5" />
        <circle className="skills-curve__node" cx="985" cy="909" r="5" />
      </svg>
      <svg className="skills-summary__star" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 2 28 18 46 24 28 29 24 46 19 29 2 24 19 18 24 2Z" />
      </svg>
      <div className="section-container skills-container">
        <header className="skills-header">
          <div className="skills-heading-wrap">
            <h2 className="skills-title" id="skills-title">
              <span>
                My
                <svg className="skills-heading-crown" viewBox="0 0 48 36" aria-hidden="true">
                  <path d="M3 9 10 27h28l7-18-12 10L24 4l-9 15L3 9Z" />
                  <path d="M11 32h26" />
                </svg>
              </span>
              <span>Toolbox</span>
            </h2>
            <svg className="skills-heading-underline" viewBox="0 0 380 32" aria-hidden="true">
              <path d="M5 23C112 9 258 5 373 13" />
              <path d="M35 29C147 14 266 11 353 17" />
            </svg>
            <p className="skills-heading-note">
              Technologies
              <br />
              I use to build,
              <br />
              learn and grow.
            </p>
          </div>

          <div className="skills-intro-wrap">
            <div className="skills-intro">
              <h3>
                I work with modern technologies to
                <br />
                build <span>real and useful products.</span>
              </h3>
              <p>
                From beautiful user interfaces to powerful backends, mobile apps and cloud
                deployment — here are the main tools and technologies I work with.
              </p>
            </div>
            <p className="skills-side-note">
              Different
              <br />
              Tools.
              <br />
              Different
              <br />
              Possibilities.
            </p>
          </div>
        </header>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <section className="skills-summary" aria-labelledby="skills-summary-title">
          <div className="skills-summary__intro">
            <span className="skills-summary__chart" aria-hidden="true">
              <svg viewBox="0 0 40 40">
                <path d="M5 34h30M9 32V20h6v12m5 0V12h6v20m5 0V5h6v27" />
              </svg>
            </span>
            <h3 id="skills-summary-title">
              Continuous
              <br />
              <span>Learning</span>
              <svg className="skills-summary__learning-arrow" viewBox="0 0 62 30" aria-hidden="true">
                <path d="M3 25C17 25 24 18 34 12S49 5 58 5m-9-3 9 3-5 8" />
              </svg>
            </h3>
            <p>Exploring new technologies and improving my skills every day.</p>
          </div>

          <span className="skills-summary__plus skills-summary__plus--intro" aria-hidden="true">+</span>
          <div className="skills-summary__stats">
            <div className="skills-summary__stat">
              <strong>{technologyCount}+</strong>
              <span>Technologies<br />Worked With</span>
              <svg className="skills-summary__spark" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2v8m0 4v8M2 12h8m4 0h8" />
              </svg>
            </div>
            <div className="skills-summary__stat">
              <strong>{portfolioStats.projectsBuilt}+</strong>
              <span>Major Projects<br />Built</span>
              <svg className="skills-summary__spark" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2v8m0 4v8M2 12h8m4 0h8" />
              </svg>
            </div>
            <div className="skills-summary__stat">
              <strong>{portfolioStats.yearsLearning}+</strong>
              <span>Years<br />Learning &amp; Building</span>
              <svg className="skills-summary__spark" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2v8m0 4v8M2 12h8m4 0h8" />
              </svg>
            </div>
          </div>

          <span className="skills-summary__plus skills-summary__plus--action" aria-hidden="true">+</span>
          <div className="skills-summary__action">
            <p className="skills-summary__note" aria-hidden="true">
              Always learning
              <br />
              Always building
              <br />
              Something better.
            </p>
            <svg className="skills-summary__note-arrow" viewBox="0 0 78 36" aria-hidden="true">
              <path d="M3 4C26 5 45 14 72 29m-14 0 14 0-4-12" />
            </svg>
            <a className="hero-cta skills-summary__link" href="#projects">
              View All Projects
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <path d="M4 14 14 4M5 4h9v9" />
              </svg>
            </a>
          </div>
        </section>

        <ul className="skills-principles" aria-label="My approach">
          {learningPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection
