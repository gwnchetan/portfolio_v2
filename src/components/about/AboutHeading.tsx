import { Sparkles, Underline } from './svg/Decorative'

function AboutHeading() {
  return (
    <div className="about-heading">
      <div className="about-heading-lockup">
        <h2 className="about-title" id="about-title">
          About
        </h2>
        <Sparkles className="about-sparkles about-sparkles--left" />
        <Sparkles className="about-sparkles about-sparkles--right" />
        <p className="about-me">Me</p>
        <Underline className="about-underline" />
      </div>
      <p className="about-note">
        Same
        <br />
        Curiosity
        <br />
        Different
        <br />
        Ideas.
      </p>
    </div>
  )
}

export default AboutHeading
