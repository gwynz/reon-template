# Reon

Reon is a Next.js + Tailwind CSS + TypeScript starter packed with useful development features.

## Features

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💨 Shadcn - Component custom ui
- 💎 Pre-built Components — Components that adapt to your brand color
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Linting and auto-sorting imports
- 💖 Prettier — Code formatting
- 🐶 Husky & Lint Staged — Pre-commit scripts for better workflow
- 🤖 Conventional Commit Lint — Enforces commit message standards
- ⏰ Release Please — Automates changelog generation
- 👷 GitHub Actions — PR linting and automation
- 🗺 Sitemap — Auto-generates sitemap.xml
- 📦 Expansion Pack — Install common libraries and additional components easily

## Getting Started

### 1. Clone the Repository

Use one of the following methods:

```bash
git clone https://github.com/reon-ai/reon-frontend.git
```

### 2. Install Dependencies

Use `pnpm` for best compatibility:
node version v22.16.0
pnpm version 10.12.3

```bash
pnpm install
```

### 3. Run Development Server

Start the local server:

```bash
pnpm dev
```

### 4. Generate openai to ts

```bash
npx swagger-typescript-api -p http://localhost:8000/api/v1/openapi.json -o ./src/api -n api.ts
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### 4. Configure Defaults

Update project settings like title, URLs, and favicons by following comments marked with `!STARTERCONF`.

### 5. Commit Message Convention

Follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) when committing changes.

## Expansion Pack 📦

Easily add features like React Hook Form, Storybook, and more:

Check the [expansion pack repository](https://github.com/your-repo-name/expansion-pack) for installation commands.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo-name%2Fai-tools-explorer)

---

Enjoy building with Reon!
