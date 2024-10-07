/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
      function ({ addUtilities }) {
        addUtilities({
          '.no-scrollbar': {
            /* Hide scrollbar for WebKit browsers */
            '-webkit-overflow-scrolling': 'touch',
            'scrollbar-width': 'none',
            '-ms-overflow-style': 'none', /* IE and Edge */
          },
          '.no-scrollbar::-webkit-scrollbar': {
            display: 'none', /* Hide scrollbar for Chrome, Safari, etc. */
          },
        });
      },
    
  ],
}