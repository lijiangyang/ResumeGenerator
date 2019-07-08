import axios from 'axios';

export const sendCode = params => axios.post('/api/user/auth/captcha', params);
export const sendCodeByEmail = params => axios.get('/api/user/auth/pw/email', {params});
export const updatePasswordByPhone = params => axios.put('/api/user/auth/pw/phone', params);
export const updatePasswordByEmail = params => axios.put('/api/user/auth/pw/email', params);