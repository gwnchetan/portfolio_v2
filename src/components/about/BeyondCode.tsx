import { CameraIcon, CoffeeIcon, GameIcon, LearningIcon, MusicIcon, PlaneIcon } from './svg/Icons'

type PillData = {
  label: string
  icon: React.ReactNode
}

const pills: PillData[] = [
  { label: 'Games', icon: <GameIcon /> },
  { label: 'Learning', icon: <LearningIcon /> },
  { label: 'Coffee', icon: <CoffeeIcon /> },
  { label: 'Music', icon: <MusicIcon /> },
  { label: 'Exploring', icon: <PlaneIcon /> },
  { label: 'Tech & Tools', icon: <CameraIcon /> },
]

function Pill({ label, icon }: PillData) {
  return (
    <li className="about-pill">
      <span className="about-pill-inner">
        {icon}
        <span>{label}</span>
      </span>
    </li>
  )
}

function BeyondCode() {
  return (
    <section className="about-beyond" aria-labelledby="about-beyond-label">
      <h3 className="about-beyond-label" id="about-beyond-label">
        <span className="about-dot" aria-hidden="true" />
        BEYOND CODE
      </h3>
      <ul className="about-pills">
        {pills.map((pill) => (
          <Pill key={pill.label} {...pill} />
        ))}
      </ul>
    </section>
  )
}

export default BeyondCode
