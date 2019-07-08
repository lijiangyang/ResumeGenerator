import axios from 'axios';

export const getHistoryRecords = (type, params) => {
  const urlConfig = {
    riskScan: '/api/antifraud',
    taxCheck: '/api/check/tax',
    report: '/api/report',
    bond: '/api/bond',
    network: '/api/network',
    operate: '/api/operateIndex'
  };
  return axios.get(urlConfig[type], { params });
};
