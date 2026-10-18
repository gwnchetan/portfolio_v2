type SvgProps = {
  className?: string
}

type ArrowCurveProps = SvgProps & {
  direction: 'right' | 'up' | 'down'
}

const arrowPaths = {
  right: 'M5 28 C21 8 49 10 65 26 L73 35 M59 35 73 35 70 21',
  up: 'M11 54 C-2 37 5 14 26 7 M20 7 27 7 26 14',
  down: 'M8 5 C28 1 44 12 48 31 L49 43 M40 37 49 44 56 36',
}

export function ArrowCurve({ className, direction }: ArrowCurveProps) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <path d={arrowPaths[direction]} />
    </svg>
  )
}

export function Underline({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 180 24" fill="none" aria-hidden="true">
      <path d="M6 18 C42 5 111 3 173 8" />
      <path d="M23 21 C70 11 125 9 161 10" />
    </svg>
  )
}

export function Sparkles({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 34 16 7M24 29 39 10M28 42 43 34" />
    </svg>
  )
}

export function Asterisk({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d="M21 4v34M4 13l34 16M5 30 37 12" />
    </svg>
  )
}

export function Smiley({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <circle cx="26" cy="26" r="21" />
      <path d="M18 31c2 5 6 8 11 8s9-3 11-8M19 20h.1M33 20h.1" />
    </svg>
  )
}
