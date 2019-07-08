import axios from 'axios';

export const getNewNotice = () => axios.get('/api/notice/unread/5s');
