import axios from 'axios';

// 获取用户状态
export const getUserStatus = (params) => axios.get(`/api/common/user/status?type=${params}`);
// 修改用户状态
export const modifyUserStatus = (params, status) => axios.put(`/api/common/user/status`, { type: params, status });
// 模块信息
export const getModuleInfo = () => axios.get('/api/common/moduleInfo');
