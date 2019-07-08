import axios from 'axios';

export const check = params => axios.post('/api/check/id', params);

export const getPageList = params =>
  axios.get('/api/check/id/page', { params });
