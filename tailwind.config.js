/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      top: {
        '675px': '675px',
      },
      height: {
        '620px': '620px',
        '660px': '660px',
        '360px': '360px',
        '540px': '540px',
        '95%': '95%',
        '85%': '85%',
        '68vh': '68vh',
      },
      width: {
        '510px': '510px',
        '480px': '480px',
        '48%': '48%',
        '85%': '85%',
      },
      backgroundImage: {
        'custom-image': 'url(/images/background-image-b.jpg)',
      },
      fontSize: {
        'custom-16': '16px',
        'custom-22': '22px',
        'custom-28': '28px',
      },
      colors: {
        '#d6d6d6': '#d6d6d6'
      },
      animation: {
        'openMenu': 'openMenu 1s ease',
        'closeMenu': 'closeMenu 1s ease'
      },
      keyframes: {
        'openMenu': {
          'from': { transform: 'translateX(100%)'},
          'to': { transform: 'translateX(0%)'},
        },
        'closeMenu': {
          'from': { transform: 'translateX(0%)'},
          'to': { transform: 'translateX(100%)'},
        }
      }
    },
  },
  plugins: [],
}

