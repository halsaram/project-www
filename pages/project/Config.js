/**************************************************************************************
 * 제목          : 프로젝트 올리기 펀딩 및 선물 페이지
 * 소스파일 이름  : pages/project/Config.js
 * 파일설명		   : 프로젝트 시작하기 전 펀딩 및 선물 구성하는 페이지(프로젝트 메뉴바)
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-20
 * 최종수정자	   :  금정민
 * 최종수정내용	  : 전체적인 UI 적용
**************************************************************************************/
import Link from 'next/link';
import { Grid, Segment, Button, Form, Input, Divider, Checkbox } from 'semantic-ui-react'
import ProjectLink from './ProjectLink'
import ProjectHeader from './projectHeader' 


// 리워드 추가하기 버튼을 클릭했을 때 InsertConfig 컴포넌트가 밑에 추가적으로 생김
//(페이지 높이가 계속 늘어남)
const InsertConfig=()=>(
	<Grid columns='equal'>
    	<Grid.Column />
    	<Grid.Column width={10}>
      		<Segment>
				<Grid>
					<Grid.Column floated='left' width={7}>
						<Form.Field inline>
      						<label>금 액 </label>
      						<Input placeholder='0' />
							<label> 원</label>
    					</Form.Field>
					</Grid.Column>
					<Grid.Column floated='right' width={7}>
						<Form.Field inline>
      						<label>정렬 순서 </label>
      						<Input name="order" type="number"/>	
    					</Form.Field>
					</Grid.Column>

					<Grid.Column floated='left' width={14}>
						<p>리워드명</p>	
						<p>해당 리워드의 이름을 입력하세요</p>		
						<Input placeholder="예) 병뚜껑스피커, 욜로북" fluid/>		
					</Grid.Column>

					<Grid.Column floated='left' width={14}>
						<p>옵션</p>	
						<p>옵션이 필요한 상품의 경우 옵션체크 해주세요.</p>		
						<Divider />	
						{/* 체크박스 체크시 -> 칸에 입력이 가능하게 */}
						<Grid divided='vertically'>
							<Grid.Row columns={2}>
								<Grid.Column width={4}><Checkbox label='사이즈' /></Grid.Column>
								<Grid.Column width={11}><Input name="size" fluid/></Grid.Column>

								<Grid.Column width={4}><Checkbox label='색상' /></Grid.Column>
								<Grid.Column width={11}><Input name="color" fluid/></Grid.Column>

								<Grid.Column width={4}><Checkbox label='작성메시지' /></Grid.Column>
								<Grid.Column width={11}><Input name="message" fluid/></Grid.Column>

								<Grid.Column width={4}><Checkbox label='기타' /></Grid.Column>
								<Grid.Column width={11}><Input name="etc" fluid/></Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>

					<Grid.Column floated='left' width={14}>
						<p>배송조건</p>	
						<p>배송을 위한 주소지가 필요하다면 체크와 배송료를 입력하세요</p>		
						<Divider />	
						<Grid>
							<Grid.Column floated='left' width={7}>
								<Checkbox label='배송을 위한 주소지가 필요합니다.'/>
							</Grid.Column>
								
							<Grid.Column floated='right' width={7}>
								<Form.Field inline>
									<label>배송료 </label>
									<Input placeholder='0' />
									<label> 원</label>
								</Form.Field>
							</Grid.Column>
						</Grid>
					</Grid.Column>

					<Grid.Column floated='left' width={14}>
						<p>제한수량</p>	
						<p>리워드 수량을 제한하려면 체크와 수량을 입력하세요.</p>		
						<Divider />	
						<Grid>
							<Grid.Column floated='left' width={7}>
								<Checkbox label='리워드 수량을 제한합니다.'/>
							</Grid.Column>
								
							<Grid.Column floated='right' width={7}>
								<Form.Field inline>
									<label>제한수량 </label>
									<Input placeholder='0' />
									<label> 개</label>
								</Form.Field>
							</Grid.Column>
						</Grid>
					</Grid.Column>
							
					<Grid.Column floated='left' width={14}>
						<p>발송 시작일</p>	
						<p>리워드 제품 발송 시작일을 입력하세요</p>		
						<Input type="date" fluid/>		
					</Grid.Column>
					<Grid.Column floated='center' width={14}>
						<Button inverted color='blue'>저장</Button>
					</Grid.Column>
				</Grid>
			</Segment>
    	</Grid.Column>
    	<Grid.Column />
  	</Grid>
)


