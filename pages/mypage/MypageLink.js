/**************************************************************************************
 * 제목          : 마이페이지 메뉴
 * 소스파일 이름  : pages/mypage/MypageLink.js
 * 파일설명		   : 마이페이지 메뉴 부분
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-11
 * 최종수정일자 	: 2019-11-11
 * 최종수정자	   : 이은미
 * 최종수정내용	  : 마이페이지의 메뉴바를 컴포넌트로 분리해서 작성
**************************************************************************************/

import Link from 'next/link';
import React, { Component, useState } from 'react'
import { Menu, Segment, Grid, Button, Checkbox } from 'semantic-ui-react'


// 페이지 메뉴링크바
class MypageLink extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Menu tabular widths={5}>
                            <Menu.Item
                                name='MySupport'
                            active={activeItem === 'MySupport'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='/내 후원현황' href={{ pathname: '/mypage', query: { id: 'mysupport', title: '내 후원현황' } }}>
                                    <a></a>
                                </Link>
                            </Menu.Item>


                            <Menu.Item
                                name='Summary'
                                active={activeItem === 'Summary'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='/프로젝트구성' href={{ pathname: '/project', query: { id: 'config', title: '프로젝트구성' } }}>
                                    <a>펀딩 및 선물 구성</a>
                                </Link>
                            </Menu.Item>

                            <Menu.Item
                                name='Storytelling'
                                active={activeItem === 'Storytelling'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='/프로젝트스토리텔링' href={{ pathname: '/project', query: { id: 'storytelling', title: '프로젝트스토리텔링' } }}>
                                    <a>스토리텔링</a>
                                </Link>
                            </Menu.Item>

                            <Menu.Item
                                name='계좌 설정'
                                active={activeItem === '계좌 설정'}
                                onClick={this.handleItemClick}>
                                <Checkbox label=" " />
                                <Link as='/프로젝트계좌' href={{ pathname: '/project', query: { id: 'account', title: '프로젝트계좌' } }}>
                                    <a>계좌 설정</a>
                                </Link>
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Button inverted color="blue"> 미리보기 </Button>
                            </Menu.Menu>
                        </Menu>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}


export default MypageLink