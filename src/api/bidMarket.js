import axios from 'axios';

// 获取全国分布
export const getCountry = params =>
  axios.get('/api/market/bidding/country', params);

// 获取省级或者市级分布
export const getArea = params => axios.get('/api/market/bidding/area', params);

// 获取变化趋势
export const getTrend = params =>
  axios.get('/api/market/bidding/trend', params);

// 获取中标金额排行
export const getRank = params =>
  axios.get('/api/market/bidding/area/rank', params);

// 获取招投标列表
export const getInfo = params =>
  axios.get('/api/market/bidding/area/info', params);

// 获取招投标详情
export const getBidMarketDetail = announceId =>
  axios.get(`/api/market/bidding/area/info/detail`, { params: { announceId } });
