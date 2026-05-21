# Shutonu Mitra — Portfolio

Interactive portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live site: [sm5190.github.io](https://sm5190.github.io)

## Development

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export is written to `out/` for GitHub Pages deployment.

## Deploy

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages.

## Project structure

- `app/` — Next.js App Router pages and global styles
- `components/` — React components (sections, layout, UI)
- `content/` — Portfolio content as JSON (projects, resume, research, skills)
- `public/` — Static assets (images, resume PDF)
- `legacy/` — Previous static HTML site (archived)

## Design

**Meridian** design system — warm graphite surfaces, copper accents, sea-glass teal tags, Newsreader + IBM Plex typography, contour-line background motif.
