/**
 * A thin striped divider inspired by the stripes on a karate belt —
 * the recurring visual signature that ties the "developer" and
 * "athlete" halves of the portfolio together. Used sparingly between
 * major sections instead of a plain <hr>.
 */
export default function BeltDivider() {
  return (
    <div className="section-shell" aria-hidden="true">
      <div className="flex items-center gap-1.5 py-2">
        <span className="h-1 w-8 rounded-full bg-gold/70" />
        <span className="h-1 w-3 rounded-full bg-crimson/60" />
        <span className="h-1 w-1.5 rounded-full bg-surface-border" />
        <span className="ml-auto h-px flex-1 bg-surface-border" />
      </div>
    </div>
  )
}
