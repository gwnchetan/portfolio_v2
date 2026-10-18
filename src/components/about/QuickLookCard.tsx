import { Asterisk } from './svg/Decorative'
import cardBackground from '../../assets/card.png'
import { portfolioStats } from '../../data/stats'
import './QuickLookCard.scss'

const quickLookStats = [
  { id: 'projects', value: `${portfolioStats.projectsBuilt}+`, label: <>Projects<br />Built</> },
  { id: 'stacks', value: `${portfolioStats.techStacks}+`, label: <>Tech<br />Stacks</> },
  { id: 'learning', value: `${portfolioStats.yearsLearning}+`, label: <>Years<br />Learning</> },
  { id: 'curiosity', value: 'infinity', label: <>Curiosity<br />Always</> },
]

function InfinityIcon() {
  return (
    <svg
      className="quicklook__infinity"
      viewBox="0 0 48 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 12C17 21 12 22 7 19 1 16 2 7 8 5c6-2 11 4 16 7Zm0 0c7-9 12-10 17-7 6 3 5 12-1 14-6 2-11-4-16-7Z" />
    </svg>
  )
}

function QuickLookCard() {
  return (
    <div className="about-quicklook-wrap">
      <div className="quicklook">
        <img
          className="quicklook__bg"
          src={cardBackground}
          aria-hidden="true"
          alt=""
          width={610}
          height={402}
        />

        <div className="quicklook__content">
          <p className="quicklook__label">A QUICK LOOK</p>
          <ul className="quicklook__stats">
            {quickLookStats.map((stat) => (
              <li className="quicklook__stat" key={stat.id}>
                <strong className="quicklook__value">
                  {stat.value === 'infinity' ? <InfinityIcon /> : stat.value}
                </strong>
                <span className="quicklook__description">{stat.label}</span>
              </li>
            ))}
          </ul>
          <Asterisk className="quicklook__asterisk" />
        </div>
      </div>

      <div className="about-card-note-group">
        <svg className="about-card-arrow" viewBox="0 0 90 110" aria-hidden="true">
          <path d="M 40 4 C 6 30, 6 80, 68 95" />
          <path d="M 50 82 L 70 95 L 48 106" />
        </svg>
        <p className="about-card-note">
          Numbers
          <br />
          are just part
          <br />
          of the story...
        </p>
      </div>
    </div>
  )
}

export default QuickLookCard
