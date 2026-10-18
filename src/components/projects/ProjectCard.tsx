import type { CSSProperties } from 'react'
import type { Project } from '../../types/project'
import {
  ArrowIcon,
  BoxPlusIcon,
  ExternalLinkIcon,
  Sparkles,
} from './svg/ProjectDecorations'

type ProjectCardProps = {
  project: Project
  index: number
}

type ProjectCardStyle = CSSProperties & {
  '--accent': string
  '--tint': string
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const style: ProjectCardStyle = {
    '--accent': project.accent,
    '--tint': project.tint,
  }
  const accentIndex = project.accentWord
    ? project.title.indexOf(project.accentWord)
    : -1
  const title = accentIndex >= 0 && project.accentWord ? (
    <>
      {project.title.slice(0, accentIndex)}
      <span className="projects-card-accent">
        {project.title.slice(accentIndex, accentIndex + project.accentWord.length)}
      </span>
      {project.title.slice(accentIndex + project.accentWord.length)}
    </>
  ) : (
    project.title
  )

  return (
    <article className="projects-card" style={style}>
      <div className="projects-cover">
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="projects-badge" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Sparkles className="projects-cover-sparkles" />
      </div>

      <h3 className="projects-card-title">{title}</h3>
      <p className="projects-card-description">{project.description}</p>

      <ul className="projects-tags" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => (
          <li className="projects-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>

      {(project.projectUrl || project.liveUrl) && (
        <div className="projects-card-actions">
          {project.projectUrl && (
            <a
              className="hero-cta projects-action"
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
            >
              <BoxPlusIcon />
              <span>View Project</span>
              <ArrowIcon />
            </a>
          )}
          {project.projectUrl && project.liveUrl && (
            <span className="projects-action-divider" aria-hidden="true" />
          )}
          {project.liveUrl && (
            <a
              className="projects-live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
              <ArrowIcon />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
