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

import Layout from '../../components/Layout'
import Login from './Login'
import Find from './find'


const LoginPageContent = (props) => (
   <div>
    {props.url.query.id == null && <Login />}
    {props.url.query.id == 'login' && <Login />}
    {props.url.query.id == 'find' && <Find />}
  </div>
);

export default (props) => (
  <Layout title={props.url.query.title} >
    <LoginPageContent url={props.url}/>
  </Layout>
);