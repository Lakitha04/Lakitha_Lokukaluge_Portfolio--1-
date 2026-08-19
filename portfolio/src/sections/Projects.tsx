import { ExternalLink, Github } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          description="A mix of client, academic and personal projects. Swap in your own screenshots and links any time — everything lives in src/data/projects.ts."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="reveal card group flex flex-col overflow-hidden" data-reveal>
              <div className="overflow-hidden border-b border-surface-border">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-surface-border px-2.5 py-1 font-mono text-[11px] text-ink-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2 text-xs">
                      <Github size={14} />
                      GitHub
                    </a>
                  ) : (
                    <span className="btn-secondary !px-4 !py-2 text-xs opacity-40" aria-disabled="true">
                      <Github size={14} />
                      Add repo
                    </span>
                  )}

                  {/* {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-xs">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : 
                  (
                    <span className="btn-ghost !px-4 !py-2 text-xs opacity-40" aria-disabled="true">
                      <ExternalLink size={14} />
                      Add link
                    </span>
                  )
                  } */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
