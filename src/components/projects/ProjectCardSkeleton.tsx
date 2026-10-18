function ProjectCardSkeleton() {
  return (
    <article className="projects-card projects-card-skeleton" aria-hidden="true">
      <div className="projects-skeleton-cover" />
      <div className="projects-skeleton-title" />
      <div className="projects-skeleton-description" />
      <div className="projects-skeleton-tags">
        <span />
        <span />
        <span />
      </div>
      <div className="projects-skeleton-actions" />
    </article>
  )
}

export default ProjectCardSkeleton
