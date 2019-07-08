import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import skillsStyle from '../../../css/resume/show/skills.less';
import showCommonStyle from '../../../css/resume/show/common.less';
import { Rate, Icon } from 'antd';

// 技能编写
@inject('skillsStore', 'chooseColorStore')
@observer
export default class SkillsResult extends Component {

    // 点击删除列表
    handlebtnClick = (id) => {
        this.props.skillsStore.SkillsDeleteAction(id);
    }

    render () {

        return (
            <div className={showCommonStyle.editorResult}>
                <h3 style={this.props.chooseColorStore.Colorli}>
                    <Icon type="flag" className={showCommonStyle.flag} style={{color: this.props.chooseColorStore.Colorli.backgroundColor}} />
                    技能
                </h3>
                <ul>
                    {
                        this.props.skillsStore.skillsAdd.map( (items) => 
                            <li className={skillsStyle.liStyle} key={items.id}>
                                <div className={skillsStyle.skillsTitle}>
                                    {items.skills}
                                    <Rate 
                                      className={skillsStyle.rate} 
                                      disabled 
                                      defaultValue={items.familiarity}
                                    />
                                </div><br />
                                <div className={skillsStyle.describe}>
                                    <Icon type="check-circle" className={items.describe1.length === 0 ? skillsStyle.checkCircle2 : skillsStyle.checkCircle} />
                                    {items.describe1}<br />
                                    <Icon type="check-circle" className={items.describe2.length === 0 ? skillsStyle.checkCircle2 : skillsStyle.checkCircle} />
                                    {items.describe2}<br />
                                    <Icon type="check-circle" className={items.describe3.length === 0 ? skillsStyle.checkCircle2 : skillsStyle.checkCircle} />
                                    {items.describe3}
                                </div>
                                <Icon 
                                  type="close-circle" 
                                  theme="twoTone"
                                  onClick={this.handlebtnClick.bind(this, items.id)}
                                  className={skillsStyle.deleteBtn} 
                                />
                            </li>
                        )
                    }
                </ul><br /><br />
            </div>
        )
    }
}