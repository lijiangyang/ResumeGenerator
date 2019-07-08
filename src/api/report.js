import axios from 'axios';

// 判决文书
export const getJudgeDocPages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/judgeDoc/page`, config);
// 法院公告
export const getCourtAnnouncementPages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/courtAnnouncement/page`, config);
// 开庭公告
export const getCourtNoticePages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/courtNotice/page`, config);
// 被执行
export const getCourtExecutedPages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/courtExecuted/page`, config);
// 失信
export const getCourtDishonestyPages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/courtDishonesty/page`, config);
// 司法拍卖
export const getCourtJudicialSalePages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/courtJudicialSale/page`, config);
// 案件信息
export const getCourtCasePages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/risk/courtCase/page`, config);
// 违法记录
export const getIllegalPages = ({ reportId }) =>
  axios.get(`/api/report/${reportId}/risk/illegal`);
// 经营异常
export const getAbnormalPages = ({ reportId }) =>
  axios.get(`/api/report/${reportId}/risk/abnormal`);
// 抽查检查
export const getCheckPages = ({ reportId }) =>
  axios.get(`/api/report/${reportId}/risk/check`);
// 动产融资
export const getChattelFinancePages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/chattelFinance`, config);

// 新三板上市公告
export const getStockXSBAnnouncementPages = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/stock/XSB/announcement`, config);

// 新三板上市公告详情
export const getStockXSBAnnouncementDetail = ({ reportId, config }) =>
  axios.get(`/api/report/${reportId}/stock/XSB/announcement/detail`, config);

// 新三板上市公告详情
export const getStockAnnouncementDetail = ({ reportId, stockType, config }) =>
  axios.get(`/api/report/${reportId}/stock/${stockType}/announcement/detail`, config);

