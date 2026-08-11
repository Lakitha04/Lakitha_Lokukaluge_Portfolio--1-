import { Code2, Database, Layers3, Wrench } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/skills'

const icons: Record<string, typeof Code2> = {
  frontend: Code2,
  backend: Layers3,
  database: Database,
  tools: Wrench,
}

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading eyebrow="04 — Skills" title="Technologies I work with" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => {
            const Icon = icons[cat.id] ?? Code2
            return (
              <div key={cat.id} className="reveal card p-6 transition-colors hover:border-gold/30" data-reveal>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised text-gold">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{cat.title}</h3>
                <p className="mt-1 text-xs text-ink-faint">{cat.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-surface-border bg-surface-raised/50 px-2.5 py-1.5 font-mono text-[11.5px] text-ink-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
