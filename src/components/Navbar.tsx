import { useEffect, useId, useState } from 'react'
import logo from '../assets/noobdev-logo.webp'
import useNavbarVisibility from '../hooks/useNavbarVisibility'
import './Navbar.css'

export type NavbarVariant = 'full' | 'minimal'

type NavbarProps = {
  variant?: NavbarVariant
}

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function SocialIcons() {
  return (
    <div className="noobdev-socials" role="group" aria-label="Social icons">
      <span className="noobdev-social-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.31 2.05 3.02 1.45.1-.72.39-1.2.7-1.48-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.63 5.24-5.13 5.51.4.35.75 1.03.75 2.08V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      </span>
      <span className="noobdev-social-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.23a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29s-1.61 1.1-1.61 2.22V18H10V9.4h2.56v1.17h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.19 1.77 3.19 4.07Z" />
        </svg>
      </span>
      <span className="noobdev-social-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </span>
    </div>
  )
}

function ContactLink({ onClick }: { onClick: () => void }) {
  return (
    <a className="noobdev-contact" href="#contact" onClick={onClick}>
      <span>Let’s Talk</span>
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <path d="M4 14 14 4M5 4h9v9" />
      </svg>
    </a>
  )
}

export default function Navbar({ variant = 'full' }: NavbarProps) {
  const visible = useNavbarVisibility()
  const [isCompact, setIsCompact] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('#home')
  const menuId = useId()

  useEffect(() => {
    const updateScrollState = () => setIsCompact(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const sections = navigationItems
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const visibleSections = new Map<Element, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target, entry.intersectionRatio)
          } else {
            visibleSections.delete(entry.target)
          }
        })

        const currentSection = [...visibleSections.entries()].sort(
          (first, second) => second[1] - first[1],
        )[0]?.[0]

        if (currentSection) setActiveItem(`#${currentSection.id}`)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const selectItem = (href: string) => {
    setActiveItem(href)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`noobdev-navbar-shell variant-${variant}${isCompact ? ' is-compact' : ''}${!visible && !isMenuOpen ? ' navbar--hidden' : ''}`}
    >
      <div className="noobdev-navbar">
        <a className="noobdev-brand" href="#home" onClick={() => selectItem('#home')} aria-label="Noobdev.Art by Chetan">
          <img className="noobdev-logo" src={logo} alt="Noobdev.Art — Chetan" />
        </a>

        <nav className="noobdev-desktop-navigation" aria-label="Main navigation">
          {navigationItems.map(({ label, href }) => (
            <a
              className={`noobdev-nav-link${activeItem === href ? ' is-active' : ''}`}
              href={href}
              key={href}
              aria-current={activeItem === href ? 'page' : undefined}
              onClick={() => selectItem(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="noobdev-desktop-actions">
          <SocialIcons />
          <ContactLink onClick={() => selectItem('#contact')} />
        </div>

        <button
          className={`noobdev-menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`noobdev-menu-panel${isMenuOpen ? ' is-open' : ''}`}
        id={menuId}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <img className="noobdev-menu-watermark" src={logo} alt="" aria-hidden="true" />
        <nav className="noobdev-menu-links" aria-label="Menu navigation">
          {navigationItems.map(({ label, href }) => (
            <a
              className={`noobdev-menu-link${activeItem === href ? ' is-active' : ''}`}
              href={href}
              key={href}
              aria-current={activeItem === href ? 'page' : undefined}
              onClick={() => selectItem(href)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="noobdev-menu-footer">
          <SocialIcons />
          <ContactLink onClick={() => selectItem('#contact')} />
        </div>
      </div>
    </header>
  )
}
