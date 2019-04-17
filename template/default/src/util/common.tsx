import constants from './constants';

export function getApiUrl() {
  if (constants.DEVELOPMENT) {
    return '/api';
  } else {
    const baseUrl = window['serverUrl'];
    return `${baseUrl}`;
  }
}
