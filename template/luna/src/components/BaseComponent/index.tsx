import * as React from 'react';

export interface BaseComponentProps {
  dispatch: any;
}

export default class BaseComponent<P = any, S = any> extends React.Component<BaseComponentProps & P, S> {
  dispatch = (action) => {
    this.props.dispatch(action);
  }
}
