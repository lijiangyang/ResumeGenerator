import axios from 'axios';

// 获取核验人列表
export const getPersonCheckInfo = params =>
  axios.get('/api/check/person/page', params);

// 核验个人黑名单
export const checkPersonInfo = (url, params) => axios.post(url, params);

// 获取明文身份证
export const getIdCard = url => axios.get(url);

// 获取个人黑名单姓名的列表
export const getPersonName = url => axios.get(url);
