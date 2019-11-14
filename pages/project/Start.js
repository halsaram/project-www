/**************************************************************************************
 * 제목          : 프로젝트 올리기 스타트 페이지
 * 소스파일 이름  : pages/prject/Start.js
 * 파일설명		   : 프로젝트 올리기를 클릭시 처음페이지
 * 작성자		     : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-11
 * 최종수정자	   : 정휘선
 * 최종수정내용	  : UI 수정
**************************************************************************************/
import React, { Component, useState } from 'react'
import Link from 'next/link';
import { Divider, Header, Icon, Grid, Button, Image, List, Segment } from 'semantic-ui-react'
import { height } from 'window-size';
import CatoList from '../main/CatoList'
import { inject, observer} from 'mobx-react'



const fontStyle={
    color : "white",
}
const BackStyle={
    background : "url(../../../../static/project/crowd_header.png)",
    backgroundSize : 1400
}
const Margin = {
    margin : 20,
    width : 100,
    height : 10,
}

@inject('userStore')
@observer
class Start extends React.Component{

    alart(){
         alert("로그인이 필요한 서비스 입니다");
    }

    render(){const {userStore} = this.props;
        return(


    <React.Fragment>
        
        <Grid columns='equal'>
        <Segment>
            <Grid.Column/>
            <Grid.Column width={12}>               
                <Grid style={BackStyle}>
                    <Grid.Column width={2} />
                    <Grid.Column width={6}>
                        <Image src='../../static/project/crowd_wadiz.png' size="huge"/>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign ="right" verticalAlign="bottom" style={fontStyle}>
                        <h2 style={fontStyle}>크라우드 펀딩으로 <br/> 당신의 아이디어를 실현하세요</h2>
                        <p>서포터에게 제품과 서비스를 제공하세요</p>
                        {userStore.loggedIn ?   <Button color="blue" onClick={this.alart}  content='Click' fluid>
                            <a style={fontStyle}>지금시작하기</a>
                        </Button>: <Button color="blue"  content='Click' fluid>
                        <Link as='/프로젝트정책' href={{ pathname: '/project', query: { id: 'agreements', title: '프로젝트정책' } }}>
                            <a style={fontStyle}>지금시작하기</a>
                        </Link>
                        </Button> }
                      
                    </Grid.Column>
                </Grid>

                <Grid>
                    
                    <Grid.Column width={9}>
                        <Image src='../../static/project/crowd_all.png' size="huge"/>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign ="left">
                        <div style={Margin} /><div style={Margin} />
                        <List bulleted>
                            <List.Item><h2>크라우드 펀딩이란?</h2></List.Item> 
                            <p>프로젝트를 인터넷에 공개하고 목표금액과 모금기간을 정하여 익명의 다수(crowd)에게 투자를 받는 방식이다.</p>
                        </List>
                        <div style={Margin} /> <div style={Margin} />
                        <List bulleted>
                            <List.Item><h2>크라우드 펀딩을 하는 이유는?</h2></List.Item> 
                            <p>제품 제작 비용을 사전에 확보할 수 있습니다.<br/>
                                고객의 니즈를 파악할 수 있습니다.<br/>
                                새로운 투자자나 제휴 업체를 만날 수 있습니다.</p>
                        </List>
                    </Grid.Column>
                </Grid>
                <div style={Margin} /><div style={Margin} />
                <div style={Margin} /><div style={Margin} />
                <CatoList dataType= "" verticalAlign="bottom" header="여러 종류의 크라우드 펀딩이 가능합니다." description="테크, 가전, 패션, 잡화는 물론 반려 동물 용품까지 여러 종류의 크라우드 펀딩이 가능합니다."></CatoList>
                <div style={Margin} /><div style={Margin} />
                <div style={Margin} /><div style={Margin} />

                <Grid>
                    <Grid.Column width={2} />
                    <Grid.Column width={6}>
                        <Image src='../../static/project/crowd_how.png' size="huge"/>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign ="left" verticalAlign="top">
                        <h2>크라우드 펀딩 절차는 이렇습니다.</h2>
                        <List as='ol'>
                            <List.Item as='li'>펀딩 작성 시작</List.Item>
                            <List.Item as='li'>프로젝트 검토 요청 및 심사</List.Item> 
                            <List.Item as='li'>프로젝트 오픈</List.Item> 
                            <List.Item as='li'>프로젝트 종료 및 일부 정산</List.Item> 
                            <List.Item as='li'>리워드 준비 및 배송</List.Item> 
                            <List.Item as='li'>고객 평가</List.Item> 
                            <List.Item as='li'>고객 만족도 일정 수준 도달시 최종 정산</List.Item> 
                            
                        </List>
                        <Button color="blue" fluid >
                        <Link as='/프로젝트정책' href={{ pathname: '/project', query: { id: 'agreements', title: '프로젝트정책' } }}>
                            <a style={fontStyle} >프로젝트 시작하기</a>
                        </Link>
                        </Button>
                    </Grid.Column>
                    <div style={Margin} /><div style={Margin} />
                    <div style={Margin} /><div style={Margin} />         
                </Grid>
            </Grid.Column>
    <Grid.Column/>
    <div style={Margin} /><div style={Margin} />
    </Segment>
  </Grid>               
  
        
  
    </React.Fragment>
        )
    }




}


export default Start;



// <Button size='massive' primary color='white'>
                    
// <Link as='/프로젝트정책' href={{ pathname: '/project', query: { id: 'agreements', title: '프로젝트정책' } }}>
//     <button class="ui blue button">지금시작하기</button>
// </Link>
// </Button>