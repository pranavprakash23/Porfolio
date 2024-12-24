/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'title-color': 'hsl(0, 0, 20%)',
      'title-color-dark': 'hsl(0, 0, 0%)',
      'text-color': 'hsl(0, 0, 46%)',
      'body-color': 'hsl(0, 0, 98%)',
      'container-color': '#fff',
    },
    extend: { 
      boxShadow: {
        'profile-pic': '0 0 0 9px rgba(117, 117, 117, 100%)',
      },
      backgroundImage: {
        'profile-pic': "url('/src/assets/profilepic.jpg')",
      },
      keyframes: {
        profile_animate: {
          '0%': { borderRadius: '60% 40% 60% 70% / 60% 30% 70% 60%' },
          '50%': { borderRadius: '50% 60% 70% 60% / 50% 60% 30% 40%' },
          '100%': { borderRadius: '60% 40% 50% 70% / 60% 50% 60% 70%' }
        },
        scroll:{
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(14px)' },
        }
      },
      animation: {
        'profile_animate': 'profile_animate 12s ease-in-out infinite 1s',
        'scroll':'scroll 2s ease infinite',
      }
    },
  },
  plugins: [],
}

