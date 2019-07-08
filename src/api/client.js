import axios from 'axios';

export const logout = () => axios.delete('/api/user/logout');
// 发送error
export const sendError = params => axios.post(`/api/sc/collect/error`, params);

export function getUserStatus(type) {
  return axios.get(`/api/common/user/status?type=${type}`);
}

export function changeUserStatus(type) {
  return axios.put('/api/common/user/status', { type });
}
export function getUserInfo() {
  return axios.get('/api/user/info');
}

export function changeDefaultMenu(uid, param) {
  return axios.put(`/api/user/sub/${uid}/product`, param);
}
