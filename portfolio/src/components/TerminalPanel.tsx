import { useEffect, useState } from 'react'

const LINES: { prompt?: string; text: string; color?: string; delay: number }[] = [
  { prompt: '$', text: 'whoami', delay: 300 },
  { text: 'lakitha_lokukaluge — full-stack developer', color: 'text-ink', delay: 500 },
  { prompt: '$', text: 'cat focus.json', delay: 700 },
  { text: '{', color: 'text-ink-dim', delay: 250 },
  { text: '  "stack": ["React", "Node.js", "Spring Boot"],', color: 'text-ink-dim', delay: 200 },
  { text: '  "degree": "BSc (Hons) IT — SLIIT",', color: 'text-ink-dim', delay: 200 },
  { text: '  "status": "open to work"', color: 'text-gold-soft', delay: 200 },
  { text: '}', color: 'text-ink-dim', delay: 250 },
  { prompt: '$', text: 'echo $DISCIPLINE', delay: 500 },
  { text: '3rd Dan Black Belt — 4x National Champion', color: 'text-crimson-soft', delay: 400 },
]

export default function TerminalPanel() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= LINES.length) return
    const timer = setTimeout(() => setVisible((v) => v + 1), LINES[visible].delay)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <div className="card w-full max-w-md overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-surface-border bg-surface-raised/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/50" />
        <span className="ml-2 font-mono text-[11px] text-ink-faint">profile.sh</span>
      </div>
      <div className="min-h-[260px] px-5 py-5 font-mono text-[13px] leading-relaxed">
        {LINES.slice(0, visible).map((line, i) => (
          <div key={i} className={line.color ?? 'text-ink'}>
            {line.prompt && <span className="mr-2 text-gold">{line.prompt}</span>}
            {line.text}
          </div>
        ))}
        {visible < LINES.length ? (
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-gold/70" />
        ) : (
          <div className="mt-1">
            <span className="mr-2 text-gold">$</span>
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-gold/70" />
          </div>
        )}
      </div>
    </div>
  )
}
