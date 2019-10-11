/**************************************************************************************
 * 제목          : 로그인 메인
 * 소스파일 이름  : pages/login/Login.js
 * 파일설명		   : 로그인 메인화면페이지
 * 작성자		     : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-07
 * 최종수정자	   : 최다올
 * 최종수정내용	  : 인덱스와 연결!
**************************************************************************************/
import React, { Component } from 'react'
import Link from 'next/link';
import { Form } from 'semantic-ui-react'

class Login extends Component {
	state = { passwd: '', mail: '', submittedPasswd: '', submittedMail: '' }

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = () => {
		const { mail, passwd } = this.state

		this.setState({ submittedMail: mail, submittedPasswd: passwd })
	}

	render() {
	const { mail, passwd, submittedMail, submittedPasswd } = this.state
		return (
			<div>
				<div className="Membership__MembershipWrapper-o1o1he-0 irjBzn" data-reactid="40">
					<div className="Wrapper__MembershipBody-sc-140yq7-0 dgBlAy" data-reactid="41">
						<div data-reactid="42">
							<a className="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB"  data-reactid="43"><i className="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="44"></i>
							페이스북 아이디로 로그인
							
							</a><a className="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid" data-reactid="46"><svg className="naverIcon" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 18.31" data-reactid="47"><title data-reactid="48">naverIcon</title><path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" fill="#fff" data-reactid="49"></path></svg>
							
							네이버 아이디로 로그인
							
							</a>
						</div>
						<div className="Divider-sc-1wyk970-0 uEieK" data-reactid="51">
							<span data-reactid="52"><span data-reactid="53">또는</span></span>
						</div>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group>
								<Form.Input
									placeholder='이메일'
									name='mail'
									value={mail}
									type='email'
									onChange={this.handleChange}
								/>
								<Form.Input
									placeholder='패스워드'
									name='passwd'
									value={passwd}
									type='password'
									onChange={this.handleChange}
								/>
								<Form.Button content='로그인' />
							</Form.Group>
						</Form>
						<div data-reactid="63">
							<Link as='/join' href='/join?id=join'><a className="SignIn__StyledLink-sc-9xfg6a-1 bKTrQD" data-reactid="60"><span data-reactid="61">아직 계정이 없으신가요?</span>

								할사람 가입하기

							</a></Link>
							<Link as='log' href='/login?id=find&title=비밀번호찾기'><a data-reactid="64">혹시 비밀번호를 잊으셨나요?</a></Link>
						</div>
						<strong>──────────────────────────────</strong><br />
						<strong>onChange:</strong>
						<pre>{JSON.stringify({ mail,  passwd }, null, 2)}</pre>
						<strong>onSubmit:</strong>
						<pre>{JSON.stringify({ submittedMail, submittedPasswd }, null, 2)}</pre>
					</div>
				</div>
			</div>
		);
	}
}
  
export default Login;