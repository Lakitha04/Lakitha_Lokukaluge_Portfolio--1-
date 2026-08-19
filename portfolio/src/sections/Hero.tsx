import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'
import TerminalPanel from '../components/TerminalPanel'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-crimson/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="section-shell grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fadeUp">
          

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Lakitha <span className="inline-block"></span>
          </h1>
          <p className="mt-3 font-display text-2xl text-gold-soft sm:text-3xl">Full-Stack Developer</p>
          <p className="mt-2 font-mono text-sm text-ink-faint">{siteConfig.tagline}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
            I build modern, responsive web applications using modern web technologies.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects
            </a>
            {siteConfig.resumeUrl ? (
              <a href={siteConfig.resumeUrl} download className="btn-secondary">
                <Download size={16} />
                Download CV
              </a>
            ) : (
              <a href="#contact" className="btn-secondary" title="Add your CV file path in src/data/site.ts">
                <Download size={16} />
                Download CV
              </a>
            )}
            <a href="#contact" className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-ink-dim transition-colors hover:text-gold"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-dim transition-colors hover:text-gold"
            >
              <Linkedin size={20} />
            </a>
            <span className="h-4 w-px bg-surface-border" />
            <span className="font-mono text-xs text-ink-faint">{siteConfig.location}</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="animate-floatSlow">
            <TerminalPanel />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="mx-auto mt-20 hidden w-fit items-center gap-2 font-mono text-xs text-ink-faint transition-colors hover:text-gold sm:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
