# Skyline Digital: Project Map

## Project Overview
A single-page, modern promotional website (Skyline Digital) for a web design and development agency launched by Aryan. It focuses on "Helping clients make more clients" through professional, high-converting websites.


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
-   **`Portfolio.tsx`**: Showcases previous projects or case studies (linked to internal routes).
-   **`Process.tsx`**: Outlines the steps taken from client onboarding to delivery.
-   **`About.tsx`**: Information about the team or philosophy.
-   **`Contact.tsx`**: Form/information to reach out to the agency (the main call to action).
-   **`Footer.tsx`**: Final page content and links.
-   **`Doodles.tsx`**: Decorative SVG or illustrative assets.

### Integrated Websites (`src/websites/`):
Contains direct source code of external project demos, connected via React Router:
-   **`CLINIC`**: Healthcare template.
-   **`CORPORATE_WEBSITE`**: Business template.
-   **`E_COMMERCE`**: Online store template.
-   **`GYM_WEBSITE`**: Fitness template.
-   **`PORTFOLIO`**: Personal branding template.
-   **`RESTAURANT`**: F&B template.

### Custom Hooks (`src/hooks/`):
-   **`useScrollAnimation.ts`**: Handles intersection observers or scroll listeners to trigger CSS entry animations as the user scrolls down the page.

## Data Flow & State Management
-   Currently entirely front-end driven.
-   Uses `react-router-dom` for seamless internal navigation between the Landing Page and project demos.
-   Force-triggers `resize` and `scroll` events on navigation to maintain animation visibility.

## Next Steps / Pending
-   Connect the **Contact** form to an actual backend (Supabase).
-   Fine-tune individual project assets (ensure image paths in `src/websites` are correctly resolved).
-   Add **Orbital Craft** integration if requested.
