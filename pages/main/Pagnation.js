// 페이지네이션 컴포넌트
import React, {useState} from 'react'
import ListCard from './ListCard'
import { Grid, Pagination } from 'semantic-ui-react'


const Pagnation =(props)=>{
    const [activePage ,setActivePage] = useState(1);  
    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage)

    return(
        <div>
            <Grid>
                <Grid.Column width="2" />  
                <Grid.Column width="8">       
                    <h3>{props.title}</h3>       {/* props.title 프로젝트 제목 */}  
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
                {props.project == "NewProject" ?   
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
                    </Grid.Row> : ( props.project == "EncoreProject" ?
                    <Grid.Row centered columns={4}>
                    {activePage == 1 &&
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

                    {activePage == 2 &&  
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

                    {activePage == 3 &&  
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
                </Grid.Row> : (
                    props.project == "EndProject" ?   
                    <Grid.Row centered columns={4}>
                        {activePage == 1 &&
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

                        {activePage == 2 &&  
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

                        {activePage == 3 &&  
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
                    </Grid.Row> : ""
                    

                )
                )
            }

                
            </Grid>
        </div>
    );


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
    {title : "첫1sdsd번째 프로젝트 제목", 
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
  

export default Pagnation;