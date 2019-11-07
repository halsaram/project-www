import React, {Component} from 'react'
import { Grid, Card, Progress, Icon } from 'semantic-ui-react'
import Link from 'next/link';



const extra =()=> (
  <div>
    <Icon name='user' />
    <Progress percent="33" size='tiny' indicating />
  </div>
)


// 하나의 카드(ListCard) ->  
const ListCard =(props) => {
  
  return(
    <div>
        <Grid.Column width="4">
          <Link as='/d' href='/FundingGuide'>
            <Card
              image='../../static/test/testlist.png'
              header={props.title}
              meta={props.editor}
              description={props.description}
              extra={extra}
              />
            </Link>         
          </Grid.Column>
      </div>

  );
}
export default ListCard; 


