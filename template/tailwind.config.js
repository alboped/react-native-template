const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    borderWidth: {
      1: '1rpx',
      2: '2rpx',
    },
    padding: {
      10: '10rpx',
      20: '20rpx',
    },
    borderRadius: {
      1: '4rpx',
      2: '6rpx',
      3: '10rpx',
      4: '16rpx',
      5: '20rpx',
      6: '26rpx',
    },
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.resize-repeat': {
          resizeMode: 'repeat',
        },
        '.center': {
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    }),
  ],
};
