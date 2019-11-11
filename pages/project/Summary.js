/**************************************************************************************
 * 제목          : 프로젝트 올리기 개요 페이지
 * 소스파일 이름  : pages/project/Summary.js
 * 파일설명		   : 프로젝트 개요 페이지 / 프로젝트 개요, 프로젝트 창작자 입력하는 페이지
 * 작성자		   : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-30
 * 최종수정자	   : 전새희
 * 최종수정내용	  :  console.log
**************************************************************************************/

import React, { Component } from 'react'
import Link from 'next/link';
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader'
import { useState, useEffect } from 'react';


function useLocalstorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	})
	const setValue = value => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
			console.log(key, '==>', valueToStore);
		} catch (error) {
			console.log(error);
		}
	};
	return [storedValue, setValue];

}


const Summary = () => {

	// 카테고리항목변수
	const options = [
		{ key: '건강', value: '건강', text: '건강' },
		{ key: '생활', value: '생활', text: '생활' }
	]


	// 작은 안내문 글자
	const fontSize = {
		fontSize: 12,
		color: "gray"
	}

	const [projectTitle, setProjectTitle] = useLocalstorage('프로젝트명', '')
	const [keyword, setKeyword] = useLocalstorage('짥은제목', '')
	const [fundingGoal, setFundingGoal] = useLocalstorage('목표금액', '')
	const [category, setCategory] = useLocalstorage('카테고리', '')
	const [deadline, setDeadline] = useLocalstorage('종료일', '')
	const [creator, setCreator] = useLocalstorage('창작자명', '')
	const [websites1, setWebsites1] = useLocalstorage('창작자소셜주소1', '')
	const [websites2, setWebsites2] = useLocalstorage('창작자소셜주소2', '')


	const handleChange = (e, { value }) => setCategory(value)

	

	return (
		
		<div>
			<Form >
				{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
				<ProjectHeader />
				<ProjectLink menus="summary" />
				<br /><br />

				{/* 프로젝트의 소제목을 배치한 부분 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						<p>프로젝트 개요 작성하기</p>
					</Grid.Column>
					<Grid.Column />
				</Grid>


				{/* 프로젝트 입력폼 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						{/* 이미지를 등록하는 요소 */}
						<Segment>
							<Grid>
								<Grid.Column width={4}>
									<Segment placeholder textAlign="center">
										<Header icon>
											<Icon name='camera retro' size="middle" />
										</Header>
										<Button primary>업로드</Button>
									</Segment>
								</Grid.Column>

								{/* 프로젝트 정보폼 */}
								<Grid.Column width={12}>
									<p>프로젝트명<span style={fontSize}>
										프로젝트 성격과 리워드를 짐작할 수 있게 간결하고 직관적으로 작성해주세요
											</span></p>
									<Form.Field inline>
										<Input placeholder='예) 더 가벼워진 미래식사, 밀스 라이트'
											value={projectTitle}
											name="projectTitle"
											onChange={e => setProjectTitle(e.target.value)} maxlength="40" fluid />
									</Form.Field>

									<br />
									<p>짧은제목<span style={fontSize}>
										검색, 알림 등에 사용되는 짧은 제목을 작성해주세요
											</span></p>
									<Form.Field inline>
										<Input placeholder='예) 병뚜껑스피커, 욜로북'
											value={keyword}
											name="keyword"
											onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
									</Form.Field>

									<br />
									<p>목표금액<span style={fontSize}>
										마감일 자정 기준 목표 금액 미달시 펀딩은 취소됩니다.(리워드 평균 목표 금액 : 100만원)
											</span></p>
									<Form.Field inline>
										<Input placeholder='0'
											value={fundingGoal}
											type="number"
											name="fundingGoal"
											onChange={e => setFundingGoal(e.target.value)} maxlength="8" fluid />
									</Form.Field>

									<br />
									<p>카테고리<span style={fontSize}>
										오픈 후, 노출될 카테고리를 선택해 주세요.
											</span></p>
									<Form.Field inline>
										<Dropdown clearable value={category} options={options} onChange={handleChange} selection fluid />
									</Form.Field>

									<br />
									<p>종료일<span style={fontSize}>
										프로젝트 진행 기간은 평균 30일입니다.
											</span></p>
									<Form.Field inline>
										<Input
											type="date"
											value={deadline}
											name="deadline"
											onChange={e => setDeadline(e.target.value)} fluid />
									</Form.Field>
								</Grid.Column>
							</Grid>
						</Segment>
					</Grid.Column>
					<Grid.Column />
				</Grid>


				{/* 창작자 제목을 배치한 부분 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						<p>창작자 정보 작성하기</p>
					</Grid.Column>
					<Grid.Column />
				</Grid>


				{/* 창작자 입력폼 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						{/* 창작자이미지 */}
						<Segment>
							<Grid>
								<Grid.Column width={4} textAlign="center">
									<Image src='/static/test/testlist.png' size='medium' circular />
									<br />
									<Label>창작자명</Label>
								</Grid.Column>

								{/* 창작자 정보폼 */}
								<Grid.Column width={12}>
									<p>창작자 소개<span style={fontSize}>
										프로젝트를 창작하는 창작자 본인에 대한 소개를 입력하세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='간단히 40자 이내로 소개하시오'
											value={creator}
											name="creator"
											onChange={e => setCreator(e.target.value)} maxlength="40" fluid />
									</Form.Field>

									<br /><br />
									<p>소셜 네트워크<span style={fontSize}>
										서포터가 확인할 수있는 창작자님의 페이스북, 인스타그램 등을 입력하세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='http://'
											value={websites1}
											name="websites1"
											onChange={e => setWebsites1(e.target.value)} maxlength="8" fluid />
										<br />
										<Input placeholder='http://'
											value={websites2}
											name="websites2"
											onChange={e => setWebsites2(e.target.value)} maxlength="8" fluid />
									</Form.Field>
								</Grid.Column>
							</Grid>
						</Segment>
						<Grid columns={1} centered>
							<Grid.Row verticalAlign='top'>
								<Grid.Column>
									<Button color='blue' inverted type="submit">저장</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
					<Grid.Column />
				</Grid>
				<Link as='/p' href='/project?id=config&title=구성'>
					<Button color='blue' floated='right'><a>다음</a></Button>
				</Link>
				<br /><br /><br /><br />
			</Form>

		</div>
	);
}

export default Summary;











//----UI적용전 코드-------------------------------------------------------------

// <header className="_13KHfN73YmQgsYHxXvuh_J _1roJokHGjgDRbKmh0exptw">
// {/* <div className="_23XXQ4Vzo-Xj_S_h3Wh5D">
// 	<nav className="_15wNinHQvpbIp0_Wz43mfO">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// 			<a className="_36JoJH6uhmIKdE1bWDYUlM rLqvd1axk9i-3cU72yTkF" href="https://tumblbug.com/u/dasepatamugabepo"><i className="_36JoJH6uhmIKdE1bWDYUlM _3EDOT6mnWfo2CobuYD5UO7 _1QY7TzdLHKX3-BKPDNNYKF"></i><label>내 페이지</label></a><span className="LYsd0KLqU3FaMTVCV2WC4 _3KSXDuQ8OEUIIiuxj9PJ1e"><a href="https://tumblbug.com/">tumblbug</a></span><a className="WU1ox0-AeDX_zneKjnNMO rLqvd1axk9i-3cU72yTkF" href="https://help.tumblbug.com/hc/ko/categories/115001047328" rel="noopener noreferrer" target="_blank"><i className="jF23yVLzP1CzuuDAcv69S _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 				창작자 센터 </a>
// 		</div>
// 	</nav>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J _3puWjwbvAnZpG2QCp8_2oS _1WARcEqqT_Pem8leg2dkMj _3rzNLoSt7yWgc2zzlY9duD">
// 		<h1 className="_13KHfN73YmQgsYHxXvuh_J -UobvSeyUG6cEWYnht50S"><span className="_13KHfN73YmQgsYHxXvuh_J _2-N-uV2y5apkjtxqdVnsop _1Qdv504-1XMeYXZyb0xQZT _3fJsfvAPykJzj2xoMnxzWW _3D9sfZXrWd8it3eUCuCTc8">준비 중</span>
// 			깜찍한 제목 </h1>
// 	</div>
// </div> */}
// <ProjectLink/>
// <div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _2mDWoxwh1QMJyLM49w7kMZ _3G8CRXtomRhisiZsw7Spx- _3sFSjAZS4gQdCAyN3OfyFG _2-N-uV2y5apkjtxqdVnsop jvBXmsw6c8TD5NU0Gn0P6">
// 			<i className="_3mTSvU3h91WI2gAoO_w9i4 _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i><span>
// 				펀딩 준비에 앞서&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://help.tumblbug.com/hc/ko/articles/115006302047">공개 검토 가이드라인</a>
// 				,&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://help.tumblbug.com/hc/ko/categories/115001047328">창작자 센터</a>
// 				,&nbsp; <a target="_blank" rel="noopener noreferrer" href="https://tumblbug.com/guidelines">텀블벅 커뮤니티 운영원칙</a>
// 				을 확인해주세요. </span>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj _3an1XS2KtYqHkt90bx9SHY">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _2mDWoxwh1QMJyLM49w7kMZ _3G8CRXtomRhisiZsw7Spx- _2-N-uV2y5apkjtxqdVnsop jvBXmsw6c8TD5NU0Gn0P6">
// 			<i className="_21nJujXiuOiseLBwPOmGO4 _1QY7TzdLHKX3-BKPDNNYKF"></i><span>
// 				프로젝트를 개설하려면 네 개의 섹션을 완성해야 합니다. 완성된 섹션은 <i className="_1oJMWnMCW_Y6GmNc1mhqaW _3RAU_1dXrlkkPhtkKyXSVj _3fJsfvAPykJzj2xoMnxzWW _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 				탭 아이콘에 <i className="_1oJMWnMCW_Y6GmNc1mhqaW _3sFSjAZS4gQdCAyN3OfyFG -o8oGI_QAOKsVIJOUOUmV _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 				파랗게 불이 들어옵니다. </span>
// 		</div>
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _2-N-uV2y5apkjtxqdVnsop T5IOxRC0hd8rBc-PLPMlF">
// 			<a className="_13KHfN73YmQgsYHxXvuh_J _3fJsfvAPykJzj2xoMnxzWW _1Qdv504-1XMeYXZyb0xQZT _3SbGdzxKM6M_AeOQWLNqks" href="http://www.tumblbug.com/4d379f8d-dc10-4af9-82a0-4b839f9f1794"><i className="_12_kkIo9po-wf5m9SVSerq _1QY7TzdLHKX3-BKPDNNYKF"></i><label>미리보기</label></a><a className="_13KHfN73YmQgsYHxXvuh_J _2rCeEoFeBzvCYn76udqnww _1Qdv504-1XMeYXZyb0xQZT _3SbGdzxKM6M_AeOQWLNqks"><i className="_1QY7TzdLHKX3-BKPDNNYKF _3NmqRmOUOqMEJDy6qtw95t"></i><label>검토 요청하기</label></a>
// 		</div>
// 	</div>

// </div>
// </header>
// <section>
// <h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
// 	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">프로젝트 개요</div>
// </h3>
// <div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>프로젝트 제목</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								프로젝트 제목을 입력해주세요 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>프로젝트 대표 이미지</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_10NcCOp7F98F1udFv3te-o _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							프로젝트 대표 이미지를 등록해주세요. </a>
// 					</div>
// 					<div className="_3bWlQdzIFpvwX2B8mnOzgn _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							업로드하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>프로젝트 요약</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv" >
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								프로젝트 요약을 입력해주세요 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>프로젝트 카테고리</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								프로젝트 카테고리를 입력해주세요 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>프로젝트 페이지 주소</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								프로젝트 페이지 주소를 입력해주세요 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>검색용 태그</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								예시: 뱃지, 웹툰, 에코백, 고양이, 유기견 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// <h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
// 	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">창작자 정보</div>
// </h3>
// <div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>프로필 이미지</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_3lIDndOaEWwBcdNUKuMYOQ _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							창작자님의 프로필 이미지를 올려주세요. </a>
// 					</div>
// 					<div className="_25P2Jb3SrgiAhvibHBFOrS _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>창작자 이름</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<h3>dmal****</h3>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							수정하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>창작자 소개</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								창작자 소개를 입력해주세요 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
// 		<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 			<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 				<label>창작자 활동 지역</label>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 					<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 						<div>
// 							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								창작자 활동 지역을 입력해주세요 </a>
// 						</div>
// 					</div>
// 					<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 						<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							입력하기 </a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </section>
// <div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// <div className="_1G9_ptFHThtCjXox_uifcH">
// 	<div className="_352AVOtIZ7ivn3BRhw8ufq">
// 		<Link as='/p' href='/project?id=config&title=구성'>
// 		<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3sFSjAZS4gQdCAyN3OfyFG _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls">
// 			다음 <i className="WU1ox0-AeDX_zneKjnNMO _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i></button>
// 		</Link>
// 	</div>
// </div>
// </div>
// <script type="application/javascript" async="" src="../static/js/application.js"></script>

