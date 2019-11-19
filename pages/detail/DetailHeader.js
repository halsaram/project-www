/**************************************************************************************
 * 제목          : 상세페이지 화면 중  프로젝트 이미지/제목 부분
 * 소스파일 이름  : pages/project/projectHeader.js
 * 파일설명		   : 상세페이지 메뉴에서 가장 윗 상단에 위치한다.
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-11-05
 * 최종수정자	   : 이은미
 * 최종수정내용	  : Button 추가
**************************************************************************************/

import React from 'react'

import Link from 'next/link';
import DetailLink from './DetailLink';
import { Grid, Segment, Image, Button } from 'semantic-ui-react'

const margin={
    width: 100,
    height : 2,
    margin : 20
}
const smallFont={
    color : "gray",
    fontSize : "1rem"
}
const largeFont={
    color : "black",
    fontSize : "2rem",
    marginLeft : 20
}

//2. 프로젝트 제목 적기 
const detailHeader = () => (
    <div>
        <div style={margin}></div>
        {/* 상세보기 이름 */}
        <Grid columns='equal'>
            <Grid.Column/>
                <Grid.Column width={8} textAlign="center">
                    <h2>프로젝트 이름</h2>
                    <p>제작자</p>
                </Grid.Column>
            <Grid.Column/>

            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='large' />
                </Grid.Column>
                <Grid.Column textAlign="left">
                    <p style={ smallFont}>모인금액 / 달성률 <br/> <br/>  
                    <span style={largeFont}>금액  <span style={smallFont}>00%</span></span> </p>

                    <div style={margin}></div>

                    <p style={ smallFont}>남은 시간<br/> <br/>  
                    <span style={largeFont}>00일 남음  <span style={smallFont}>2017.01.01 마감</span></span> </p>

                    <div style={margin}></div>
                    <Button color="blue"> 프로젝트 밀어주기</Button> 
                    <Button color='red' icon='heart'/>

                </Grid.Column>
        </Grid.Row>
        <div style={margin}></div>
 
    </Grid>



 
    </div>
)

export default detailHeader