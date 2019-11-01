/**************************************************************************************
 * 제목		      : 메인 풋터
 * 소스파일 이름	: Footer.js
 * 파일설명		   : 메인 풋터에서 해당 카테고리 클릭시 링크담당
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-03
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	    : import react 추가
**************************************************************************************/
import React from 'react'
import Link from 'next/link';
import { Grid} from 'semantic-ui-react'

const Footer = () => (
    <div>
        <Grid columns={3} padded='horizontally'>
            <Grid.Column>
            <br />
                <Link href="/Notices"><a>공지사항</a></Link><br /><br />
                <Link href="/TermsOfUse"><a>창작자 가이드</a></Link><br /><br />
                <Link href="/Privacy"><a>개인정보 처리방침</a></Link><br /><br />
            </Grid.Column>
        </Grid>
  </div>

);

export default Footer;