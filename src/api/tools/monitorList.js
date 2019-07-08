import axios from 'axios';

export const getMainList = (params, source) =>
  axios.get(`/api/monitor/companyList`, {
    params,
    cancelToken: source.token
  });
export const changeMonitorStatus = params => {
  const { monitorId, status } = params;
  return axios.put(`/api/monitor/${monitorId}/status/main`, { status });
};
export const renewal = params =>
  axios.put(`/api/monitor/${params.monitorId}/renewal`, { time: params.time });
export const getBatchStatus = () =>
  axios.get(`/api/monitor/batch/status`);
export const batchUpload = (params) =>
  axios.post(`/api/monitor/batch/upload`, params, {
    headers: {'Content-Type': 'multipart/form-data'}
  });
export const getStatistic = (params) => axios.get(`/api/monitor/statistic`, { params });

export const getGroupList = ({companyName, monitorStatus}) =>
  axios.get(`/api/monitor/group?companyName=${companyName}&monitorStatus=${monitorStatus}`);
