import { Medal } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import { achievements } from '../data/achievements'

export default function Achievements() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading
          eyebrow="06 — Beyond the Keyboard"
          title="Achievements"
          description="The discipline behind the code — competitive karate at national level, alongside university leadership."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="reveal flex items-start gap-3 rounded-lg border border-surface-border bg-surface/40 px-4 py-3.5" data-reveal>
              <Medal size={16} className="mt-0.5 shrink-0 text-crimson-soft" />
              <div>
                <p className="text-sm leading-snug text-ink">{a.title}</p>
                <p className="mt-0.5 font-mono text-[11px] text-ink-faint">{a.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
