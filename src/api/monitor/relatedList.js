import axios from 'axios';
// 获取关联监控企业列表数据
export const getRelatedList = (monitorId, type, params) => {
  const queryStr = `${['', ...type].join('&type=')}`;
  return axios.get(`/api/monitor/${monitorId}/companyList?${queryStr}`, {params});
};
