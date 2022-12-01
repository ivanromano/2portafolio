/* @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,vue,tsx}",
    , "./node_modules/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'night-black': '#282D3F',
        'night-red': '#FF406F'
      },

      padding: {
        '0,5': '0.5rem'
      },


      // animate-[wave_2s_ease-in-out_infinite]
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      // animate-waving-hand
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }



    },
  },
purge: [
  './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
]
}
