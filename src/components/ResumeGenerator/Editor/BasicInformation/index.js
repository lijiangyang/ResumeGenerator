import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import commomStyle from '../../../css/resume/editor/common.less';

// 填写基本信息子组件
@inject('basicStore','resumeCommonStore')
@observer
export default class BasicInformation extends Component {

    // 清空编辑内容
    handleBtnEmpty = () => {
      this.props.resumeCommonStore.emptyTheEditorText('basicInformation', 'basic');
    }

    // 编辑内容
    handleTextChange = (index, event) => {
        this.props.resumeCommonStore.editText('basicInformation', 'basic', index, event.target.value);
    }

    render () {
        return (
            <div className={commomStyle.EditBarPosition}> 
                <ul>
                    {
                      this.props.basicStore.basicInformation.basic.map( (items, index) =>
                        <li key={index}>
                          <span>{items.span}</span>
                          <input 
                            type="text" 
                            value={items.value}
                            onChange={this.handleTextChange.bind(this, index)}
                            className={commomStyle.inputBox}
                          />
                        </li>
                      )
                    }
                </ul>
                <input type="button" value="清空" className={commomStyle.clearButton} onClick={this.handleBtnEmpty} />
            </div>
        )
    }
}