// 버튼 클릭시 펀딩작성 부분이 추가된다.onClick=>



//펀딩선택하기 본문 페이지
const Config = () => (
	<div>
		{/* 프로젝트의 헤더 부분(제목작성+메뉴) */}
		<ProjectHeader />
		<ProjectLink />
		<br/><br/>

		{/* 프로젝트의 소제목을 배치한 부분 */}
		<Grid columns='equal'>
    		<Grid.Column />
			<Grid.Column width={10}>
			<p>리워드 등록하기</p>
			</Grid.Column>
			<Grid.Column />
		</Grid>

		{/* 프로젝트 내용부분 */}
		<InsertConfig/>
		<Grid columns={1} centered>
    		<Grid.Row verticalAlign='top'>
     			<Grid.Column>
			  		<Button color='blue'>리워드 추가하기</Button>
     			 </Grid.Column>
    		</Grid.Row>
		</Grid>

		{/* 다음 페이지 이동 */}
		<Link as='/p' href='/project?id=storytelling&title=스토리텔링'>
			<Button color='blue' inverted floated='right'><a>다음</a></Button>
		</Link>

		{/* 정확한 수치전에 예비로 br태그 삽입 */}
		<br/><br/><br/><br/>  
		
	</div>	
	
);

export default Config;









//--원래 html코드--------------------------------------------------------------------------

