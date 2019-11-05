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

import React from 'react'

// import Layout from '../../components/Layout'
import Login from './Login'
// import Find from './find'

import Page from '../../components/Page'


const LoginPageContent = (props) => (
  <div>
    {console.log(props)}
    <Login />
  </div>
  
);

export default (props) => (
  <Page title='로그인'>
    <LoginPageContent {...props}/>
  </Page>
);