import type { Project } from '../types/project'

// PLACEHOLDER DATA - replace with real projects or backend
export const projects: Project[] = [
  {
    id: 'chatterbox',
    slug: 'chatterbox',
    title: 'chatterBOX',
    accentWord: 'BOX',
    description:
      'A social media web app with posts, comments, likes, follow system and real-time chat.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    cover: {
      src: '/project-cover-placeholder.svg',
      alt: 'Neutral placeholder artwork for the chatterBOX project',
      width: 800,
      height: 600,
    },
    tint: '#fff0f3',
    accent: '#ff2d78',
    projectUrl: 'https://example.com/projects/chatterbox',
    liveUrl: 'https://example.com/live/chatterbox',
    featured: true,
    order: 1,
  },
  {
    id: 'auto-elite',
    slug: 'auto-elite',
    title: 'Auto Elite',
    accentWord: 'Elite',
    description:
      'A car service management system for handling bookings, services and customers.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'Bootstrap'],
    cover: {
      src: '/project-cover-placeholder.svg',
      alt: 'Neutral placeholder artwork for the Auto Elite project',
      width: 800,
      height: 600,
    },
    tint: '#edf4ff',
    accent: '#1e6bff',
    projectUrl: 'https://example.com/projects/auto-elite',
    liveUrl: 'https://example.com/live/auto-elite',
    featured: true,
    order: 2,
  },
  {
    id: 'expense-tracker',
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    accentWord: 'Tracker',
    description:
      'A personal expense tracker app with analytics, authentication and real-time sync.',
    tags: ['Flutter', 'Firebase', 'Dart', 'Google Auth'],
    cover: {
      src: '/project-cover-placeholder.svg',
      alt: 'Neutral placeholder artwork for the Expense Tracker project',
      width: 800,
      height: 600,
    },
    tint: '#f3edff',
    accent: '#7a3cff',
    projectUrl: 'https://example.com/projects/expense-tracker',
    liveUrl: 'https://example.com/live/expense-tracker',
    featured: true,
    order: 3,
  },
]
