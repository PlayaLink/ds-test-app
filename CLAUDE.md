# CLAUDE.md

This file provides project runtime context for `ds-test-app`.

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
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- `@oxymormon/chg-unified-ds` components

### Theming
The app supports six CHG brand themes via `data-theme` on the root element:
`weatherby`, `comphealth`, `connect`, `locumsmart`, `modio`, `wireframe`.

### Key Files
- `src/App.tsx` component showcase with theme switcher
- `src/index.css` Tailwind v4 config, tokens, and brand theme imports
- `vite.config.ts` Vite config with React and Tailwind plugins

## Instruction Sources

- Agent behavior/process rules are inherited from `/Users/jengland/claude/chg/AGENTS.md`.
- Keep this file focused on runtime and architecture context.
