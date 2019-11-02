/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지
 * 소스파일 이름  : pages/deteile/index.js
 * 파일설명		  : 모든 프로젝트 상세 페이지를 연결시킨다
 * 작성자		  : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-10
 * 최종수정일자    : 
 * 최종수정자	   : 
 * 최종수정내용	   : 
**************************************************************************************/
import React, { Component } from 'react'
import Page from '../../components/Page'

import DetailHeader from './DetailHeader'
import Story from './Story'
import Community from './Community'
import FundingGuide from './FundingGuide'
import DetailCato from './DetailCato'


const Contents = (props) => (
    <div>
        {props.id == 'story' && <Story />}
        {props.id == 'community' && <Community />}
        {props.id == 'fundingguide' && <FundingGuide />}
        {props.id == 'detailcato' && <DetailCato />}
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
