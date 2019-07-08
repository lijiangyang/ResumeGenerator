import axios from 'axios';

// 发票列表
export const getInvoiceList = params => axios.get('/api/invoice', { params });

// 开票
export const sendInvoice = params => axios.post('/api/invoice', params);

// 可开票金额
export const invoiceAvailable = () => axios.get('/api/invoice/available');

// 发票详情
export const invoiceInfo = invoiceId => axios.get(`/api/invoice/${invoiceId}`);
