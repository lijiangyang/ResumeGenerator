import axios from 'axios';

export const getBannerInfo = params =>
  axios.get(`/api/common/bannerInfo`, { params });

export const toggleMonitorStatus = (monitorId, status) =>
  axios.put(`/api/monitor/${monitorId}/status`, { status });
export const getReportModule = (urlStr, idParams, params) => {
  const reportUrl = `/api/report/${idParams.reportId}/`;
  const analysisUrl = `/api/analysisReport/${idParams.analysisReportId}/`;
  const monitorUrl = `/api/monitor/${idParams.monitorId}/`;
  const networkUrl = `/api/network/${idParams.networkId}`;
  let url;
  switch (urlStr) {
    case 'corpDetail':
    case 'internet':
    case 'operation/trademark':
    case 'operation/patent':
    case 'operation/bidding':
    case 'team':
    // 投资任职 begin
    case 'investment/ent/invest':
    case 'investment/fr/fr':
    case 'investment/fr/invest':
    case 'investment/fr/position':
    case 'investment/management/statistic':
    case 'investment/management/fr':
    case 'investment/management/inv':
    case 'investment/management/position':
    case 'investment/shareholder/statistic':
    case 'investment/shareholder/fr':
    case 'investment/shareholder/inv':
    case 'investment/shareholder/position':
    // 投资任职 end
    case 'risk':
    case 'risk/check':
    case 'risk/pledge':
    case 'taxation':
    case 'timeline':
    case 'alert/page':
    // 股权结构图
    case 'shareholder/structure':
      url = reportUrl + urlStr;
      break;
    case 'score':
    case 'profit':
    case 'operate':
    case 'growing':
      url = analysisUrl + urlStr;
      break;
    case 'monitorTimeAxis':
      url = `${monitorUrl}timeline`;
      break;
    case 'monitorAlert':
      url = `${monitorUrl}alert/page`;
      break;
    case 'network':
      url = networkUrl;
      break;
    case 'network/blacklist':
    default:
      return false;
  }
  // 设置axios取消事件
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  if (window.reportSourceCancel === undefined) {
    window.reportSourceCancel = [];
  }
  window.reportSourceCancel.push(source.cancel);
  return axios.get(url, { cancelToken: source.token, params });
};

export const getRiskCourt = ({ basicReportId, reportId, tabAct, config }) => {
  let url = '';
  if (basicReportId) {
    url = `/api/basicReport/${basicReportId}/risk/${tabAct}/page`;
  }
  if (reportId) {
    url = `/api/report/${reportId}/risk/${tabAct}/page`;
  }
  return axios.get(url, config);
};

export const getJudgeDocCount = ({ basicReportId, reportId, finance }) => {
  let url = '';
  if (basicReportId) {
    url = `/api/basicReport/${basicReportId}/risk/judgeDoc/statistic`;
  }
  if (reportId) {
    url = `/api/report/${reportId}/risk/judgeDoc/statistic`;
  }
  return axios.get(url, { params: { finance } });
};

export const getJudgeDetailMonitor = (monitorCompanyId, params) =>
  axios.get(`/api/monitor/${monitorCompanyId}/risk/judgeDoc`, { params });
export const getJudgeDetailReport = (idParams, params) => {
  const { reportId, basicReportId } = idParams;
  if (reportId !== '') {
    return axios.get(`/api/report/${reportId}/risk/judgeDoc`, { params });
  }
  return axios.get(`/api/basicReport/${basicReportId}/risk/judgeDoc`, {
    params
  });
};
export const getNewsDetail = (url, source) =>
  axios.get(url, { cancelToken: source.token });
export const getBiddingDetail = (url, source) =>
  axios.get(url, { cancelToken: source.token });

// 刷新基础报告
export const updateBasicRep = basicReportId =>
  axios.put(`/api/basicReport/${basicReportId}`);
// 获取基础报告的刷新时间
export const getBasicRepInfo = basicReportId =>
  axios.get(`/api/basicReport/${basicReportId}/info`);
// 刷新高级报告
export const updateReport = reportId => axios.put(`/api/report/${reportId}`);
// 获取高级报告的刷新时间
export const getReportInfo = reportId =>
  axios.get(`/api/report/${reportId}/info`);
export const getMonitorInfo = monitorId =>
  axios.get(`/api/monitor/${monitorId}/info`);
// // 创建高级报告或者深度报告
// export const createReport = (active, companyName) => {
//   let url;
//   // 1为高级报告
//   if (active === 1) {
//     url = '/api/report';
//   } else {
//     url = '/api/analysisReport';
//   }
//   return axios.post(url, { companyName: companyName });
// };

// 创建监控
export const createMonitor = params => axios.post(`/api/monitor`, params);

// 升级监控
export const updateToMonitor = ({ reportId, time }) => {
  let url;
  const params = { time };
  if (reportId) {
    url = `/api/report/${reportId}/upgrade`;
    params.reportId = reportId;
  }
  return axios.put(url, params);
};

