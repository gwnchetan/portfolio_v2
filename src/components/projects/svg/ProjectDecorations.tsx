type SvgProps = {
  className?: string
}

export function Sparkles({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 34 16 7M24 29 39 10M28 42 43 34" />
    </svg>
  )
}

export function CurvedArrow({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 60"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M68 7C45 8 25 20 18 39L14 51m0 0 12-7m-12 7-8-12" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M4 14 14 4M5 4h9v9" />
    </svg>
  )
}

export function BoxPlusIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="12" height="12" rx="1.5" />
      <path d="M9 6v6M6 9h6" />
    </svg>
  )
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M10 3h5v5M15 3 8 10" />
      <path d="M13 10v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  )
}
