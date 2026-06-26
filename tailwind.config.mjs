/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // CleanRun IQ brand tokens
        navy: {
          DEFAULT: '#121619', // primary dark sections
          dark: '#0C1115',    // deepest dark (footer)
          card: '#1B2025',    // dark card / panel
        },
        brand: {
          DEFAULT: '#20C55E', // electric green action accent
          dark: '#0C7733',    // dark green (badges/text)
          light: '#E1F7E9',   // light green badge bg
        },
        ink: {
          DEFAULT: '#1B2025', // body text on light
          muted: '#6B7280',
          subtle: '#9CA3AF',
        },
        status: {
          open: '#B42318',    // red
          issued: '#B45309',  // amber
          closed: '#0C7733',  // green
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Archivo', 'sans-serif'],
      },
      // Half-step + extra spacing used across the marketing pages
      spacing: {
        '4.5': '1.125rem', // 18px
        '5.5': '1.375rem', // 22px
        '6.5': '1.625rem', // 26px
        '7.5': '1.875rem', // 30px
        '13': '3.25rem',   // 52px
        '18': '4.5rem',    // 72px
      },
    },
  },
  plugins: [],
};