// 监控续期
export const renewalMonitor = params =>
  axios.put(`/api/monitor/${params.monitorId}/renewal`, { time: params.time, groupId: params.groupId});

// 暂停或恢复监控
export const pauseOrRestoreMonitor = (monitorId, status) =>
  axios.put(`/api/monitor/${monitorId}/status/main`, { status });

// 添加/删除收藏
export const addOrCancelCollection = params =>
  axios.put('/api/collection', params);

// 获取评估分析列表
export const getAlertAnalysisList = (
  monitorId,
  analysisReportId,
  params,
  source
) => {
  let url;
  if (monitorId) {
    url = `/api/monitor/${monitorId}/alert/page`;
  } else if (analysisReportId) {
    url = `/api/analysisReport/${analysisReportId}/alert/page`;
  }
  return axios.get(url, { params, cancelToken: source.token });
};
// 获取评估分析列表详情
export const getAlertDetail = (url, source, params) =>
  axios.get(url, { cancelToken: source.token, params });
export const getAlertNewsMonitor = (companyId, ruleType, ruleId, params) =>
  axios.get(
    `/api/monitor/${companyId}/alert/${ruleType}/${ruleId}/news/detail`,
    { params }
  );
export const getAlertJudgeDocMonitor = (companyId, params) =>
  axios.get(`/api/monitor/${companyId}/risk/judgeDoc`, { params });
export const getAlertNewsReport = (companyId, ruleId, params) =>
  axios.get(`/api/report/${companyId}/alert/sysRule/${ruleId}/news/detail`, {
    params
  });
export const getAlertJudgeDocReport = (companyId, params) =>
  axios.get(`/api/report/${companyId}/risk/judgeDoc`, { params });
// 判断企业报告类型
export const judgeReportType = companyName =>
  axios.get(`/api/common/status`, { params: { companyName } });

// 关联图上创建关联监控
export const monitorExistNode = (monitorCompanyId, params) =>
  axios.post(`/api/monitor/${monitorCompanyId}/network/link`, params);

// 现勘记录
export const getNowRecordList = (companyId, params, source) =>
  axios.get(`/api/survey/${companyId}/page`, {
    params,
    cancelToken: source.token
  });
export const getNowRecordPictures = (id, source) =>
  axios.get(`/api/survey/${id}/pictures`, { cancelToken: source.token });
// 报告时间轴详情
export const getReportAxisDetail = (reportId, key, time, relation, source) => {
  const module = key === 'legal' ? 'risk' : key;
  return axios.get(
    `/api/report/${reportId}/timeline/${
      relation === 'related' ? `related/${module}` : module
    }`,
    {
      params: { date: time },
      cancelToken: source.token
    }
  );
};
// 监控时间轴详情
export const getMonitorAxisDetail = (
  monitorId,
  key,
  time,
  relation,
  source
) => {
  const module = key === 'legal' ? 'risk' : key;
  return axios.get(
    `/api/monitor/${monitorId}/timeline/${
      relation === 'related' ? `related/${module}` : module
    }`,
    {
      params: { date: time },
      cancelToken: source.token
    }
  );
};
// 税务核验列表
export const getTaxCheckList = (params, source) =>
  axios.get('/api/check/tax/page', {
    params,
    cancelToken: source.token
  });

// 全网关系图拓展节点
export const expandNetwork = (monitorCompanyId, params) =>
  axios.post(`/api/monitor/${monitorCompanyId}/expendNetwork/expend`, params);
// 税务核验添加
export const addTaxCheck = params => axios.post(`/api/check/tax`, params);
// 获取核验详情
export const getTaxInfo = (params, companyId) =>
  axios.get(`/api/check/tax/${companyId}/page`, { params });
// 税务列表
export const getTaxList = (id, source) =>
  axios.get(`/api/monitor/${id}/tax`, { cancelToken: source.token });
// 关联图,获取最短路径
export const getShortPath = (monitorId, params) =>
  axios.post(`/api/monitor/${monitorId}/expendNetwork/shortestRoute`, params);
// 关联图,获取公司信息
export const getCompNodeInfo = (monitorId, params) =>
  axios.get(`/api/monitor/${monitorId}/expendNetwork/nodeInfo`, { params });
// 六芒星
export const getSixStar = (id, source) =>
  axios.get(`/api/monitor/${id}/alert/score`, {
    cancelToken: source.token
  });
// 关联图,获取个人信息
export const getPersonNodeInfo = (monitorId, params) =>
  axios.get(`/api/monitor/${monitorId}/expendNetwork/personInfo`, { params });
// 获取营运能力信息
export const getOperationDataList = analysisReportId =>
  axios.get(`/api/analysisReport/${analysisReportId}/operation`);
// 获取营收能力信息
export const getProfitEvalList = analysisReportId =>
  axios.get(`/api/analysisReport/${analysisReportId}/profit`);
