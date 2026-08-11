import { useReveal } from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import sliitCrest from '../assets/sliit-crest.jpg'
import anandaCrest from '../assets/ananda-college.png'

export default function Education() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="section-shell" ref={ref}>
        <SectionHeading eyebrow="05 — Education" title="Academic background" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="reveal card flex items-center gap-5 p-6" data-reveal>
            <img src={sliitCrest} alt="SLIIT crest" className="h-14 w-14 shrink-0 rounded-md object-contain" />
            <div>
              <h3 className="text-base font-semibold text-ink">BSc (Hons) in Information Technology</h3>
              <p className="mt-1 font-mono text-sm text-gold-soft">Sri Lanka Institute of Information Technology</p>
              <p className="mt-1 text-xs text-ink-faint">2021 — 2025</p>
            </div>
          </div>

          <div className="reveal card flex items-center gap-5 p-6" data-reveal>
            <img src={anandaCrest} alt="Ananda College crest" className="h-14 w-14 shrink-0 rounded-md object-contain" />
            <div>
              <h3 className="text-base font-semibold text-ink">GCE Advanced Level — Physical Science</h3>
              <p className="mt-1 font-mono text-sm text-gold-soft">Ananda College, Colombo</p>
              <p className="mt-1 text-xs text-ink-faint">2006 — 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
