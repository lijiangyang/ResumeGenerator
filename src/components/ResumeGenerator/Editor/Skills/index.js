import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import skillsStyle from '../../../css/resume/editor/skills.less';
import commomStyle from '../../../css/resume/editor/common.less';

// 技能编写组件
@inject('skillsStore','resumeCommonStore')
@observer
export default class Skills extends Component {

    // 编辑内容
    handleTextChange = (index, event) => {
        this.props.resumeCommonStore.editText('skills', 'skills', index, event.target.value);
    }

    // 添加编辑栏的内容
    increaseText = () => {
        this.props.skillsStore.SkillsAddAction();
        // this.props.resumeCommonStore.emptyTheEditorText(); 
    }
    
    // 清空编辑内容
    handleBtnEmpty = () => {
        this.props.resumeCommonStore.emptyTheEditorText('skills', 'skills');
    }

    render () {

        const skills = this.props.skillsStore.skills.skills;
        const inputNotEmpty = this.props.skillsStore.inputNotEmpty; // 输入框非空校验
        return (
            <div className={commomStyle.EditBarPosition}>
                <ul>
                    {
                        skills.map( (items, index) =>
                            <li key={index}>
                                <span>{items.content}</span>
                                <input 
                                  type={items.id === 'familiarity' ? 'number' : 'text'} 
                                  value={items.value} 
                                  onChange={this.handleTextChange.bind(this, index)} 
                                  className={(items.checked && inputNotEmpty) ? commomStyle.inputIsEmpty : commomStyle.inputBox}
                                />
                                { items.checked ?
                                    <input 
                                      value='This field is required' 
                                      className={inputNotEmpty ? skillsStyle.inputIsEmpty : skillsStyle.inputNotEmpty}
                                      readOnly 
                                    /> : ''
                                }
                                
                            </li>
                        )
                    }
                </ul>
                <input type="button" value="清空" onClick={this.handleBtnEmpty} className={commomStyle.clearButton} />
                <input type="button" value="新添" onClick={this.increaseText} className={commomStyle.clearButton} />
            </div>
        )
    }
}