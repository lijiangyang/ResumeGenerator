import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import commomStyle from '../../../css/resume/editor/common.less';

// 自我评价填写栏组件
@inject('assessmentStore','resumeCommonStore')
@observer
export default class SelfAssessment extends Component {

    // 编辑内容
    handleTextChange = (index, event) => {
        this.props.resumeCommonStore.editText('selfAssessment', 'assessment', index, event.target.value);
    }

    // 清空编辑内容
    handleBtnEmpty = () => {
        this.props.resumeCommonStore.emptyTheEditorText('selfAssessment', 'assessment');
    }

    // 自我评价编辑
    AssessmentChange = (event) => {
        this.props.assessmentStore.AssessmentAction(event.target.value);
    }

    render () {
        return (
            <div className={commomStyle.EditBarPosition}>
                <ul>
                    {
                        this.props.assessmentStore.selfAssessment.assessment.map( (items, index) => 
                            <li key={index}>
                                <span>{items.content}</span>
                                <textarea 
                                  rows={3}
                                  value={items.value}
                                  onChange={this.handleTextChange.bind(this, index)}
                                  className={commomStyle.assessmentInput}
                                ></textarea>
                            </li>
                        )
                    }
                </ul>
                <input type="button" value="清空" onClick={this.handleBtnEmpty} className={commomStyle.clearButton} />
            </div>
        )
    }   
}