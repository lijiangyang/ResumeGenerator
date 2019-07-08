import axios from 'axios';

export const getCompanyList = params =>
  axios.get('/api/rule/alert/company/page', { params });

export const getGroupList = (companyName) => axios.get(`/api/rule/alert/group?companyName=${companyName}`);
