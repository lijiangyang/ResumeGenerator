import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BasicResult from './BasicResult';
import WorkResult from './WorkResult'; // 显示工作经历编辑内容 
import SkillsResult from './SkillsResult'; // 显示技能编辑内容
import AssessmentResult from './AssessmentResult';  // 显示自我评价编辑内容

import commonStyle from '../../css/resume/show/common.less';

// 显示编辑结果
@observer
export default class Show extends Component {

    render () {
        return (
            <div className={commonStyle.showPosition}>
                <BasicResult />
                <WorkResult />
                <SkillsResult />
                <AssessmentResult />
            </div>
        )
    }
}