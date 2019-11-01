/**************************************************************************************
 * 제목		      : 로그인 View 페이지
 * 소스파일 이름	: index.js
 * 파일설명		   : 로그인 View를 관리 하는 페이지 
 * 작성자		   : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10~
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	    : import react 추가
**************************************************************************************/

import React, {Component} from 'react'

import Page from '../../components/Page'
import Login from './Login'
import Find from './find'


const Contents = (props) => (
   <div>
      {props.id == null && <Login />}
      {props.id == 'login' && <Login />}
      {props.id == 'find' && <Find />}
  </div>
);

// export default (props) => (
//   <Page title='' >
//     <LoginPageContent {...{this.props.page}}/>
//   </Page>
// );

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    console.log(this.props);
    
    return (
      <Page title='로그인페이지' >
        <Contents {...this.props}/>s
      </Page>
    )
  }
}