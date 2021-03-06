/**************************************************************************************
 * 제목		      : 개인정보 취급방침
 * 소스파일 이름	: Privacy.js
 * 파일설명		   : 메인 풋터에서 개인정보취급방침 클릭 시 보여주는 컴포넌트
 * 작성자		   : 이동호
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-03
 * 최종수정일자 	: 2019-11-16
 * 최종수정자	   : 이은미
 * 최종수정내용	    : 페이지 구성에 장애 요소인 'text-react'와 'style' 요소 모두 제거.
**************************************************************************************/

import React from 'react'
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

const Privacy = () => (

	<div>

		<Grid columns='equal'>
			<Grid.Column />
			<Grid.Column textAlign="center" width={16}>

				<br></br>
				<Header as='h1'>개인정보 처리방침</Header>
			
				<br></br>
				<br></br>
				<p><h5>시행일: 2018년 10월 1일</h5></p>
				<br></br>
				<br></br>
				<p><h3>제1조 의의</h3></p>
		
				<p><h5> 회사는 이용자(이하 "회원" 또는 "이용자")의 동의를 기반으로 개인정보를 수집·이용·제공하고 있으며, 「정보통신망 이용촉진 및 정보보호에 관한 법률」</h5></p>
				<p><h5>(이하 "정보통신망법")을 준수하여 이용자의 개인정보 자기결정권을 적극적으로 보장합니다.</h5></p>
				<p><h5>본 「개인정보처리방침」을 통하여 이용자는 자신의 개인정보가 어떠한 용도와 방식으로 취급되고 있으며, 회사가 개인정보 보호를 위해 어떠한 조치들을 취하고 있는지 알 수 있습니다.</h5></p>
				<p><h5>「개인정보처리방침」은 다음과 같은 의미를 가지고 있습니다.</h5></p>

				<br></br>
				
				<p><h5>회사가 어떤 정보를 수집하고, 어떻게 이용하며, 어떻게 위탁 또는 제공하고, 언제 어떤 방식으로 파기하는지에 관한 사항을 규정합니다.</h5></p>
				<p><h5>정보주체로서 이용자가 자신의 개인정보에 대해 갖는 권리(변경 및 삭제)와 이를 행사하는 방법을 안내해 드립니다.</h5></p>
				<p><h5>개인정보 침해사고가 발생하는 경우 추가 피해를 예방하고 발생한 피해를 복구하기 위한 도움처를 알려드립니다.</h5></p>
				<p><h5>「개인정보처리방침」에서 별도로 정의하지 않는 용어는 「텀블벅 웹사이트 이용약관」제2조(용어의 정리)를 참조하시기 바랍니다.</h5></p>
				
				<p><h5>「개인정보처리방침」은 정부의 법령 및 지침의 변경 또는 나은 서비스의 제공을 위하여 그 내용이 변경될 수 있습니다. 회사는 「개인정보처리방침」을 개정하는 경우, 홈페이지에 공지할 것입니다.</h5></p>
						<br></br>
			<p><h5>제2조 개인정보의 수집범위 및 방법</h5></p>
				<p><h5>회사는 이용자들에게 다양한 서비스를 제공하고 이용자들의 계정 생성을 돕기 위해 개인 정보를 제공받고 이를 활용하여야 합니다. 회사는 이용자들이 제공받는 서비스에 따라 다음과 같은 방법으로 개인정보를 수집합니다.</h5></p>
				
				<p><h5>회원가입 시 수집하는 개인정보는 아래와 같습니다. 이메일 회원 가입: 성명 또는 계정이메일, 비밀번호, 이메일 주소, 생년월일</h5></p>
			<p><h5>페이스북 간편 가입: 페이스북 공개 프로필 등 페이스북 간편가입시 자동 수집되는 정보</h5></p>
			<p><h5>네이버 간편 가입: 이용자 식별자 등 네이버 간편가입시 자동 수집되는 정보</h5></p>
			<p><h5>"창작자"로부터 추가로 수집하는 개인정보는 아래와 같습니다. 프로젝트 신청시 추가 수집</h5></p>
				<p><h5>성명(사업자가 법인인 경우에는 그 명칭과 대표자 성명), 주소, 본인인증 휴대폰번호나 전화번호, 사업자등록번호(사업자), 이메일 주소, 생년월일(개인)</h5></p>
					<br></br>
			<p><h5>프로젝트 성사시 추가수집</h5></p>
			<p><h5>은행명, 계좌번호, 예금주명, 계좌종류(개인/사업자)</h5></p>
			<p><h5>별도의 창작자에 대한 확인절차를 위해 창작자의 신분증 사본, 통장 사본, 법인인감 등의 자료를 요구할 수 있습니다.</h5></p>
			<p><h5>"후원자"가 후원금을 후원하는 경우 추가로 아래의 정보를 수집합니다.</h5></p>
			<p><h5>성명, 휴대폰번호, 결제정보, 후원자 주소지, 배송지</h5></p>
			<p><h5>결제정보</h5></p>
			<p><h5>카드결제: 카드번호, 유효기간, 생년월일, 카드비밀번호 앞 2자리</h5></p>
			<p><h5>계좌이체: 계좌번호, 은행, 예금주 성명, 주민등록번호 앞 6자리</h5></p>
			<p><h5>서비스 이용과정에서 IP 주소, 쿠키, 서비스이용기록, 기기정보가 생성되어 수집될 수 있습니다.</h5></p>
			<p><h5>회사는 아래의 방법을 통해 개인정보를 수집합니다.</h5></p>
					<br></br>
			<p><h5>회원 가입 및 서비스 이용과정에서 이용자가 개인정보 수집에 대해 동의하고 직접 정보를 입력하는 경우 해당 개인정보를 수집합니다.</h5></p>
			<p><h5>프로젝트 신청, 진행시 직접 해당 개인정보를 입력 또는 제출하는 방식을 통해 창작자의 개인정보를 수집합니다.</h5></p>
			<p><h5>프로젝트 후원 시 직접 해당 개인정보를 입력하는 방식을 통해 후원자의 개인정보를 수집합니다.</h5></p>
			<p><h5>회사와 제휴한 외부 기업이나 단체로부터 개인정보를 제공받을 수 있으며, 이러한 경우에는 정보통신망법에 따라 제휴사에서 이용자에게 개인정보 제공 등을 받은 후에 회사에 제공합니다.</h5></p>
			<p><h5>기기정보와 같은 생성정보는 PC 웹, 모바일 웹, 모바일 어플리케이션 이용과정에서 자동으로 생성되어 수집될 수 있습니다.</h5></p>
			<p><h5>제3조 수집한 개인정보의 이용</h5></p>
				<p><h5>회사는 회원관리, 서비스개발, 제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.</h5></p>
						<br></br>
			<p><h5>회원 가입 의사의 확인, 연령 확인, 이용자의 본인 확인, 이용자 식별, 회원 탈퇴 의사의 확인 등 회원관리</h5></p>
				<p><h5>부정이용 방지, 비인가사용 방지, 계정 도용, 서비스의 원활한 운영에 지장을 주는 행위에 대한 이용제한 조치, 분쟁조정을 위한 기록보존, 불만이나 민원의 처리, 약관 개정 등의 고지사항 전달 등 이용자 보호 및 서비스 운영</h5></p>
				<p><h5>프로젝트 공개신청 승인여부 판단, 권고사항 전달, 프로젝트 진행 시 발생하는 민원 처리, 후원금액 결제, 프로젝트 성사 시 후원금액 결제, 세금계산서 및 현금영수증 발급, 선물전달, 프로젝트 이행과 관련된 상담 및 관련 민원처리</h5></p>
				<p><h5>설문조사, 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅</h5></p>
				<p><h5>신규 서비스(콘텐츠) 개발 및 특화, 서비스 이용기록과 접속빈도 분석, 서비스 이용에 대한 통계 서비스 분석 및 통계에 따른 맞춤 서비스 제공</h5></p>
						<br></br>
				<p><h5>제4조 개인정보수집 및 이용에 대한 동의</h5></p>
			<p><h5>회사는 회원이 회사의 「개인정보 수집 및 이용에 대한 동의」에 대해 '동의합니다' 버튼 또는 '동의하지 않습니다' 버튼을 클릭할 수 있는 절차를 마련하여, '동의합니다' 버튼을 클릭하면 개인정보수집에 대해 동의한 것으로 봅니다.</h5></p>
				<p><h5>회사는 개인정보의 수집, 이용, 제공에 관한 동의란을 미리 선택한 것으로 설정해두지 않으며 동의 거절 시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보에 관한 이용자의 동의 거절을 이유로 회원 가입 등 서비스 제공을 제한하거나 거절하지 않습니다.</h5></p>
			<p><h5>이메일 등 개인정보가 부정확하여 서비스 제공에 지장을 초래하는 경우 회사가 해당 정보의 수정이나 삭제를 회원에게 요청할 수 있습니다.</h5></p>
			<p><h5>회원이 온라인 상에서 자발적으로 제공하는 개인정보는 제3자가 수집하여 사용할 수 있으며 이에 대한 책임은 회원이 부담합니다.</h5></p>
					<br></br>
			<p><h5>제5조 개인정보의 공유</h5></p>
				<p><h5>개인정보의 제3자 제공</h5></p>
			<p><h5>개인정보의 제3자 제공은 제공받는 자의 업무처리와 이익을 위하여 개인정보가 제공되는 것을 의미합니다. 개인정보가 제공된 이후에는 제공받는 자의 책임하에 개인정보가 처리됩니다.</h5></p>
			<p><h5>회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.</h5></p>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			

			</Grid.Column>
			<Grid.Column />
		</Grid>

	</div>
)

export default Privacy