import React, { Component } from 'react';
import { observer,inject } from 'mobx-react';
import { Avatar, Icon } from 'antd';
import basicStyle from '../../../css/resume/show/basic.less';

// 基本信息编写结果
@inject('basicStore', 'chooseColorStore')
@observer
export default class BasicWriteResult extends Component {

    render () {
        const basic = this.props.basicStore.basicInformation.basic;
        return (
            <div className={basicStyle.BasicPosition} style={this.props.chooseColorStore.Colorli}>
                <Avatar className={basicStyle.avatar} size={70} icon="user" />
                <p className={basicStyle.name}>{basic[0].value}</p>
                <p className={basicStyle.jobs}>{basic[1].value}</p> 

                <div className={basicStyle.h3Position}>

                    <h3 style={this.props.chooseColorStore.Colorli}>
                        <Icon className={basicStyle.icon} type="user-add" />
                        个人介绍
                    </h3>
                    <div className={basicStyle.testBox} >{basic[2].value}</div>
                    <div className={basicStyle.testBox} >{basic[3].value}</div>
                    <div className={basicStyle.testBox} >{basic[4].value}</div>
                    
                    <h3 style={this.props.chooseColorStore.Colorli}>
                        <Icon className={basicStyle.icon} type="usergroup-add" />
                        联系方式
                    </h3>
                    <div className={basicStyle.contact}>
                        <Icon className={basic[5].value.length === 0 ? basicStyle.phone2 : basicStyle.phone} type="phone" theme="filled" /> 
                        {basic[5].value}<br />
                        <Icon className={basic[6].value.length === 0 ? basicStyle.creditCard2 : basicStyle.creditCard} type="credit-card" />
                        {basic[6].value}
                    </div> 
                    
                    <h3 style={this.props.chooseColorStore.Colorli}>
                        <Icon className={basicStyle.icon} type="trophy" />
                        个人技能
                    </h3>
                    <div className={basicStyle.testBox}>{basic[7].value}</div>

                    <h3 style={this.props.chooseColorStore.Colorli}>
                        <Icon className={basicStyle.icon} type="trademark" />
                        其他联系
                    </h3>
                    <div className={basicStyle.OtherContact}>
                        {/* 博客, github, fackboox, weibo */}
                        <Icon className={basic[8].value.length === 0 ? basicStyle.boke2 : basicStyle.boke} type="behance" />
                        {basic[8].value}<br />
                        <Icon className={basic[9].value.length === 0 ? basicStyle.github2 : basicStyle.github} type="github" />
                        {basic[9].value}<br />
                        <Icon className={basic[10].value.length === 0 ? basicStyle.fackboox2 : basicStyle.fackboox} type="facebook" />
                        {basic[10].value}<br />
                        <Icon className={basic[11].value.length === 0 ? basicStyle.weibo2 : basicStyle.weibo} type="weibo" />
                        {basic[11].value}
                    </div>
                </div>
                
            </div>
        )
    }
}