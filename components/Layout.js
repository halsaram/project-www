import Head from 'next/head'
import { Header, Icon, Image, Input, Menu, Segment, Sidebar, Button, Container } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Link from 'next/link';

import Footer from './Footer'
import RootStore from '../lib/mobx/stores';

const root = new RootStore(); // *** 루트 스토어 생성

import Web3Container from '../lib/web3/Web3Container'


// import '../pages/style.css'

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

class Layout extends React.Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: true,
    visible: false,
    search: '', // search
    submittedSearch: '', // search 제출 변수
    balance: undefined,
    ethBalance: undefined,
    myaddr: undefined,
    userPoint: undefined,
    userEmail: undefined
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

  isNewAccount = async () => {
    const { web3 } = this.props
    await web3.eth.personal.newAccount('!@superpassword')
      .then((result) => {
        console.log(result)
        this.setState({ myaddr: result })
      });
  };

  render() {
    const { children, header, title = '' } = this.props
    const { animation, dimmed, direction, visible, search, submittedSearch } = this.state
    const vertical = direction === 'bottom' || direction === 'top'
    
    return (
      <React.Fragment {...root}>
        <Head>
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
          <Menu.Item>
            <Link href='/dapp'><a>My Dapp</a></Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/accounts'><a>My Accounts</a></Link>
          </Menu.Item>
          <Menu.Item>
            <Button onClick={this.isNewAccount} />
          </Menu.Item>
        <Menu.Item>Halsaram</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            <Link as='/login' href= '/login?id=login&title=로그인'>
              <a>LOGIN</a>
            </Link>
          </Menu.Item>
            
          <Menu.Item>
            <Link as='/p' href= '/project?id=start&title=프로젝트올리기'>
              <a>프로젝트 올리기</a>
            </Link>
          </Menu.Item>        
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

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Container fluid {...this.props}>
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

export default Layout