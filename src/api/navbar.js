import axios from 'axios';

// 获取未读数量
export const getNoticeCount = source =>
  axios.get('/api/notice/unread/count', { cancelToken: source.token });

// 获取未读列表
export const getNoticeUnread = () =>
  axios.get('/api/notice/unread', { params: { index: 1, size: 10 } });

// 设置为已读
export const setNoticeIsRead = noticeId => axios.put(`/api/notice/${noticeId}`);
