/**************************************************************************************
 * 제목		      : 메인 리스트화면
 * 소스파일 이름	: MainList.js
 * 파일설명		   : 메인 화면에서 리스트를 보여주는 컴포넌트
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-03
 * 최종수정자	   : 금정민
 * 최종수정내용	    : class->className으로 변경 및 props값이 전달되는지 임시 코드 테스트
**************************************************************************************/


import React from 'react'
import Link from 'next/link';
import { Card, Icon, Grid, Segment, Button, Progress, Pagination } from 'semantic-ui-react'

const extra = (
  <div>
    <Icon name='user' />

    <Progress percent="33" size='tiny' indicating />
  </div>
)


const MainList = (props) => (
    <div>
        <Grid>
            <Grid.Column width="2" />    
            <Grid.Column width="8">        
                <h3>{props.MainTitle}</h3>
            </Grid.Column>
            <Grid.Column>
                <Pagination defaultActivePage={1}
                firstItem={null} lastItem={null}
                pointing secondary totalPages={4} />
            </Grid.Column>
        </Grid>
         <br/>
        <Grid columns='equal'>
            <Grid.Row centered>
                <Grid.Column width="4"> 
                    <Link as='/상세페이지' href={{ pathname: '/detail', query: { id: 'story', title: '스토리' } }}>
                        <Card
                            image='../../static/test/testlist.png'
                            header={props.MainTitle}
                            meta='Friend'
                            description='Elliot is a sound engineer'
                            extra={extra}
                            />
                    </Link>
                        
                   
                </Grid.Column>
      
                <Grid.Column width="4">
                    <Link as='/d' href='/FundingGuide'>
                    <Card
                        image='../../static/test/testlist.png'
                        header={props.MainTitle}
                        meta='Friend'
                        description='Elliot is a sound engineer'
                        extra={extra}
                        />
                        </Link>
                    
                </Grid.Column>
      
                <Grid.Column width="4">
                
                    <Card
                        image='../../static/test/testlist.png'
                        header={props.MainTitle}
                        meta='Friend'
                        description='Elliot is a sound engineer'
                        extra={extra}
                        />
                   
                </Grid.Column>
      
            </Grid.Row>
        </Grid>
    </div>    

     


        
       


  
  
)

export default MainList