{/* 
	
</div>
	
	<section>
	<div className="_13KHfN73YmQgsYHxXvuh_J _1abzWO2yE0ZJ7OiXOf85f5 _4S0ikJ5kL9iaC8TQbNr2J">
	</div>
	<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
		펀딩 목표 설정
	</div>
	</h3>
	<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
		<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
			<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
				<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
					<label>목표 금액</label>
					<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
						<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
							<div>
								<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
									목표 금액을 입력해주세요</a>
							</div>
						</div>
						<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
							<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
								입력하기</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
			<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
				<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
					<label>프로젝트 마감일</label>
					<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
						<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
							<div>
								<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
									프로젝트 마감일을 입력해주세요</a>
							</div>
						</div>
						<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
							<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
									입력하기</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
		<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
			예상 정산일
		</div>
		</h3>
		<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
			<div className="PayoutGuide__PayoutWrapper-sc-9wjniy-0 kdGooO">
				<h4 className="PayoutGuide__H4-sc-9wjniy-1 dAXVsl">예상 정산일</h4>
				<div className="PayoutGuide__Description-sc-9wjniy-3 fSLTLX">
					마감일을 입력하시면 예상 정산일을 안내드립니다.
				</div>
			</div>
		</div>
	</div>
	<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
		선물 구성
	</div>
	</h3>
	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
		<div>
			<div data-react-beautiful-dnd-droppable="0" className="_13KHfN73YmQgsYHxXvuh_J _2TxjgvEda9YWbTe8CpK_Ye">

			</div>
		</div>
		<a id="new-reward" className="_13KHfN73YmQgsYHxXvuh_J _18bwsw29jDyAzIPXzQkoS- _18TDror949wcy2NyVIqpHo _2rpTvKkYYdMbVEklWlLfhl">
		<div className="_2mDWoxwh1QMJyLM49w7kMZ _3G8CRXtomRhisiZsw7Spx- _3ZgG-OSv0XE3y-h3oPaDsl">
			<p>
			</p>
			<div className="-UobvSeyUG6cEWYnht50S">
				<h4>선물 추가하기</h4>
			</div>
			<p>
			</p>
			<div className="_3F_kXgcqjiYVIFqaGYLV_x">
				<p>
					선물을 만들기 전에 프로젝트 마감일을 설정해주세요.
				</p>
			</div>
			<p>
			</p>
			<div className="_13KHfN73YmQgsYHxXvuh_J _1Qdv504-1XMeYXZyb0xQZT _2rCeEoFeBzvCYn76udqnww _2-N-uV2y5apkjtxqdVnsop _3SbGdzxKM6M_AeOQWLNqks _2rpTvKkYYdMbVEklWlLfhl">
				<span><i className="_1bLZP2LWutT51B05R2iDR8 _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF"></i>
					추가하기
				</span>
			</div>
			<p>
			</p>
		</div>
		</a>
	</div>
	<h3 className="_13KHfN73YmQgsYHxXvuh_J _2XNIh_QZv4rPkHih1iN3Yt _3o6iE1ko5_AeTlpXebXsBb">
	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
		펀딩 안내
	</div>
	</h3>
	<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
		<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH- _2Ixd--hCfOsqcysY6JfD3l">
			<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
				<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
					<label>환불 및 교환 정책</label>
					<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
						<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
							<div>
								<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _3wXDp_9ZjMHMVuf2NIy5Cg _1QY7TzdLHKX3-BKPDNNYKF"></i>
									환불 및 교환 정책을 입력해주세요</a>
							</div>
						</div>
						<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
							<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
								입력하기</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="_13KHfN73YmQgsYHxXvuh_J _1WARcEqqT_Pem8leg2dkMj">
		<div>
			<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _2uxYQ-nuPwdol9sQhOjfH-">
				<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
					<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
						<label>상품 정보 고시</label><a id="new-record">
						<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
							<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
								<i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
									후원자에게 선물을 제공하는 경우 전자상거래 등에서의 상품 등의 정보제공에 관한 고시법에 따라 상품 정보를 작성해 주세요.
							</div>
							<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
								<i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
									 입력하기
							</div>
						</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="_13KHfN73YmQgsYHxXvuh_J CoIrJwj-n2Pdokdf8d4qE _1WARcEqqT_Pem8leg2dkMj">
		<div className="_13KHfN73YmQgsYHxXvuh_J saXk0rx00KnB6O_X8xIAv _37QxkzyLLTu59r6NSOaCE _2uxYQ-nuPwdol9sQhOjfH-">
			<div className="_13KHfN73YmQgsYHxXvuh_J _3U6RUH-EASpZ_j8ls1HJyP">
				<div className="_13KHfN73YmQgsYHxXvuh_J _3_IGkn3uaje0g2ZA6Tx9wd">
					<label>인증 서류 제출</label>
					<div className="_13KHfN73YmQgsYHxXvuh_J _12TAeoYDPLF0sfa3UIt6uZ _3ZTEzsKL-qDLECUGq4QcLv">
						<div className="_2dKJQZGqcB1T0xe0DzKY0H _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ">
							<a><i className="_3WyCNpfRrfze5XqBAKgG6j WU1ox0-AeDX_zneKjnNMO _1QY7TzdLHKX3-BKPDNNYKF"></i>
								 인증서류를 등록해주세요.</a>
						</div>
						<div className="_2joJTlnkt26WGpxyvkNuCH _152MAijd_UogerBKCVqZR_ WU1ox0-AeDX_zneKjnNMO _3G8CRXtomRhisiZsw7Spx- _1lLHKI5v9AoCyeggtffvGZ">
							<a><i className="w6FPSPr8JA6xb8SSjkPtI _1QY7TzdLHKX3-BKPDNNYKF"></i>
								업로드하기</a>
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
				<Link as='/p' href='/project?id=summary&title=프로젝트'>
				<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls"><i className="_36JoJH6uhmIKdE1bWDYUlM _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i>
				 이전
				</button>
				</Link>
			</div>
			<div className="_352AVOtIZ7ivn3BRhw8ufq">
			<Link as='/p' href='/project?id=storytelling&title=스토리텔링'>
				<button className="_13KHfN73YmQgsYHxXvuh_J _1QY7TzdLHKX3-BKPDNNYKF _3sFSjAZS4gQdCAyN3OfyFG _3SbGdzxKM6M_AeOQWLNqks RcHjzQ_WjIsTCfrwHunls">
				다음 
				<i className="WU1ox0-AeDX_zneKjnNMO _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF"></i></button>
			</Link>
			</div>
		</div>
	</div>
	<br />
	<br />
</div>
<br />
</div> */}