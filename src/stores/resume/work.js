import { observable, action } from 'mobx';

// 工作经历
class WorkStore {
    @observable workExperience = { 
        work: [
            {id: 'name1',    value: '', content: '项目名称'},
            {id: 'project1', value: '', content: '项目经验'},
            {id: 'name2',    value: '', content: '项目名称2'},
            {id: 'project2', value: '', content: '项目经验2'},
            {id: 'name3',    value: '', content: '项目名称3'},
            {id: 'project3', value: '', content: '项目经验3'}
        ],
        workSelect: [
            {content: '工作经历1', checked: false},
            {content: '工作经历2', checked: false},
            {content: '工作经历3', checked: false},
            {content: '全部清空' , checked: false}
        ]
    };

    @observable index1 = 0;        // inputAction函数需要用到, 作用是根据数字指定输入框的内容值可变
    @observable index2 = 1;
    @observable placeholder1 = '项目名称'  // 工作经历输入框一默认值
    @observable placeholder2 = '项目经验'  // 工作经历输入框二默认值
    
    // 工作经历输入框筛选
    @action.bound workSelectValueAction (argument) { 
        this.workSelectValue = argument;
        if (argument === '工作经历1') {
            [this.index1, this.index2] = [0, 1];
            [this.placeholder1, this.placeholder2] = ['项目名称', '项目经验'];
        }
        if (argument === '工作经历2') {
            [this.index1, this.index2] = [2, 3];
            [this.placeholder1, this.placeholder2] = ['项目名称2', '项目经验2'];
        }
        if (argument === '工作经历3') {
            [this.index1, this.index2] = [4, 5];
            [this.placeholder1, this.placeholder2] = ['项目名称3', '项目经验3'];
        }
        if (argument === '全部清空') {
            this.workExperience.work.map( (item) => item.value = '');
        }
    };
    
    // 工作经历输入框填写
    @action.bound inputAction (index, event) {
        this.workExperience.work[index].value = event
    };
}

export const WorkStoreClass = WorkStore;
export default new WorkStore(__SERVER__ ? null : window.__INITIAL_STATE__);
