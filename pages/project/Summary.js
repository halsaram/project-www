/**************************************************************************************
 * 제목          : 프로젝트 올리기 개요 페이지
 * 소스파일 이름  : pages/project/Summary.js
 * 파일설명		   : 프로젝트 개요 페이지 / 프로젝트 개요, 프로젝트 창작자 입력하는 페이지
 * 작성자		   : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-11-12
 * 최종수정자	   : 전새희
 * 최종수정내용	  :  ImageUpload
**************************************************************************************/

import React, { useState } from 'react'
import Link from 'next/link';
import { Grid, Dropdown, Segment, Button, Form, Input, Image, Label } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader'
import ImageUpload from '../../lib/upload/ImageUploadSummary'




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

const buttonText = {
	color: "white"
}

const Summary = () => {

	// 카테고리항목변수
	const options = [
		{ key: '게임', value: '게임', text: '게임' },
		{ key: '공연', value: '공연', text: '공연' },
		{ key: '디자인', value: '디자인', text: '디자인' },
		{ key: '만화', value: '만화', text: '만화' },
		{ key: '미술', value: '미술', text: '미술' },
		{ key: '공예', value: '공예', text: '공예' },
		{ key: '사진', value: '사진', text: '사진' },
		{ key: '영화, 비디오', value: '영화, 비디오', text: '영화, 비디오' },
		{ key: '푸드', value: '푸드', text: '푸드' },
		{ key: '음악', value: '음악', text: '음악' },
		{ key: '출판', value: '출판', text: '출판' },
		{ key: '테크놀로지', value: '테크놀로지', text: '테크놀로지' },
		{ key: '패션', value: '패션', text: '패션' },
		{ key: '캠페인', value: '캠페인', text: '캠페인 '}
	]

	// 작은 안내문 글자
	const fontSize = {
		fontSize: 12,
		color: "gray"
	}

	const [projectTitle, setProjectTitle] = useLocalstorage('프로젝트명', '')
	const [keyword, setKeyword] = useLocalstorage('짧은제목', '')
	const [fundingGoal, setFundingGoal] = useLocalstorage('목표금액', '')
	const [category, setCategory] = useLocalstorage('카테고리', '')
	const [deadline, setDeadline] = useLocalstorage('종료일', '')
	const [creator, setCreator] = useLocalstorage('창작자명', '')
	const [websites1, setWebsites1] = useLocalstorage('창작자소셜주소1', '')
	const [websites2, setWebsites2] = useLocalstorage('창작자소셜주소2', '')

	const storage = {
		projectTitle: projectTitle,
		keyword: keyword,
		fundingGoal: fundingGoal,
		category: category,
		deadline: deadline,
		creator: creator,
		websites1: websites1,
		websites2: websites2
	}
	localStorage.setItem("summary", JSON.stringify(storage));
	
	const handleChange = (e, { value }) => setCategory(value)

	return (

		<div>

			<Form>
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
										<Grid>
											<p>프로젝트 대표 이미지<span style={fontSize}>
												대표 이미지는 프로젝트의 가장 중요한 시각적 요소입니다. 프로젝트 대표 이미지를 등록해주세요.
											</span></p>
											<ImageUpload />
										</Grid>
									</Segment>
								</Grid.Column>

								{/* 프로젝트 정보폼 */}
								<Grid.Column width={12}>
									<p>프로젝트 제목<span style={fontSize}>
										프로젝트 성격과 리워드를 짐작할 수 있게 간결하고 직관적으로 작성해주세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='예) 더 가벼워진 미래식사, 밀스 라이트'
											value={projectTitle}
											name="projectTitle"
											onChange={e => setProjectTitle(e.target.value)} maxlength="40" fluid />
									</Form.Field>

									<br />
									<p>검색용 태그<span style={fontSize}>
										검색, 알림 등에 사용되는 짧은 제목을 작성해주세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='예) 병뚜껑스피커, 욜로북'
											value={keyword}
											name="keyword"
											onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
									</Form.Field>

									<br />
									
									<p>프로젝트 카테고리<span style={fontSize}>
										프로젝트의 성격에 맞는 카테고리를 선택해 주세요.
											</span></p>
									<Form.Field inline>
										<Dropdown clearable value={category} options={options} onChange={handleChange} selection fluid />
									</Form.Field>

									<br />

									<p>목표 금액<span style={fontSize}>
										이번 프로젝트를 통해 모으고자 하는 펀딩 목표 금액이 얼마인가요? 마감일 자정까지 목표 금액을 100% 이상 달성하셔야만 모인 후원금이 결제 됩니다. (5,000원 이상인 금액을 입력해주세요.)
											</span></p>
									<Form.Field inline>
										<Input placeholder='0'
											value={fundingGoal}
											type="number"
											name="fundingGoal"
											onChange={e => setFundingGoal(e.target.value)} maxlength="8" fluid />
									</Form.Field>

									<br />

									<p>프로젝트 종료일<span style={fontSize}>
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
										프로젝트를 창작하는 창작자님의 이력과 간단한 소개를 써 주세요.
											</span></p>
									<Form.Field inline>
										<Input placeholder='창작자 소개를 입력해주세요'
											value={creator}
											name="creator"
											onChange={e => setCreator(e.target.value)} maxlength="600" fluid />
									</Form.Field>

									<br /><br />
									<p>소셜 네트워크<span style={fontSize}>
										서포터가 확인할 수있는 창작자님의 페이스북, 인스타그램 등을 입력하세요.
											</span></p>
									<Form.Field inline>
										<Input label='http://'
											value={websites1}
											name="websites1"
											onChange={e => setWebsites1(e.target.value)} maxlength="8" fluid />
										<br />
										<Input label='http://'
											value={websites2}
											name="websites2"
											onChange={e => setWebsites2(e.target.value)} maxlength="8" fluid />
									</Form.Field>
								</Grid.Column>
							</Grid>
						</Segment>
					</Grid.Column>
					<Grid.Column />
				</Grid>
				<Link as='/p' href='/project?id=config&title=구성'>
					<Button color='blue' floated='right'><a style={buttonText}>다음</a></Button>
				</Link>
				<br /><br /><br /><br />
			</Form>

		</div>
	);
}

export default Summary;