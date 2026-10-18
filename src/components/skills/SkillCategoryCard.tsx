import type { Skill, SkillCategory } from './skillsData'
import SkillLogo from './SkillLogo'

const cardShapes = [
  'M5 11 C4 7 8 4 13 5 L87 3 C93 3 97 6 96 11 L98 88 C98 94 94 97 89 96 L12 98 C6 98 3 94 3 89 Z',
  'M4 12 C3 7 7 4 12 5 L89 4 C95 4 97 8 96 13 L97 87 C98 93 94 97 88 96 L10 97 C5 97 3 93 4 87 Z',
  'M6 10 C5 5 9 4 14 4 L88 5 C94 5 97 8 96 13 L98 89 C97 94 94 96 88 95 L11 98 C5 98 3 94 4 88 Z',
  'M5 13 C4 8 8 5 13 5 L86 3 C93 3 97 7 96 12 L97 86 C98 92 95 96 89 96 L13 98 C7 97 3 94 4 88 Z',
] as const

const compactSkillLabels = new Set(['JavaScript', 'TypeScript', 'Express.js', 'Socket.IO'])

type CategoryIconProps = {
  id: SkillCategory['id']
}

function CategoryIcon({ id }: CategoryIconProps) {
  if (id === 'frontend') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="5" width="24" height="18" rx="2" />
        <path d="M11 27h10m-5-4v4" />
      </svg>
    )
  }

  if (id === 'backend') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="5" y="5" width="22" height="8" rx="2" />
        <rect x="5" y="19" width="22" height="8" rx="2" />
        <path d="M10 9h.1M10 23h.1M15 9h7m-7 14h7" />
      </svg>
    )
  }

  if (id === 'mobile') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="9" y="3" width="14" height="26" rx="2" />
        <path d="M14 6h4m-2 19h.1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M19 5a8 8 0 0 0-9 10L4 21a3 3 0 0 0 4 4l6-6a8 8 0 0 0 10-9l-5 5-5-5 5-5Z" />
    </svg>
  )
}

function SkillTile({ name, logo }: Skill) {
  return (
    <li className="skill-tile">
      <SkillLogo logo={logo} />
      <span
        className={[
          'skill-tile__name',
          compactSkillLabels.has(name) && 'skill-tile__name--compact',
          name === 'Framer Motion' && 'skill-tile__name--fit-long',
          name === 'Google Auth' && 'skill-tile__name--fit-medium',
        ].filter(Boolean).join(' ')}
      >
        {name}
      </span>
    </li>
  )
}

type SkillCategoryCardProps = {
  category: SkillCategory
  index: number
}

function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  return (
    <article
      className={`skill-card skill-card--shape-${category.shapeVariant}`}
      data-skill-count={category.skills.length}
    >
      <svg
        className="skill-card__shape"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`skill-card-gradient-${category.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={category.tint} />
            <stop offset="100%" stopColor="#F7F5EC" />
          </linearGradient>
        </defs>
        <path
          className="skill-card__shape-path"
          d={cardShapes[category.shapeVariant]}
          fill={`url(#skill-card-gradient-${category.id})`}
        />
        {category.shapeVariant === 2 && (
          <path
            className="skill-card__shape-highlight"
            d={cardShapes[category.shapeVariant]}
          />
        )}
      </svg>

      <span className="skill-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="skill-card__content">
        <header className="skill-card__header">
          <span className="skill-card__category-icon">
            <CategoryIcon id={category.id} />
          </span>
          <div className="skill-card__heading">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
          <svg className="skill-card__spark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="m8 6 0 10m12-14-3 12m8 1-10 8" />
          </svg>
        </header>

        <ul className="skill-card__tiles" aria-label={`${category.title} skills`}>
          {category.skills.map((skill) => (
            <SkillTile key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
    </article>
  )
}

export default SkillCategoryCard
