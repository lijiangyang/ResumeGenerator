import axios from 'axios';

export const postLogin = params => axios.post('/api/user/auth/login', params);
export const sendCode = params => axios.post('/api/user/auth/captcha', params);
export const postCodeLogin = params => axios.post('/api/user/auth/login/phone', params);
