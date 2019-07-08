import axios from 'axios';

// 创建报告pdf
export const createPDF = url => axios.get(`${url}`);

// check报告pdf
export const checkPDF = params => axios.get('/pdfCheck', { params });

// 高级报告PDF
export const reportDownload = params => axios.get('/pdf/report/download', { params });

// 风险扫描PDF
export const antiFraudDownload = params => axios.get('/pdf/antiFraud/download', { params });

// 监控报告PDF
export const monitorDownload = params => axios.get('/pdf/monitor/download', { params });

// 高管个人背调PDF
export const backCheckDownload = params => axios.get('/pdf/backCheck/download', { params });

