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
import { Form } from 'semantic-ui-react'


const LoginLink = (props) => (
    <Link as='/log' href='/login?id=login'>
        <a href="/login">기존 계정으로 로그인하기</a>
    </Link>
)

class Mailjoin extends Component {
	state = { name: '', mail: '', passwd:'', submittedName: '', submittedMail: '', submittedPasswd: '' }

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = () => {
		const { name, mail, passwd } = this.state

		this.setState({ submittedName: name, submittedMail: mail, submittedPasswd: passwd  })
	}

	render() {
	const { name, mail, passwd, submittedName, submittedMail, submittedPasswd } = this.state
		return (


<div>
        <div>
            <a className="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB" href="https://tumblbug.com/auth/facebook?from_pledge=false&amp;origin=%2F">
                <i className="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF"></i>페이스북 아이디로 가입하기</a>
            <a className="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid" href="https://tumblbug.com/auth/naver?from_pledge=false&amp;origin=%2F">
                <svg className="naverIcon" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 18.31">
                    <title>naverIcon</title>
                    <path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" fill="#fff"></path>
                </svg>네이버 아이디로 가입하기</a>
        </div>
        <div className="Divider-sc-1wyk970-0 uEieK">
            <span>
                <span>또는</span>
            </span>
        </div>
        <Form onSubmit={this.handleSubmit}>
							<Form.Group>
                            <Form.Input
                                    placeholder='이름'  
                                    name='name'
									value={name}
									type='text'
									onChange={this.handleChange}
								/>
								<Form.Input
									placeholder='아이디'
									name='mail'
									value={mail}
									type='text'
									onChange={this.handleChange}
								/>
								<Form.Input
									placeholder='패스워드'
									name='passwd'
									value={passwd}
									type='password'
									onChange={this.handleChange}
								/>
								<Form.Button content='회원가입' />
							</Form.Group>
						</Form>
        <div className="SignUp__LoginLinkWrapper-k5h4n5-4 hQGkMf">
            <p>이미 계정이 있으신가요?</p>
            <LoginLink />

            <strong>──────────────────────────────</strong><br />
						<strong>onChange:</strong>
						<pre>{JSON.stringify({ name, mail, passwd }, null, 3)}</pre>
						<strong>onSubmit:</strong>
						<pre>{JSON.stringify({ submittedName, submittedMail, submittedPasswd }, null, 3)}</pre>
        </div>
    </div>
    


)}}


export default Mailjoin;

