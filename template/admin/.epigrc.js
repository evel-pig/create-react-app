const path = require('path');

const config = {
  gzip: true,
  plugins: [
    ['epig-plugin-admin', {}],
    ['epig-plugin-html', {}],
    ['epig-plugin-copy-server', {}],
  ],
};

module.exports = config;
