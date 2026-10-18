export type SkillLogo =
  | 'react'
  | 'next'
  | 'javascript'
  | 'typescript'
  | 'tailwind'
  | 'html'
  | 'css'
  | 'framer'
  | 'vite'
  | 'node'
  | 'express'
  | 'python'
  | 'mongo'
  | 'sql'
  | 'api'
  | 'socket'
  | 'flask'
  | 'dotnet'
  | 'flutter'
  | 'dart'
  | 'firebase'
  | 'android'
  | 'kotlin'
  | 'google'
  | 'git'
  | 'github'
  | 'docker'
  | 'aws'
  | 'linux'
  | 'figma'
  | 'postman'
  | 'vscode'
  | 'notion'

export type Skill = {
  name: string
  logo: SkillLogo
}

export type SkillCategory = {
  id: 'frontend' | 'backend' | 'mobile' | 'tools'
  title: string
  description: string
  tint: string
  shapeVariant: 0 | 1 | 2 | 3
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building user interfaces that feel simple and alive.',
    tint: '#EAF8A6',
    shapeVariant: 0,
    skills: [
      { name: 'React', logo: 'react' },
      { name: 'Next.js', logo: 'next' },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'Tailwind', logo: 'tailwind' },
      { name: 'HTML5', logo: 'html' },
      { name: 'CSS3', logo: 'css' },
      { name: 'Framer Motion', logo: 'framer' },
      { name: 'Vite', logo: 'vite' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Creating reliable APIs and data-driven systems.',
    tint: '#F2F8CF',
    shapeVariant: 1,
    skills: [
      { name: 'Node.js', logo: 'node' },
      { name: 'Express.js', logo: 'express' },
      { name: 'Python', logo: 'python' },
      { name: 'MongoDB', logo: 'mongo' },
      { name: 'SQL Server', logo: 'sql' },
      { name: 'REST API', logo: 'api' },
      { name: 'Socket.IO', logo: 'socket' },
      { name: 'Flask', logo: 'flask' },
      { name: 'ASP.NET', logo: 'dotnet' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Building cross-platform mobile applications.',
    tint: '#E7E8F2',
    shapeVariant: 2,
    skills: [
      { name: 'Flutter', logo: 'flutter' },
      { name: 'Dart', logo: 'dart' },
      { name: 'Firebase', logo: 'firebase' },
      { name: 'Android', logo: 'android' },
      { name: 'Kotlin', logo: 'kotlin' },
      { name: 'Google Auth', logo: 'google' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    description: 'Design, deployment and everyday productivity.',
    tint: '#F6F1DE',
    shapeVariant: 3,
    skills: [
      { name: 'Git', logo: 'git' },
      { name: 'GitHub', logo: 'github' },
      { name: 'Docker', logo: 'docker' },
      { name: 'AWS', logo: 'aws' },
      { name: 'Linux', logo: 'linux' },
      { name: 'Figma', logo: 'figma' },
      { name: 'Postman', logo: 'postman' },
      { name: 'VS Code', logo: 'vscode' },
      { name: 'Notion', logo: 'notion' },
    ],
  },
]

export const technologyCount = new Set(
  skillCategories.flatMap((category) =>
    category.skills.map((skill) => skill.name.trim().toLocaleLowerCase()),
  ),
).size

export const learningPrinciples = ['Build', 'Learn', 'Improve', 'Repeat']
