import axios from 'axios';

// 获取banner的信息
export const getBannerInfo = params =>
  axios.get(`/api/common/bannerInfo`, { params });

// 获取报告的更新时间
export const getBannerUpdatedDate = reportId =>
  axios.get(`/api/report/${reportId}/info`);

// 取消收藏或者添加收藏
export const collection = params => axios.put('/api/collection', params);

// 刷新报告
export const refresh = reportId => axios.put(`/api/report/${reportId}`);
