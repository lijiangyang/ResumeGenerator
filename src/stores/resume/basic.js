import { observable } from 'mobx';

// 基本信息
class BasicStore {
    @observable basicInformation = {  // 基本信息编写栏
        basic: [
            {value: '', span: '姓名'},
            {value: '', span: '职位'},
            {value: '', span: '个人介绍1'},
            {value: '', span: '个人介绍2'},
            {value: '', span: '个人介绍3'},
            {value: '', span: '手机'},
            {value: '', span: '邮箱'},
            {value: '', span: '爱好/擅长'},
            {value: '', span: '博客'},
            {value: '', span: 'github'},
            {value: '', span: 'fackboox'},
            {value: '', span: 'weibo'}     
        ],
    };

    
}

export const BasicStoreClass =BasicStore;
export default new BasicStore(__SERVER__ ? null : window.__INITIAL_STATE__);
