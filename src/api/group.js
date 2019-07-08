import axios from 'axios';

// 获取分组列表(导航)
export const getGroupList = (params) => axios.get(`/api/group`, {params});

// 添加分组名称
export const addGroupName = (params) => axios.post(`/api/group`, params);

// 删除分组
export const deleteGroup = (groupId) => axios.delete(`/api/group/${groupId}`);

// 编辑分组
export const editGroupName = (groupId, params) => axios.put(`/api/group/${groupId}`, params);
// 通过公司名获取分组ID
export const getGroupIdByName = (params) => axios.get('/api/group/index', { params });
// 创建分组
export const createGroup = (groupName) => axios.post('/api/group/', { groupName });

// 分组企业列表
export const getGroupPage = ({ params }) => axios.get('/api/group/page', { params });

// 移动分组
export const changeCompanyGroupId = (params) => axios.put(`/api/group/${params.groupDetailId}/moving`, { targetGroupId: params.targetGroupId });

// 给公司添加组别


export const addGroupId2Company = (param) => axios.post('/api/group/detail', param);
// 根据公司名字移动分组
// export const changeGroupIdByCompanyName = (params) => axios.put(`/api/group/moving`, params);
