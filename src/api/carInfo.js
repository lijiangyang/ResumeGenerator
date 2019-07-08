import axios from 'axios';

// 添加查询
export const addCarInfo = (params) =>
  axios.post('/api/car', params);

// 查看详情
export const getCarDetail = carId =>
  axios.get(`/api/car/${carId}`);

// 查询列表
export const getCarList = (params) =>
  axios.get('/api/car/page', {params});
