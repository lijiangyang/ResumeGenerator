import axios from 'axios';

// 新三板上市公告-列表
export const getAnnouncementList = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/XSB/announcement`);

// 新三板企业研报-详情
export const getAnnouncementDetail = ({reportId, scId}) =>
  axios.get(`/api/report/${reportId}/stock/XSB/announcement/detail`, {params: scId});

// 新三板账务分析-统计
export const getFinanceStatistic = ({ reportId }) =>
  axios.get(`/api/report/${reportId}/stock/XSB/finance/statistic`);

// 新三板账务分析-详情
export const getFinanceDetail = ({ reportId, year }) =>
  axios.get(`/api/report/${reportId}/stock/XSB/finance/detail?year=${year}`);
// 新三板上市概括-基本资料
export const getBasic = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/XSB/basic/info`);

// 新三板上市概括-十大股东列表
export const getShareHolder = (reportId, date) =>
  axios.get(`/api/report/${reportId}/stock/XSB/basic/shareHolder?date=${date}`);

// 新三板上市概括-十大股东统计
export const getShareHolderStatistic = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/XSB/basic/shareHolder/statistic`);

// 新三板上市概括-高管列表
export const getManager = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/XSB/basic/manager`);
