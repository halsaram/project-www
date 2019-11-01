import Head from 'next/head'
import { Header, Icon, Image, Input, Menu, Segment, Sidebar, Button, Container } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Link from 'next/link';

import Footer from './Footer'

import '../pages/style.css'

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as='h3'>New Content Awaits</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid>
    </Grid>
  </Sidebar>
)

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      카테고리
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      공지사항
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      내정보
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class Layout extends React.Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: true,
    visible: false,
    search: '', // search
    submittedSearch: '' // search 제출 변수
  }

  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = (direction) => () =>
    this.setState({ direction, visible: false })


  //입력창에 들어간 정보를 실시간 확인			
  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  //입력변수를 -> 제출 후 변수(submitted ~)에 저장
  handleSubmit = () => {
    const { search } = this.state
    this.setState({ submittedSearch: search })
  }


  render() {
    const { children, title = '' } = this.props
    const { animation, dimmed, direction, visible, search, submittedSearch } = this.state
    const vertical = direction === 'bottom' || direction === 'top'
    return (
      <React.Fragment>
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="모든 사람의 창조적인 시도를 위한 크라우드펀딩 플랫폼" />
          <meta data-react-helmet="true" property="fb:app_id" content="200842993269405" />
          <meta data-react-helmet="true" property="og:site_name" content="tumblbug" />
          <meta data-react-helmet="true" property="og:type" content="website" />
          <meta data-react-helmet="true" property="og:image" content="https://tumblbug-assets.imgix.net/brand/tumblbug_introduction.png" />
          <meta data-react-helmet="true" property="og:image:width" content="620" />
          <meta data-react-helmet="true" property="og:image:height" content="465" />
          <meta data-react-helmet="true" property="og:url" content="https://www.tumblbug.com/" />
          <meta data-react-helmet="true" property="og:title" content="텀블벅 tumblbug" />
          <meta data-react-helmet="true" property="og:description" content="모든 사람의 창조적인 시도를 위한 크라우드펀딩 플랫폼" />
          <meta data-react-helmet="true" name="twitter:site" content="tumblbug" />
          <meta data-react-helmet="true" name="twitter:creator" content="tumblbug" />
          <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
          <meta data-react-helmet="true" name="twitter:image" content="https://tumblbug-assets.imgix.net/brand/tumblbug_introduction.png" />
          <meta data-react-helmet="true" name="twitter:url" content="https://www.tumblbug.com/" />
          <meta data-react-helmet="true" name="twitter:title" content="텀블벅 tumblbug" />
          <meta data-react-helmet="true" name="twitter:description" content="모든 사람의 창조적인 시도를 위한 크라우드펀딩 플랫폼" />
          
          <link rel="dns-prefetch" href="https://tumblbug-assets.imgix.net/" />
          <link rel="dns-prefetch" href="https://tumblbug-pci2.imgix.net/" />
          <link rel="dns-prefetch" href="https://tumblbug-psi.imgix.net/" />
          <link rel="dns-prefetch" href="https://tumblbug-upi.imgix.net/" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
          <link rel="dns-prefetch" href="https://developers.kakao.com/" />
          <link rel="dns-prefetch" href="https://d2om2e6rfn032x.cloudfront.net/" />
          <link rel="dns-prefetch" href="https://qysoaxc73e-dsn.algolia.net/" />
          <link rel="dns-prefetch" href="https://stats.g.doubleclick.net/" />
          <script type="text/javascript" async="" src="../static/js/linkid.js" />
          <script type="text/javascript" async="" src="../static/js/analytics.js" />
          <script type="text/javascript" async="" src="../static/js/analytics.min.js" />
          <script type="text/javascript" async="" src="../static/js/kakao.min.js" />
          {/* <script type="text/javascript" async="" src="../static/js/application.js" /> */}
          
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <title>{title} ::Halsaram</title>
        </Head>
        <Menu secondary>
        <Menu.Item>
        <Button onClick={this.handleAnimationChange('overlay')}>|||</Button>
        </Menu.Item>
        <Menu.Item/><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item />
        <Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item />
        <Menu.Item
        >
          Halsaram</Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            <Link as='/log' href= '/login?id=login&title=로그인'>
              <a>login</a>
            </Link>
          </Menu.Item>
            
          <Menu.Item>
            <Link as='/p' href= '/project?id=start&title=프로젝트올리기'>
              <a>프로젝트 올리기</a>
            </Link>
          </Menu.Item>

            {/* 데이터 현황 */}
            <div>
              <strong>onChange:</strong>
              <pre>{JSON.stringify({ search }, null, 1)}</pre>
              <strong>onSubmit:</strong>
              <pre>{JSON.stringify({ submittedSearch }, null, 1)}</pre>
            </div>
         
        </Menu.Menu>
      </Menu>



        <Sidebar.Pushable as={Segment}>
          {vertical ? (
            <HorizontalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          ) : null}
          {vertical ? null : (
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          )}

          {/* <HeaderBar /> */}

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Container fluid>
                {children}
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    )
  }
}

