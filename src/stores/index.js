import resumeCommonStore, { ResumeCommonStoreClass } from './resume/common';
import basicStore, { BasicStoreClass } from './resume/basic';
import workStore, { WorkStoreClass } from './resume/work';
import skillsStore, { SkillsStoreClass } from './resume/skills';
import assessmentStore, { AssessmentStoreClass } from './resume/assessment';
import chooseColorStore, { ChooseColorStoreClass } from './resume/chooseColor';
import menuStore, { MenuStoreClass } from './resume/menu';

export const serverCreateStore = () => ({
  resumeCommonStore: new ResumeCommonStoreClass(),
  basicStore: new BasicStoreClass(),
  workStore: new WorkStoreClass(),
  skillsStore: new SkillsStoreClass(),
  assessmentStore: new AssessmentStoreClass(),
  chooseColorStore: new ChooseColorStoreClass(),
  menuStore: new MenuStoreClass(),
});

export const clientCreateStore = () => ({
  resumeCommonStore, // 简历生成器
  basicStore,     // 基本信息共有方法
  workStore,    // 工作经历共有方法
  skillsStore,  // 工作证书共有方法
  assessmentStore,  // 自我评价共有方法
  chooseColorStore, // 选择简历背景颜色
  menuStore     // 菜单栏
});








