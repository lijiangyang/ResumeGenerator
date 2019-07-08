import axios from 'axios';

// 获取网贷黑名单记录
export const getP2b = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/p2b/page`,
    { params }
  );

// 获取多头借贷记录
export const getLends = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/lends/page`,
    { params }
  );

// 获取失信被执行记录
export const getDishonesty = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/dishonesty/page`,
    { params }
  );

// 获取被执行记录
export const getExecute = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/execute/page`,
    { params }
  );

// 获取行政处罚
export const getPunish = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/punish/page`,
    { params }
  );

// 获取偷税漏税
export const getTax = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/tax/page`,
    { params }
  );

// 获取无照经营处罚
export const getBusinessLicense = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/businessLicense/page`,
    { params }
  );

// 获取股权冻结
export const getPledgeFreeze = (antiFraudId, params) =>
  axios.get(
    `/api/antifraud/${antiFraudId}/filter/main/personnelRisk/pledgeFreeze/page`,
    { params }
  );
