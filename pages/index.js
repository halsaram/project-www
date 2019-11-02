/**************************************************************************************
 * 제목		      : 메인화면
 * 소스파일 이름	: index.js
 * 파일설명		   : 메인화면에 해당하는 컴포넌트를 모으는 곳
 * 작성자		     : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10 ~
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	  : import react 추가
**************************************************************************************/
import React, {Component} from 'react'
import Page from '../components/Page'

import Layout from '../components/Layout'
import Main_Banner from './main/Main_Banner'
import Lower_Banner from './main/Lower_Banner'
import MainList from './main/MainList'
import CatoList from './main/CatoList'
import HeaderBar from '../components/Header'
// 임시 데이터------------------------------------------------------------------------
//map반복문을 통해 a,b,c에 적절한 인덱스의 데이터를 담음
const EditReco = { //반복문을 써서 9개의 데이터를 가져옴 -현재는 3개만 가져오기로
  a : {name:"EditReco name", editor:"EditReco editor", day:"12", money:"127.0900", percent:"30"},
  b : {name:"", editor:"", day:"", money:"", percent:"30"},
  c : {name:"", editor:"", day:"", money:"", percent:"30"}
}
const NewReco = { //반복문을 써서 9개의 데이터를 가져옴 -현재는 3개만 가져오기로
  a : {name:"EditReco name", editor:"EditReco editor", day:"12", money:"127.0900", percent:"30"},
  b : {name:"", editor:"", day:"", money:"", percent:"30"},
  c : {name:"", editor:"", day:"", money:"", percent:"30"}
}
const EndReco = { //반복문을 써서 9개의 데이터를 가져옴 -현재는 3개만 가져오기로
  a : {name:"EditReco name", editor:"EditReco editor", day:"12", money:"127.0900", percent:"30"},
  b : {name:"", editor:"", day:"", money:"", percent:"30"},
  c : {name:"", editor:"", day:"", money:"", percent:"30"}
}
const ReReco = { //반복문을 써서 9개의 데이터를 가져옴 -현재는 3개만 가져오기로
  a : {name:"EditReco name", editor:"EditReco editor", day:"12", money:"127.0900", percent:"30"},
  b : {name:"", editor:"", day:"", money:"", percent:"30"},
  c : {name:"", editor:"", day:"", money:"", percent:"30"}
}
//--------------------------------------------------------------------------


const Contents = (props) => (
  <div>
    <HeaderBar/>
    <Main_Banner />
    <div>
      <MainList value={NewReco} MainTitle='신규 프로젝트'/><br /> <br /><br /><br />
      <MainList value={EndReco} MainTitle='성공임박 프로젝트'/><br /> <br /><br /><br />
      <br />
    <div className = "GrayDiv">
      <CatoList />
    </div><br /> <br /><br /><br />
    <MainList value={ReReco} MainTitle='앵콜 프로젝트'/>
    <br /><br /><br />
    </div>
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