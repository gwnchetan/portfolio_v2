export type Project = {
  id: string
  slug: string
  title: string
  accentWord?: string
  description: string
  tags: string[]
  cover: {
    src: string
    alt: string
    width: number
    height: number
  }
  tint: string
  accent: string
  projectUrl?: string
  liveUrl?: string
  featured: boolean
  order: number
}
