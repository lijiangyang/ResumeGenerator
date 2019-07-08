import axios from 'axios';

export const getBond = bondId => axios.get(`/api/bond/${bondId}`);
// 创建
export const createBond = params => axios.post('/api/bond', params);
export const getBrowser = params => axios.get('/api/bond/browse', params);