// 获取成长能力能力信息
export const getUpDataList = analysisReportId =>
  axios.get(`/api/analysisReport/${analysisReportId}/growing`);
// 获取综合能力分析(企业分数)
export const getCompanyScore = analysisReportId =>
  axios.get(`/api/analysisReport/${analysisReportId}/score`);
// 贷中分析,创建报告
export const createAnalyRep = params => axios.post('/api/operateIndex', params);
// 获取贷中分析所有数据
export const getAnalysisData = orderId =>
  axios.get(`/api/operateIndex/${orderId}`);

// 基础报告,升级
export const upgradeReport = basicReportId =>
  axios.put(`/api/basicReport/${basicReportId}/upgradeReport`);
// 获取报告的id
export const getReportStatus = params =>
  axios.get(`/api/common/status`, { params });
// 创建报告
export const createReport = (params, source) =>
  axios.post(`/api/report`, params, { cancelToken: source.token });

// 基础关联图，获取最短路径
export const getShortestPath = (networkId, params, source) =>
  axios.get(`/api/network/${networkId}/network/shortest`, {
    params,
    cancelToken: source.token
  });

// 历史事件模型-风险特征扫描
export const getEventAnalysis = (reportId, source) =>
  axios.get(`/api/report/${reportId}/scan/eventAnalysis`, {
    cancelToken: source.token
  });
// 历史事件模型-风险特征-具体某事件组
export const getEventAnalysisList = (reportId, recordIds, source) =>
  axios.get(`/api/report/${reportId}/scan/eventAnalysis/list`, {
    params: { recordIds },
    cancelToken: source.token
  });
// 历史事件模型-风险特征扫描-进度状态
export const getEventAnalysisStatus = (reportId, source) =>
  axios.get(`/api/report/${reportId}/scan/eventAnalysis/status`, {
    cancelToken: source.token
  });
// 创建网络图
export const createNetWork = params => axios.post(`/api/network`, params);

// 检查报告数据是否准备好
export const isCompleted = ({ reportId }) =>
  axios.get(`/api/report/${reportId}/completed`);
// 检查报告各个模块是否准备好
export const getModuleStatus = ({reportId, subModule, cancelToken}) =>
  axios.get(`/api/report/${reportId}/completed/${subModule}`, {cancelToken});
// 检查报告、网络图、经营数据是否准备好
export const getModuleCompleStatus = (module, id) => {
  if (module === 'report') {
    return axios.get(`/api/report/${id}/completed`);
  } else if (module === 'network') {
    return axios.get(`/api/network/${id}/completed`);
  }
  return axios.get(`/api/operateIndex/${id}/completed`);
};
// 创建反欺诈
export const createAntiFraud = params => axios.post(`/api/antifraud`, params);
// 风险扫描－风险链条－公司列表
export const getRiskChain = antiFraudId =>
  axios.get(`/api/antifraud/${antiFraudId}/main/riskChain`);
// 风险扫描－风险链条－网络图
export const getRiskChainNetwork = (antiFraudId, params) =>
  axios.get(`/api/antifraud/${antiFraudId}/main/riskChain/network`, { params });
// 风险扫描－风险链条－失信被执行和被执行记录的详情
export const getRiskDetail = (type, params) => {
  const { caseId, antiFraudId } = params;
  if (type === 'shixin') {
    return axios.get(
      `/api/antifraud/${antiFraudId}/main/riskChain/dishonesty`,
      { params: { caseId } }
    );
  }
  if (type === 'sszc') {
    return axios.get(
      `/api/antifraud/${antiFraudId}/main/riskChain/litigation`,
      { params: { scId: caseId } }
    );
  }
  return axios.get(`/api/antifraud/${antiFraudId}/main/riskChain/executed`, {
    params: { caseId }
  });
};
// 主体公司的推送
export const mainCompanyPush = (monitorId, params) =>
  axios.put(`/api/monitor/${monitorId}/status/main`, params);
// 关联公司的推送
export const relatedCompanyPush = params =>
  axios.put(`/api/monitor/status/related`, params);

// 股权结构-股东持股扩展
export const getStructureChartExtend = (reportId, companyName) =>
  axios.get(`/api/report/${reportId}/share/loop/extend?companyName=${companyName}`);

// 获取股权结构关联图
export const getStructureChart = reportId =>
  axios.get(`/api/report/${reportId}/shareholder/structure`);

// 服务端渲染股权结构图
export const sendStructureImages = (params) => axios.post('/sendImages', params);

// 获取债券分析的banner数据
export const getBannerBond = companyName =>
  axios.get('/api/bond/bannerInfo', { params: { companyName } });

// 创建
export const createBond = params => axios.post('/api/bond', params);

// 是否为发债主体
export const judgeIsBond = params =>
  axios.get(`/api/common/isBond`, { params });
