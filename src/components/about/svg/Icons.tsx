type IconProps = {
  className?: string
}

function IconFrame({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function ExternalArrowIcon() {
  return (
    <IconFrame>
      <path d="M5 19 19 5M8 5h11v11" />
    </IconFrame>
  )
}

export function DownloadIcon() {
  return (
    <IconFrame>
      <path d="M12 3v12m-5-5 5 5 5-5M4 19h16" />
    </IconFrame>
  )
}

export function CornerArrowIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M5 19 19 5M9 5h10v10" />
    </IconFrame>
  )
}

export function MonitorIcon() {
  return (
    <IconFrame>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8m-4-4v4M2 19h4m12 0h4" />
    </IconFrame>
  )
}

export function BulbIcon() {
  return (
    <IconFrame>
      <path d="M8 17c0-2-3-4-3-8a7 7 0 0 1 14 0c0 4-3 6-3 8M9 17h6m-5 3h4m-3 2h2" />
      <path d="M12 1v2M3 9H1m22 0h-2M5 3l2 2m12-2-2 2" />
    </IconFrame>
  )
}

export function BarChartIcon() {
  return (
    <IconFrame>
      <path d="M3 21V12h5v9H3Zm7 0V5h5v16h-5Zm7 0V2h5v19h-5Z" />
    </IconFrame>
  )
}

export function GameIcon() {
  return (
    <IconFrame>
      <path d="M7 8h10a4 4 0 0 1 3.8 2.8l1.1 4.1a2.5 2.5 0 0 1-4.1 2.5l-2.1-1.8H8.3l-2.1 1.8a2.5 2.5 0 0 1-4.1-2.5l1.1-4.1A4 4 0 0 1 7 8Z" />
      <path d="M8 11v4m-2-2h4m6-.5h.1m3 2h.1" />
    </IconFrame>
  )
}

export function LearningIcon() {
  return (
    <IconFrame>
      <path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4V4Zm16 0h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6V4Z" />
    </IconFrame>
  )
}

export function CoffeeIcon() {
  return (
    <IconFrame>
      <path d="M4 9h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Zm13 2h2a2 2 0 1 1 0 4h-2M7 4c0 2 2 2 2 4m4-4c0 2 2 2 2 4" />
    </IconFrame>
  )
}

export function MusicIcon() {
  return (
    <IconFrame>
      <path d="M14 17V4l7-2v13m-7 2c0 2-2 4-5 4s-4-1-4-3 2-3 5-3c2 0 4 1 4 2Zm7-2c0 2-2 4-5 4" />
    </IconFrame>
  )
}

export function PlaneIcon() {
  return (
    <IconFrame>
      <path d="m21 3-7 18-4-8-8-4 19-6Zm-11 10 6-6" />
    </IconFrame>
  )
}

export function CameraIcon() {
  return (
    <IconFrame>
      <path d="M4 7h4l2-2h4l2 2h4a2 2 0 0 1 2 2v10H2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="3.5" />
    </IconFrame>
  )
}
