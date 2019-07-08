import axios from 'axios';

export function getRiskScanStatus(antiFraudId, source) {
  return axios.get(`/api/antifraud/${antiFraudId}/status`, {
    cancelToken: source.token
  });
}

export function getRiskBar({ antiFraudId, scanType, moduleKey }, source) {
  return axios.get(`/api/antifraud/${antiFraudId}/${scanType}/${moduleKey}`, {
    cancelToken: source.token
  });
}

export function getRiskContent(
  { antiFraudId, scanType, moduleKey },
  params,
  source
) {
  // 经营状态api格式不一样 所以需要单独处理
  if (moduleKey === 'saicStatus') {
    return axios.get(`/api/antifraud/${antiFraudId}/${scanType}/${moduleKey}`, {
      cancelToken: source.token,
      params
    });
  }
  return axios.get(
    `/api/antifraud/${antiFraudId}/${scanType}/${moduleKey}/page`,
    { cancelToken: source.token, params }
  );
}

export function reScan(antiFraudId, source) {
  return axios.put(`/api/antifraud/${antiFraudId}`, null, {
    cancelToken: source.token
  });
}

export function getMainBanner(antiFraudId) {
  return axios.get(`/api/antifraud/${antiFraudId}/main/banner`);
}

export function getRelatedBanner(antiFraudId, companyName) {
  return axios.get(`/api/antifraud/${antiFraudId}/related/banner`, {
    params: { companyName }
  });
}

export function getDataList(
  { antiFraudId, scanType, moduleKey },
  params,
  source
) {
  if (scanType === 'related' && moduleKey === 'abnormal') {
    return axios.get(`/api/antifraud/${antiFraudId}/related/abnormal/details`, {
      cancelToken: source.token,
      params
    });
  }
  return axios.get(
    `/api/antifraud/${antiFraudId}${
      scanType === 'main' ? '/filter' : ''
    }/${scanType}/${moduleKey}/page`,
    { cancelToken: source.token, params }
  );
}

export function getParamFilter(moduleKey, antiFraudId) {
  return axios.get(`/api/antifraud/${antiFraudId}/filter/main/${moduleKey}`);
}

export function getCount(scanType, antiFraudId, companyName) {
  const params = scanType === 'main' ? {} : { companyName };
  const filterPath = scanType === 'main' ? '/filter' : '';
  return axios.get(
    `/api/antifraud/${antiFraudId}${filterPath}/${scanType}/statistic`,
    { params }
  );
}

// 预测结论
export const getDishonestyRisk = antiFraudId =>
  axios.get(`/api/antifraud/${antiFraudId}/main/dishonestyRisk`);

// 风险预测
export const getRiskPredictionData = antiFraudId =>
  axios.get(`/api/antifraud/${antiFraudId}/main/riskPrediction`)
// 历史风险预测
export const getRiskPredictHistory = antiFraudId =>
  axios.get(`/api/antifraud/${antiFraudId}/main/riskPrediction/history`)
// 第四版风险预测数据
export const getRiskPredictDataByType = (antiFraudId, type) => {
  const apiDict = {
    shixin: `/api/antifraud/${antiFraudId}/main/riskPredictionShixin`,
    shell: `/api/antifraud/${antiFraudId}/main/riskPredictionShell`,
    bankrupt: `/api/antifraud/${antiFraudId}/main/riskPredictionBankrupt`
  };
  return axios.get(apiDict[type]);
}
// v6.7=>获取关联路径
export const getRelatedRoute = ({ antiFraudId, companyName, relationship }) =>
  axios.get(`/api/antifraud/${antiFraudId}/related/route`, {params: {companyName, relationship}});
