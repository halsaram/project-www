/**************************************************************************************
 * 제목		      : 카테고리 리스트화면
 * 소스파일 이름	: CatoList.js
 * 파일설명		   : 메인화면에서 카테고리 리스트를 보여주는 컴포넌트
 * 작성자		     : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-03
 * 최종수정자	   : 금정민
 * 최종수정내용	  :catoList의 버튼 클릭시 리스트의 제목과 데이터가 변경되는지 테스트 코드 작성
**************************************************************************************/

import React, {useState} from 'react';
import MainList from './MainList';
import { Card, Icon, Grid, Segment, Button, Progress } from 'semantic-ui-react'

//예시 데이터________________________________________________________________________
const EditReco = { 
  a : {name:"EditReco name", editor:"EditReco editor", day:"12", money:"127.0900", percent:"30"},
  b : {name:"", editor:"", day:"", money:"", percent:"30"},
  c : {name:"", editor:"", day:"", money:"", percent:"30"}
}
//1. 카테고리원이 n개 존재한다.
//2. 카테고리원을 클릭(event)하면 MainList에 카테고리의 이름값을 넘긴다.
//3. MainList에서는 이 이름값에 해당하는 데이터를 가져온다.(3개가 넘으면 overflow를 이용한다.)
//___________________________________________________________________________________

<<<<<<< HEAD

=======
>>>>>>> 4b396b81a014bc8d102f06126aec4a1fc89574a7
const CatoList =()=> {
  const [btnId, setBtnId] = useState("생활");  

  return(
    <div>
      <Grid>
        <Grid.Row columns={1} centered>
          <Grid.Column width="12">
            <button className="ButtonStyle" onClick={()=> setBtnId("생활")}>생활</button>      
            <button className="ButtonStyle" onClick={()=> setBtnId("가전")}>가전</button>      
            <button className="ButtonStyle" onClick={()=> setBtnId("패션")}>패션</button>
            <button className="ButtonStyle" onClick={()=> setBtnId("여행")}>여행</button>
            <button className="ButtonStyle" onClick={()=> setBtnId("레저")}>레저</button>
            <button className="ButtonStyle" onClick={()=> setBtnId("애완")}>애완</button>
            <button className="ButtonStyle" onClick={()=> setBtnId("유아")}>유아</button>
            <button className="ButtonStyle" onClick={()=> setBtnId("기타")}>기타</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <MainList value={EditReco} MainTitle={btnId}/>
    </div>

  )
}

export default CatoList;













    
