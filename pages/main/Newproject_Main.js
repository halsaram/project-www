import Main_Banner from './Main_Banner'
import HeaderBar from '../../components/Header'
import { Grid} from 'semantic-ui-react'
import ListCard from './ListCard'

// 새로운 프로젝트 페이지
const Newproject_Main=()=>{

    return(
        <div>
            <HeaderBar />
            <Main_Banner />
            
            <Grid>
                <Grid.Column width="2" />  
                <Grid.Column width="8">       
                    <h3>새로운 프로젝트</h3>      
                </Grid.Column>
            </Grid>
                <Grid columns='equal'>   
                    <Grid.Row>
                        <Grid.Column />
                        <Grid.Column width={12}>
                            <Grid columns='equal'>
                                <Grid.Row columns={3}>
                                    {NewProject.map((item, i)=>(
                                    <Grid.Column style={ItemMargin2}>                            
                                        < ListCard title={item.title}         
                                        editor={item.editor}                  
                                        Dday={item.Dday}  
                                        catogory={item.catogory} 
                                        targetCoin={item.targetCoin} 
                                        fundCoin={item.fundCoin} 
                                        description = {item.description}
                                        link = ''/>
                                    </Grid.Column>
                                    ))}
                                </Grid.Row>
                            </Grid>                            
                        </Grid.Column>
                        <Grid.Column/>
                    </Grid.Row>
                </Grid>
            </div>
    )
}
 

export default Newproject_Main;


  const ItemMargin2 = {    //간격용 디자인
    marginBottom : 120,
   
  }


  const NewProject = [
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
  
