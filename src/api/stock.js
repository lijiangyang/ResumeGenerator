import axios from 'axios';

// 上市概况
export const getAnnouncement = (reportId, params) =>
  axios.get(`/api/report/${reportId}/stock/announcement`, { params });
// 上市公告
export const getStockInfo = reportId =>
  axios.get(`/api/report/${reportId}/stock/company`);
// 公告类型
export const getStockType = reportId =>
  axios.get(`/api/report/${reportId}/stock/announcement/type`);
