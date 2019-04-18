import * as React from 'react';
import { Router } from 'react-router';
import DocumentTitle from 'react-document-title';
import history from '@app/util/history';
import connect from '@epig/luna/lib/connect';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';

interface RootProps {
}

class Root extends React.Component<RootProps, any> {
  render() {
    return (
      <DocumentTitle title="">
        <Router history={history}>
          <Route
            path="/"
            exact
            component={Home}
          />
        </Router>
      </DocumentTitle>
    );
  }
}

export default connect({
})(Root);
