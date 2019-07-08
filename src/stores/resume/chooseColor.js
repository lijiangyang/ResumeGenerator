import { observable, action } from 'mobx';

// 选择颜色
class ChooseColorStore {
    @observable Color = {        // 切换背景颜色
        list: [ 
            {value: {backgroundColor: 'darkslateblue'}, checked: false},
            {value: {backgroundColor: 'fuchsia'},       checked: false},
            {value: {backgroundColor: 'blueviolet'},    checked: false},
            {value: {backgroundColor: 'pink'},          checked: false},
            {value: {backgroundColor: 'yellowgreen'},   checked: false}
        ]
        
    };
    
    @observable Colorli = {};    // 显示切换背景颜色
    
    @action.bound ColorAction (index) {  // 点击后取出背景颜色
        const ColorIndex = JSON.parse(JSON.stringify(this.Color.list[index].value))
        return this.Colorli = ColorIndex;  // 得到取出的背景颜色
    }
}

export const ChooseColorStoreClass = ChooseColorStore;
export default new ChooseColorStore(__SERVER__ ? null : window.__INITIAL_STATE__);
