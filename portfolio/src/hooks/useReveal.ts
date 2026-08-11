import { useEffect, useRef } from 'react'

/**
 * Adds the `.in-view` class to an element (and optionally its `[data-reveal]`
 * children) once it scrolls into the viewport. Pair with the `.reveal` CSS
 * class defined in index.css for a fade-up scroll reveal effect.
 */
export function useReveal<T extends HTMLElement>(rootMargin = '0px 0px -10% 0px') {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.hasAttribute('data-reveal')
      ? [node]
      : Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay ?? String(i * 60)
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('in-view')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin },
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [rootMargin])

  return ref
}
