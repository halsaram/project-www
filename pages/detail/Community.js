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
import DetailHeader from './DetailHeader'
import { useState, useEffect } from 'react';

const Community = () => (
	<>
		<div>
			<DetailHeader />
			<DetailLink />
			<br /><br />
		</div>
		
	</>
);

export default Community;