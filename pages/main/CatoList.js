/**************************************************************************************
 * 제목		      : 카테고리 리스트화면
 * 소스파일 이름	: CatoList.js
 * 파일설명		   : 메인화면에서 카테고리 리스트를 보여주는 컴포넌트
 * 작성자		     : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-03
 * 최종수정자	   : 금정민
 * 최종수정내용	  :catoList의 버튼 클릭시 리스트의 제목과 데이터가 변경되는지 테스트 코드 작성
**************************************************************************************/

import React, {useState, useEffect} from 'react';
import { Grid, Segment, Button, Image } from 'semantic-ui-react'
import ListCard from './ListCard';

const BackColor ={
  backgroundColor : "rgb(242, 242, 242)",
}

const CatoList =(props)=> {
  const [btnId, setBtnId] = useState("생활");  
  const [active, setActive] = useState(false);
  const Margin = {
    margin : 10,
    width : 10,
    height : 5

  }
  const handleChange=(e, {value})=>{
    setBtnId(value);

    };
    const onChange=(e)=>{    
      setActive(true);
    };
    const outChange=(e)=>{
      setActive(false);
    }
  
  return(
    <Segment>
      
      <Grid style={BackColor}>
        <div>
          <div style={Margin}></div>
          <h3>{props.header}</h3>
          <p>{props.description}</p>
        </div>
       <Grid.Row columns={12} centered>
          <Grid.Column>
            <Button style={styles1} color="blue" inverted value="생활" onClick={handleChange} />
            <p style ={fontStyle}>생활</p>
          </Grid.Column>
           <Grid.Column>
            <Button style={styles2} color="blue" inverted value="가전" onClick={handleChange}/>
            <p style ={fontStyle}>가전</p>
          </Grid.Column>
          <Grid.Column>
           <Button style={styles3} color="blue" inverted value="패션" onClick={handleChange}/>
           <p style ={fontStyle}>패션</p>
           </Grid.Column>
           <Grid.Column>
           <Button style={styles4} color="blue" inverted value="여행" onClick={handleChange}/>
           <p style ={fontStyle}>여행</p>
           </Grid.Column>
           <Grid.Column>
           <Button style={styles5}  color="blue" inverted value="레저" onClick={handleChange}/>
           <p style ={fontStyle}>레저</p>
           </Grid.Column>
           <Grid.Column>
           <Button style={styles6} color="blue" inverted value="애완" onClick={handleChange}/>
           <p style ={fontStyle}>여행</p>
           </Grid.Column>
           <Grid.Column>
           <Button style={styles7} color="blue" inverted value="유아" onClick={handleChange} />
           <p style ={fontStyle}>유아</p>
           </Grid.Column>

           {/* </Grid.Column> */}
           <Grid><Grid.Column width={5}/></Grid>

           <Grid centered>
           <Grid.Row centered columns={4}>
             {props.dataType == "threeData" ?  
             ThreeProject.filter(
              data=>((data.catogory)==btnId)).map(
                (item, i)=> (
                  < ListCard title={item.title}         
                editor={item.editor}                  
                Dday={item.Dday}  
                catogory={item.catogory} 
                targetCoin={item.targetCoin} 
                fundCoin={item.fundCoin} 
                description = {item.description}
                link = ''/>
                  )) 
                  : (props.dataType == "AllData" ? 

                  AllProject.filter(
                    data=>((data.catogory)==btnId)).map(
                      (item, i)=> (
                        
                        < ListCard title={item.title}         
                      editor={item.editor}                  
                      Dday={item.Dday}  
                      catogory={item.catogory} 
                      targetCoin={item.targetCoin} 
                      fundCoin={item.fundCoin} 
                      description = {item.description}
                      link = ''/>
                        )) : ""
                  )
            }



           </Grid.Row>
           </Grid>
          </Grid.Row>
          <div style={Margin}></div>
        </Grid>
          
      </Segment>
  )
}


//버튼 디자인 코드-> 더 간단한 코드형식으로 수정예정--------------------------------
const fontStyle = {
  color : "grey"
}

const styles1 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/life.png)" ,
  backgroundSize : 100,
 // backgroundColor : "rgba(77,77,77,0.5)"
}

const styles2 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/ele.jpg)" ,
  backgroundSize : 100
}
const styles3 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/fa.jpeg)" ,
  backgroundSize : 100
}
const styles4 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/tr.jpeg)" ,
  backgroundSize : 100
}
const styles5 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/la.jpeg)" ,
  backgroundSize : 100
}
const styles6 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/ani.jpeg)" ,
  backgroundSize : 100
}
const styles7 = {
  width: 68,
  height: 68,
  borderRadius:34,
  backgroundImage : "url(../../static/buttonImage/ba.jpg)" ,
  backgroundSize : 100
}
 

export default CatoList;

//가져올 데이터 예시(카테고리 별로 각각 3개씩 가져오게 하기)----------------------------------------------------

const ThreeProject  = [
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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


// alldata-----------------------------------

const AllProject  = [
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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
  {title : "첫1번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :10000, 
  fundCoin: 5000 },
  
  {title : "첫11번째 프로젝트 제목", 
  editor : "창작자21", 
  Dday : 230, 
  catogory : "생활",
  description : "첫번째 프로젝트입니다.아아ㅏ",
  targetCoin :15000, 
  fundCoin: 1000 }
  ,
  {title : "첫12번째 프로젝트 제목", 
  editor : "창작자22", 
  Dday : 30, 
  catogory : "생활",
  description : "212번째 프로젝트입니다.아아ㅏ",
  targetCoin :27000, 
  fundCoin: 1000 }
  ,


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
  catogory : "가전", 
  description : "세3번째 프로젝트입니다.아아ㅏ",
  targetCoin :100022, 
  fundCoin: 50034 },

  {title : "첫4번째 프로젝트 제목", 
  editor : "창작자1", 
  Dday : 130, 
  catogory : "패션",
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





    
