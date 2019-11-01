import Head from 'next/head'
import { Header, Icon, Image, Input, Menu, Segment, Sidebar, Button, Container, Grid } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Link from 'next/link';

import Footer from './Footer'

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
    const { children, header, title = '' } = this.props
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
        <Grid columns='equal'>
          <Grid.Column>
            <Button onClick={this.handleAnimationChange('overlay')}>|||</Button>
            <Link href='/dapp'><a>My Dapp</a></Link>
            <Link href='/accounts'><a>My Accounts</a></Link>
          </Grid.Column>
          
          <Grid.Column width={5}>
            Halsaram
          </Grid.Column>
          
          <Grid.Column>   
                <Input icon='search' placeholder='Search...' />
           

           
          </Grid.Column>
          <Grid.Column>   
           
           

           
                <Link as='/log' href= '/login?id=login&title=로그인'>
                    <a>login</a>
                </Link>
            

    
           
          </Grid.Column>
          <Grid.Column>   
   
                <Link as='/p' href= '/project?id=start&title=프로젝트올리기'>
                  <a>프로젝트 올리기</a>
                </Link>
             
           
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

export default (res) => (
  <Web3Container
    renderLoading={() => <div>Loading Page...</div>}
    render={({ web3, accounts, contract, coinbase }) => (
      <Layout accounts={accounts} contract={contract} web3={web3} coinbase={coinbase} children={res.children} title={res.title} />
    )}
  />
)