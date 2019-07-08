import axios from 'axios';

export const getStatistic = () => axios.get('/api/market/blacklist/statistic');
export const getIndustry = params =>
  axios.get(`/api/market/blacklist/industry`, { params });
export const getRecent = config => {
  let _config = { params: config };
  if (config.cancelToken) {
    _config = {};
    _config.params = config.params;
    _config.cancelToken = config.cancelToken;
  }
  return axios.get(`/api/market/blacklist/recent`, _config);
};
export const getIncrement = params =>
  axios.get(`/api/market/blacklist/monthlyIncrement`, { params });
export const getArea = params =>
  axios.get(`/api/market/blacklist/areaDistribution`, { params });
