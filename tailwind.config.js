/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
        display: ['var(--font-display)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Libre Baskerville', 'serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        surface: 'var(--color-surface)',
        'surface-accent': 'var(--color-surface-accent)',
        'text-dim': 'var(--color-text-dim)',
        'clinic-green': 'var(--clinic-green)',
        'clinic-cream': 'var(--clinic-cream)',
        'clinic-charcoal': 'var(--clinic-charcoal)',
        'clinic-orange': 'var(--clinic-orange)',
        'clinic-beige': 'var(--clinic-beige)',
      },
    },
  },
  plugins: [],
};
