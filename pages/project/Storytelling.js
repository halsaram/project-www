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
import { Grid, Segment, Button, Form, Input, Checkbox, Image, Divider, TextArea } from 'semantic-ui-react'
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
					<ProjectLink menus="storytelling" />
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
														<Input type="file" name="image" value={image}></Input>
													</Grid.Column>

													<Grid.Column width={4}>
														<Checkbox label='동영상'/>
													</Grid.Column>
													<Grid.Column width={11}>
														<Input type="file" name="video" value={video} ></Input>
													</Grid.Column>
												</Grid.Row>
											</Grid>
										</Grid.Column>	
									</Grid.Column>
								</Grid>
								<Divider />

								<Grid divided='vertically'>
									<Grid.Row columns={2}>
										<Grid.Column width={7}>
											<p>프로젝트 설명 사진<span style={fontSize}>
												<br/>프로젝트를 설명할 사진보드를 올려주세요</span></p></Grid.Column>
										<Grid.Column width={8}>
											<Input type="file" name="descriptionImage" value={descriptionImage}></Input></Grid.Column>
									</Grid.Row>
									<p>프로젝트 요약<span style={fontSize}>
										<br/>서포터가 제품의 장점이나 특징을 잘 이해하도록 간략하게 소개하세요</span></p>
										<TextArea placeholder='100자 이내로 작성하시오' style={{ minHeight: 150 }} name="summary" id="summary" onChange={this.handleChange} />
			
								</Grid>
								  <br/><br/>
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
				</Form>
				
			</div >
        );
	}
}

export default Storytelling;


