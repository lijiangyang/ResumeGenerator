import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BasicInformation from './BasicInformation';  // 基本信息编写栏
import WorkExperience from './WorkExperience';  // 工作经历编写栏
import Skills from './Skills'; // 技能编写栏
import SelfAssessment from './SelfAssessment';  // 自我评价编写栏


// 编辑所有填写栏
@observer
export default class Editor extends Component {

    render () {
        return (
            <div>
                <BasicInformation />
                <WorkExperience />
                <Skills />
                <SelfAssessment />
            </div>
        )
    }
}