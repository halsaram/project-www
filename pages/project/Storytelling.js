/**************************************************************************************
 * 제목          : 프로젝트 올리기 스토리텔링 페이지
 * 소스파일 이름  : pages/project/Storytelling.js
 * 파일설명		   : 프로젝트 소개영상 / 프로젝트 스토리
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-21
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 데이터 코드 주석 추가 및 UI 적용
**************************************************************************************/

import Link from 'next/link';
import React, { Component, useState } from 'react'
import { Grid, Segment, Button, Form, Input, Checkbox, Image, Divider } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader' 




class Storytelling extends Component {
	
	state = {   image: '',   video: '',  descriptionImage: '', summary: '', //사진|비디오|프로젝트설명사진|프로젝트 요약
				//상단변수제출변수
				submittedImage: '',              submittedVideo: '',
				submittedDescriptionImage: '',    submittedSummary: '' }


	//입력창에 들어간 정보를 실시간 확인			
	handleChange = (e, { name, value }) => this.setState({ [name]: value })


	//입력변수를 -> 제출 후 변수(submitted ~)에 저장
	handleSubmit = () => {
		const { image, video, descriptionImage, summary } = this.state
		this.setState({ submittedImage: image, 
			            submittedVideo: video, 
						submittedDescriptionImage: descriptionImage, 
						submittedSummary: summary })
	}

	render() {
		const { image, video, descriptionImage, summary,
			    submittedImage, submittedVideo, submittedDescriptionImage, submittedSummary } = this.state
		
		// 작은안내글씨스타일
		const fontSize={
			fontSize : 12,
			color : "gray"
			}

		

		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
					<ProjectHeader />
					<ProjectLink />
					<br/><br/>

					{/* 프로젝트의 소제목을 배치한 부분 */}
					<Grid columns='equal'>
						<Grid.Column />
						<Grid.Column width={10}>
							<p>소개영상/사진 등록하기</p>
						</Grid.Column>
						<Grid.Column />
					</Grid>


					<Grid columns='equal'>
						<Grid.Column />
						<Grid.Column width={10}>
						{/* 이미지를 등록하는 요소 */}
							<Segment>
								<p>소개영상<p style={fontSize}>
								프로젝트 최상단에 올라갈 영상 또는 사진을 올려주세요</p></p>
								<Grid>
									<Grid.Column width={4}>
										<Image
										alt='An example alt'
										size='small'
										src = 'https://react.semantic-ui.com/images/wireframe/image.png'	
										/>
									</Grid.Column>
									
									<Grid.Column width={12}>
										<Grid.Column floated='left' width={14}>
											<Grid divided='vertically'>
												<Grid.Row columns={2}>
													<Grid.Column width={4}>
														<Checkbox label='사진'/>
													</Grid.Column>
													<Grid.Column width={11}>
														<Input type="file" name="picture"></Input>
													</Grid.Column>

													<Grid.Column width={4}>
														<Checkbox label='동영상'/>
													</Grid.Column>
													<Grid.Column width={11}>
														<Input type="file" name="video"></Input>
													</Grid.Column>
												</Grid.Row>
											</Grid>
										</Grid.Column>	
									</Grid.Column>
								</Grid>
								<Divider />

								<Grid divided='vertically'>
									<Grid.Row columns={2}>
										<Grid.Column width={4}>
											<Checkbox label='프로젝트 설명 사진'/>
										</Grid.Column>
										<Grid.Column width={11}>
											<Input type="file" name="picture"></Input>
										</Grid.Column>
									</Grid.Row>
								</Grid>

							</Segment>
						</Grid.Column>
						<Grid.Column />
						</Grid>


						
				</Form>





			
				{/* 데이터 현황 */}
				<div>
					<strong>onChange:</strong>
						<pre>{JSON.stringify({ image, video, descriptionImage, summary }, null, 4)}</pre>
					<strong>onSubmit:</strong>
						<pre>{JSON.stringify({ submittedImage, submittedVideo, submittedDescriptionImage, submittedSummary }, null, 4)}</pre>
				</div>
			</div >
        );
	}
}

export default Storytelling;




