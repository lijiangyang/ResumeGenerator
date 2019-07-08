import axios from 'axios';

// 股权冻结
export const getSharesFreeze = reportId =>
  axios.get(`/api/report/${reportId}/risk/freeze`);
// 股权质押
export const getSharesImpawn = reportId =>
  axios.get(`/api/report/${reportId}/risk/pledge`);
// 股权转让
export const getSharesTransfer = reportId =>
  axios.get(`/api/report/${reportId}/risk/transfer`);
// 动产抵押
export const getReportModule = (reportId, params) =>
  axios.get(`/api/report/${reportId}/movables`, { params });
