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

import React from 'react'
import Link from 'next/link';
import ProjectLink from './ProjectLink';
import ProjectHeader from './projectHeader'
import { Grid, Segment, Button } from 'semantic-ui-react'

const Account = () => (
	<div>
		{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
		<ProjectHeader/>
		<ProjectLink menus="account"/>
		<br/><br/>
		
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
      						<Grid.Column width={3 }>
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
		  <br/><br/><br/><br/>  
		  {/* 정확한 수치전에 예비로 br태그 삽입 */}

		{/*이전이동버튼*/}
		  <Link as='/p' href='/project?id=storytelling&title=스토리텔링'>
		  	<Button type='submit' size="large"><a>이전</a></Button>
		</Link>

	</div>
		
	);
	
	export default Account;

	//이전 코드---------------------------------------------------------------------------------ㄴ

	{/* <section>
			<div className="_13KHfN73YmQgsYHxXvuh_J _1abzWO2yE0ZJ7OiXOf85f5 _4S0ikJ5kL9iaC8TQbNr2J">
			</div>
			<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
			<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
				이메일 인증
			</div>
			</h3>
			<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label>이메일 주소</label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<h3 className="_13KHfN73YmQgsYHxXvuh_J _2rCeEoFeBzvCYn76udqnww -UobvSeyUG6cEWYnht50S">
									
									<span className="_13KHfN73YmQgsYHxXvuh_J _2-N-uV2y5apkjtxqdVnsop _1Qdv504-1XMeYXZyb0xQZT _2rCeEoFeBzvCYn76udqnww _3D9sfZXrWd8it3eUCuCTc8"><i className="_1ovua-NxkpRNHtABup4UqF _1QY7TzdLHKX3-BKPDNNYKF"></i>
										인증 필요
									</span></h3>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="_1QY7TzdLHKX3-BKPDNNYKF w6FPSPr8JA6xb8SSjkPtI"></i>
										수정하기
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
			<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
				본인 인증
			</div>
			</h3>
			<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label></label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
										본인 인증을 진행해 주세요.
									</a>
									</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
									<a><i className="-o8oGI_QAOKsVIJOUOUmV _1QY7TzdLHKX3-BKPDNNYKF"></i>
										인증하기
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
			<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
				입금 계좌
			</div>
			</h3>
			<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH-">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label></label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
											본인 인증 후 입금 계좌 등록이 가능합니다.
										</a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
			<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
				세금 계산서 발행
			</div>
			</h3>
			<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
				<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH-">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
						<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
							<label></label>
							<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
								<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
									<div>
										<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
											본인 인증 후 세금계산서 등록이 가능합니다.
										</a>
									</div>
								</div>
								<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</section><br />
			<br />
			<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
				<div className="_1G9_ptFHThtCjXox_uifcH">
					<div>
						<Link as='/p' href='/project?id=storytelling&title=스토리텔링'>
						<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls"><i className="_36JoJH6uhmIKdE1bWDYUlM _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i>
							이전
						</button>
						</Link>
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	</div> */}