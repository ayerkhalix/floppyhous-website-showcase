# FloppyHaus Website Showcase

A polished marketing and event showcase website for **FloppyHous**, built with Next.js, React, Tailwind CSS, and Framer Motion.

This project presents the brand through an immersive homepage, event listing pages, and individual event detail views with rich media, countdowns, testimonials, and a contact flow.

## Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Data Model and Content Management](#data-model-and-content-management)
- [UI and Design System](#ui-and-design-system)
- [Routing and Page Map](#routing-and-page-map)
- [Animation and Interactions](#animation-and-interactions)
- [Contact Flow Behavior](#contact-flow-behavior)
- [Performance and Production Notes](#performance-and-production-notes)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)
- [Roadmap Ideas](#roadmap-ideas)

## Project Overview

This repository is a complete website showcase for an event production company.

The site focuses on:

- brand storytelling
- promoting upcoming and previous events
- presenting event detail pages with rich metadata
- collecting event inquiries through a styled contact form

The codebase is organized for easy iteration of event content and section-level UI components.

## Core Features

- Dynamic homepage built from reusable section components
- Events index page with client-side filtering (`all`, `upcoming`, `previous`)
- Event detail pages using dynamic routes (`/events/[id]`)
- Countdown timer for upcoming events based on event `startsAt`
- Media gallery and highlight/testimonial blocks per event
- Responsive design optimized for desktop and mobile
- Framer Motion animation for entrances, transitions, and interaction polish
- Theme handling via `next-themes`
- Production analytics enabled through `@vercel/analytics`

## Tech Stack

### Framework and Runtime

- Next.js `16.2.3`
- React `19.2.4`
- TypeScript `5.7.3`

### Styling and UI

- Tailwind CSS `4.2.0`
- shadcn-style component patterns under `components/ui/*`
- Radix UI primitives
- Lucide icons (`lucide-react`)

### Motion and UX

- Framer Motion `11.11.0`

### Forms and Validation Libraries Available

- `react-hook-form`
- `zod`
- `@hookform/resolvers`

Note: The current contact implementation uses local component state and a simulated async submit, not API persistence.

## Project Structure

```text
floppyhaus/
  app/
    layout.tsx               # Root layout + metadata + theme provider + analytics
    page.tsx                 # Homepage composition
    events/
      page.tsx               # Events listing + filter UI
      [id]/page.tsx          # Event detail page
  components/
    navbar.tsx
    footer.tsx
    event-card.tsx
    countdown-timer.tsx
    sections/                # Homepage and detail-page content sections
    ui/                      # Reusable UI component library
  hooks/
    use-mobile.ts
    use-toast.ts
  lib/
    events.ts                # Event data and helper selectors
    utils.ts                 # Utility helpers
  public/
    images/                  # Event and logo assets
  styles/
    globals.css
```

## Getting Started

### 1. Install dependencies

Choose one package manager and run one install command:

```bash
npm install
```

or

```bash
pnpm install
```

### 2. Run development server

```bash
npm run dev
```

Then open:

- `http://localhost:3000`

### 3. Build and run production locally

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Run built app
- `npm run lint`: Run ESLint over the project

## Data Model and Content Management

Event content is currently managed in-code in:

- `lib/events.ts`

Each event follows the `Event` interface and supports fields such as:

- `id`, `title`, `date`, `time`, `startsAt`
- `location`, `description`, `shortDescription`, `tagline`
- `image`, `images`, `videos`
- `artists`, `capacity`, `tags`
- `highlights`, `testimonials`

### Event helper utilities

`lib/events.ts` includes utility functions for page behavior:

- `isEventUpcoming(event)`
- `getUpcomingEvents()`
- `getPreviousEvents()`
- `getEventById(id)`
- `getNextEvent()`

If you add new events, ensure:

- `id` values remain unique
- `startsAt` uses valid ISO datetime (with timezone)
- `image` and `images` paths point to existing files in `public/`

## UI and Design System

The project uses a component-driven architecture:

- page-level composition in `app/*`
- domain-specific sections in `components/sections/*`
- foundational UI in `components/ui/*`

Theming is handled in `app/layout.tsx` via `ThemeProvider`:

- `attribute="class"`
- `defaultTheme="dark"`
- `enableSystem`

## Routing and Page Map

- `/` -> Homepage showcase
- `/events` -> Event listing with filters
- `/events/[id]` -> Event detail page

Event detail pages resolve by matching route param `id` to entries in `lib/events.ts`.

## Animation and Interactions

Framer Motion is used across sections and page transitions for:

- staggered entrances
- subtle hover and movement effects
- on-scroll reveal patterns

This keeps the site lively while maintaining readable structure.

## Contact Flow Behavior

The contact section (`components/sections/contact-section.tsx`) currently:

- stores values in local state
- simulates a submit delay using `setTimeout`
- shows a temporary success message
- does not send data to a backend yet

To make it production-ready, connect it to:

- a Next.js route handler (`app/api/...`)
- a transactional email service
- CRM storage (optional)

## Performance and Production Notes

- Next.js App Router helps with route-level performance patterns
- Static assets are served from `public/`
- Vercel Analytics is enabled only in production mode (`NODE_ENV === 'production'`)
- Keep image assets optimized to reduce transfer size on mobile

## Deployment

### Vercel (recommended)

1. Import this repository into Vercel
2. Framework preset: `Next.js`
3. Build command: `npm run build`
4. Output: default Next.js output

No mandatory environment variables are currently required for basic rendering.

### Other Platforms

Any platform that supports Next.js standalone/build output can be used (Netlify, Railway, custom Node host), with corresponding adapter setup as needed.

## Customization Guide

### Update brand text

- Homepage and section copy: `components/sections/*`
- Metadata title/description: `app/layout.tsx`

### Add or update events

- Edit `lib/events.ts`
- Add image assets under `public/images`
- Ensure `startsAt` reflects the correct local event timezone

### Adjust look and feel

- Global styles: `app/globals.css`, `styles/globals.css`
- Tailwind tokens and theme config: `tailwind.config.ts`
- UI primitives: `components/ui/*`

### Replace simulated contact submit

- Move submit logic to an API endpoint
- Add validation using `zod` + `react-hook-form`
- Provide failure states and retry handling in UI

## Troubleshooting

### Build issues with dependencies

- remove `node_modules`
- reinstall dependencies
- re-run `npm run build`

### Dynamic event page shows not found

- verify the `id` in the URL exists in `lib/events.ts`

### Animations feel heavy on low-end devices

- reduce animation durations
- disable nonessential motion for certain breakpoints

## Roadmap Ideas

- Connect contact form to real backend/API
- Add CMS-backed event management
- Add SEO enhancements (Open Graph images, event schema)
- Add gallery video support on detail pages
- Add ticketing or reservation integration

---

Built as a showcase for **FloppyHous** to highlight event creativity, production quality, and client-ready presentation.