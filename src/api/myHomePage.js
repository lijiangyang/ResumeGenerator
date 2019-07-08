import axios from 'axios';

export const getMyHomePageStatistic = () =>
  axios.get('/api/user/index/statistic');
export const getMyHomePageAlert = params =>
  axios.get('/api/user/index/alert', { params });
