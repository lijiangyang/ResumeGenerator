import axios from 'axios';
import queryString from 'query-string';

// 电信创建报告
export const dxCreateReport = (respData) => {
  const dxParams = {
    reportId: respData.reportId,
    comName: respData.companyName,
    telNum: respData.telNumber,
    cerNum: respData.cerNumber
  };
  // return axios.post('/crs/fht/report/create', dxParams, config);
  return axios.post(`/crs/fht/report/createV2?${queryString.stringify(dxParams)}`);
};

// 电信刷新报告
export const dxRefreshReport = (respData) => {
  const dxParams = {
    reportId: respData.reportId,
    comName: respData.companyName,
    telNum: respData.telNumber,
    cerNum: respData.cerNumber
  };
  // return axios.post('/crs/fht/report/refresh', dxParams, config);
  return axios.post(`/crs/fht/report/refreshV2?${queryString.stringify(dxParams)}`);
};

// 电信创建监控
export const dxCreateMoniter = (respData) => {
  const dxParams = {
    monitorId: respData.monitorId,
    comName: respData.companyName,
    telNum: respData.telNumber,
    cerNum: respData.cerNumber,
    startDt: respData.startDt,
    endDt: respData.endDt,
    userId: respData.userId
  };
  // return axios.post('/crs/fht/monitor/create', dxParams, config);
  return axios.post(`/crs/fht/monitor/create?${queryString.stringify(dxParams)}`);
};

// 电信监控续期
export const dxRenewalMoniter = (respData) => {
  const dxParams = {
    monitorId: respData.monitorId,
    comName: respData.companyName,
    telNum: respData.telNumber,
    cerNum: respData.cerNumber,
    startDt: respData.startDt,
    endDt: respData.endDt,
    userId: respData.userId
  };
  // return axios.post('/crs/fht/monitor/renewal', dxParams, config);
  return axios.post(`/crs/fht/monitor/renewal?${queryString.stringify(dxParams)}`);
};

// 电信暂停/恢复监控
export const dxPauseRecover = (status, respData, config) => {
  const dxParams = {
    monitorId: respData.monitorId,
    comName: respData.companyName,
    telNum: respData.telNumber,
    cerNum: respData.cerNumber,
    startDt: respData.startDt,
    endDt: respData.endDt,
    userId: respData.userId
  };
  const url = status === 'PAUSE' ? '/crs/fht/monitor/pause' : '/crs/fht/monitor/recover';
  // return axios.post(url, dxParams, config);
  return axios.post(`${url  }?${queryString.stringify(dxParams)}`, {}, config);
};

// 请求电信数据
export const dxGetTelView = ({ url, reportId, monitorId, config }) => {
  if (url) {
    const _url = reportId
      ? `${url}/fht/report/getReportView?reportId=${reportId}`
      : `${url}/fht/monitor/getMonitorView?monitorId=${monitorId}`;
    return axios.post(_url, {}, config);
  }
  const _url = reportId
    ? `/crs/fht/report/getReportViewV2?reportId=${reportId}`
    : `/crs/fht/monitor/getMonitorView?monitorId=${monitorId}`;
  return axios.post(_url, {}, config);
};

// 时间轴统计
export const dxGetTimeLineTotal = (params, config) => 
  // return axios.post('/crs/fht/monitor/getTimeLineTotal', params, config);
   axios.post(`/crs/fht/monitor/getTimeLineTotal?monitorId=${  params.monitorId}`, {}, config)
;

// 时间轴详情
export const dxGetTimeLineDetail = (params, config) => 
  // return axios.post('/crs/fht/monitor/getTimeLineDetail', params, config);
   axios.post(`/crs/fht/monitor/getTimeLineDetail?${queryString.stringify(params)}`, {}, config)
;

// 电信时间轴假数据
// date:2017-06-20
// monitorId:125

// {
//   'success': true,
//     'msg': '操作成功',
//       'record': [
//         {
//           'dimName': '通讯变更',
//           'dimGroupName': '经营信息',
//           'dimensionGroup': '通讯变更',
//           'content': {
//             'createdDt': 1498009394000,
//             'telAlterType': 'x',
//             'value': '2'
//           },
//           'createdTs': 1498009394000,
//           'alterDt': 1498009394000,
//           'pattern': 'TEL',
//           'mainMonitorId': 125,
//           'eventId': null,
//           'mainMonitorCompanyName': '重庆海博公路工程有限公司',
//           'ruleSimpleResponses': null,
//           'companyId': null
//         }
//       ],
//         'errorCode': '0'
// }
