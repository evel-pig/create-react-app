import BaseComponent from './index';
import { RouteComponentProps } from 'react-router';

export interface RoutetBaseComponentProps<P> extends RouteComponentProps<P> {
}

export default class RoutetBaseComponent<P = any, S = any, Params = any> extends BaseComponent<RoutetBaseComponentProps<Params> & P, S> {
  getLocationState = () => {
    return this.props.location.state || {};
  }
}
