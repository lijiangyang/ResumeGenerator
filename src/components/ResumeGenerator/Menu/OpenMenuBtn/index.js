import React, {Component} from 'react';
import { observer,inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import commonStyle from '../../../css/resume/menu/menu.less';

// 设置菜单按钮
@inject('menuStore')
@observer
export default class OpenMenuBtn extends Component {

    render() {
        return (
            <div>
                <Link to='/ResumeGenerator'>
                  <input 
                    type='button' 
                    value='打开设置菜单' 
                    className={commonStyle.SettingsMenu}
                  />
                </Link>
            </div>
        )
    }
}