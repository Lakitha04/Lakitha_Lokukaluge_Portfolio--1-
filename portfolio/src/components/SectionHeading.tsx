interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-ink-dim ${align === 'center' ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </div>
  )
}
