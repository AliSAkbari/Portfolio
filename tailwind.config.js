/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#AA367C',
        'brand-purple': '#4A2FBD',
        'dark-bg': '#121212',
        'dark-card': '#151515',
        'dark-border': 'rgba(255,255,255,0.1)',
        'text-muted': '#B8B8B8',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
        'brand-gradient-subtle': 'linear-gradient(90.21deg, rgba(170,54,124,0.5) -5.91%, rgba(74,47,189,0.5) 111.58%)',
      },
      fontFamily: {
        centra: ['Centra', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
}
