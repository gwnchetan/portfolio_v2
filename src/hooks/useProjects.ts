import { useCallback, useEffect, useState } from 'react'
import { projects as placeholderProjects } from '../data/projects'
import type { Project } from '../types/project'

type ProjectsStatus = 'loading' | 'error' | 'success'

function getFeaturedProjects(): Project[] {
  return placeholderProjects
    .filter((project) => project.featured)
    .sort((first, second) => first.order - second.order)
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [status, setStatus] = useState<ProjectsStatus>('loading')

  const refetch = useCallback(() => {
    // Replace this with the API call (and an AbortController) when the backend is available.
  }, [])

  useEffect(() => {
    void Promise.resolve().then(() => {
      setProjects(getFeaturedProjects())
      setStatus('success')
    })
  }, [])

  return { projects, status, refetch }
}
