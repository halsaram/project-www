/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지
 * 소스파일 이름  : pages/deteile/index.js
 * 파일설명		  : 모든 프로젝트 상세 페이지를 연결시킨다
 * 작성자		  : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-10
 * 최종수정일자    : 
 * 최종수정자	   : 
 * 최종수정내용	   : 
**************************************************************************************/
import React from 'react'

import Layout from '../../components/Layout'
import Link from 'next/link';
import FundingGuide from './FundingGuide'
import Community from './Community'
import Story from './Story'


const Content = (props) => (
    <>
    <div>
            <div>메인 스토리</div>
            <div id="contentsNavigation">
                <nav className="ContentsNavigation__ProjectContentsNavigation-mwsx7i-1 jABjId">
                    <div className="ContentsNavigation__ProjectContentsNavigationInner-mwsx7i-2 OvVKa">
                        <div className="ContentsNavigation__NavLeft-mwsx7i-3 buZwam">
                            <Link as='/d' href='/detail/Story'>
                                <a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">스토리</a>
                            </Link>
                            <Link as='/d' href='/detail/Community'>
                                <a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">커뮤니티</a>
                            </Link>
                            <Link as='/d' href='/detail/FundingGuide'>
                                <a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">펀딩 안내</a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div></div>
            <div></div>
            <div></div>
            
            
        
    </div>
    </>
);

export default (props) => (
    <Layout title={props.url.query.title} >
        <Content />
        <script type="application/javascript" async="" src="../static/js/application.js"></script>
    </Layout>
)
