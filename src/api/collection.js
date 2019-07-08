import axios from 'axios';
// 获取收藏列表
export const getCollectionPage = params =>
  axios.get(`/api/collection/page`, { params });

// 获取分组列表
export const getCollectionGroup = params =>
  axios.get(`/api/collection/group`, { params });

// 收藏或者取消收藏
/**
 * @param {collection} 是否收藏  true or false
 * companyName 公司名字
 */
export const toggleCollection = params => axios.put('/api/collection', params);
