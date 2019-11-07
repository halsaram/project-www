/**************************************************************************************
 * 제목		      : 메인화면
 * 소스파일 이름	: index.js
 * 파일설명		   : 메인화면에 해당하는 컴포넌트를 모으는 곳
 * 작성자		     : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10 ~
 * 최종수정일자 	: 2019-11-08
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 카드 페이지네이션 기능 구현(제일 하단에 임시데이터 형식이 있음)
**************************************************************************************/
import React, {Component, useState, useReducer} from 'react'
import { inject, observer } from 'mobx-react';
import { inherits } from 'util'
import { height } from 'window-size'
import ListCard from '../pages/main/ListCard'
import Page from '../components/Page'
import Main_Banner from './main/Main_Banner'
import HeaderBar from '../components/Header'
import { Grid, Pagination } from 'semantic-ui-react'
import CatoList from '../pages/main/CatoList';



//여기자체에서 값을 받아서
const Contents = () => {
  //현재 활성화된 페이지값 (새로운프로젝트 | 앵콜프로젝트 | 임박프로젝트)
  const [activePage ,setActivePage] = useState(1);  
  const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)

  const [activePage1 ,setActivePage1] = useState(1);   
  const handlePaginationChange1 = (e, { activePage1 }) => setActivePage1(activePage1)

  const [activePage2 ,setActivePage2] = useState(1);   
  const handlePaginationChange2 = (e, { activePage2 }) => setActivePage2(activePage2)
  

  return(
    <div>
      <HeaderBar/>
      <Main_Banner />

{/* ------새로운 프로젝트--------------------------------------------------------------- */}
      <Grid>
        <Grid.Column width="2" />  
        <Grid.Column width="8">       
          <h3>신규 프로젝트</h3>       {/* 프로젝트 제목 */}  
        </Grid.Column>
        
        <Grid.Column>               {/* 페이지네이션 */}
          <Pagination 
          activePage={activePage}  
          onPageChange={handlePaginationChange}  
          defaultActivePage={1}
          firstItem={null}
          lastItem={null} 
          pointing secondary totalPages={3}/>   
        </Grid.Column>
      </Grid>
      
      <Grid centered>
          {/* 첫번째, 신규프로젝트 카드 */}
          {/* activePage값에 따라 배열 slice범위가 달라짐 */}
          {/* 프로젝트별 제목(title) | 창작자(editor) | 디데이(Dday) | 분류(catogory)
          목표금액(targetCoin) | 모금된 금액(fundCoin) */}
          
       <Grid.Row centered columns={4}>
          {activePage == 1 &&
            (NewProject.slice(0,3)).map((item, i)=>(
              
                < ListCard title={item.title}         
                editor={item.editor}                  
                Dday={item.Dday}  
                catogory={item.catogory} 
                targetCoin={item.targetCoin} 
                fundCoin={item.fundCoin} 
                description = {item.description}
                link = ''/>))
                
          }
          
          {activePage == 2 &&  
            (NewProject.slice(3,6)).map((item, i)=>(
              < ListCard title={item.title} 
              editor={item.editor} 
              Dday={item.Dday} 
              catogory={item.catogory} 
              targetCoin={item.targetCoin} 
              fundCoin={item.fundCoin} 
              description = {item.description}
              link = ''/>))
          }
          
          {activePage == 3 &&  
            (NewProject.slice(6,9)).map((item, i)=>(
              < ListCard title={item.title} 
              editor={item.editor} 
              Dday={item.Dday} 
              catogory={item.catogory} 
              targetCoin={item.targetCoin} 
              fundCoin={item.fundCoin} 
              description = {item.description}
              link = ''/>))
            }
            </Grid.Row>
           
        </Grid>

        <div style={ItemMargin} />      

{/* ------카테고리 프로젝트--------------------------------------------------------------- */}
{/*버튼onClick -> filter */}
{/* 1. 버튼 컴포넌트 가져오기 */}
      <CatoList/>
      <div style={ItemMargin} /> 
{/* ------앵콜 프로젝트--------------------------------------------------------------- */}
      <Grid>
        <Grid.Column width="2" />  
        <Grid.Column width="8">       
          <h3>앵콜 프로젝트</h3>       {/* 프로젝트 제목 */}  
        </Grid.Column>
        
        <Grid.Column>               {/* 페이지네이션 */}
          <Pagination 
          activePage={activePage1}  
          onPageChange={handlePaginationChange1}  
          defaultActivePage={1}
          firstItem={null}
          lastItem={null} 
          pointing secondary totalPages={3}/>   
        </Grid.Column>
      </Grid>
        
      
      
      <Grid centered>
          {/* activePage값에 따라 배열 slice범위가 달라짐 */}
          {/* 프로젝트별 제목(title) | 창작자(editor) | 디데이(Dday) | 분류(catogory)
          목표금액(targetCoin) | 모금된 금액(fundCoin) */}
          
       <Grid.Row centered columns={4}>
          {activePage1 == 1 &&
            (EncoreProject.slice(0,3)).map((item, i)=>(
              
                < ListCard title={item.title}         
                editor={item.editor}                  
                Dday={item.Dday}  
                catogory={item.catogory} 
                targetCoin={item.targetCoin} 
                fundCoin={item.fundCoin} 
                description = {item.description}
                link = ''/>))
          }
          
          {activePage1 == 2 &&  
            (EncoreProject.slice(3,6)).map((item, i)=>(
              < ListCard title={item.title} 
              editor={item.editor} 
              Dday={item.Dday} 
              catogory={item.catogory} 
              targetCoin={item.targetCoin} 
              fundCoin={item.fundCoin} 
              description = {item.description}
              link = ''/>))
          }
          
          {activePage1 == 3 &&  
            (EncoreProject.slice(6,9)).map((item, i)=>(
              < ListCard title={item.title} 
              editor={item.editor} 
              Dday={item.Dday} 
              catogory={item.catogory} 
              targetCoin={item.targetCoin} 
              fundCoin={item.fundCoin} 
              description = {item.description}
              link = ''/>))
            }
            </Grid.Row>
           
        </Grid>
        <div style={ItemMargin} />      {/*카드 간 간격*/}

{/* ------성공임박 프로젝트--------------------------------------------------------------- */}
      <Grid>
        <Grid.Column width="2" />  
        <Grid.Column width="8">       
          <h3>성공임박 프로젝트</h3>       {/* 프로젝트 제목 */}  
        </Grid.Column>
        
        <Grid.Column>               {/* 페이지네이션 */}
          <Pagination 
          activePage={activePage2}  
          onPageChange={handlePaginationChange2}  
          defaultActivePage={1}
          firstItem={null}
          lastItem={null} 
          pointing secondary totalPages={3}/>   
        </Grid.Column>
      </Grid>
      
      <Grid centered>
          {/* activePage값에 따라 배열 slice범위가 달라짐 */}
          {/* 프로젝트별 제목(title) | 창작자(editor) | 디데이(Dday) | 분류(catogory)
          목표금액(targetCoin) | 모금된 금액(fundCoin) */}
          
       <Grid.Row centered columns={4}>
          {activePage2 == 1 &&
            (EndProject.slice(0,3)).map((item, i)=>(
              
                < ListCard title={item.title}         
                editor={item.editor}                  
                Dday={item.Dday}  
                catogory={item.catogory} 
                targetCoin={item.targetCoin} 
                fundCoin={item.fundCoin} 
                description = {item.description}
                link = ''/>))
          }
          
          {activePage2 == 2 &&  
            (EndProject.slice(3,6)).map((item, i)=>(
              < ListCard title={item.title} 
              editor={item.editor} 
              Dday={item.Dday} 
              catogory={item.catogory} 
              targetCoin={item.targetCoin} 
              fundCoin={item.fundCoin} 
              description = {item.description}
              link = ''/>))
          }
          
          {activePage2 == 3 &&  
            (EndProject.slice(6,9)).map((item, i)=>(
              < ListCard title={item.title} 
              editor={item.editor} 
              Dday={item.Dday} 
              catogory={item.catogory} 
              targetCoin={item.targetCoin} 
              fundCoin={item.fundCoin} 
              description = {item.description}
              link = ''/>))
            }
            </Grid.Row>
           
        </Grid>
        <div style={ItemMargin} />      {/*카드 간 간격*/}
    </div>
  );

}

