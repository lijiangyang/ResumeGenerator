import axios from 'axios';
// 公司跳转接口
export const getNameType = params =>
  axios.get('/api/common/status', { params });

// 公司是否存在
export const getCompanyExist = params =>
  axios.get(`/api/common/exist?companyName=${params}`);

// 获取公司状态 是否常见监控 报告  反欺诈等等
export const getCompanyStatus = companyName =>
  axios.get(`/api/common/status?companyName=${companyName}`);

// 查看公司是否有债券发行信息
export const getCompanyBondInfo = companyName =>
  axios.get(`/api/bond/exist?companyName=${companyName}`);
