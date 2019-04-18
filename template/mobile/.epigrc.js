const path = require('path');

const config = {
  outputPath: 'dist/static',
  plugins: [
    ['epig-plugin-hd'],
    ['epig-plugin-html', { inject: true, template: path.resolve('./public/index.html') }],
    ['epig-plugin-copy-server', { output: 'dist' }],
  ],
  chainWebpack: (config, { webpack }) => {
    config.resolve.modules.add('styles');
    config.optimization.splitChunks({
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          enforce: true,
          priority: 1,
        },
      },
    });
  },
};

module.exports = config;
