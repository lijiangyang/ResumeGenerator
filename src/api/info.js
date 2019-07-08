import axios from 'axios';

export const getReportModule = (urlStr, idParams, params) => {
  const reportUrl = `/api/report/${idParams.reportId}/`;
  let url;
  switch (urlStr) {
    case 'corp/corpDetail':
    case 'corp/corpAlter':
    case 'corp/yearReport':
    case 'internet':
    case 'operation/trademark':
    case 'operation/patent':
    case 'operation/bidding':
    case 'team/recruit':
    case 'team/analysis':
      url = reportUrl + urlStr;
      break;
    default:
      return false;
  }
  // 设置axios取消事件
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  if (window.reportSourceCancel === undefined) {
    window.reportSourceCancel = [];
  }
  window.reportSourceCancel.push(source.cancel);
  return axios.get(url, { cancelToken: source.token, params });
};
