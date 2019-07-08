import axios from 'axios';

const activeKeyMap = {
  multi: 'SCORE',
  profit: 'PROFIT',
  operate: 'OPERATION',
  develop: 'GROWING'
};
// 获取统计
export const getAnalysisCount = () =>
  axios.get(`/api/analysisReport/page/statistic`);

// 获取基础报告列表
export const getAnalysisList = (activeKey, params) => {
  const url = `/api/analysisReport/page`;
  return axios.get(url, {
    params: { ...params, dimension: activeKeyMap[activeKey] }
  });
};
