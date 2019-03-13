import React from 'react';
import App from '@epig/luna';
import Root from './router';
import { reducers, sagas } from './models';
import './styles/index.less';
import { getApiUrl } from '@app/util/common';
import '@babel/polyfill';

const app = new App({
  model: {
    basePath: getApiUrl,
  },
  store: {
    middlewares: [],
  },
  render: () => {
    return (
      <Root />
    );
  },
  persistConfig: {
    key: '<%= appName %>',
  },
});

app.model(reducers, {
  ...sagas,
});

app.persist();

app.start('root');
