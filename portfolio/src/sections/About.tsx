import { GraduationCap, Layers, Rocket, Sparkles } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import profile from '../assets/profile.jpg'

const highlights = [
  {
    icon: GraduationCap,
    title: 'BSc (Hons) in IT — SLIIT',
    text: 'A solid academic foundation in software engineering, databases, and web development from the Sri Lanka Institute of Information Technology.',
  },
  {
    icon: Rocket,
    title: 'Internship at NCINGA',
    text: 'Six months building backend REST APIs and React interfaces on a live enterprise product, working alongside experienced engineers.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Comfort',
    text: 'Equally comfortable in React and Redux on the frontend as I am in Node.js, Express and Java Spring Boot on the backend.',
  },
  {
    icon: Sparkles,
    title: 'Always Learning',
    text: 'Karate taught me discipline and repetition — I bring the same mindset to picking up new frameworks, tools, and best practices.',
  },
]

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading eyebrow="01 — About" title="Building software, deliberately." />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="reveal" data-reveal>
            <div className="group relative mx-auto w-full max-w-xs">
              <div className="absolute -inset-2 rounded-2xl border border-gold/20" aria-hidden="true" />
              <img
                src={profile}
                alt="Portrait of Lakitha Lokukaluge"
                className="relative aspect-[4/5] w-full rounded-xl border border-surface-border object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <div className="absolute -bottom-4 -right-4 rounded-lg border border-surface-border bg-surface px-4 py-2.5 font-mono text-xs text-ink-dim shadow-xl">
                3rd <span className="text-gold">Dan</span> Black Belt
              </div>
            </div>
          </div>

          <div>
            <p className="reveal text-base leading-relaxed text-ink-dim sm:text-lg" data-reveal>
              I&apos;m a fresh IT graduate from SLIIT with hands-on experience across the full application
              lifecycle — from wireframe to deployed feature. During my six-month internship at NCINGA
              (PVT) Ltd, I built and maintained backend REST APIs in Spring Boot, worked with MongoDB for
              data storage, and shipped React and Redux-powered frontend features that connected cleanly
              to those services.
            </p>
            <p className="reveal mt-4 text-base leading-relaxed text-ink-dim sm:text-lg" data-reveal>
              I care about writing code that&apos;s easy for the next person to read, and about
              understanding the &quot;why&quot; behind a feature before I start building it. Outside of
              client and personal projects, I&apos;m usually exploring a new part of the JavaScript or Java
              ecosystem, or coaching at the dojo — a routine that keeps me disciplined about learning a
              little, consistently, every day.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.title} className="reveal card p-5 hover:border-gold/30" data-reveal>
                  <h.icon size={18} className="text-gold" />
                  <h3 className="mt-3 text-sm font-semibold text-ink">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
