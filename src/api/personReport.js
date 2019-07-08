import axios from 'axios';

export const getDetailInfo = (url, params) => axios.get(url, { params });
export const getCardId = (url, params) => axios.get(url, { params });
