# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A prototype for visual office workspace booking. Users click directly on a floor plan image to book conference rooms/workspaces, instead of picking from a list. The goal is to validate that a map-based UI is faster and more intuitive (see HYPOTHESIS.md). Target deployment: embedded in SharePoint (SPFx compatible).

There are two implementations:
- `office-map.html` — standalone single-file HTML prototype (vanilla JS, no build step)
- `app/` — React + TypeScript version built with Vite

## Commands

All commands run from the `app/` directory:

```bash
npm run dev        # Start Vite dev server
npm run build      # TypeScript check + Vite production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test runner is configured yet.

## Architecture

### React app (`app/`)

- **Vite + React 19 + TypeScript** — no CSS framework, plain CSS with BEM-ish naming
- **Data layer**: `src/data/workspaces.ts` exports a `MapConfig` object with floor plan image path, dimensions, and an array of `Workspace` entries (position, size, status, booking URL, zone, features)
- **Scaling model**: `MapContainer` measures its own width vs the source image width to compute a `scale` factor. All hotspot positions/sizes are multiplied by this scale so the overlay stays aligned at any viewport width
- **Hotspots**: `WorkspaceHotspot` renders each workspace as an `<a>` tag absolutely positioned over the floor plan, with status-based coloring (green=available, red=busy) and a tooltip on hover
- **Floor plan image**: referenced as `/floorplan.png` (served from `app/public/`). The standalone HTML version uses `Kontoret.png` in the project root

### Adding a new workspace

Add an entry to the `workspaces` array in `src/data/workspaces.ts`. The `x`, `y`, `width`, `height` values are in the source image's pixel coordinate space (649x472).