{/* ------------------------------------------------------------------------------ */}
@inject('postStore') @observer
export default class extends Component {
  static async getInitialProps({ mobxStore, query }) {
    await mobxStore.postStore.fetch(query.id);
    return { post: mobxStore.postStore.post };
  }

  render () {
    const { post } = this.props;
    console.log(this.props);
    return (
      <Page title={this.props.title} >
        <Contents {...this.props}/>
      </Page>
    )
  }
}


//------부수적인 디자인-----------------------------------------------------------------
const ItemMargin = {    //간격용 디자인
  margin : 20,
  width : 100,
  height : 100
}
const CatoColor = {     //카테고리 부분의 뒷 배경

}

//-------------------임시데이터---------------------------------------------------------
//프로젝트별 제목(title) | 창작자(editor) | 디데이(Dday) | 분류(catogory)
//목표금액(targetCoin) | 모금된 금액(fundCoin)

//newProject의 프로젝트 개수는 9개
const NewProject = [
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 9000 },

  {title : "두2번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },
  {title : "세번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 500 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },

  {title : "두5번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },

  {title : "세6번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },


  {title : "두7번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },
  
  {title : "세8번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },
  {title : "세9번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },


]

const EncoreProject = [
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 7000 },

  {title : "두2번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 500 },
  {title : "세번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },

  {title : "두5번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },

  {title : "세6번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },


  {title : "두7번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },
  
  {title : "세8번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },
  {title : "세9번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },
]


const EndProject = [
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },

  {title : "두2번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },
  {title : "세번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },

  {title : "두5번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },

  {title : "세6번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },


  {title : "두7번째 프로젝트 제목", 
  editor : "창작자2", 
  Dday : 150, 
  catogory : "건강", 
  description : "두번째 프로젝트입니다.아아ㅏ",
  targetCoin :1000, 
  fundCoin: 500 },
  
  {title : "세8번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },
  {title : "세9번째 프로젝트 제목", 
  editor : "창작자3", 
  Dday : 150, 
  catogory : "소품", 
  description : "세번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },
]
