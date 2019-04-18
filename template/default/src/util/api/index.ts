import xFetch from './xFetch';

/**
 * 格式化查询参数
 * @param obj 查询对象
 * @returns 查询字符串
 */
function getQueryString(obj) {
  let str = '';
  if (!obj) {
    return str;
  }
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== 'undefined') {
      str += `${key}=${obj[key]}&`;
    }
  });
  str = str.replace(/\&$/, '');

  return str;
}

/**
 * // react class component
 * example: api.request('/system/test').then(data => {});
 *
 * // react function component
 * import useFetch from '@app/hooks';
 * example: const { data } = useFetch('/system/test);
 */
class Api {
  private basepath: () => string;

  setBasePath(basePath) {
    this.basepath = basePath;
  }

  /**
   * 网络请求
   * @param url 请求地址
   * @param data 请求参数
   * @param options fetch options
   */
  request<T = any>(url, data = {}, options: any = {
    method: 'get',
  }) {
    return new Promise<T>((resolve, reject) => {
      options = {
        method: 'get',
        ...options,
      };
      try {
        if (options.method === 'get') {
          let query = getQueryString(data);
          if (query) {
            url += '?' + query;
          }
        } else {
          options = {
            ...options,
            body: JSON.stringify(data) || null,
          };
        }
        xFetch(`${this.basepath()}${url}`, options).then(resData => {
          resolve(resData);
        }).catch(err => {
          reject(err);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}

const api = new Api();

export default api;
