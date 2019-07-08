import axios from 'axios';

// 获取新闻正文的详情
export const getNewsDetail = (antiFraudId, scId) =>
  axios.get(`/api/antifraud/${antiFraudId}/news/detail`, { params: { scId } });
// 获取裁决文书详情
export const getJudgeDocDetail = ({ antiFraudId, docId, trailDate }) =>
  axios.get(`/api/antifraud/${antiFraudId}/risk/judgeDoc`, {
    params: { docId, trailDate }
  });
