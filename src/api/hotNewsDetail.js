import axios from 'axios';

export const getDetail = params =>
  axios.get('/api/home/news/detail', { params });
