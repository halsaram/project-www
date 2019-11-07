// /**************************************************************************************
//  * 제목		      : 메인 리스트화면
//  * 소스파일 이름	: MainList.js
//  * 파일설명		   : 메인 화면에서 리스트를 보여주는 컴포넌트
//  * 작성자		   : 금정민
//  * 버전		      : 1.0.0
//  * 생성일자		   : 2019-10-02
//  * 최종수정일자 	: 2019-10-03
//  * 최종수정자	   : 금정민
//  * 최종수정내용	    : class->className으로 변경 및 props값이 전달되는지 임시 코드 테스트
// **************************************************************************************/


// import React, { useState} from 'react'
// import Link from 'next/link';
// import { Card, Icon, Grid, Segment, Button, Progress, Pagination } from 'semantic-ui-react'
// import Page from '../../components/Page';

// const extra = (
//   <div>
//     <Icon name='user' />
//     <Progress percent="33" size='tiny' indicating />
//   </div>
// )

// const MainList = (props) => {
//     const [activePage ,setActivePage] = useState(1);   //현재 활성화된 페이지값
//     const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)
   
//     //2. dataList[0]을 슬라이스해서 배열 숫자만큼 반복하여 새로운 배열에 넣기
//     dataAll = dataList.map((dataList, i)=>(
        
//         <Grid.Row centered>
//            {/* 첫번째 카드 */}
//             <Grid.Column width="4"> 
//                 <Card
//                     image='../../static/test/testlist.png'
//                     header=''
//                     meta='Friend'
//                     description={dataList[1]}
//                     extra=''
//                     />    
//                 </Grid.Column>
//             </Grid.Row>
        
            
//         )
//     );
    
    
//         return(
//     <div>
        
//         <Grid>
//             <Grid.Column width="2" />      
//             <Grid.Column width="8">     
//                 {/* 프로젝트 제목 */}   
//                 <h3>{props.MainTitle}</h3>    
//             </Grid.Column>


//             {/* 페이지네이션 */}
//             <Grid.Column>
//                 <Pagination 
//                 activePage={activePage}
//                 onPageChange={handlePaginationChange}
//                 defaultActivePage={1}
//                 firstItem={null}
//                 lastItem={null} 
//                 pointing secondary totalPages={3}  
//                  />     
//             </Grid.Column>
//         </Grid>
        
//          <br/>
        
        
        
//         <Grid columns='equal'>
            
//                 {dataAll}
            
//         </Grid>
//     </div>    

//     );

     


// {/*                
//                 <Grid.Column width="4"> 
//  */}

// {/* 
//                 {activePage}
//                 {/* 1클릭시 -> 데이터 a(1), a+1(2), a+2(3)  시작값 = 1 */} 
//                 {/* 2클릭시 -> 데이터 a+2=b(4), b+1(5), b+2(6) 시작값 = 4 */}
            

                
//             {/* <Link as='/상세페이지' href={{ pathname: '/detail', query: { id: 'story', title: '스토리' } }}>
//                 <Card
//                     image='../../static/test/testlist.png'
//                     header={props.MainTitle}
//                     meta='Friend'
//                     description='Elliot is a sound engineer'
//                     extra={extra}
//                     />
//             </Link>
//         </Grid.Column>

//         <Grid.Column width="4">
//             <Link as='/d' href='/FundingGuide'>
//             <Card
//                 image='../../static/test/testlist.png'
//                 header={props.MainTitle}
//                 meta='Friend'
//                 description='Elliot is a sound engineer'
//                 extra={extra}
//                 />
//                 </Link>
            
//         </Grid.Column>

//         <Grid.Column width="4">   
//             <Card
//                 image='../../static/test/testlist.png'
//                 header={props.MainTitle}
//                 meta='Friend'
//                 description='Elliot is a sound engineer'
//                 extra={extra}
//                 />
           
//         </Grid.Column> */}


        
       


  
  
// }

// export default MainList

