import Link from 'next/link';
import ProjectLink from './ProjectLink';
import { Grid, Segment, GridColumn, Input } from 'semantic-ui-react'

const projectHeader = () => (
    <div>
    	<Grid columns='equal'>
            <Grid.Column/>		
            <Grid.Column textAlign="center" width={16}>
                
                <Input transparent placeholder='프로젝트제목을 입력하시오' size="huge"/>

                {/* Input 길이를 늘리는 법 찾기 */}
                {/* 글자를중앙정렬 */}
                <p>프로젝트를 개설하기 위해 아래 네 개의 섹션을 완성해주세요.</p>
            </Grid.Column> 
            <Grid.Column />	
        </Grid>

    </div>
)

export default projectHeader