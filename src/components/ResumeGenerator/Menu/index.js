import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Link } from 'react-router-dom';
import menuStyle from '../../css/resume/menu/menu.less';

// 菜单栏
@inject('resumeCommonStore', 'chooseColorStore', 'menuStore')
@observer
export default class Menu extends Component {

    // 点击切换显示背景颜色
    ColorBtn = (index) => {
        this.props.chooseColorStore.ColorAction(index);
    }
    // 点击切换显示编辑栏
    navigationClick = () => {
        this.props.menuStore.navigationAction('false');
    }

    render () {
        
        return (
            <div>
                {/* 显示所有的编辑栏 */}
                <div> 
                    <ul className={menuStyle.menuList}>
                        {
                            this.props.menuStore.navigation.List.map( (items, index) => 
                                <li onClick={this.navigationClick} key={index}>
                                    <Link to={items.route}>{items.text}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                {/* 点击切换简历的背景颜色 */}
                <div className={menuStyle.selectBackgroundColorPosition}>
                    <ul className={menuStyle.selectBackgroundColor}>
                        {
                            this.props.chooseColorStore.Color.list.map( (items, index) => 
                                <li onClick={this.ColorBtn.bind(this, index)} key={index} style={items.value}></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}