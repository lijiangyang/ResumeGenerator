import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import { Menu, Dropdown, Icon, Input } from 'antd';  // 蚂蚁金服
import commomStyle from '../../../css/resume/editor/common.less';

// 工作经历编辑栏
@inject('workStore','resumeCommonStore')
@observer
export default class WorkExperience extends Component {

    // 工作经历输入框筛选填写
    menuItemClick = (argument) => {
      this.props.workStore.workSelectValueAction(argument);
    }

    // 工作经历输入框内容可变
    inputChange = (index, event) => {
      this.props.workStore.inputAction(index, event.target.value);
    }

    render () {

        const work = this.props.workStore.workExperience.work;
        // 工作经历下拉框列表
        const menu = (
          <Menu>
            {
              this.props.workStore.workExperience.workSelect.map( (items, index) => 
                <Menu.Item key={index} onClick={this.menuItemClick.bind(this, items.content)} className={items.content === '全部清空' && commomStyle.workDelete}>
                  {items.content}
                </Menu.Item>
              )
            }
          </Menu>
        );
        return (
          <div className={commomStyle.EditBarPosition}>
              {/* 工作经历下拉框菜单 */}
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
              </Dropdown>

              {/* 工作经历输入框 */}
              <Input 
                autoFocus
                placeholder={this.props.workStore.placeholder1} 
                onChange={this.inputChange.bind(this, this.props.workStore.index1)}
                value={work[this.props.workStore.index1].value} 
              />
              <Input 
                placeholder={this.props.workStore.placeholder2}
                onChange={this.inputChange.bind(this, this.props.workStore.index2)}
                value={work[this.props.workStore.index2].value} 
              />
          </div>
        )
    }
}