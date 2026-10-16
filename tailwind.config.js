/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ges: {
          navy: {
            800: '#1b2a47',
            900: '#101e33',
            950: '#0a1220',
          },
          blue: {
            500: '#2563eb',
            600: '#1d4ed8',
            700: '#1e40af',
          },
          sand: {
            50: '#faf9f5',
            100: '#f5f4ed',
            200: '#e8e5db',
            300: '#d7d2c3',
          },
          crimson: {
            500: '#dc2626',
            600: '#c8322b',
            700: '#991b1b',
          },
          gold: {
            400: '#d4af37',
            500: '#c5a059',
            600: '#a3803d',
          }
        }
      },
      fontFamily: {
        serif: ['var(--font-editorial)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
