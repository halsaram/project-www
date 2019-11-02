/**************************************************************************************
 * 제목          : 상세페이지 화면 중  프로젝트 이미지/제목 부분
 * 소스파일 이름  : pages/project/projectHeader.js
 * 파일설명		   : 상세페이지 메뉴에서 가장 윗 상단에 위치한다.
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-11-02
 * 최종수정자	   : 이은미
 * 최종수정내용	  : import react 추가
**************************************************************************************/

import React from 'react'

import Link from 'next/link';
import DetailLink from './DetailLink';
import { Grid, Segment, GridColumn, Input } from 'semantic-ui-react'


//프로젝트 Header 부분 복사했습니다~! 나중에 수정 부탁해용
const detailHeader = () => (
    <div>
        {/* //프로젝트 해당 카테고리로 이동 ex)뷰티/헬스 등 */}

        <Grid columns='equal'>
            <Grid.Column />
            <Grid.Column textAlign="center" width={16}>
                <Input transparent placeholder='상세페이지 프로젝트 제목' size="huge" />

                {/* Input 길이를 늘리는 법 찾기 */}
                {/* 글자를중앙정렬 */}
                <p>프로젝트 만든사람 링크걸기</p>
            </Grid.Column>
            <Grid.Column />
        </Grid>

    </div>
)

export default detailHeader