import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router';
import './styles/index.less';
import { getApiUrl } from '@app/util/common';
import api from '@app/util/api';

api.setBasePath(getApiUrl);

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

declare const module: any;
if (module.hot) {
  module.hot.accept();
}
