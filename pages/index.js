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
import { Grid, Segment } from 'semantic-ui-react'
import Main_Banner from './main/Main_Banner'
import MainList from './main/MainList'
import CatoList from './main/CatoList'
import HeaderBar from '../components/Header'
import { inherits } from 'util'
import { height } from 'window-size'
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
const ItemMargin = {    //간격용 디자인
  margin : 50,
  width : 100,
  height : 100
}
const CatoColor = {     //카테고리 부분의 뒷 배경

}

const Contents = (props) => (
  <div>
    <HeaderBar/>
    <Main_Banner />
    <div>
      <MainList value={NewProject} MainTitle='신규 프로젝트'/>
      <div style={ItemMargin}></div>      {/* 간격을 margin으로 처리한다. */}
      
      <MainList value={SuccessProject} MainTitle='성공임박 프로젝트'/>
      <div style={ItemMargin}></div>      {/* 간격을 margin으로 처리한다. */}

    <div className = "GrayDiv">
      <CatoList />
    </div>
    <div style={ItemMargin}></div>      {/* 간격을 margin으로 처리한다. */}

    <MainList value={EncoreProject} MainTitle='앵콜 프로젝트'/>
    <div style={ItemMargin}></div>      {/* 간격을 margin으로 처리한다. */}
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

//-------------------임시데이터------------------------------------
//프로젝트별 제목(title) | 창작자(editor) | 디데이(Dday) | 분류(catogory)
//목표금액(targetCoin) | 모금된 금액(fundCoin)
//const NewProject = [[a:1,b:2,3],[2],[3]]
const NewProject = [
    { id:0, text: '첫번째 일정 입니다.', done: true},
    { id:1, text: '두번째 일정 입니다.', done: false}
]
 //변수에 담고 -> 

// const NewProject = {
//   one : {title : "첫번째 프로젝트 제목", 
//         editor : "창작자1", 
//         Dday : 130, 
//         catogory : "생활", 
//         targetCoin :10000, 
//         fundCoin: 5000 },}

//   two : {title : "두번째 프로젝트 제목", editor : "창작자2", Dday : 50,
//         catogory : "애완", targetCoin :9000, fundCoin: 5000 },
//   three : {title : "세번째 프로젝트 제목", editor : "창작자3", Dday : 600,
//         catogory : "여행", targetCoin :10000, fundCoin: 5000 },
//   four : {title : "네번째 프로젝트 제목", editor : "창작자4", Dday : 70,
//         catogory : "생활", targetCoin :500000, fundCoin: 5000 },
//   five : {title : "다섯번째 프로젝트 제목", editor : "창작자5", Dday : 450,
//         catogory : "생활", targetCoin :100000, fundCoin: 5000 },
//   six : {title : "여섯번째 프로젝트 제목", editor : "창작자6", Dday : 600,
//           catogory : "유아", targetCoin :7000, fundCoin: 2000 },
//   seven : {title : "일곱번째 프로젝트 제목", editor : "창작자7", Dday : 50,
//           catogory : "생활", targetCoin :10000, fundCoin: 5000 },
//   eight :  {title : "여덟번째 프로젝트 제목", editor : "창작자8", Dday : 50,
//           catogory : "생활", targetCoin :10000, fundCoin: 5000 },
//   nine : {title : "아홉번째 프로젝트 제목", editor : "창작자9", Dday : 50,
//           catogory : "생활", targetCoin :10000, fundCoin: 5000 }
// }
const SuccessProject = {
  one : {title : "첫번째 프로젝트 제목", editor : "창작자1", Dday : 130, 
      catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  two : {title : "두번째 프로젝트 제목", editor : "창작자2", Dday : 50,
      catogory : "애완", targetCoin :9000, fundCoin: 5000 },
  three : {title : "세번째 프로젝트 제목", editor : "창작자3", Dday : 600,
      catogory : "여행", targetCoin :10000, fundCoin: 5000 },
  four : {title : "네번째 프로젝트 제목", editor : "창작자4", Dday : 70,
      catogory : "생활", targetCoin :500000, fundCoin: 5000 },
  five : {title : "다섯번째 프로젝트 제목", editor : "창작자5", Dday : 450,
      catogory : "생활", targetCoin :100000, fundCoin: 5000 },
  six : {title : "여섯번째 프로젝트 제목", editor : "창작자6", Dday : 600,
      catogory : "유아", targetCoin :7000, fundCoin: 2000 },
  seven : {title : "일곱번째 프로젝트 제목", editor : "창작자7", Dday : 50,
      catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  eight :  {title : "여덟번째 프로젝트 제목", editor : "창작자8", Dday : 50,
      catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  nine : {title : "아홉번째 프로젝트 제목", editor : "창작자9", Dday : 50,
      catogory : "생활", targetCoin :10000, fundCoin: 5000 }

}
const CatoProject = {
  one : {title : "첫번째 프로젝트 제목", editor : "창작자1", Dday : 130, 
        catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  two : {title : "두번째 프로젝트 제목", editor : "창작자2", Dday : 50,
        catogory : "애완", targetCoin :9000, fundCoin: 5000 },
  three : {title : "세번째 프로젝트 제목", editor : "창작자3", Dday : 600,
        catogory : "여행", targetCoin :10000, fundCoin: 5000 },
  four : {title : "네번째 프로젝트 제목", editor : "창작자4", Dday : 70,
        catogory : "생활", targetCoin :500000, fundCoin: 5000 },
  five : {title : "다섯번째 프로젝트 제목", editor : "창작자5", Dday : 450,
        catogory : "생활", targetCoin :100000, fundCoin: 5000 },
  six : {title : "여섯번째 프로젝트 제목", editor : "창작자6", Dday : 600,
        catogory : "유아", targetCoin :7000, fundCoin: 2000 },
  seven : {title : "일곱번째 프로젝트 제목", editor : "창작자7", Dday : 50,
        catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  eight :  {title : "여덟번째 프로젝트 제목", editor : "창작자8", Dday : 50,
        catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  nine : {title : "아홉번째 프로젝트 제목", editor : "창작자9", Dday : 50,
        catogory : "생활", targetCoin :10000, fundCoin: 5000 }

}
const EncoreProject = {
  one : {title : "첫번째 프로젝트 제목", editor : "창작자1", Dday : 130, 
          catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  two : {title : "두번째 프로젝트 제목", editor : "창작자2", Dday : 50, 
          catogory : "애완", targetCoin :9000, fundCoin: 5000 },
  three : {title : "세번째 프로젝트 제목", editor : "창작자3", Dday : 600,
          catogory : "여행", targetCoin :10000, fundCoin: 5000 },
  four : {title : "네번째 프로젝트 제목", editor : "창작자4", Dday : 70,
          catogory : "생활", targetCoin :500000, fundCoin: 5000 },
  five : {title : "다섯번째 프로젝트 제목", editor : "창작자5", Dday : 450,
          catogory : "생활", targetCoin :100000, fundCoin: 5000 },
  six : {title : "여섯번째 프로젝트 제목", editor : "창작자6", Dday : 600,
         catogory : "유아", targetCoin :7000, fundCoin: 2000 },
  seven : {title : "일곱번째 프로젝트 제목", editor : "창작자7", Dday : 50,
          catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  eight :  {title : "여덟번째 프로젝트 제목", editor : "창작자8", Dday : 50,
          catogory : "생활", targetCoin :10000, fundCoin: 5000 },
  nine : {title : "아홉번째 프로젝트 제목", editor : "창작자9", Dday : 50,
          catogory : "생활", targetCoin :10000, fundCoin: 5000 }

} 