import axios from 'axios';

export const getRecharge = params => axios.get(`/api/recharge`, { params });
