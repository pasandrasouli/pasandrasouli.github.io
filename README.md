# Pasand Rasouli Portfolio

Vue + Vite + TypeScript portfolio site.

## Development

```bash
pnpm install
pnpm dev
```

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

## Deployment

The repo includes a GitHub Actions workflow that typechecks, builds, and deploys `dist/` to GitHub Pages.

## Project data

Edit site content in [`src/data/site.ts`](src/data/site.ts).

Edit project content in [`src/data/projects.ts`](src/data/projects.ts).

Static assets go in [`public/assets/`](public/assets/).
