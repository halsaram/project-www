/**************************************************************************************
 * 제목		      : 풋터 공지사항
 * 소스파일 이름	: Notices.js
 * 파일설명		   : footer에서 공지사항 클릭 시 보여주는 컴포넌트
 * 작성자		   : 이동호
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-03
 * 최종수정일자 	: 2019-11-15
 * 최종수정자	   : 이은미
 * 최종수정내용	    : Layout
**************************************************************************************/

import React from 'react'
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

const Notices = () => (

   
    <Container style={{ marginTop: '3em' }}>
        <Header as='h1'>공지사항</Header>

        <Header as='h2' dividing>
         
    </Header>

        <Grid columns={30} doubling>
            <Grid.Column>
                <Menu
                    items={[
                        { key: '1', name: 'link-1', content: '전체' },
                        { key: '2', name: 'link-2', content: '공지' },
                        { key: '3', name: 'link-3', content: '이벤트' },
                        { key: '4', name: 'link-3', content: '보도자료' },
                    ]}
                    pointing
                    tabular
                />

                 <Container style={{ marginTop: '3em' }}></Container>
                <h4><p> 보도자료 </p></h4>
                <h2><p>캐릭터 격전지로 떠오른 '텀블벅'..웹툰 플랫폼 흥행작부터 크리에이터까지</p></h2>
                <p>2019.11.15</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Grid.Column>
        </Grid>
    </Container>
)

export default Notices