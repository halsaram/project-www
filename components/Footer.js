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
import { Container, Grid, Header, Image, List, Button, Segment, Rail } from 'semantic-ui-react'

const Footer = () => (
  <Segment inverted vertical style={{padding: '0em 0em' }}>
    <Container textAlign='center'>
      <Grid inverted >
        <Grid.Column width={3}>
          <Header inverted as='h4'/>
          <List link inverted>
          <List.Item as='a'>
            <Link as='/공지사항' href={{ pathname: '/main', query: { id: 'notices', title: '공지사항' } }}>
                <a>공지사항</a>
            </Link>
          </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4'/>
          <List link inverted>
          <List.Item as='a'>
              <Link as='/창작자 가이드' href={{ pathname: '/main', query: { id: 'termsOfUse', title: '창작자 가이드' } }}>
                  <a>창작자 가이드</a>
              </Link>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4'/>
          <List link inverted>
            <List.Item as='a'>
              <Link as='/개인정보 처리방침' href={{ pathname: '/main', query: { id: 'privacy', title: '개인정보 처리방침' } }}>
                <a>개인정보 처리방침</a>
            </Link>

            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
      <Header disabled as='h5' floated='left' textAlign='left'>
        <br />
        <Image size='small' src='../static/logo.png' /><br />
        대전광역시 oo구 oooooooo xx-x (ㅁㅁㅁㅁ)<br />
        Tel: 043) xxx-xxxxx / Fax: 043) XXX-XXXX ㈜HALSARAM (대표자 : XXX)<br />
        사업자등록번호 : xxx-xx-xxxxx<br /><br />
        © HALSARAM. All rights reserved<br /><br />
      </Header>
      <Rail internal position='right'>
        <Button circular floated='right' color='facebook' icon='facebook' />
          <Button circular floated='right' color='twitter' icon='twitter' />
          <Button circular floated='right' color='linkedin' icon='linkedin' />
          <Button circular floated='right' color='google plus' icon='google plus' />
      </Rail>
    </Container>
    {/* <List horizontal inverted divided link size='small'>
      <List.Item as='a' href='#'>
        Site Map
        </List.Item>
      <List.Item as='a' href='#'>
        Contact Us
        </List.Item>
      <List.Item as='a' href='#'>
        Terms and Conditions
        </List.Item>
      <List.Item as='a' href='#'>
        Privacy Policy
        </List.Item>
    </List> */}
  </Segment>
);

export default Footer;