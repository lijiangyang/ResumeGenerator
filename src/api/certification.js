import axios from 'axios';
// 企业认证
export const certification = param =>
  axios.post('/api/user/certificate', param);
