import axios from 'axios';

// 获取基本信息
export const getBaseInfo = investId =>
  axios.get(`/api/investigation/${investId}/baseInfo`);

// 获取教育背景
export const getEducation = investId =>
  axios.get(`/api/investigation/${investId}/education`);

// 获取法人对外投资的企业
export const getLegalPerson = investId =>
  axios.get(`/api/investigation/${investId}/legalCompany`);
// 对外投资企业 股东
export const getOrgShare = investId =>
  axios.get(`/api/investigation/${investId}/investCompany`);
// 企业主要管理人员 对外任职企业
export const orgExecutive = investId =>
  axios.get(`/api/investigation/${investId}/investPosition`);
// 重大不良记录
export const illegalCheck = investId =>
  axios.get(`/api/investigation/${investId}/illegal`);
// 偷税漏税
export const evadeTax = investId =>
  axios.get(`/api/investigation/${investId}/evadeTaxList`);
// 失信被执行
export const dishonesty = investId =>
  axios.get(`/api/investigation/${investId}/dishonesty`);
// 被执行
export const executed = investId =>
  axios.get(`/api/investigation/${investId}/executed`);
// 股权冻结
export const shareFreeze = investId =>
  axios.get(`/api/investigation/${investId}/shareFreezeList`);
// 无照经营
export const businessLicenseBad = investId =>
  axios.get(`/api/investigation/${investId}/businessLicenseBadList`);
// 行政处罚
export const admPunishment = investId =>
  axios.get(`/api/investigation/${investId}/admPenalInfoList`);
// 准备状态
export const status = investId =>
  axios.get(`/api/investigation/${investId}/status`);
// 资格证书
export const certificate = investId =>
  axios.get(`/api/investigation/${investId}/cert`);
