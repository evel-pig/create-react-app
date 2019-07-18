const path = require('path');

const config = {
  plugins: [
    ['epig-plugin-html', {}],
    ['epig-plugin-hd', {}],
    ['epig-plugin-split-chunks', {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          enforce: true,
          priority: 1,
        },
      },
    }]
  ],
};

module.exports = config;
