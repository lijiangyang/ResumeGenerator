import { observable } from 'mobx';

// 自我评价
class AssessmentStore {

    // 自我评价编写栏;
    @observable selfAssessment = {
        assessment: [
            {id: 'assessment', value: '', content: '自我评价'}
        ]
    };  
}

export const AssessmentStoreClass = AssessmentStore;
export default new AssessmentStore(__SERVER__ ? null : window.__INITIAL_STATE__);
