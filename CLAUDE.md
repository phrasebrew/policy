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
- **pnpm** - Package manager (v10 specified in mise.toml)
- **TypeScript** - Type checking with strict config
- **GitHub Pages** - Target deployment platform

## Architecture

The project follows Astro's standard structure with plans to implement:

1. **Legal Pages**: Terms of Service (`/terms`) and Privacy Policy (`/privacy`)
2. **Shared Layout**: Common layout component with navigation and footer
3. **Design System**: Custom CSS variables for theming, including dark mode support
4. **Content Management**: Markdown files for legal content in `src/content/`

### Key Design Decisions (from docs/DESIGN_AND_TASKS.md)

- **Color Palette**: Brand colors including primary (#B8814F), espresso (#4A2E2C), and cream (#F5E6D3)
- **Typography**: BIZ UDPGothic font for Japanese text optimization
- **Responsive Design**: Mobile-first approach with breakpoints at 768px
- **Dark Mode**: Automatic detection using `prefers-color-scheme`

## Implementation Tasks

The design document outlines 7 phases:
1. Foundation setup (Astro initialization, directory structure)
2. Style configuration (CSS variables, responsive design, dark mode)
3. Layout implementation (shared components, navigation)
4. Content creation (legal documents in Markdown)
5. Page implementation (Astro pages for terms and privacy)
6. Deployment (GitHub Actions workflow, GitHub Pages setup)
7. Final adjustments (testing, accessibility checks)

## Content References

The legal content is already prepared in markdown format in the `references/` directory:

- **`references/terms.md`**: Complete Terms of Service in Japanese for the PhraseBrew iOS app
- **`references/privacy-policy.md`**: Complete Privacy Policy in Japanese

These documents contain the official legal text that should be used when building the pages. Key content includes:
- Service definitions and usage conditions
- Account management and subscription details
- Data handling and privacy practices
- Integration with Google login and RevenueCat for payments
- Translation service powered by Google's gemini-2.5-flash

When implementing the pages, use these markdown files as the source content for the Terms and Privacy Policy pages.

## Important Notes

- The project is currently in initial setup phase with basic Astro structure
- Legal content is already written in Japanese in `references/` directory
- Focus on simplicity, performance (Lighthouse score 95+), and accessibility
- Copy content from `references/` when creating pages in `src/content/` or directly import in Astro pages