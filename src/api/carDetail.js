import axios from 'axios';

// 获取车辆信息详情
export const getDetail = (carId, cancelToken) => axios.get(`/api/car/${carId}`, { cancelToken });
