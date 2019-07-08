import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import { Icon } from 'antd';

import assessmentStyle from '../../../css/resume/show/assessment.less';
import showCommonStyle from '../../../css/resume/show/common.less';

@inject('resumeCommonStore', 'assessmentStore', 'chooseColorStore')
@observer
export default class AssessmentResult extends Component {

    render () {
        return (
            <div className={showCommonStyle.editorResult}>
                <h3 style={this.props.chooseColorStore.Colorli}>
                    <Icon type="star" className={showCommonStyle.star} style={{color: this.props.chooseColorStore.Colorli.backgroundColor}} />
                    自我评价
                </h3>
                <div className={assessmentStyle.assessmentdescribe}>
                    {this.props.assessmentStore.selfAssessment.assessment[0].value}
                </div>
            </div>
        )
    }
}