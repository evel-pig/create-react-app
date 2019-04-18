import * as React from 'react';
import RoutetBaseComponent from '@app/components/BaseComponent/RoutetBaseComponent';

export interface HomeProps {
}

export default class Home extends RoutetBaseComponent<HomeProps, any> {
  public render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
