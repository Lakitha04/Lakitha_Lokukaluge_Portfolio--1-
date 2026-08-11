import { useEffect, useState } from 'react'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-surface-border bg-bg/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-ink">
          Lakitha<span className="text-gold">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-md px-3 py-2 font-mono text-[13px] transition-colors duration-200 ${
                  active === link.href ? 'text-gold' : 'text-ink-dim hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-ink-dim transition-colors hover:text-gold"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-dim transition-colors hover:text-gold"
          >
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-xs">
            Contact Me
          </a>
        </div>

        <button
          className="text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-surface-border bg-bg/97 backdrop-blur-md transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[420px]' : 'max-h-0 border-b-0'
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 font-mono text-sm text-ink-dim transition-colors hover:bg-surface hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-4 px-3">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-ink-dim hover:text-gold">
              <Github size={20} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-ink-dim hover:text-gold">
              <Linkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
