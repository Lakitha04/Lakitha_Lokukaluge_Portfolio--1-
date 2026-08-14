import { FormEvent, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import { siteConfig } from '../data/site'

const contactPoints = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s+/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'lakitha-lokukaluge', href: siteConfig.linkedin },
  { icon: Github, label: 'GitHub', value: siteConfig.github.replace('https://', ''), href: siteConfig.github },
]

type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [status, setStatus] = useState<Status>('idle')

  
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something"
          description="Open to Software Engineering, Front-End and Full-Stack Developer roles. Reach out — I usually reply within a day."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal space-y-3" data-reveal>
            {contactPoints.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === 'Email' || c.label === 'Phone' ? undefined : '_blank'}
                rel="noreferrer"
                className="card flex items-center gap-4 p-4 transition-colors hover:border-gold/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-raised text-gold">
                  <c.icon size={17} />
                </span>
                <span>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">{c.label}</p>
                  <p className="text-sm text-ink">{c.value}</p>
                </span>
              </a>
            ))}

            <div className="card flex items-center gap-4 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-raised text-gold">
                <MapPin size={17} />
              </span>
              <span>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">Location</p>
                <p className="text-sm text-ink">{siteConfig.location}</p>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal card space-y-5 p-6 sm:p-8" data-reveal>
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink-dim">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-surface-border bg-surface-raised/50 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-surface-border bg-surface-raised/50 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-dim">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none rounded-md border border-surface-border bg-surface-raised/50 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-gold/50 focus:outline-none"
              />
            </div>

            <button type="submit" disabled={status !== 'idle'} className="btn-primary w-full justify-center disabled:opacity-70">
              {status === 'idle' && (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
              {status === 'sending' && 'Sending…'}
              {status === 'sent' && 'Message sent ✓'}
            </button>
            {status === 'sent' && (
              <p className="text-center text-xs text-ink-faint">Thanks for reaching out — I&apos;ll get back to you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
