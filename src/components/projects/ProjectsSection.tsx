import ProjectCard from './ProjectCard'
import ProjectCardSkeleton from './ProjectCardSkeleton'
import { useProjects } from '../../hooks/useProjects'
import {
  ArrowIcon,
  CurvedArrow,
  Sparkles,
} from './svg/ProjectDecorations'
import './ProjectsSection.scss'

function ProjectsSection() {
  const { projects, status, refetch } = useProjects()

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="section-container projects-container">
        <header className="projects-header">
          <div className="projects-heading-wrap">
            <h2 className="projects-heading" id="projects-heading">
              <span className="projects-title">Featured</span>
              <span className="projects-script">Projects</span>
            </h2>
            <Sparkles className="projects-heading-sparkles projects-heading-sparkles--left" />
            <Sparkles className="projects-heading-sparkles projects-heading-sparkles--right" />
            <svg
              className="projects-underline"
              viewBox="0 0 220 28"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 21C62 5 148 4 214 12L211 18C130 11 62 17 8 27Z" />
            </svg>
          </div>

          <div className="projects-header-content">
            <div className="projects-intro">
              <h3 className="projects-lead">
                Here are a few projects I've worked on,
                <br />
                turning ideas into{' '}
                <span className="about-highlight projects-highlight">
                  real and usable products.
                </span>
              </h3>
              <p className="projects-copy">
                Each project helped me learn something new, solve
                <br />
                different problems and explore new technologies.
              </p>
            </div>
            <aside className="projects-side-note" aria-label="Different projects, different learnings">
              <p>
                Different
                <br />
                Projects
                <br />
                Different Learnings.
              </p>
              <CurvedArrow className="projects-side-arrow" />
            </aside>
          </div>
        </header>

        {status === 'loading' && (
          <div className="projects-grid" aria-label="Loading projects">
            {Array.from({ length: 3 }, (_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="projects-state" role="alert">
            <p>Couldn't load projects</p>
            <button className="hero-cta projects-retry" type="button" onClick={refetch}>
              Retry
              <ArrowIcon />
            </button>
          </div>
        )}

        {status === 'success' && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {status === 'success' && projects.length === 0 && (
          <p className="projects-state">Projects coming soon</p>
        )}

        {status === 'success' && projects.length > 0 && (
          <footer className="projects-footer">
            <div className="projects-footer-rule" aria-hidden="true" />
            <div className="projects-footer-content">
              <Sparkles className="projects-footer-sparkles" />
              <a
                className="hero-cta projects-footer-button"
                href="#projects"
                aria-label="View all projects"
              >
                View All Projects
                <ArrowIcon />
              </a>
              <aside className="projects-footer-note" aria-hidden="true">
                <p>
                  More
                  <br />
                  Projects
                  <br />
                  Coming Soon...
                </p>
                <CurvedArrow className="projects-footer-arrow" />
              </aside>
            </div>
          </footer>
        )}
      </div>

    </section>
  )
}

export default ProjectsSection
