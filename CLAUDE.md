# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a PhraseBrew legal documentation website built with Astro, designed to host Terms of Service and Privacy Policy pages on GitHub Pages. The project follows a design document in `docs/DESIGN_AND_TASKS.md` that outlines the complete implementation plan for a Japanese language mobile app's legal pages.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Start development server at localhost:4321
pnpm run dev

# Build production site to ./dist/
pnpm run build

# Preview production build locally
pnpm run preview
```

## Tech Stack

- **Astro** - Static site generator (v5.13.0)
- **MDX** - Content format (Markdown with component support)
- **pnpm** - Package manager (v10 specified in mise.toml)
- **TypeScript** - Type checking with strict config
- **GitHub Pages** - Target deployment platform

## Architecture

The project follows Astro's standard structure with plans to implement:

1. **Legal Pages**: Terms of Service (`/terms`) and Privacy Policy (`/privacy`)
2. **Shared Layout**: Common layout component with navigation and footer
3. **Design System**: Custom CSS variables for theming
4. **Content Management**: MDX files for legal content in `src/content/`

### Key Design Decisions (from docs/DESIGN_AND_TASKS.md)

- **Color Palette**: Brand colors including primary (#B8814F), espresso (#4A2E2C), and cream (#F5E6D3)
- **Typography**: BIZ UDPGothic font for Japanese text optimization
- **Responsive Design**: Mobile-first approach with breakpoints at 768px

## Implementation Tasks

The design document outlines 7 phases:
1. Foundation setup (Astro initialization, directory structure)
2. Style configuration (CSS variables, responsive design)
3. Layout implementation (shared components, navigation)
4. Content creation (legal documents in Markdown)
5. Page implementation (Astro pages for terms and privacy)
6. Deployment (GitHub Actions workflow, GitHub Pages setup)
7. Final adjustments (testing, accessibility checks)

## Content References

The legal content is already prepared in markdown format in the `references/` directory and has been copied to MDX format in `src/content/`:

- **`src/content/terms.mdx`**: Complete Terms of Service in Japanese for the PhraseBrew iOS app
- **`src/content/privacy.mdx`**: Complete Privacy Policy in Japanese
- **`references/terms.md`**: Original Terms of Service source
- **`references/privacy-policy.md`**: Original Privacy Policy source

These documents contain the official legal text that should be used when building the pages. Key content includes:
- Service definitions and usage conditions
- Account management and subscription details
- Data handling and privacy practices
- Integration with Google login and RevenueCat for payments
- Translation service powered by Google's gemini-2.5-flash

When implementing the pages, use the MDX files in `src/content/` for the Terms and Privacy Policy pages. MDX allows embedding React/Astro components if needed for enhanced interactivity.

## Important Notes

- The project is currently in initial setup phase with basic Astro structure
- Legal content is already written in Japanese in `references/` directory
- Focus on simplicity, performance (Lighthouse score 95+), and accessibility
- Content already copied from `references/` to `src/content/` as MDX files
- Import MDX content directly in Astro pages for rendering