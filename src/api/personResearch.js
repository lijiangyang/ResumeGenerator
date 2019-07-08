import axios from 'axios';

// 获取列表
export const getInvestigation = params =>
  axios.get('/api/investigation', { params });

// 发起背调
export const requestPostInvestigation = (params, cancelToken) =>
  axios.post('/api/investigation', params, cancelToken);

// 取消调查
export const getCancel = id => axios.delete(`/api/investigation/${id}`);

// 生成报告
export const createReport = id => axios.post(`/api/investigation/${id}`);

// 重新返送验证码
export const reSendCode = id => axios.post(`/api/investigation/${id}/code`);
