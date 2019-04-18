import api from '@app/util/api';
import { useState, useEffect } from 'react';

/**
 * fetch hooks
 * @param url 请求地址
 * @param params 请求参数
 * @param options fetch options
 * @param requestFirstTime 第一次是否请求
 */
export default function useFetch<T = any>(url: string, params = {}, options: any = {}, requestFirstTime = true) {
  const [ data, setData ] = useState({} as T);
  const [ loading, setLoading ] = useState(false);
  let canSetData = true;
  function request(newUrl = url, newParams = params, newOptions = options) {
    setLoading(true);
    canSetData = true;
    api.request(newUrl || url, newParams, newOptions).then(resData => {
      if (canSetData) {
        setLoading(false);
        setData(resData);
      }

    }).catch(err => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (requestFirstTime) {
      request();
    }

    return (() => {
      canSetData = false;
    });
  }, [url]);

  return {
    data,
    request,
    loading,
  };
}
