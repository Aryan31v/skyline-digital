# WebCraft Landing Page: Project Map

## Core Objective
A single-page, modern promotional website (Landing Page) for a web design and development agency launched by Aryan. It focuses on "Helping clients make more clients" through professional, high-converting websites.

## Proposed Tech Stack
-   **Framework:** React 18 with Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS, PostCSS (Vanilla CSS for custom animations in `index.css`)
-   **Icons:** Lucide React
-   **Contact Channels:** WhatsApp (+91 92271 91101), Email (vadhelaryan31@gmail.com), Instagram (@the_learner_09)

## App Architecture & Layout
The application is structured as a continuous scrolling single-page site. The main orchestrator is `App.tsx`, which wraps a series of feature components.

### Core Structure:
1.  **`src/App.tsx`**: Main entry point that sets the document title, initializes global hooks (`useScrollAnimation`), and renders the `CustomCursor`, `Navbar`, main content sections, and `Footer`.
2.  **`src/main.tsx`**: Standard React DOM mount point.
3.  **`src/index.css`**: Global stylesheet including Tailwind directives.

### Sections & Components (`src/components/`):
-   **`CustomCursor.tsx`**: Implements custom mouse pointer styling/logic for enhanced UI interactivity.
-   **`Navbar.tsx`**: Top navigation layer.
-   **`Hero.tsx`**: Initial, above-the-fold content designed to hook visitors.
-   **`Marquee.tsx`**: Infinite scrolling text or logo banner.
-   **`Services.tsx`**: Displays the technical or creative offerings.
-   **`Portfolio.tsx`**: Showcases previous projects or case studies.
-   **`Process.tsx`**: Outlines the steps taken from client onboarding to delivery.
-   **`About.tsx`**: Information about the team or philosophy.
-   **`Contact.tsx`**: Form/information to reach out to the agency (the main call to action).
-   **`Footer.tsx`**: Final page content and links.
-   **`Doodles.tsx`**: Decorative SVG or illustrative assets meant to supplement the design of other sections.

### Custom Hooks (`src/hooks/`):
-   **`useScrollAnimation.ts`**: Handles intersection observers or scroll listeners to trigger CSS entry animations as the user scrolls down the page.

## Data Flow & State Management
-   Currently entirely front-end driven.
-   No external data-fetching logic is active yet.

## Next Steps / Pending
-   Connect the **Contact** form to an actual backend (potentially utilizing the installed Supabase client).
-   Populate content if currently utilizing placeholder text.
