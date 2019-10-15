/**************************************************************************************
 * 제목          : 회원가입 페이지
 * 소스파일 이름  : pages/join/mailjoin.js
 * 파일설명		   : 회원가입 페이지
 * 작성자		     : 전새희
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-07
 * 최종수정일자 	: 2019-10-07
 * 최종수정자	   : 전새희
 * 최종수정내용	  : 이메일로 가입하기 화면
**************************************************************************************/
import React, { Component } from 'react'
import Link from 'next/link';
import { Divider, Form, Grid, Segment, List } from 'semantic-ui-react'


const LoginLink = (props) => (
    <Link as='/log' href='/login?id=login'>
        <a href="/login">기존 계정으로 로그인하기</a>
    </Link>
)

class Mailjoin extends Component {
	state = { name: '', mail: '', passwd: '', checkmail: '', checkpasswd: '',submittedName: '', submittedMail: '', submittedPasswd: '' }

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = () => {
		const { name, mail, passwd, checkmail, checkpasswd } = this.state

		this.setState({ submittedName: name, submittedMail: mail, submittedPasswd: passwd  })
	}

	render() {
	const { name, mail, passwd, checkmail, checkpasswd, submittedName, submittedMail, submittedPasswd } = this.state
		return (
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
									placeholder='사용할실 이름을 입력해주세요'  
									label='이름'
									name='name'
									value={name}
									type='text'
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Input
									placeholder='이메일 주소를 입력해주세요'
									label='이메일 주소'
									name='mail'
									value={mail}
									type='email'
									onChange={this.handleChange}
								/>
								<Form.Input
									placeholder='이메일 주소를 확인합니다'
									name='checkmail'
									value={checkmail}
									type='email'
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Input
									placeholder='비밀번호를 입력해주세요'
									label='비밀번호'
									name='passwd'
									value={passwd}
									type='password'
									onChange={this.handleChange}
								/>
								<Form.Input
									placeholder='비밀번호를 확인합니다'
									name='checkpasswd'
									value={checkpasswd}
									type='password'
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Button content='확인' />
							</Form.Group>
						</Form>
						<p>이미 계정이 있으신가요?</p>
						<LoginLink />
					</Grid.Column>
					<Grid.Column verticalAlign='middle'>
						<strong>onChange:</strong>
						<pre>{JSON.stringify({ name, mail, checkmail, passwd, checkpasswd }, null, 3)}</pre>
						<strong>onSubmit:</strong>
						<pre>{JSON.stringify({ submittedName, submittedMail, submittedPasswd }, null, 3)}</pre>
					</Grid.Column>
				</Grid>
				<Divider vertical>on</Divider>
			</Segment>
		);
	}
}


export default Mailjoin;

