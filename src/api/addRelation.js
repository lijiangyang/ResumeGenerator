import axios from 'axios';

export const addRelation = (monitorId, params) =>
  axios.post(`/api/monitor/${monitorId}/network/link`, params);
