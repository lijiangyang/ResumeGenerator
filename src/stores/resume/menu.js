import { observable,action } from 'mobx';

// 菜单栏
class MenuStore {

    @observable navigations = true        // 菜单栏开关

    // 遍历菜单栏数据
    @observable navigation = {
        List: [
            {text: '基本信息', route: '/BasicInformation'}, 
            {text: '工作经历', route: '/workeXperience'}, 
            {text: '技能证书', route: '/skills'}, 
            {text: '自我评价', route: '/selfAssessment'}, 
        ],
    };

    // 所有编辑栏
    @action.bound navigationAction (argument) { 
        this.navigations = argument;  // 关闭菜单栏
    }

}

export const MenuStoreClass = MenuStore;
export default new MenuStore(__SERVER__ ? null : window.__INITIAL_STATE__);
