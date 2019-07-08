import { observable,action } from 'mobx';
import basicStore from './basic';
import workStore from './work';
import skillsStore from './skills';
import assessmentStore from './assessment';

// 简历共有方法
class ResumeCommonStore {

    @observable basicInformation = basicStore.basicInformation;  // 基本信息编辑栏
    @observable workExperience = workStore.workExperience;  // 工作经历编辑栏
    @observable skills = skillsStore.skills;  // 技能证书编辑栏
    @observable selfAssessment = assessmentStore.selfAssessment;  // 自我评价编辑栏

    // 编辑内容
    @action.bound editText (argument, name, index, event) { 
        this[argument][name][index].value = event;
    };

    // 清空编辑内容
    @action.bound emptyTheEditorText (argument, name) {
        this[argument][name].map( (items) => items.value = '')
    };

}

export const ResumeCommonStoreClass = ResumeCommonStore;
export default new ResumeCommonStore(__SERVER__ ? null : window.__INITIAL_STATE__);
