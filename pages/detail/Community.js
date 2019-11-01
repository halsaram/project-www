/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지(Community)
 * 소스파일 이름  : pages/deteile/Community.js
 * 파일설명		   : 프로젝트 상세 커뮤니티 공간(댓글달기 기능)
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-01
 * 최종수정일자 	:
 * 최종수정자	   :
 * 최종수정내용	  :
**************************************************************************************/

import React, { Component } from 'react'
import Link from 'next/link';
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'
import DetailLink from './DetailLink'
import { useState, useEffect } from 'react';

const Community = () => (
	<>
		<Layout>
	<div>상세페이지 메인 커뮤니티</div>
	<div id="contentsNavigation">
		<nav className="ContentsNavigation__ProjectContentsNavigation-mwsx7i-1 jABjId">
			<div className="ContentsNavigation__ProjectContentsNavigationInner-mwsx7i-2 OvVKa">
				<div className="ContentsNavigation__NavLeft-mwsx7i-3 buZwam">
							<Link as='/Story' href='/detail/Story'>
						<a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">스토리</a>
					</Link>
							<Link as='/Community' href='/detail/Community'>
						<a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">커뮤니티</a>
					</Link>
							<Link as='/FundingGuide' href='/detail/FundingGuide'>
						<a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">펀딩 안내</a>
					</Link>
				</div>
			</div>
		</nav>
	</div>
	<div></div>
	<div></div>
	<div></div>
			</Layout>
	</>
);

export default Community;