/**************************************************************************************
 * 제목          : 마이페이지 내가 만든 프로젝트
 * 소스파일 이름  : pages/mypage/MyProject.js
 * 파일설명		   : 마이페이지 에서 내가만든 프로젝트를 확인 할 수 있음
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-11
 * 최종수정일자 	: 2019-11-14
 * 최종수정자	   : 전새희
 * 최종수정내용	  : Base
**************************************************************************************/

import React, { Component } from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    Button,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    Label,
    Menu,
    Message,
    Segment,
    Table,
} from 'semantic-ui-react'

const MyProject = () => (
    <Grid container style={{ padding: '5em 0em' }}>
        <Grid.Row>
            <Grid.Column>
                <Header as='h1' dividing>
                    나의 후원 현황
        </Header>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <Header as='h1'>Buttons</Header>
                <Button as='a' tabIndex='0'>
                    모두보기
        </Button>
                <Button as='a' primary tabIndex='0'>
                    펀딩 진행중
        </Button>
                <Button as='a' basic tabIndex='0'>
                    결제완료
        </Button>
            </Grid.Column>
        </Grid.Row>

       

        <Grid.Row>
            <Grid.Column>
                <Header as='h1'></Header>
                <Divider />

                <Segment>
                    <p>
                        총 0건의 결제 완료된 후원이 있습니다.
          </p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default MyProject