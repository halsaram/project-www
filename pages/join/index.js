/**************************************************************************************
 * 제목		      : 회원가입 View 페이지
 * 소스파일 이름	: index.js
 * 파일설명		   : 회원가입 View를 관리 하는 페이지
 * 작성자		   : 전새희
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10~
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	    : import react 추가
**************************************************************************************/
import React, { Component } from 'react'

import Page from '../../components/Page'
import Join from './join'
import MailJoin from './mailjoin'


const Contents = (props) => (
    <div>
       {props.id == null && <Join />}
       {props.id == 'join' && <Join />}
       {props.id == 'mailjoin' && <MailJoin />}
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