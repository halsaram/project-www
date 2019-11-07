/**************************************************************************************
 * 제목		      : 메인 풋터
 * 소스파일 이름	: Footer.js
 * 파일설명		   : 메인 풋터에서 해당 카테고리 클릭시 링크담당
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-03
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	    : import react 추가
**************************************************************************************/
import React from 'react'
import Link from 'next/link';
import { Grid, Menu, Image } from 'semantic-ui-react'

const Footer = () => (
    <div>
    <Menu inverted>
        <Menu.Item>
            <Link as='/공지사항' href={{ pathname: '/main', query: { id: 'notices', title: '공지사항' } }}>
                <a>공지사항</a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link as='/창작자 가이드' href={{ pathname: '/main', query: { id: 'termsOfUse', title: '창작자 가이드' } }}>
                <a>창작자 가이드</a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link as='/개인정보 처리방침' href={{ pathname: '/main', query: { id: 'privacy', title: '개인정보 처리방침' } }}>
                <a>개인정보 처리방침</a>
            </Link>
        </Menu.Item>
      </Menu>

      <Grid>
    <Grid.Column width={2}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={10}>
      
    </Grid.Column>
  </Grid>
    </div>

);

export default Footer;