//----UI적용전 코드--------------------------------------------------------------------------
// <div>
// 			<header className="_13KHfN73YmQgsYHxXvuh_J _1roJokHGjgDRbKmh0exptw">
// 				{/* <div className="_23XXQ4Vzo-Xj_S_h3Wh5D">
// 						<nav className="_15wNinHQvpbIp0_Wz43mfO">
// 						<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// 							<a className="_36JoJH6uhmIKdE1bWDYUlM rLqvd1axk9i-3cU72yTkF" href="https://tumblbug.com/u/dasepatamugabepo"><i className="_36JoJH6uhmIKdE1bWDYUlM _3EDOT6mnWfo2CobuYD5UO7 _1QY7TzdLHKX3-BKPDNNYKF"></i><label>내 페이지</label></a><span className="LYsd0KLqU3FaMTVCV2WC4 _3KSXDuQ8OEUIIiuxj9PJ1e"><a href="https://tumblbug.com/">tumblbug</a></span><a className="WU1ox0-AeDX_zneKjnNMO rLqvd1axk9i-3cU72yTkF" href="https://help.tumblbug.com/hc/ko/categories/115001047328" rel="noopener noreferrer" target="_blank"><i className="jF23yVLzP1CzuuDAcv69S _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 								창작자 센터</a>
// 						</div>
// 						</nav>
// 						<div className="_13KHfN73YmQgsYHxXvuh_J _3puWjwbvAnZpG2QCp8_2oS _1WARcEqqT_Pem8leg2dkMj _3rzNLoSt7yWgc2zzlY9duD">
// 							<h1 className="_13KHfN73YmQgsYHxXvuh_J -UobvSeyUG6cEWYnht50S"><span className="_13KHfN73YmQgsYHxXvuh_J _2-N-uV2y5apkjtxqdVnsop _1Qdv504-1XMeYXZyb0xQZT _3fJsfvAPykJzj2xoMnxzWW _3D9sfZXrWd8it3eUCuCTc8">준비 중</span>
// 								멋진 제목</h1>
// 						</div>
// 					</div> */}
// 					<div>
// 						<ProjectLink />
// 					</div>
// 				</header>
// 			</div>
// 			<div>
// 				<section>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _1abzWO2yE0ZJ7OiXOf85f5 _4S0ikJ5kL9iaC8TQbNr2J">
// 				</div>
// 				<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// 					프로젝트 소개 영상
// 				</div>
// 				</h3>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
// 					<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
// 						<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 							<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 								<label>
// 									프로젝트 소개 영상 
// 								<span className="_13KHfN73YmQgsYHxXvuh_J IHUALIalgwgMpH2DEQooZ _3fJsfvAPykJzj2xoMnxzWW _1Qdv504-1XMeYXZyb0xQZT _3D9sfZXrWd8it3eUCuCTc8">선택 항목</span></label>
							
// 								<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 									<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 											프로젝트 소개 영상을 등록해주세요
// 										</a>
// 									</div>
// 									<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 										<a><i className="_1QY7TzdLHKX3-BKPDNNYKF w6FPSPr8JA6xb8SSjkPtI"></i>
// 											등록하기
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// 					프로젝트 스토리
// 				</div>
// 				</h3>
// 				<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
// 					<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
// 						<form className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
// 							<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
// 								<label>프로젝트 스토리</label>
// 								<div>
// 									<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
// 										<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
// 											<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 											 프로젝트 스토리를 입력해주세요
// 											</a>
// 										</div>
// 										<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
// 											<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 											 입력하기
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</form>
// 					</div>
// 				</div>
// 				</section><br />
// 				<br />
// 				<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
// 					<div className="_1G9_ptFHThtCjXox_uifcH">
// 						<div>
// 						<Link as='/p' href='/project?id=config&title=구성'>
// 							<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls"><i className="_36JoJH6uhmIKdE1bWDYUlM _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i>
// 							 이전
// 							</button>
// 							</Link>
// 						</div>
// 						<div className="_352AVOtIZ7ivn3BRhw8ufq">
// 						<Link as='/p' href='/project?id=account&title=계좌'>
// 							<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3sFSjAZS4gQdCAyN3OfyFG _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls">
// 							다음 <i className="WU1ox0-AeDX_zneKjnNMO _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i></button>
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 				<br />
// 				<br />
// 			</div>