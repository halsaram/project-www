import React, {Component} from 'react'
import { Grid, Card, Progress, Icon, Image } from 'semantic-ui-react'
import Link from 'next/link';


// 하나의 카드(ListCard) ->  
const ListCard =(props) => {
  
  return(
    
        <Grid.Column >
      <Link as='/프로젝트상세정보' href={{ pathname: '/detail', query: { id: 'story', title: '프로젝트상세정보' } }}>
            <Card>
              <Image src='../../static/test/testlist.png' wrapped ui={false} />
              <Card.Content textAlign="left">
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>{props.editor}</Card.Meta>
                <Card.Meta textAlign="right">{props.catogory}</Card.Meta>
                <Card.Description>
                <Progress percent={Math.floor((props.fundCoin/props.targetCoin)*100, 2)} size="tiny" color='blue' />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Card.Description>
                   <Grid>
                    <Grid.Column floated='left' width={7}>
                    {props.Dday}일 남음
                    </Grid.Column>
                    <Grid.Column floated='right' width={9}>
                    {props.targetCoin}원 / {Math.floor((props.fundCoin/props.targetCoin)*100, 2)}%
                    </Grid.Column>
                  </Grid>
                </Card.Description>
              </Card.Content>
            </Card>
           </Link>
          </Grid.Column>
    
    
  );
}
export default ListCard; 


