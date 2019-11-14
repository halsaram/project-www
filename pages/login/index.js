/**************************************************************************************
 * 제목		      : 로그인 View 페이지
 * 소스파일 이름	: index.js
 * 파일설명		   : 로그인 View를 관리 하는 페이지 
 * 작성자		   : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10~
 * 최종수정일자 	: 2019-11-14
 * 최종수정자	   : 전새희
 * 최종수정내용	    : google 삭제
**************************************************************************************/

import React, {Component} from 'react'

import Page from '../../components/Page'
import Login from './login'
import Find from './find'

const Contents = (props) => (
   <div>
    {props.id == 'login' && <Login />}
    {props.id == 'find' && <Find />}
  </div>
  
);


export default class extends Component {
  static getInitialProps ({ query: { id, title } }) {
    return { id, title }
  }

  render () {  
    return (
      <Page title={this.props.title} >
        <Contents {...this.props}/>
      </Page>
    )
  }
}
