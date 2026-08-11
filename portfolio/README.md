# Lakitha Lokukaluge — Portfolio

A modern, responsive full-stack developer portfolio built with **React, TypeScript, Vite and Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── assets/          # profile photo + school crests
├── components/      # reusable UI pieces (Navbar, Footer, cards, etc.)
├── data/            # edit these files to update content — no JSX required
│   ├── site.ts       # name, email, phone, social links, resume URL
│   ├── skills.ts      # skill categories
│   ├── projects.ts    # project cards (image, tech, links)
│   ├── experience.ts  # work experience timeline
│   └── achievements.ts
├── hooks/            # useReveal — scroll reveal animation hook
├── sections/         # one file per page section (Hero, About, Projects…)
├── App.tsx
├── main.tsx
└── index.css
public/
├── favicon.svg
└── project-placeholders/   # swap these SVGs for real project screenshots
```

## Things you'll likely want to customize

1. **Resume / CV** — drop your PDF into `public/`, e.g. `public/Lakitha_Lokukaluge_CV.pdf`, then set
   `resumeUrl: '/Lakitha_Lokukaluge_CV.pdf'` in `src/data/site.ts` to activate the "Download CV" button.
2. **Project images** — replace the SVG placeholders in `public/project-placeholders/` with real
   screenshots (same filenames, or update the `image` path in `src/data/projects.ts`).
3. **Project links** — add any missing `github` / `demo` URLs in `src/data/projects.ts`. Cards without
   a link show a greyed-out "Add repo" / "Add link" state instead of a dead link.
4. **Contact form** — `src/sections/Contact.tsx` is front-end only. Wire `handleSubmit` up to a service
   like Formspree, EmailJS, or your own API route before deploying.
5. **Colors / type** — design tokens live in `tailwind.config.js` (colors: `bg`, `surface`, `ink`, `gold`,
   `crimson`) and are loaded as Google Fonts in `index.html` (Space Grotesk, Inter, JetBrains Mono).

## Deploying

The site is a static Vite build — deploy `dist/` to Vercel, Netlify, GitHub Pages, or any static host.
