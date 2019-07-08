import axios from 'axios';

// 获取列表
export const getNoticeAll = params => axios.get('/api/notice/all', { params });

// 全部删除
export const noticeAllDel = () => axios.put('/api/notice/all/del');

// 全部已读
export const noticeAllRead = () => axios.put('/api/notice/all/read');

// 单个已读
export const noticeSingleRead = id => axios.put(`/api/notice/${id}`);

// 单个删除
export const noticeSingleDel = id => axios.put(`/api/notice/${id}/del`);
