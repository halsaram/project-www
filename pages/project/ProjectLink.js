/**************************************************************************************
 * 제목          : 프로젝트 메뉴
 * 소스파일 이름  : pages/project/ProjectLink.js
 * 파일설명		   : 프로젝트 메뉴 부분
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-10-20
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 프로젝트의 메뉴바를 컴포넌트로 분리해서 작성
**************************************************************************************/

import Link from 'next/link';
import React, { Component, useState } from 'react'
import { Menu, Segment, Grid, Button, Checkbox, Header, Image, Modal} from 'semantic-ui-react'


const ProjectLink =(props)=> {
  const [activeItem, setActiveItem] = useState('summary')
  const handleItemClick = (e, {name}) => setActiveItem(name)
 

  return(
    <div>
          <Grid columns='equal'>
            <Grid.Row>
              <Menu tabular widths={5}>

              
              {props.menus == "summary" ? 
              <Menu.Item active >
                <Link as='/프로젝트개요' href={{ pathname: '/project', query: { id: 'summary', title: '프로젝트개요' } }}>
                  <a>프로젝트 개요</a>
                </Link>
              </Menu.Item>  :
              <Menu.Item>
                <Link as='/프로젝트개요' href={{ pathname: '/project', query: { id: 'summary', title: '프로젝트개요' } }}>
                  <a>프로젝트 개요</a>
                </Link>
              </Menu.Item>
            }

              {props.menus == "config" ? 
              <Menu.Item active >
                <Link as='/프로젝트구성' href={{ pathname: '/project', query: { id: 'config', title: '프로젝트구성' } }}>
                  <a>펀딩 및 선물 구성</a>
                </Link>
              </Menu.Item>  :
              <Menu.Item>
                <Link as='/프로젝트구성' href={{ pathname: '/project', query: { id: 'config', title: '프로젝트구성' } }}>
                  <a>펀딩 및 선물 구성</a>
                </Link>
              </Menu.Item>
            }


            {props.menus == "storytelling" ? 
              <Menu.Item active >
                <Link as='/프로젝트스토리텔링' href={{ pathname: '/project', query: { id: 'storytelling', title: '프로젝트스토리텔링' } }}>
                  <a>스토리텔링</a>
                </Link>
              </Menu.Item>  :
              <Menu.Item>
                <Link as='/프로젝트스토리텔링' href={{ pathname: '/project', query: { id: 'storytelling', title: '프로젝트스토리텔링' } }}>
                  <a>스토리텔링</a>
                </Link>
              </Menu.Item>
            }

            {props.menus == "account" ? 
              <Menu.Item active >
                <Link as='/프로젝트계좌' href={{ pathname: '/project', query: { id: 'account', title: '프로젝트계좌' } }}>
                  <a>계좌 설정</a>
                </Link>
              </Menu.Item>  :
              <Menu.Item>
                <Link as='/프로젝트계좌' href={{ pathname: '/project', query: { id: 'account', title: '프로젝트계좌' } }}>
                  <a>계좌 설정</a>
                </Link>
              </Menu.Item>
            }


   
              <Menu.Menu position='right'>
              <Modal trigger={<Button color="blue" inverted>미리보기</Button>}>
              {/* 미리보기 클릭시 생기는 팝업창 */}
              <Modal.Header>프로젝트 모습</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='tiny' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with your e-mail
                    address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>             
              </Menu.Menu>
            </Menu>
          </Grid.Row>
        </Grid>
      </div>

  )
}

// 페이지 메뉴링크바
// class ProjectLink extends Component {
//   state = { activeItem: 'home' }
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
        
//     render() { 
//       const { activeItem } = this.state 
//       return (
      //   <div>
      //     <Grid columns='equal'>
      //       <Grid.Row>
      //         <Menu tabular widths={5}>
      //           <Menu.Item
      //           name='Config'
      //           active={activeItem === 'Config'}
      //           onClick={this.handleItemClick}>
      //             <Checkbox label=" "/>
      //             <Link as='/프로젝트개요' href={{ pathname: '/project', query: { id: 'summary', title: '프로젝트개요' } }}>
      //               <a>프로젝트 개요</a>
      //             </Link>
      //           </Menu.Item>


      //         <Menu.Item
      //         name='Summary'
      //         active={activeItem === 'Summary'}
      //         onClick={this.handleItemClick}>
      //           <Checkbox label=" "/>
      //           <Link as='/프로젝트구성' href={{ pathname: '/project', query: { id: 'config', title: '프로젝트구성' } }}>
      //             <a>펀딩 및 선물 구성</a>
      //           </Link>
      //         </Menu.Item>

      //         <Menu.Item
      //         name='Storytelling'
      //         active={activeItem === 'Storytelling'}
      //         onClick={this.handleItemClick}>
      //           <Checkbox label=" "/>
      //           <Link as='/프로젝트스토리텔링' href={{ pathname: '/project', query: { id: 'storytelling', title: '프로젝트스토리텔링' } }}>
      //             <a>스토리텔링</a>
      //           </Link>
      //         </Menu.Item>

      //         <Menu.Item
      //         name='계좌 설정'
      //         active={activeItem === '계좌 설정'}
      //         onClick={this.handleItemClick}>
      //           <Checkbox label=" "/>
      //           <Link as='/프로젝트계좌' href={{ pathname: '/project', query: { id: 'account', title: '프로젝트계좌' } }}>
      //             <a>계좌 설정</a>
      //           </Link>
      //         </Menu.Item>
 
      //         <Menu.Menu position='right'>
      //           <Button inverted color="blue"> 미리보기 </Button>             
      //         </Menu.Menu>
      //       </Menu>
      //     </Grid.Row>
      //   </Grid>
      // </div>
        
//       )
//     }
// }


export default ProjectLink



