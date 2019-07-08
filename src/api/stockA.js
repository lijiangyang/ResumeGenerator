import axios from 'axios';

// A股上市概况-基本信息
export const getBasicInfo = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/A/basic/info`);

// A股上市概况-十大股东日期
export const getTenSHDate = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/A/basic/shareHolder/statistic`);

// A股上市概况-十大股东
export const getTenSH = (reportId, date) =>
  axios.get(`/api/report/${reportId}/stock/A/basic/shareHolder?date=${date}`);

// A股上市概况-十大流通股东日期
export const getTenCirSHDate = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/A/basic/circleHolder/statistic`);

// A股上市概况-十大流通股东
export const getTenCirSH = (reportId, date) =>
  axios.get(`/api/report/${reportId}/stock/A/basic/circleHolder?date=${date}`);

// A股上市概况-高管列表
export const getExcutive = (reportId) =>
  axios.get(`/api/report/${reportId}/stock/A/basic/manager`);

// A股上市公告
export const getAAnnouncement = (reportId, params) =>
  axios.get(`/api/report/${reportId}/stock/A/announcement`, {params});

// A股上市公告详情
export const getAAnnountcementDetail = (reportId, scId) =>
  axios.get(`/api/report/${reportId}/stock/A/announcement/detail?scId=${scId}`);

// A股企业研报-列表
export const getReport = ({reportId, params}) =>
  axios.get(`/api/report/${reportId}/stock/A/report`, {params});

// A股企业研报-详情
export const getReportDetail = ({reportId, scId}) =>
  axios.get(`/api/report/${reportId}/stock/A/report/detail`, {params: {scId}});

// A股账务分析-统计
export const getFinanceStatistic = ({ reportId }) =>
axios.get(`/api/report/${reportId}/stock/A/finance/statistic`);

// A股账务分析-详情
export const getFinanceDetail = ({ reportId, date }) =>
axios.get(`/api/report/${reportId}/stock/A/finance/detail?date=${date}`);
