const path = require('path');

const config = {
  gzip: true,
  plugins: [
    ['epig-plugin-html', {}],
    ['epig-plugin-copy-server', {}],
    ['epig-plugin-split-chunks', {
      cacheGroups: {
        ['vendor']: {
          test: /[\\/]node_modules[\\/](?!@epig\/luna)/,
          name: 'vendor',
          chunks: 'all',
        },
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
