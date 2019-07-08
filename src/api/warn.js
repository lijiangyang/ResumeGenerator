import axios from 'axios';

// 我的最新预警企业
export const ownNewest = () => axios.get('/api/user/index/own/newest10');

// 下属预警企业
export const subNewest = () => axios.get('/api/user/index/sub/newest10');

// 我的风险企业
export const ownHightRisk = () => axios.get('/api/user/index/own/highRisk10');

// 下属风险企业
export const subHightRisk = () => axios.get('/api/user/index/sub/highRisk10');

// 下属最新预警账号
export const subWorningAccount10 = () =>
  axios.get('/api/user/index/sub/account10');

// 下属最新命中规则
export const subNewestRule = () => axios.get('/api/user/index/sub/newestRule');

// 下属子账号最活跃规则
export const frequentRule = () => axios.get('/api/user/index/sub/frequentRule');
// 我的新增业务统计
export const getMyNewBusinessData = () =>
  axios.get('/api/user/index/own/increase');

// 我的地域分布
export const getMyProvinceRank = () =>
  axios.get('/api/user/index/own/province');

// 我的地域分布
export const getMyIndustryDist = () =>
  axios.get('/api/user/index/own/industry');

// 下属新增业务统计
export const getSubNewBusinessData = () =>
  axios.get('/api/user/index/sub/increase');

// 下属地域分布
export const getSubProvinceRank = () =>
  axios.get('/api/user/index/sub/province');

// 下属行业分布
export const getSubIndustryDist = () =>
  axios.get('/api/user/index/sub/industry');

// 判断上级账号有没有子账号的公司
export const hasCompany = companyName =>
  axios.get('/api/common/status', { params: { companyName } });
