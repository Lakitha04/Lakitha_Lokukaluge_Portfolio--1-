import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="section-shell flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-faint">© 2026 {siteConfig.name}. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="text-ink-dim transition-colors hover:text-gold">
            <Mail size={17} />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-dim transition-colors hover:text-gold">
            <Github size={17} />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-dim transition-colors hover:text-gold">
            <Linkedin size={17} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-surface-border text-ink-dim transition-colors hover:border-gold/50 hover:text-gold"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
