import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header, Icon, Image, Input, Menu, Segment, Sidebar, Button, Container, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import GoogleAPI from './GoogleAPI'

const textcolor = {color:"gray"};

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

  render() {
    const { children, header, title = '홈' } = this.props
    const { animation, dimmed, direction, visible, search, submittedSearch } = this.state
    const vertical = direction === 'bottom' || direction === 'top'
    
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <title>{title} ::Halsaram</title>
        </Head>
        <Grid columns='equal'verticalAlign="middle">
          <Grid.Column>
            <Button onClick={this.handleAnimationChange('overlay')}>|||</Button>
            <Link href='/dapp'><a>My Dapp</a></Link>
            <Link href='/accounts'><a>My Accounts</a></Link>
            <Link as='/프로젝트시작' href={{ pathname: '/project', query: { id: 'start', title: '프로젝트올리기' } }}>
              <Button inverted basic color="blue">
                <a><p >프로젝트올리기</p></a>
              </Button>
            </Link>
          </Grid.Column>
       
          
          <Grid.Column width={9} textAlign="center">
            <Link as='/' href={{ pathname: '/', query: { id: 'home', title: '홈' } }}>
                <a><p >Halsaram</p></a>
            </Link>
          </Grid.Column>

         <Grid.Column>
            <Input icon='search' placeholder='Search...' />
            <GoogleAPI />
          </Grid.Column>
        </Grid>



      


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