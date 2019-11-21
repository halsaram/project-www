/**************************************************************************************
 * 제목          : 프로젝트 올리기 계좌설정 페이지
 * 소스파일 이름  : pages/project/Account.js
 * 파일설명		   : 프로젝트 시작하기 전 계좌설정하는 페이지
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-20
 * 최종수정자	   : 금정민
 * 최종수정내용	  : 프로젝트의 계좌설정 페이지의 ui 적용
**************************************************************************************/

import React, { Component, useState } from 'react'
import Link from 'next/link';
import { Grid, Segment, Button } from 'semantic-ui-react'

import ProjectLink from './ProjectLink';
import ProjectHeader from './projectHeader'


const buttonText = {
	color: "white"
}

export default class Account extends Component {

	insertProject = async () => {
		console.log(this.props);
		
		const { campaign, coinbase, userStore } = this.props
		const summary = JSON.parse(localStorage.getItem('summary'))
		const gift = JSON.parse(localStorage.getItem('config'))
		const story = JSON.parse(localStorage.getItem('storytelling'))
	
		console.log(summary);
		console.log(gift);
		console.log(story);

		console.log(summary.fundingGoal);
		

		try {
			const project = await campaign.methods.startProject(JSON.stringify(summary), JSON.stringify(gift), JSON.stringify(story), summary.deadline, summary.fundingGoal, userStore.user.myAddr)
				.send({ from: coinbase, gas: 4500000 })
			console.log(project);
		}
		catch (exception) {
			console.log(exception);
		}
	}

	render() {
		return (
			<div>
				{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
				<ProjectHeader />
				<ProjectLink menus="account" />
				<br /><br />

				{/* 프로젝트 내용 작성 부분 */}
				{/* 프로젝트의 소제목을 배치한 부분 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						<p>계좌 설정하기</p>
					</Grid.Column>
					<Grid.Column />
				</Grid>

				{/* 프로젝트의 인증부분 */}
				<Grid columns='equal'>
					<Grid.Column />
					<Grid.Column width={10}>
						<Segment>
							<Grid divided='vertically'>
								{/* 사용자인증 */}
								<Grid.Row>
									<Grid.Column width={12}>
										사용자 본인인증
								<p>휴대폰 인증을 통해 본인을 인증해주세요.</p>
									</Grid.Column>
									<Grid.Column width={3}>
										<Button inverted color='blue' fluid>인증하기</Button>
									</Grid.Column>
								</Grid.Row>

								{/* 이메일인증 */}
								<Grid.Row columns={2}>
									<Grid.Column width={12}>
										이메일 인증
								<p>펀딩 진행관련 소식을 받을 이메일을 인증해주세요.</p>
									</Grid.Column>
									<Grid.Column width={3}>
										<Button inverted color='blue' fluid>인증하기</Button>
									</Grid.Column>
								</Grid.Row>

								{/* 입금계좌인증 */}
								<Grid.Row columns={2}>
									<Grid.Column width={12}>
										입금 계좌
								<p>본인 인증 후 입금 계좌 등록을 해주세요</p>
									</Grid.Column>
									<Grid.Column width={3}>
										<Button inverted color='blue' fluid>인증하기</Button>
									</Grid.Column>
								</Grid.Row>

								{/* 세금계산서인증 */}
								<Grid.Row columns={2}>
									<Grid.Column width={12}>
										세금계산서 발행
								<p>본인 인증 후 세금 계산서 등록을 해주세요</p>
									</Grid.Column>
									<Grid.Column width={3}>
										<Button inverted color='blue' fluid>인증하기</Button>
									</Grid.Column>
								</Grid.Row>

							</Grid>
						</Segment>
					</Grid.Column>
					<Grid.Column />
				</Grid>
				{/* 이전페이지 이동 */}
				<Link as='/프로젝트스토리텔링' href={{ pathname: '/project', query: { id: 'storytelling', title: '프로젝트스토리텔링' } }}>
					<Button color='blue' floated='left'><a style={buttonText}>이전</a></Button>
				</Link>

				{/*프로젝트 저장 버튼 */}
				<Link href="/">
					<Button color='blue' onClick={() => { this.insertProject()}} floated='right'><a style={buttonText}>제출</a></Button>
				</Link>
			</div>
		)
	}
}