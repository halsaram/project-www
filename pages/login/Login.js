/**************************************************************************************
 * 제목          : 로그인 메인
 * 소스파일 이름  : pages/login/Login.js
 * 파일설명		   : 로그인 메인화면페이지
 * 작성자		     : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-31
 * 최종수정내용	  : console.log
**************************************************************************************/
import React, { Component } from 'react'
import Link from 'next/link';
import { Button, Divider, Form, Grid, Segment, List } from 'semantic-ui-react'
import {useState, useEffect} from 'react';


//입력된값이 바로 로컬스토리지에 저장되도록 한다.
function useLocalstorage(key, initialValue) {
	const[storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error){
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

const Login =()=> {
	// state = { passwd: '', mail: '', submittedPasswd: '', submittedMail: '' } //비밀버호, 이메일, 입력된 비밀번호, 입력된 이메일
	// //정보 실시간 입력
	// handleChange = (e, { name, value }) => this.setState({ [name]: value })
	// //제출시 저장되는 값
	// handleSubmit = () => {
	// 	const { mail, passwd } = this.state

	// 	this.setState({ submittedMail: mail, submittedPasswd: passwd })
	// }

	// // render() {
	// const { mail, passwd, submittedMail, submittedPasswd } = this.state

	//메일 데이터 입력칸
	const [mail, setMail] = useLocalstorage('이메일', '')
	//비밀번호 데이터 입력칸
	const [passwd, setPasswd] = useLocalstorage('비밀번호','')
	
		return (
			<Segment placeholder>
				<Form >
					<Form.Group>
						{/* {페이스북, 네이버 아이디로그인은 막아놈} */}
						<List celled horizontal>
							<List.Item><Link as='/' href='/'>페이스북 아이디로 로그인</Link></List.Item>
							<List.Item><Link as='/' href='/'>네이버 아이디로 로그인</Link></List.Item>
						</List>
					</Form.Group>
					<Form.Group>
						{/* {이메일 입력폼} */}
						<Form.Input
							placeholder='이메일'
							icon='user'
							iconPosition='left'
							label='이메일'
							name='mail'
							value={mail}
							type='email'
							onChange={e=> setMail(e.target.value)}
						/>
						{/* {비밀번호 입력폼}} */}
						<Form.Input
							placeholder='패스워드'
							name='passwd'폼
							icon='lock'
							iconPosition='left'
							label='패스워드'
							value={passwd}
							type='password'
							onChange={e=> setPasswd(e.target.value)}
						/>
						<Button content='로그인' onClick={(e)=>{console.log(e)}} primary />
					</Form.Group>
					<Form.Group>
						<List celled horizontal>
							<List.Item><Link as='/join' href='/join?id=join'>아직 계정이 없으신가요?</Link></List.Item>
							<List.Item><Link as='/find' href='/login/find'>혹시 비밀번호를 잊으셨나요?</Link></List.Item>
						</List>
					</Form.Group>
				</Form>
			</Segment> 
		); 
	}
	
// }
  
export default Login;