import axios from 'axios';

export const rechargeByThisWindow = params =>
  axios.post('/api/recharge', params);

export const inquireOrderStatus = rechargeId =>
  axios.get(`/api/recharge/${rechargeId}`);
export const rechargeById = rechargeId =>
  axios.put(`/api/recharge/${rechargeId}`);
