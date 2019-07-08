import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import { Icon } from 'antd';

import workStyle from '../../../css/resume/show/work.less';
import commonStyle from '../../../css/resume/show/common.less';

// 显示工作经历编辑内容
@inject('workStore', 'chooseColorStore') 
@observer
export default class WorkResult extends Component {

    render () {
        
        const work = this.props.workStore.workExperience.work;
        return (
            <div className={commonStyle.editorResult}>
                <h3 style={this.props.chooseColorStore.Colorli}>
                    <Icon type="solution" className={workStyle.solution} style={{color: this.props.chooseColorStore.Colorli.backgroundColor}} />
                    工作经历/项目经验
                </h3>
                {
                    work.map( (items, index) => 
                        <div key={items.id} className={index %2 === 1 ? workStyle.workContent : workStyle.workTitle}>
                            {work[index].value}
                        </div>
                    )
                }
            </div>
        )
    }
}