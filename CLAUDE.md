# CLAUDE.md — Project Guide & Agent Conventions for DeckPulse AI

This document provides system context, architecture rules, and command patterns for **Claude Code** and engineering agents working on the DeckPulse AI presentation platform.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router) with Turbopack bundler
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 + scoped glassmorphism utility classes
- **Icons**: `lucide-react`
- **Containerization**: Multi-stage Docker (`Dockerfile` + `docker-compose.yml`)
- **Node Environment**: Node.js 24 LTS

---

## 🚀 Common Commands

### Development
```bash
# Start local Turbopack development server on port 3000
npm run dev

# Run TypeScript checks and static analysis
npx tsc --noEmit
npm run lint
```

### Production Build & Validation
```bash
# Production standalone build
npm run build

# Start production server locally
npm run start
```

### Docker Commands
```bash
# Build & launch containerized production service
docker compose up -d --build

# Inspect running container logs
docker compose logs -f deckpulse-web

# Stop container
docker compose down
```

---

## 📐 Code Style & Conventions

1. **Server vs. Client Components**:
   - Default to Server Components (`src/app/page.tsx` or layout wrappers) for SEO and static rendering.
   - Use `"use client";` directive at the very top of interactive widgets, sliders, modals, and animation hooks.
2. **TypeScript Integrity**:
   - No implicit `any`. Always declare explicit interfaces for component props, data presets, and state models.
   - Centralize reusable interfaces or keep them colocated when component-specific.
3. **Tailwind & Responsive Design**:
   - Mobile-first approach (`text-sm sm:text-base md:text-lg`).
   - Use semantic color classes (`emerald-400` for positive delta metrics, `indigo-500` for primary actions, `cyan-400` for tech accents).
   - Never hardcode arbitrary inline styles for layout; use Tailwind spacing and flex/grid.
4. **Performance & SEO**:
   - Every page must export an explicit `Metadata` object with OpenGraph & Twitter tags.
   - Keep dynamic client bundle minimal. Dynamic imports for heavy non-critical canvas/chart components if added.

---

## 🤖 Prompting Claude Code in this Repository

When assigning tasks via Claude Code CLI:
- Specify exact files to inspect and modify.
- Always ask to verify changes by running `npm run build` or `npx tsc --noEmit` before concluding.
- For UI additions, enforce responsiveness across `sm` (640px), `md` (768px), and `lg` (1024px) breakpoints.
