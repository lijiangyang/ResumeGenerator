import React, {Component} from 'react';
import { observer,inject } from 'mobx-react';
import Menu from './Menu'; // 菜单栏
import Show from './Show';     // 显示编辑内容
import menuStyle from '../css/resume/menu/menu.less';

@inject('resumeCommonStore', 'menuStore')
@observer
export default class ResumeGenerator extends Component {

    render() {
        return (
            <div>
                {/* // 编辑栏菜单 */}
                <div className={menuStyle.menuPosition}>
                    {this.props.menuStore.navigations ? <Menu />  : ''}
                </div>

                {/* // 显示编辑栏内容 */}
                <Show />
            </div>
        )
    }
}