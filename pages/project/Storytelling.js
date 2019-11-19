/**************************************************************************************
 * 제목          : 프로젝트 올리기 스토리텔링 페이지
 * 소스파일 이름  : pages/project/Storytelling.js
 * 파일설명		   : 프로젝트 소개영상 / 프로젝트 스토리
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-11-12
 * 최종수정자	   : 전새희
 * 최종수정내용	  : ImageUpload 적용
**************************************************************************************/

import Link from 'next/link';
import React, { useState } from 'react'
import { Grid, Segment, Button, Form, TextArea } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader'
import ImageUpload from '../../lib/upload/ImageUpload'



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


const buttonText={
	color : "white"
}

const Storytelling = () => {

	const [summary, setSummary] = useLocalstorage('프로젝트 요약', '')


	//입력창에 들어간 정보를 실시간 확인			
	const handleChange = (e, { value }) => setCategory(value)

	// 작은안내글씨스타일
	const fontSize={
		fontSize : 12,
		color : "gray"
		}


		return (
			<div>
				<Form>
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
							<Segment>
								<Grid divided='vertically'>
									<Grid.Row columns={2}>
										<Grid.Column width={7}>
											<p>프로젝트 설명 사진<span style={fontSize}>
												<br/>프로젝트를 설명할 사진보드를 올려주세요</span></p></Grid.Column>
										<Grid.Column width={8}>
											{/* <Input type="file" name="descriptionImage" value={descriptionImage}></Input> */}
											<ImageUpload />
										</Grid.Column>
									</Grid.Row>
									<p>프로젝트 요약<span style={fontSize}>
										<br/>서포터가 제품의 장점이나 특징을 잘 이해하도록 간략하게 소개하세요</span></p>
										<TextArea placeholder='100자 이내로 작성하세요'
											style={{ minHeight: 150 }}
											name="summary"
											id="summary"
											value={summary}
											maxlength="100"
											onChange={e => setSummary(e.target.value)} />
			
								</Grid>
								  <br/><br/>
							</Segment>
						</Grid.Column>
						<Grid.Column />
						</Grid>
				</Form>
						{/* 이전페이지 이동 */}
					<Link as='/p' href='/project?id=config&title=프로젝트구성'>
						<Button color='blue' floated='left'><a style={buttonText}>이전</a></Button>
					</Link>

					{/* 다음 페이지 이동 */}
					<Link as='/p' href='/project?id=account&title=프로젝트계좌'>
						<Button color='blue' floated='right'><a style={buttonText}>다음</a></Button>
					</Link>												
			</div >
        );
	}


export default Storytelling;


