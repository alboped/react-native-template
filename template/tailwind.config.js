const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        'radius-10': 10,
        'radius-20': 20,
        'radius-30': 30,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.radius': {
          borderRadius: 10,
        },
        '.resize-repeat': {
          resizeMode: 'repeat',
        },
      });
    }),
  ],
};
