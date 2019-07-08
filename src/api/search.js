import axios from 'axios';

export const getCompanyList = params =>
  axios.get('/api/company/search', params);
export const getHistory = () => axios.get(`/api/company/search/history`);
export const getFilterSearch = params =>
  axios.post(`/api/company/search/filter`, params);
export const getRelation = monitorId =>
  axios.get(`/api/monitor/${monitorId}/network`);
export const createReport = params =>
  axios.post(`/api/report`, { companyName: params });
export const createAnalysisReport = params =>
  axios.post(`/api/analysisReport`, { companyName: params });
export const createMonitor = (params, url) => axios.post(`${url}`, params);
export const getFeedBack = params =>
  axios.post(`/api/company/search/feedback`, params);
export const getSuggest = params =>
  axios.get('/api/company/search/suggest', params);
export const getExist = params =>
  axios.get(`/api/common/exist?companyName=${params}`);
export const getCompletion = params =>
  axios.get('/api/company/search/suggest', params);
export const exist = params =>
  axios.get(`/api/common/exist?companyName=${params}`);
// 获取公司各种id情况
export const getCompanyId = params =>
axios.get('/api/common/status', { params });
