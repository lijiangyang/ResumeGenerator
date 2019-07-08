import axios from 'axios';

export const getCompanyList = (dimGroupTypeStr, params, source) =>
  axios.get(`/api/headline/companyList?${dimGroupTypeStr}`, {
    params,
    cancelToken: source.token
  });
export const getCompanyEvents = (monitorId, params, source) =>
  axios.get(`/api/headline/${monitorId}/events`, {
    params,
    cancelToken: source.token
  });
export const getCompanyInfo = (monitorId, params, source) =>
  axios.get(`/api/headline/${monitorId}/info`, {
    params,
    cancelToken: source.token
  });
export const getSubCompanyList = (dimGroupTypeStr, monitorId, params, source) =>
  axios.get(`/api/headline/${monitorId}/companyList?${dimGroupTypeStr}`, {
    params,
    cancelToken: source.token
  });
export const getMonitorMap = id =>
  axios.get(`/api/monitor/map`, { params: { monitorId: id } });
export const getNewsDetail = (strWithId, params) =>
  axios.get(`/api/${strWithId}/internet/detail`, { params });
export const getBiddingDetail = (strWithId, params) =>
  axios.get(`/api/${strWithId}/operation/bidding/detail`, { params });
export const getJudgeDocDetail = (strWithId, params) =>
  axios.get(`/api/${strWithId}/risk/judgeDoc`, { params });
