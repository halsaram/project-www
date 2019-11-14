/**************************************************************************************
 * 제목          : 마이페이지 연결
 * 소스파일 이름  : pages/mypage/index.js
 * 파일설명		   : 모든 마이페이지를 연결시킨다
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-11
 * 최종수정일자 	: 2019-11-14
 * 최종수정자	   : 이은미
 * 최종수정내용	  :
**************************************************************************************/

import React, { Component, useState } from 'react'
import Page from '../../components/Page'

import MyProfile from './MyProfile'
import MyProject from './MyProject'
import MySupport from './MySupport'


const Contents = (props) => (
    <div>
        {props.id == 'myprofile' && <MyProfile />}
        {props.id == 'myproject' && <MyProject />}
        {props.id == 'mysupport' && <MySupport />}
    </div>
)

export default class extends Component {
    static getInitialProps({ query: { id, title } }) {
        return { id, title }
    }

    render() {
        return (
            <Page title={this.props.title} >
                <Contents {...this.props} />
            </Page>
        )
    }
}