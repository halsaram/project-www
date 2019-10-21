/**************************************************************************************
 * 제목          : 프로젝트 작성 중 프로젝트 제목 부분
 * 소스파일 이름  : pages/project/projectHeader.js
 * 파일설명		   : 프로젝트 메뉴에서 프로젝트 제목 부분에 해당한다.
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-10-20
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 프로젝트 메뉴 UI 적용 -> 프로젝트 제목을 입력하는 부분의 길이 늘릴 방법 찾기
**************************************************************************************/


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