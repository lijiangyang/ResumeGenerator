import axios from 'axios';

export const getCompletion = params =>
  axios.get('/api/company/search/suggest', params);
