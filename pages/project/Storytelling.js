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
import ImageUpload from '../../lib/upload/ImageUploadStorytelling'



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
										<TextArea placeholder='창작자 소개
										
- 창작자님은 누구이고, 왜 이번 프로젝트를 시작하게 되셨나요?
- 이전 창작 내역이나 활동 SNS 등 이번 프로젝트를 잘 완수할 수 있다고 믿음을 줄 수 있는 내용이 좋습니다.

프로젝트 소개

- 무엇을 만들기 위한 프로젝트인가요? 이 프로젝트의 특별한 점은 무엇인가요?
- 만들고자 하는 제품이나 창작물 샘플, 콘텐츠 미리보기 등을 공유해 주세요. 매력적인 사진과 그림은 후원자 참여에 중요한 역할을 합니다.

프로젝트 예산

- 프로젝트의 목적은 창작에 필요한 금액을 후원자들의 참여로 모으는 것입니다.
- 왜 목표 금액이 필요한지 알고 후원할 수 있도록 창작에 필요한 예산을 공유해 주세요.

실행 일정

- 프로젝트가 어디까지 준비가 되었나요? 구상 단계인지, 시제품이나 파일럿 등 가안 제작 단계인지, 제작이 완료된 단계인지 정확히 알려주세요.
- 펀딩에 성공한다면 어떤 일정으로 완수할 계획인가요? 일정은 중간 단계를 가늠할 수 있도록 구체적으로 적어주세요.

후원자 안내

- 후원자 선물 전달 방법에 대해 조금 더 구체적인 설명이 필요한가요? 손상되기 쉬운 선물의 포장·전달 방법이나 행사 일정/장소, 디지털 파일 전달할 방법 등을 짚어 주세요.
- 문의 방법(창작자에게 문의하기)이나 환불 교환 정책, 상품 정보 고시는 별도의 기능이 있으므로 스토리에 또 기재하지 않아도 됩니다.
- 그 밖에 후원자들에게 전하고 싶은 말이 있나요?'
											style={{ minHeight: 150 }}
											name="summary"
											id="summary"
											value={summary}
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


