import axios from 'axios';

export const getCompanyList = params =>
  axios.get('/api/user/history', { params });
