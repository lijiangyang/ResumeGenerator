import axios from 'axios';

export const getReportModule = (urlStr, idParams, params) => {
  const url = `/api/report/${idParams.reportId}/${urlStr}`;
  // 设置axios取消事件
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  if (window.reportSourceCancel === undefined) {
    window.reportSourceCancel = [];
  }
  window.reportSourceCancel.push(source.cancel);
  return axios.get(url, { cancelToken: source.token, params });
};
