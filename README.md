# Afrika Digitalis Website

Official website for **Afrika Digitalis** built with React, TypeScript, Tailwind CSS, and Vite.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- React Router DOM
- TanStack React Query
- Vitest + Testing Library

## Project Structure

```txt
.
|- public/                  # Static assets (served as-is)
|- src/
|  |- assets/               # Images and brand assets
|  |- components/           # Shared UI/layout components
|  |- pages/                # Route pages
|  |- hooks/                # Reusable hooks
|  |- lib/                  # Utilities
|  |- main.tsx              # App entry point
|  `- App.tsx               # Router + providers
|- .github/workflows/
|  `- deploy.yml            # GitHub Pages deployment workflow
`- vite.config.ts           # Vite config (includes GitHub Pages base path)
```

## Local Development

### Prerequisites

- Node.js 18+ (or Bun)
- npm (or Bun)

### Install dependencies

```bash
npm install
```

Or:

```bash
bun install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

## Brand Assets

- Main brand logo: `src/assets/digitalis_logo.jpeg`
- Elekeza solution logo: `src/assets/elekeza_logo.jpeg`
- Site icon (favicon): `public/digitalis_logo.jpeg`

## GitHub Pages Deployment

This project auto-deploys from `main` using:

- `.github/workflows/deploy.yml`
- GitHub Actions Pages deploy (`actions/deploy-pages`)

### Important path configuration

Because the repository name is `AFRIKA-DIGITALIS`, production base path is:

```txt
/AFRIKA-DIGITALIS/
```

This is configured in:

- `vite.config.ts` via `base`
- `src/App.tsx` via `BrowserRouter` basename from `import.meta.env.BASE_URL`

### SPA routing support on GitHub Pages

- `public/404.html` redirects unknown routes to the app entry
- `index.html` includes the script that decodes redirected URLs

This allows links like `/about`, `/solutions`, etc. to work on refresh/direct visit.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run build:dev` - build in development mode
- `npm run preview` - preview built app
- `npm run lint` - run ESLint
- `npm test` - run tests once
- `npm run test:watch` - run tests in watch mode
