/**************************************************************************************
 * 제목		      : 메인화면
 * 소스파일 이름	: index.js
 * 파일설명		   : 메인화면에 해당하는 컴포넌트를 모으는 곳
 * 작성자		     : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10 ~
 * 최종수정일자 	: 2019-11-08
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 카드 페이지네이션 기능 구현(제일 하단에 임시데이터 형식이 있음)
**************************************************************************************/
import React, {Component, useState, useReducer} from 'react'
import { inject, observer } from 'mobx-react';
import { inherits } from 'util'
import { height } from 'window-size'
import Page from '../components/Page'
import Main_Banner from './main/Main_Banner'
import HeaderBar from '../components/Header'
import CatoList from '../pages/main/CatoList';
import Pagnation from '../pages/main/Pagnation'


//여기자체에서 값을 받아서
const Contents = () => {
  
  return(
    <div>
      <HeaderBar/>
      <Main_Banner />
{/*  pagnation에서 불러오는 컴포넌트 부분*/}
      <Pagnation title="새로운 프로젝트" project="NewProject"/>
      <div style={ItemMargin} />   

     {/* ------카테고리 프로젝트--------------------------------------------------------------- */}
      <CatoList dataType="threeData"/>
      <div style={ItemMargin} />   
 
      <Pagnation title="성공임박 프로젝트" project="EncoreProject"/>
      <div style={ItemMargin} />   
      <Pagnation title="성공임박 프로젝트" project="EndProject"/>
      <div style={ItemMargin} />   


    </div>

  );

}

{/* ------------------------------------------------------------------------------ */}
@inject('postStore') @observer
export default class extends Component {
  static async getInitialProps({ mobxStore, query }) {
    await mobxStore.postStore.fetch(query.id);
    return { post: mobxStore.postStore.post };
  }

  render () {
    const { post } = this.props;
    console.log(this.props);
    return (
      <Page title={this.props.title} >
        <Contents {...this.props}/>
      </Page>
    )
  }
}


//------부수적인 디자인-----------------------------------------------------------------
const ItemMargin = {    //간격용 디자인
  margin : 20,
  width : 100,
  height : 100
}

//1. 카테고리 클릭하는 컴포넌트 -> id값을 받아서 
//-> 그에 해당하는 걸 filter(메인에서는 카테고리별 데이터 3개씩 있는 데이터1)

//2. 카테고리 전체보기 페이지 -> 카테고리 컴포넌트 넣고 -> 이 카테고리 전체보기 페이지에는 전체 데이터를 불러옴

