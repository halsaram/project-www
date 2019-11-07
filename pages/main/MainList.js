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


import React, { useState } from 'react'
import Link from 'next/link';
import { Card, Icon, Grid, Segment, Button, Progress, Pagination } from 'semantic-ui-react'
import Page from '../../components/Page';

const extra = (
  <div>
    <Icon name='user' />
    <Progress percent="33" size='tiny' indicating />
  </div>
)

// 1번째, props.value[0] -> 한 줄의 데이터 -> 배열데이터에 넣고 -> 이용?(mapping)

const MainList = (props) => {
    const [activePage ,setActivePage] = useState(1);   //현재 활성화된 페이지값
    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)
    // 버튼 클릭시 -> activePage에 값이 변경 -> state변수에 저장
    const dataList = props.value;




    return(
    <div>
        <Grid>
            <Grid.Column width="2" />      
            <Grid.Column width="8">     
                {/* 프로젝트 제목 */}   
                <h3>{props.MainTitle}</h3>    
            </Grid.Column>

            {/* 페이지네이션 */}
            <Grid.Column>
                <Pagination 
                activePage={activePage}
                onPageChange={handlePaginationChange}
                defaultActivePage={1}
                firstItem={null}
                lastItem={null} 
                pointing secondary totalPages={3}  
                 />     
            </Grid.Column>
        </Grid>
        
         <br/>
      
        
        <Grid columns='equal'>
            <Grid.Row centered>
               {/* 1. 9개 가지고 옴-> */}
               {/* 데이터값 props.value */}
                {/*페이지클릭 -> activePage(1,2,3)변수값에 저장  */}
                {/* 1 클릭시 -> 데이터 1~3까지 */}
                {/* 2 클릭시 -> 데이터 4~6까지 */}
                {/* 3 클릭시 -> 데이터 7~9까지 */}

                
               {/* 첫번째 카드 */}
                <Grid.Column width="4"> 
                    <Card
                        image='../../static/test/testlist.png'
                        header={props.MainTitle}
                        meta='Friend'
                        description={props.value.id}
                        extra={extra}
                        />
                        
                </Grid.Column>

                {/* 두번째 카드 */}
                <Grid.Column width="4"> 
                    <Card
                        image='../../static/test/testlist.png'
                        header={props.MainTitle}
                        meta='Friend'
                        description='Elliot is a sound engineer'
                        extra={extra}
                        />
                </Grid.Column>

                {/* 세번쨰 카드 */}
                <Grid.Column width="4"> 
                    <Card
                        image='../../static/test/testlist.png'
                        header={props.MainTitle}
                        meta='{dataList[0, id]}'
                        description='Elliot is a sound engineer'
                        extra={extra}
                        />
                </Grid.Column>


               
               
               
{/*                
                <Grid.Column width="4"> 
 */}

{/* 
                {activePage}
                {/* 1클릭시 -> 데이터 a(1), a+1(2), a+2(3)  시작값 = 1 */} 
                {/* 2클릭시 -> 데이터 a+2=b(4), b+1(5), b+2(6) 시작값 = 4 */}
 */}

                
                    {/* <Link as='/상세페이지' href={{ pathname: '/detail', query: { id: 'story', title: '스토리' } }}>
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
                   
                </Grid.Column> */}
      
            </Grid.Row>
        </Grid>
    </div>    

    );

     


        
       


  
  
}

export default MainList

