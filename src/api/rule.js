import axios from 'axios';
// 获取规则列表
export const getRuleList = params => axios.get('/api/rule/page', { params });
// 获取上级规则列表
export const getRuleShareList = params =>
  axios.get('/api/rule/page/shared', { params });
// 关闭或开启规则
export const getRuleStatus = data => {
  const id = data.rule.id;
  let url = `/api/rule/${id}/status`;
  if (data.type === 'WEBSITE') {
    url = `/api/rule/website/${id}/status`;
  }
  return axios.put(url);
};
// 规则是否分享
export const getRuleShare = (params, share) =>
  axios.put(`/api/rule/${params}/share`, share);
// 获取行业
export const getIndustryList = () => axios.get('/api/common/industry');
// 获取事件类型
export const getTypeList = type =>
  axios.get('/api/rule/dimension', { params: { type } });
// 监控公司列表
export const getMonitorCompany = params =>
  axios.get('/api/rule/monitors', { params });
// 创建规则
export const createRule = (params, templateType) => {
  const url = templateType === 'website' ? '/api/rule/website' : '/api/rule';
  return axios.post(url, params);
};
