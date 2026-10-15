import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import './HeroBackground.scss'

gsap.registerPlugin(MotionPathPlugin)

function getPathProgressAtPoint(path: SVGPathElement, x: number, y: number) {
  const length = path.getTotalLength()
  const samples = Math.ceil(length / 2)
  let closestDistance = Number.POSITIVE_INFINITY
  let closestProgress = 0

  for (let index = 0; index <= samples; index += 1) {
    const progress = index / samples
    const point = path.getPointAtLength(length * progress)
    const distance = (point.x - x) ** 2 + (point.y - y) ** 2

    if (distance < closestDistance) {
      closestDistance = distance
      closestProgress = progress
    }
  }

  return closestProgress
}

export default function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const mainPathRef = useRef<SVGPathElement>(null)
  const upperPathRef = useRef<SVGPathElement>(null)
  const cleanPathRef = useRef<SVGPathElement>(null)
  const usefulPathRef = useRef<SVGPathElement>(null)
  const arrowHeadRef = useRef<SVGPathElement>(null)
  const mainDotRef = useRef<SVGCircleElement>(null)
  const upperDotRef = useRef<SVGCircleElement>(null)
  const cleanDotRef = useRef<SVGCircleElement>(null)
  const usefulDotRef = useRef<SVGCircleElement>(null)
  const modernMarkerRef = useRef<SVGGElement>(null)
  const modernLabelRef = useRef<SVGGElement>(null)
  const cleanMarkerRef = useRef<SVGGElement>(null)
  const cleanLabelRef = useRef<SVGGElement>(null)
  const usefulMarkerRef = useRef<SVGGElement>(null)
  const usefulLabelRef = useRef<SVGGElement>(null)
  const ideasMarkerRef = useRef<SVGGElement>(null)
  const ideasLabelRef = useRef<SVGGElement>(null)

  useLayoutEffect(() => {
    const background = backgroundRef.current
    const mainPath = mainPathRef.current
    const upperPath = upperPathRef.current
    const cleanPath = cleanPathRef.current
    const usefulPath = usefulPathRef.current
    const arrowHead = arrowHeadRef.current
    const mainDot = mainDotRef.current
    const upperDot = upperDotRef.current
    const cleanDot = cleanDotRef.current
    const usefulDot = usefulDotRef.current
    const modernMarker = modernMarkerRef.current
    const modernLabel = modernLabelRef.current
    const cleanMarker = cleanMarkerRef.current
    const cleanLabel = cleanLabelRef.current
    const usefulMarker = usefulMarkerRef.current
    const usefulLabel = usefulLabelRef.current
    const ideasMarker = ideasMarkerRef.current
    const ideasLabel = ideasLabelRef.current

    if (
      !background ||
      !mainPath ||
      !upperPath ||
      !cleanPath ||
      !usefulPath ||
      !arrowHead ||
      !mainDot ||
      !upperDot ||
      !cleanDot ||
      !usefulDot ||
      !modernMarker ||
      !modernLabel ||
      !cleanMarker ||
      !cleanLabel ||
      !usefulMarker ||
      !usefulLabel ||
      !ideasMarker ||
      !ideasLabel
    ) {
      return
    }

    const animation = gsap.context(() => {
      const paths = [mainPath, upperPath, cleanPath, usefulPath]
      const markers = [modernMarker, cleanMarker, usefulMarker, ideasMarker]
      const labels = [modernLabel, cleanLabel, usefulLabel, ideasLabel]
      const setInitialStroke = (path: SVGPathElement) => {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      }

      paths.forEach(setInitialStroke)
      gsap.set(arrowHead, { autoAlpha: 0 })
      gsap.set([mainDot, upperDot, cleanDot, usefulDot, ...markers, ...labels], {
        autoAlpha: 0,
      })
      gsap.set(labels, { y: 10 })

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(paths, { strokeDasharray: 'none', strokeDashoffset: 0 })
        gsap.set(arrowHead, { autoAlpha: 1 })
        gsap.set([...markers, ...labels], { autoAlpha: 1, y: 0 })
        return
      }

      const mainDuration = 2.55
      const branchDuration = 2.25
      const labelDuration = 0.4
      const modernProgress = getPathProgressAtPoint(mainPath, 747, 581)
      const cleanProgress = getPathProgressAtPoint(cleanPath, 942, 440)
      const usefulProgress = getPathProgressAtPoint(usefulPath, 1100, 571)
      const ideasProgress = getPathProgressAtPoint(upperPath, 1209.3, 283.1)
      const longestBranch = Math.max(
        upperPath.getTotalLength(),
        cleanPath.getTotalLength(),
        usefulPath.getTotalLength(),
      )
      const upperDuration = branchDuration * (upperPath.getTotalLength() / longestBranch)
      const cleanDuration = branchDuration * (cleanPath.getTotalLength() / longestBranch)
      const usefulDuration = branchDuration * (usefulPath.getTotalLength() / longestBranch)
      const branchStart = mainDuration
      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.set(paths, { strokeDasharray: 'none', strokeDashoffset: 0 })
          gsap.set(arrowHead, { autoAlpha: 1 })
          gsap.set([mainDot, upperDot, cleanDot, usefulDot], { autoAlpha: 0 })
        },
      })

      timeline
        .fromTo(
          mainPath,
          { strokeDashoffset: mainPath.getTotalLength() },
          { strokeDashoffset: 0, duration: mainDuration, ease: 'none' },
          0,
        )
        .to(
          mainDot,
          { autoAlpha: 1, duration: 0.12, ease: 'none' },
          0,
        )
        .to(
          mainDot,
          {
            motionPath: { path: mainPath, start: 0, end: 1 },
            duration: mainDuration,
            ease: 'none',
          },
          0,
        )
        .to(
          modernMarker,
          { autoAlpha: 1, duration: 0.16, ease: 'power1.out' },
          mainDuration * modernProgress,
        )
        .to(
          modernLabel,
          { autoAlpha: 1, y: 0, duration: labelDuration, ease: 'power2.out' },
          mainDuration * modernProgress,
        )
        .to(mainDot, { autoAlpha: 0, duration: 0.12, ease: 'none' }, branchStart)
        .fromTo(
          upperPath,
          { strokeDashoffset: upperPath.getTotalLength() },
          { strokeDashoffset: 0, duration: upperDuration, ease: 'none' },
          branchStart,
        )
        .fromTo(
          cleanPath,
          { strokeDashoffset: cleanPath.getTotalLength() },
          { strokeDashoffset: 0, duration: cleanDuration, ease: 'none' },
          branchStart,
        )
        .fromTo(
          usefulPath,
          { strokeDashoffset: usefulPath.getTotalLength() },
          { strokeDashoffset: 0, duration: usefulDuration, ease: 'none' },
          branchStart,
        )
        .to(upperDot, { autoAlpha: 1, duration: 0.12, ease: 'none' }, branchStart)
        .to(cleanDot, { autoAlpha: 1, duration: 0.12, ease: 'none' }, branchStart)
        .to(usefulDot, { autoAlpha: 1, duration: 0.12, ease: 'none' }, branchStart)
        .to(
          upperDot,
          {
            motionPath: { path: upperPath, start: 0, end: 1 },
            duration: upperDuration,
            ease: 'none',
          },
          branchStart,
        )
        .to(
          upperDot,
          { autoAlpha: 0, duration: 0.12, ease: 'none' },
          branchStart + upperDuration,
        )
        .to(
          cleanDot,
          {
            motionPath: { path: cleanPath, start: 0, end: 1 },
            duration: cleanDuration,
            ease: 'none',
          },
          branchStart,
        )
        .to(
          cleanDot,
          { autoAlpha: 0, duration: 0.12, ease: 'none' },
          branchStart + cleanDuration,
        )
        .to(
          usefulDot,
          {
            motionPath: { path: usefulPath, start: 0, end: 1 },
            duration: usefulDuration,
            ease: 'none',
          },
          branchStart,
        )
        .to(
          usefulDot,
          { autoAlpha: 0, duration: 0.12, ease: 'none' },
          branchStart + usefulDuration,
        )
        .to(
          cleanMarker,
          { autoAlpha: 1, duration: 0.16, ease: 'power1.out' },
          branchStart + cleanDuration * cleanProgress,
        )
        .to(
          cleanLabel,
          { autoAlpha: 1, y: 0, duration: labelDuration, ease: 'power2.out' },
          branchStart + cleanDuration * cleanProgress,
        )
        .to(
          usefulMarker,
          { autoAlpha: 1, duration: 0.16, ease: 'power1.out' },
          branchStart + usefulDuration * usefulProgress,
        )
        .to(
          usefulLabel,
          { autoAlpha: 1, y: 0, duration: labelDuration, ease: 'power2.out' },
          branchStart + usefulDuration * usefulProgress,
        )
        .to(
          ideasMarker,
          { autoAlpha: 1, duration: 0.16, ease: 'power1.out' },
          branchStart + upperDuration * ideasProgress,
        )
        .to(
          ideasLabel,
          { autoAlpha: 1, y: 0, duration: labelDuration, ease: 'power2.out' },
          branchStart + upperDuration * ideasProgress,
        )
        .to(
          arrowHead,
          { autoAlpha: 1, duration: 0.22, ease: 'power1.out' },
          branchStart + upperDuration - 0.22,
        )
    }, background)

    return () => animation.revert()
  }, [])

  return (
    <div className="hero-background" ref={backgroundRef} aria-hidden="true">
      <svg className="hero-background__blob" viewBox="0 0 600 600" focusable="false">
        <defs>
          <radialGradient id="hero-blob-lime" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#E4FF2E" />
            <stop offset="70%" stopColor="#D4F500" />
            <stop offset="100%" stopColor="#D4F500" stopOpacity="0.55" />
          </radialGradient>
          <filter
            id="hero-blob-grain"
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="3"
              seed="7"
              result="edgeNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="edgeNoise"
              scale="38"
              xChannelSelector="R"
              yChannelSelector="G"
              result="rough"
            />
            <feGaussianBlur in="rough" stdDeviation="5" result="soft" />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.2"
              numOctaves="2"
              seed="3"
              result="grain"
            />
            <feColorMatrix in="grain" type="saturate" values="0" result="mono" />
            <feComponentTransfer in="mono" result="grainSoft">
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feBlend in="soft" in2="grainSoft" mode="multiply" result="grained" />
            <feComposite in="grained" in2="soft" operator="in" />
          </filter>
          <path id="hero-blob-typepath" d="M 64 300 A 236 236 0 1 1 536 300 A 236 236 0 1 1 64 300" />
        </defs>
        <circle cx="300" cy="300" r="200" fill="url(#hero-blob-lime)" filter="url(#hero-blob-grain)" />
        <text className="hero-background__blob-copy">
          <textPath href="#hero-blob-typepath" startOffset="25%">
            BUILD → LEARN → IMPROVE → REPEAT
          </textPath>
        </text>
      </svg>
      <svg
        className="hero-background__svg"
        viewBox="0 0 1365 768"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <path
          className="hero-background__path hero-background__path--main"
          d="M -18 699 C 178 681, 462 633, 747 581 C 841.2 561.2, 933.24 532.04, 1013.4 485.096 C 1066.84 453.8, 1115 414.6, 1155 365 C 1160.863 357.391, 1166.555 349.61, 1172.072 341.726"
          ref={mainPathRef}
        />
        <path
          className="hero-background__path hero-background__path--upper"
          d="M 1172.072 341.726 C 1210.779 286.41, 1240.869 226.012, 1261 184"
          ref={upperPathRef}
        />
        <path
          className="hero-background__path hero-background__path--clean"
          d="M 1172.072 341.726 C 1102.772 344.439, 1019.826 387.831, 942 440"
          ref={cleanPathRef}
        />
        <path
          className="hero-background__path hero-background__path--useful"
          d="M 1172.072 341.726 C 1183.802 341.267, 1195.142 341.973, 1206 344 C 1289 359, 1301 413, 1257 461 C 1217 505, 1158 547, 1100 571"
          ref={usefulPathRef}
        />
        <path
          className="hero-background__arrowhead"
          d="M 1248 198 L 1261 184 L 1262 201"
          ref={arrowHeadRef}
        />
        <path
          className="hero-background__ornament"
          d="M -18 194 C 66 230 83 294 42 343 C 26 362 5 382 -14 399"
        />
        <path
          className="hero-background__asterisk"
          d="M 1282 588 V 626 M 1263 607 H 1301 M 1269 594 L 1295 620 M 1295 594 L 1269 620"
        />
        <circle className="hero-background__moving-dot" r="6" ref={mainDotRef} />
        <circle className="hero-background__moving-dot" r="5" ref={upperDotRef} />
        <circle className="hero-background__moving-dot" r="5" ref={cleanDotRef} />
        <circle className="hero-background__moving-dot" r="5" ref={usefulDotRef} />

        <g className="hero-background__labels">
          <g className="hero-background__label">
            <g ref={modernMarkerRef}>
              <circle cx="747" cy="581" r="3" />
              <path d="M 747 586 V 616" />
            </g>
            <g ref={modernLabelRef}>
              <text x="747" y="640" textAnchor="middle">Modern</text>
              <text x="747" y="660" textAnchor="middle">Tech</text>
            </g>
          </g>
          <g className="hero-background__label">
            <g ref={cleanMarkerRef}>
              <circle cx="942" cy="440" r="3" />
              <path d="M 940 435 L 938 408" />
            </g>
            <g ref={cleanLabelRef}>
              <text x="937" y="388" textAnchor="middle">Clean</text>
              <text x="937" y="407" textAnchor="middle">Designs</text>
            </g>
          </g>
          <g className="hero-background__label">
            <g ref={usefulMarkerRef}>
              <circle cx="1100" cy="571" r="3" />
              <path d="M 1099 565 L 1098 540" />
            </g>
            <g ref={usefulLabelRef}>
              <text x="1095" y="519" textAnchor="middle">Useful</text>
              <text x="1095" y="538" textAnchor="middle">Products</text>
            </g>
          </g>
          <g className="hero-background__label">
            <g ref={ideasMarkerRef}>
              <circle cx="1209.3" cy="283.1" r="14" />
              <path d="M 1222.3 277.1 L 1230 270" />
            </g>
            <g ref={ideasLabelRef}>
              <text x="1242" y="257">Ideas</text>
              <text x="1242" y="276">to</text>
              <text x="1242" y="295">Products</text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
