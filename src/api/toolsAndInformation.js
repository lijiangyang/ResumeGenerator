import axios from 'axios';

export const getNews = config => axios.get('/api/home/news', config);

export const getHeadline = config => axios.get('/api/home/headline', config);

export const getHeadlineNewDetail = config => axios.get('/api/home/headline/internet/detail', config);
