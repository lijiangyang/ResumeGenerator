import { observable, action } from 'mobx';
import commonStore from './common';

// 技能证书
class SkillsStore {

    @observable skills = {  // 技能编写栏
        skills: [
            {id: 'skills',      value: '', content: '擅长技能',      checked: true},
            {id: 'familiarity', value: '', content: '技能熟练度(%)',  checked: true},
            {id: 'describe1',   value: '', content: '技能描述1',     checked: true},
            {id: 'describe2',   value: '', content: '技能描述2',     checked: false},
            {id: 'describe3',   value: '', content: '技能描述3',     checked: false},
        ]
    }
    @observable inputNotEmpty = false;  // 输入框为空提示

    // 添加结果;
    @observable skillsAdd = []; 

    // 新添按钮
    @action.bound SkillsAddAction () {

        // 取出评分需要的数字
        let score = this.skills.skills[1].value;
        if (score >= 100) {
            score = 5;
        }
        else if (score >= 80 && score < 100) {
            score = 4;
        }
        else if (score >= 60 && score < 80) {
            score = 3;
        }
        else if (score >= 40 && score < 60) {
            score = 2;
        }
        else if (score >= 1  && score < 40) {
            score = 1;
        }
        else if (score < 1) {
            score = 0;
        }
        // 输入框非空校验, 如果不为空则警告提示, 并且不能添加内容
        const itemValue = []; 
        this.skills.skills.map( (item) => {
            if (item.checked) {
                if ( item.value === '' ) {
                    this.inputNotEmpty = true;
                } else {
                    itemValue.push(item.value);
                }
            };
        });
        //  必填项输入内容后, 添加内容成功
        if (itemValue.length >= 3) {
            this.inputNotEmpty = false;
            this.skillsAdd.push({
                id: Math.random(),
                skills: this.skills.skills[0].value,
                familiarity: score,
                describe1: this.skills.skills[2].value,
                describe2: this.skills.skills[3].value,
                describe3: this.skills.skills[4].value,
            });
            // 添加内容成功后清空输入框
            commonStore.emptyTheEditorText('skills', 'skills'); 
        }
    };

    // 删除编辑好的技能
    @action.bound SkillsDeleteAction (id) {
        this.skillsAdd.map( (items) => {
            if (items.id === id){
                this.skillsAdd.remove(items);
            }
        })
    }
}

export const SkillsStoreClass = SkillsStore;
export default new SkillsStore(__SERVER__ ? null : window.__INITIAL_STATE__);
