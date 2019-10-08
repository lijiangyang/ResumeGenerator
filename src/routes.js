import ResumeGenerator from './components/ResumeGenerator';
import BasicInformation from './components/ResumeGenerator/Editor/BasicInformation';
import WorkExperience from './components/ResumeGenerator/Editor/WorkExperience';
import Skills from './components/ResumeGenerator/Editor/Skills';
import SelfAssessment from './components/ResumeGenerator/Editor/SelfAssessment';


export default [

  {
    path: '/ResumeGenerator',    // 简历首页
    exact: true,
    component: ResumeGenerator
  },
  {
    path: '/BasicInformation',   // 基本信息编辑栏
    exact: true,
    component: BasicInformation
  },
  {
    path: '/WorkExperience',     // 工作经历编辑栏
    exact: true,
    component: WorkExperience
  },
  {
    path: '/Skills',             // 个人技能编辑栏
    exact: true,
    component: Skills
  },
  {
    path: '/SelfAssessment',     // 自我评价编辑栏
    exact: true,
    component: SelfAssessment
  },
];

