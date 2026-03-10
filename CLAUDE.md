# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A collection of standalone vanilla JavaScript mini-projects, each in its own directory with a retro/pixel-art theme using the "Press Start 2P" Google Font.

## Architecture

- **Root `index.html`** — Landing page that links to all projects (inline styles, no external CSS/JS)
- **Each project** lives in its own folder with `index.html`, `script.js`, and optionally a CSS file (`style.css` or `styles.css`)
- No build tools, bundlers, or package managers — plain HTML/CSS/JS served directly
- No frameworks or libraries — all DOM manipulation is vanilla JS

## Running

Open any `index.html` in a browser, or use a local server:

```
python3 -m http.server 8000
```

## Conventions

- Projects use `data-*` attributes on HTML elements for JS event binding (e.g., `data-digit`, `data-op`)
- CSS files are named `style.css`
- When adding a new project, create a new directory and add a card entry to the root `index.html` `.projects` grid
