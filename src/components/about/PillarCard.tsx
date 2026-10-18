import type { ReactNode } from 'react'
import { BarChartIcon, BulbIcon, MonitorIcon, CornerArrowIcon } from './svg/Icons'

type Pillar = {
  title: string
  description: string
  icon: ReactNode
}

const pillars: Pillar[] = [
  {
    title: 'Build',
    description: 'Web apps, useful tools and personal projects that solve real problems.',
    icon: <MonitorIcon />,
  },
  {
    title: 'Explore',
    description: 'New technologies, creative ideas and different ways to build.',
    icon: <BulbIcon />,
  },
  {
    title: 'Improve',
    description: 'Through practice, feedback and real world projects.',
    icon: <BarChartIcon />,
  },
]

function PillarCard({ title, description, icon }: Pillar) {
  return (
    <article className="about-pillar">
      <div className="about-pillar-inner">
        <span className="about-pillar-icon">{icon}</span>
        <CornerArrowIcon className="about-pillar-arrow" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

function PillarGrid() {
  return (
    <div className="about-pillars">
      {pillars.map((pillar) => (
        <PillarCard key={pillar.title} {...pillar} />
      ))}
    </div>
  )
}

export default PillarGrid
