import { Briefcase, MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I've worked"
          description="Real projects, real deadlines — the internship that turned classroom knowledge into shipped code."
        />

        <div className="relative border-l border-surface-border pl-8 sm:pl-10">
          {experience.map((item) => (
            <div key={item.company} className="reveal relative pb-2" data-reveal>
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-gold ring-4 ring-bg sm:-left-[calc(2.5rem+5px)]" />

              <div className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                      <Briefcase size={17} className="text-gold" />
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-gold-soft">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-ink-faint">{item.period}</span>
                    <p className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-faint">
                      <MapPin size={12} />
                      {item.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-soft" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="reveal relative pt-2" data-reveal>
            <span className="absolute -left-[calc(2rem+4px)] top-3.5 flex h-2 w-2 items-center justify-center rounded-full bg-surface-border ring-4 ring-bg sm:-left-[calc(2.5rem+4px)]" />
            <p className="font-mono text-sm text-ink-faint">Next role — let&apos;s talk →</p>
          </div>
        </div>
      </div>
    </section>
  )
}
