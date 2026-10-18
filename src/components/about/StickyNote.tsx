import { Smiley } from './svg/Decorative'
import stickyNoteImage from '../../assets/Neon Scribble Code Note.webp'

function StickyNote() {
  return (
    <aside className="about-sticky">
      <img
        className="about-deco about-deco--sticky"
        src={stickyNoteImage}
        alt=""
        aria-hidden="true"
        width={1318}
        height={1193}
      />
      <ul className="about-sr-only" aria-label="Note reads">
        <li>Code</li>
        <li>Design</li>
        <li>Build</li>
        <li>Explore</li>
        <li>Repeat</li>
      </ul>
      <Smiley className="about-sticky-smiley" />
    </aside>
  )
}

export default StickyNote
