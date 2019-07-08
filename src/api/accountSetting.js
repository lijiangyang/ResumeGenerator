import axios from 'axios';

export const getTreeList = () => axios.get('/api/user/sub/tree');
export const getUserInfo = uId => axios.get(`/api/user/sub/${uId}`);
export const deleteAccount = uId => axios.delete(`api/user/sub/${uId}`);
export const getReportAndMonitor = uId =>
  axios.get(`/api/user/sub/${uId}/statistic/reportAndMonitor`);
export const getDailyDetail = (uId, params) =>
  axios.get(`/api/user/sub/${uId}/statistic/reportAndMonitor/daily`, {
    params
  });
export const getProvince = uId =>
  axios.get(`/api/user/sub/${uId}/statistic/province`);
export const getIndustry = uId =>
  axios.get(`/api/user/sub/${uId}/statistic/industry`);
export const getScale = uId =>
  axios.get(`/api/user/sub/${uId}/statistic/scale`);
export const getAlertCorp = (uId, params) =>
  axios.get(`/api/user/sub/${uId}/alert`, { params });
export const getConsume = (uId, params) =>
  axios.get(`/api/user/sub/${uId}/consume`, { params });
export const getSummary = (uId, params) =>
  axios.get(`/api/user/sub/${uId}/consume/summary`, { params });
export const getLoginRecord = (uId, params) =>
  axios.get(`/api/user/sub/${uId}/login`, { params });
export const getLoginDevice = (uId) =>
  axios.get(`/api/user/sub/${uId}/device`);
export const deleteLoginDevice = (uId, deviceId, params) =>
  axios.delete(`/api/user/sub/${uId}/device/${deviceId}`, params);
export const addNewUser = params => axios.post(`/api/user/sub`, params);
export const changePwd = (url, params) => axios.put(url, params);
export const editInfo = (url, params) => axios.put(url, params);
// 取消订单
export const cancelOrder = rechargeId =>
  axios.delete(`/api/recharge/${rechargeId}`);
// 修改用户信息
export const changeUserInfo = (userId, params) =>
  axios.put(`/api/user/sub/${userId}`, params);
// 获取套餐使用情况
export const getComsumeDetail = userId =>
  axios.get(`/api/user/sub/${userId}/feeset`);
// 推送预警
export const monitorPush = (userId, params) =>
  axios.put(`/api/user/sub/${userId}/monitorPush`, params);
// 批量上传模板
export const batchUpload = (subUserId, params) =>
  axios.post(`/api/user/sub/${subUserId}/batch/upload`, params);
// 批量上传失败详情下载
export const getBatchBadMsg = (batchId) =>
  axios.get(`/api/user/sub/batch/${batchId}`);
// 获取手机验证码
export const postCaptcha = (subUserId, params) =>
  axios.post(`/api/user/sub/${subUserId}/phone/captcha`, params);
// 获取绑定手机号码验证码
export const getPhoneCaptcha = ({subUserId, phone}) =>
  axios.post(`/api/user/sub/${subUserId}/phone/captcha`, {phone});
// 绑定手机
export const bindPhone = (subUserId, params) =>
  axios.post(`/api/user/sub/${subUserId}/phone/bind`, params);
// 解绑手机
export const unbindPhone = (subUserId, params) =>
  axios.put(`/api/user/sub/${subUserId}/phone/unbind`, params);
// 获取绑定邮箱验证码
export const getEmailCaptcha = ({subUserId, email}) =>
  axios.get(`/api/user/sub/${subUserId}/email/captcha`, {params: {email}});
// 绑定邮箱
export const bindEmail = (subUserId, params) =>
  axios.post(`/api/user/sub/${subUserId}/email/bind`, params);
// 解绑邮箱
export const unbindEmail = (subUserId, params) =>
  axios.put(`/api/user/sub/${subUserId}/email/unbind`, params);
