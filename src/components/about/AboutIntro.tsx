import { DownloadIcon, ExternalArrowIcon } from './svg/Icons'

function AboutIntro() {
  return (
    <div className="about-intro">
      <h3 className="about-intro-line">
        I’m Chetan, a developer who
        <br />
        turns ideas into <span className="about-highlight">useful products.</span>
      </h3>
      <p className="about-paragraph">
        I enjoy building web apps, exploring new technologies and learning by doing. I like clean
        design, simple solutions and working on projects that solve real problems. Always curious,
        always learning.
      </p>
      <div className="about-actions">
        <a className="hero-cta about-primary-action" href="#about">
          Know More About Me
          <ExternalArrowIcon />
        </a>
        <span className="about-action-divider" aria-hidden="true" />
        <a className="about-resume-action" href="/resume.pdf" download>
          Download Resume
          <DownloadIcon />
        </a>
      </div>
    </div>
  )
}

export default AboutIntro
