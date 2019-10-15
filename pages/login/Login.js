/**************************************************************************************
 * 제목          : 로그인 메인
 * 소스파일 이름  : pages/login/Login.js
 * 파일설명		   : 로그인 메인화면페이지
 * 작성자		     : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-11
 * 최종수정자	   : 정휘선
 * 최종수정내용	  : REACT UI UPDATE
**************************************************************************************/
import React, { Component } from 'react'
import Link from 'next/link';
import { Button, Divider, Form, Grid, Segment, List } from 'semantic-ui-react'

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
			<Segment placeholder>
				<Grid columns={2} relaxed='very' stackable>
					<Grid.Column verticalAlign='middle'>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group>
								<List celled horizontal>
									<List.Item><Link as='/' href='/'>페이스북 아이디로 로그인</Link></List.Item>
									<List.Item><Link as='/' href='/'>네이버 아이디로 로그인</Link></List.Item>
								</List>
							</Form.Group>
							<Form.Group>
								<Form.Input
									placeholder='이메일'
									icon='user'
									iconPosition='left'
									label='이메일'
									name='mail'
									value={mail}
									type='email'
									onChange={this.handleChange}
								/>
								<Form.Input
									placeholder='패스워드'
									name='passwd'
									icon='lock'
									iconPosition='left'
									label='패스워드'
									value={passwd}
									type='password'
									onChange={this.handleChange}
								/>
								<Button content='로그인' primary />
							</Form.Group>
							<Form.Group>
								<List celled horizontal>
									<List.Item><Link as='/join' href='/join?id=join'>아직 계정이 없으신가요?</Link></List.Item>
									<List.Item><Link as='log' href='/login?id=find&title=비밀번호찾기'>혹시 비밀번호를 잊으셨나요?</Link></List.Item>
								</List>
							</Form.Group>
						</Form>
					</Grid.Column>
					<Grid.Column verticalAlign='middle'>
						
					</Grid.Column>
				</Grid>
				<Divider vertical>on</Divider>

				
			</Segment>
			<div>
				<strong>onChange:</strong>
				<pre>{JSON.stringify({ mail, passwd }, null, 2)}</pre>
				<strong>onSubmit:</strong>
				<pre>{JSON.stringify({ submittedMail, submittedPasswd }, null, 2)}</pre>
			</div>
			</div>
		);
	}
}
  
export default Login;