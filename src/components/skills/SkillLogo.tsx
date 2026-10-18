import type { SkillLogo as SkillLogoName } from './skillsData'

const logoColors: Record<SkillLogoName, string> = {
  react: '#08b8e8',
  next: '#111111',
  javascript: '#f0c419',
  typescript: '#3178c6',
  tailwind: '#16b9e8',
  html: '#e44d26',
  css: '#1572b6',
  framer: '#a855f7',
  vite: '#7655f6',
  node: '#63a747',
  express: '#171717',
  python: '#3776ab',
  mongo: '#168b45',
  sql: '#e84752',
  api: '#2582db',
  socket: '#111111',
  flask: '#171717',
  dotnet: '#5b50d6',
  flutter: '#12b8ef',
  dart: '#168bd0',
  firebase: '#f4a623',
  android: '#65b741',
  kotlin: '#8454d6',
  google: '#4285f4',
  git: '#f05032',
  github: '#171717',
  docker: '#168bd0',
  aws: '#111111',
  linux: '#111111',
  figma: '#f24e1e',
  postman: '#f36b3f',
  vscode: '#168bd0',
  notion: '#111111',
}

type SkillLogoProps = {
  logo: SkillLogoName
}

function SkillLogo({ logo }: SkillLogoProps) {
  const color = logoColors[logo]
  const svgProps = {
    viewBox: '0 0 48 48',
    className: 'skill-tile__logo',
    style: { color },
    'aria-hidden': true as const,
    focusable: false as const,
  }

  switch (logo) {
    case 'react':
      return (
        <svg {...svgProps}>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="24" cy="24" rx="21" ry="8" />
            <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(120 24 24)" />
          </g>
          <circle cx="24" cy="24" r="3.5" fill="currentColor" />
        </svg>
      )
    case 'next':
      return (
        <svg {...svgProps}>
          <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M17 32V16l14 17M26 16v10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      )
    case 'javascript':
      return (
        <svg {...svgProps}>
          <path d="M7 7h34v34H7z" fill="currentColor" />
          <path d="M20 16v15c0 4-2 6-6 6-3 0-5-1-6-3l4-3c1 1 1 2 2 2s2-1 2-3V16h4Zm8 14c1 2 3 3 5 3 2 0 3-1 3-2 0-2-2-2-5-3-4-1-7-3-7-7 0-4 3-6 8-6 4 0 7 1 9 4l-4 3c-1-2-3-3-5-3-2 0-3 1-3 2 0 2 2 2 5 3 4 1 7 3 7 7s-3 7-9 7c-5 0-8-2-10-5l6-3Z" fill="#111" />
        </svg>
      )
    case 'typescript':
      return (
        <svg {...svgProps}>
          <path d="M7 7h34v34H7z" fill="currentColor" />
          <path d="M10 15h19v5h-7v16h-5V20h-7v-5Zm21 13c1 2 3 3 5 3s3-1 3-2-1-2-4-2c-4-1-6-3-6-6s3-6 7-6c3 0 6 1 8 3l-3 4c-1-1-3-2-5-2-1 0-2 0-2 1 0 2 1 2 4 2 4 1 6 3 6 6 0 4-3 7-8 7-4 0-7-2-9-5l4-3Z" fill="#fff" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...svgProps}>
          <path d="M24 13c-6 0-9.8 3-12 9 2.2-3 4.8-4.1 8-3.5 1.8.3 3.1 1.4 4.5 2.6 2.2 1.9 4.7 4 9.5 4 6 0 9.8-3 12-9-2.2 3-4.8 4.1-8 3.5-1.8-.3-3.1-1.4-4.5-2.6-2.2-1.9-4.7-4-9.5-4ZM12 27c-6 0-9.8 3-12 9 2.2-3 4.8-4.1 8-3.5 1.8.3 3.1 1.4 4.5 2.6 2.2 1.9 4.7 4 9.5 4 6 0 9.8-3 12-9-2.2 3-4.8 4.1-8 3.5-1.8-.3-3.1-1.4-4.5-2.6-2.2-1.9-4.7-4-9.5-4Z" fill="currentColor" transform="translate(4 -5) scale(.85)" />
        </svg>
      )
    case 'html':
    case 'css': {
      const label = logo === 'html' ? '5' : '3'
      return (
        <svg {...svgProps}>
          <path d="m8 5 3 34 13 4 13-4 3-34H8Z" fill="currentColor" />
          {label === '5' ? (
            <path d="M16 12h17v5H21l-.5 4c5-1 11 1 11 7 0 6-4 9-10 9-4 0-7-1-9-4l4-4c1 2 3 3 5 3 3 0 5-1 5-4 0-2-2-3-5-3-2 0-4 0-6 1l1-14Z" fill="#fff" />
          ) : (
            <path d="M15 12h19l-.6 5H20l-.5 5h11l-.8 9-7 3-7-3-.5-6h5l.2 3 2.3 1 2.2-1 .3-2.5H14l1-13.5Z" fill="#fff" />
          )}
        </svg>
      )
    }
    case 'framer':
      return (
        <svg {...svgProps}>
          <path d="M12 8h24v10H24L12 8Zm0 10h12v10H12l12 10H12V18Z" fill="currentColor" />
        </svg>
      )
    case 'vite':
      return (
        <svg {...svgProps}>
          <path d="m4 9 20 35L44 9 27 12l-3-9-4 12-16-6Z" fill="currentColor" />
          <path d="m27 4-11 22h8l-3 13 13-23h-9l2-12Z" fill="#ffe45e" />
        </svg>
      )
    case 'node':
      return (
        <svg {...svgProps}>
          <path d="m24 4 17 10v20L24 44 7 34V14L24 4Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M24 14v20m-8-15 8-5 8 5v10l-8 5-8-5V19Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'express':
      return (
        <svg {...svgProps}>
          <path d="M8 14h29M8 23h23M8 32h29M8 14v18M34 11l5 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'python':
      return (
        <svg {...svgProps}>
          <path d="M24 5c-9 0-10 4-10 9v5h14v3H9c-4 0-6 3-6 8 0 6 3 9 8 9h5v-7c0-4 3-7 7-7h10c4 0 6-3 6-7V14c0-6-5-9-15-9Z" fill="currentColor" opacity=".95" />
          <path d="M24 43c9 0 10-4 10-9v-5H20v-3h19c4 0 6-3 6-8 0-6-3-9-8-9h-5v7c0 4-3 7-7 7H15c-4 0-6 3-6 7v6c0 6 5 9 15 9Z" fill="#ffd343" opacity=".95" transform="translate(0 -3)" />
          <circle cx="20" cy="11" r="1.5" fill="white" />
          <circle cx="29" cy="36" r="1.5" fill="white" />
        </svg>
      )
    case 'mongo':
      return (
        <svg {...svgProps}>
          <path d="M24 4c-8 10-12 17-9 26 2 6 6 9 9 12 3-3 7-6 9-12 3-9-1-16-9-26Z" fill="currentColor" />
          <path d="M24 12v26" stroke="white" strokeWidth="1.5" opacity=".8" />
        </svg>
      )
    case 'sql':
      return (
        <svg {...svgProps}>
          <ellipse cx="24" cy="11" rx="15" ry="6" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M9 11v25c0 3 7 6 15 6s15-3 15-6V11M9 23c0 3 7 6 15 6s15-3 15-6M9 35c0 3 7 6 15 6s15-3 15-6" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
    case 'api':
      return (
        <svg {...svgProps}>
          <path d="M8 13h10m12 0h-6M18 13l6 11m-8 0h10M12 35h7m7 0h10M19 35l5-11" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="7" cy="13" r="4" fill="currentColor" />
          <circle cx="36" cy="13" r="4" fill="currentColor" />
          <circle cx="12" cy="35" r="4" fill="currentColor" />
          <circle cx="36" cy="35" r="4" fill="currentColor" />
        </svg>
      )
    case 'socket':
      return (
        <svg {...svgProps}>
          <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="m26 8-11 18h8l-2 14 12-21h-9l2-11Z" fill="currentColor" />
        </svg>
      )
    case 'flask':
      return (
        <svg {...svgProps}>
          <path d="M18 5h12m-9 0v14L10 36c-2 3 0 6 4 6h20c4 0 6-3 4-6L27 19V5M15 32h18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'dotnet':
      return (
        <svg {...svgProps}>
          <path d="m7 34 11-22h5l-7 14h17l-3 8H7Zm19-22h8l-6 14h-7l5-14Z" fill="currentColor" />
          <circle cx="12" cy="38" r="2.5" fill="currentColor" />
        </svg>
      )
    case 'flutter':
      return (
        <svg {...svgProps}>
          <path d="M27 5h16L19 29l-8-8L27 5Zm0 18h16L27 39l-8-8 8-8Zm-8 8 8 8h16L27 23l-8 8Z" fill="currentColor" />
        </svg>
      )
    case 'dart':
      return (
        <svg {...svgProps}>
          <path d="M7 15 21 5h20v22L25 43 7 25V15Z" fill="currentColor" />
          <path d="M21 5v20h20" fill="none" stroke="white" strokeWidth="2" opacity=".8" />
        </svg>
      )
    case 'firebase':
      return (
        <svg {...svgProps}>
          <path d="m10 36 4-29c.3-2 2.7-2.4 3.5-.5l5 10 4-8c1-2 3.8-1.6 4.1.7L36 36 24 44 10 36Z" fill="currentColor" />
          <path d="m10 36 12-19 4 16 10 3" fill="none" stroke="#ffca28" strokeWidth="2" />
        </svg>
      )
    case 'android':
      return (
        <svg {...svgProps}>
          <path d="m13 8-3-4m25 4 3-4M10 13c0-7 6-10 14-10s14 3 14 10H10Zm0 3h28v16c0 3-3 5-7 5h-2v7h-5v-7h-5v7h-5v-7c-3-1-4-3-4-6V16Z" fill="currentColor" />
          <circle cx="18" cy="9" r="1" fill="white" />
          <circle cx="30" cy="9" r="1" fill="white" />
        </svg>
      )
    case 'kotlin':
      return (
        <svg {...svgProps}>
          <path d="M7 5h34L7 43V5Z" fill="currentColor" />
          <path d="M41 5 7 39v4l18-18 16 18V25L29 13 37 5h4Z" fill="currentColor" opacity=".7" />
          <path d="m29 13 12-8v20L29 13Z" fill="#f88909" />
        </svg>
      )
    case 'google':
      return (
        <svg {...svgProps}>
          <path d="M42 24c0-1.3-.1-2.5-.3-3.7H24v7h10.1a8.7 8.7 0 0 1-3.8 5.7v4.7h6.1C40 34.2 42 29.5 42 24Z" fill="#4285f4" />
          <path d="M24 43c5 0 9.2-1.7 12.3-4.6l-6.1-4.7c-1.7 1.1-3.8 1.8-6.2 1.8-4.8 0-8.8-3.2-10.3-7.5H7.4v4.8A18.6 18.6 0 0 0 24 43Z" fill="#34a853" />
          <path d="M13.7 28a11 11 0 0 1 0-7v-4.8H7.4a18.6 18.6 0 0 0 0 16.6l6.3-4.8Z" fill="#fbbc05" />
          <path d="M24 13.5c2.7 0 5.1.9 7 2.8l5.3-5.3A17.7 17.7 0 0 0 24 6 18.6 18.6 0 0 0 7.4 16.2l6.3 4.8c1.5-4.3 5.5-7.5 10.3-7.5Z" fill="#ea4335" />
        </svg>
      )
    case 'git':
      return (
        <svg {...svgProps}>
          <path d="m22 4-18 18a3 3 0 0 0 0 4l18 18a3 3 0 0 0 4 0l18-18a3 3 0 0 0 0-4L26 4a3 3 0 0 0-4 0Z" fill="currentColor" />
          <path d="m17 17 14 14m-7-7v10m-7-17v6" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="17" cy="17" r="2.5" fill="white" />
          <circle cx="24" cy="34" r="2.5" fill="white" />
          <circle cx="31" cy="31" r="2.5" fill="white" />
        </svg>
      )
    case 'github':
      return (
        <svg {...svgProps}>
          <path d="M24 4a20 20 0 0 0-6.3 39c1 .2 1.3-.4 1.3-.9v-3.4c-5.4 1.2-6.6-2.3-6.6-2.3-.9-2.3-2.2-2.9-2.2-2.9-1.8-1.2.1-1.2.1-1.2 2 .1 3.1 2 3.1 2 1.8 3.1 4.7 2.2 5.8 1.7.2-1.3.7-2.2 1.3-2.7-4.3-.5-8.8-2.2-8.8-9.8 0-2.2.8-4 2-5.4-.2-.5-.9-2.6.2-5.4 0 0 1.7-.5 5.5 2a19 19 0 0 1 10 0c3.8-2.5 5.5-2 5.5-2 1.1 2.8.4 4.9.2 5.4a7.8 7.8 0 0 1 2 5.4c0 7.6-4.5 9.3-8.8 9.8.7.6 1.3 1.7 1.3 3.4v5.4c0 .5.4 1.1 1.3.9A20 20 0 0 0 24 4Z" fill="currentColor" />
        </svg>
      )
    case 'docker':
      return (
        <svg {...svgProps}>
          <g fill="currentColor">
            <path d="M4 22h7v6H4zm9 0h7v6h-7zm9 0h7v6h-7zm-9-8h7v6h-7zm9 0h7v6h-7zm-9-8h7v6h-7zm9 0h7v6h-7z" />
            <path d="M45 20c-2 1-4 1-6 0-1 4-4 7-9 8-7 2-15 0-20-4l-3-3h36l2-1Z" />
          </g>
        </svg>
      )
    case 'aws':
      return (
        <svg {...svgProps}>
          <path d="M8 28c0-7 6-12 13-12 3 0 5 1 7 3 2-4 8-4 11 0 1 1 2 3 2 5 3 1 5 3 5 6 0 4-3 6-7 6H15c-4 0-7-3-7-8Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M9 38c10 5 21 5 31 0m-5-3 6 3-5 4" fill="none" stroke="#f0a51b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'linux':
      return (
        <svg {...svgProps}>
          <ellipse cx="24" cy="24" rx="11" ry="17" fill="currentColor" />
          <ellipse cx="24" cy="25" rx="7" ry="12" fill="#f5c842" />
          <circle cx="20" cy="16" r="1.5" fill="white" />
          <circle cx="28" cy="16" r="1.5" fill="white" />
          <path d="m20 21 4 2 4-2-4 5-4-5Zm-8 11-5 4m29-4 5 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'figma':
      return (
        <svg {...svgProps}>
          <path d="M17 4h7v13h-7a6.5 6.5 0 0 1 0-13Zm7 0h7a6.5 6.5 0 0 1 0 13h-7V4Zm-7 13h7v7a6.5 6.5 0 1 1-7-7Zm7 0h7a6.5 6.5 0 1 1-7 7v-7Zm0 7v7a6.5 6.5 0 1 1 0-13v6Z" fill="currentColor" />
        </svg>
      )
    case 'postman':
      return (
        <svg {...svgProps}>
          <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="m15 33 18-18m-11 10 8 2m-11-8 2 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="33" cy="15" r="3" fill="currentColor" />
        </svg>
      )
    case 'vscode':
      return (
        <svg {...svgProps}>
          <path d="m34 4 9 4v32l-9 4-22-17-5 4-4-3v-8l4-3 5 4L34 4Zm0 9L18 24l16 11V13Z" fill="currentColor" />
        </svg>
      )
    case 'notion':
      return (
        <svg {...svgProps}>
          <path d="M9 7 33 5l7 4v29l-23 3-7-5V7Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M17 33V16l14 17V15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

export default SkillLogo
