import { useEffect, useRef, useState } from 'react'

type NavbarVisibilityOptions = {
  topOffset?: number
  hideDelta?: number
  showDelta?: number
}

function useNavbarVisibility({
  topOffset = 80,
  hideDelta = 10,
  showDelta = 6,
}: NavbarVisibilityOptions = {}) {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const visibleRef = useRef(true)

  useEffect(() => {
    lastY.current = window.scrollY

    let frame: number | null = null

    const updateVisibility = () => {
      frame = null

      const y = window.scrollY
      if (y <= topOffset) {
        lastY.current = y
        if (!visibleRef.current) {
          visibleRef.current = true
          setVisible(true)
        }
        return
      }

      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
      if (y < 0 || y > maxScrollY) return

      const delta = y - lastY.current
      if (delta > hideDelta) {
        lastY.current = y
        if (visibleRef.current) {
          visibleRef.current = false
          setVisible(false)
        }
      } else if (delta < -showDelta) {
        lastY.current = y
        if (!visibleRef.current) {
          visibleRef.current = true
          setVisible(true)
        }
      }
    }

    const handleScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateVisibility)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [hideDelta, showDelta, topOffset])

  return visible
}

export default useNavbarVisibility
