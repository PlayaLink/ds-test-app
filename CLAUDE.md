# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Type-check and build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a demo application for the `@oxymormon/chg-unified-ds` design system package.

### Tech Stack
- Vite + React 19 + TypeScript
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- @oxymormon/chg-unified-ds components

### Theming
The app supports 6 CHG brand themes controlled via `data-theme` attribute on the root element:
- weatherby, comphealth, connect, locumsmart, modio, wireframe

Theme CSS is imported in `src/index.css` along with design system tokens.

### Key Files
- `src/App.tsx` - Component showcase with theme switcher
- `src/index.css` - Tailwind config and design system imports
- `vite.config.ts` - Vite config with React and Tailwind plugins
