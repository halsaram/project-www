/**************************************************************************************
 * 제목          : 비밀번호찾기 페이지
 * 소스파일 이름  : pages/login/find.js
 * 파일설명		   : 비밀번호 찾기 페이지
 * 작성자		     : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-15
 * 최종수정자	   : 최다올
 * 최종수정내용	  : 메일 인풋 내용
**************************************************************************************/



import React, { Component } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

import Layout from '../../components/Layout'

class Find extends Component {
	state = {  mail: '' ,submittedMail: '' } //가입한 메일계정, 입력된 메일계정

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = () => {
		const { mail } = this.state

		this.setState({ submittedMail: mail})
	}
  render() {
	const { mail,  submittedMail } = this.state
		return (
              <div className="Membership__MembershipWrapper-o1o1he-0 irjBzn" data-reactid="40">
                      <div className="Wrapper__MembershipBody-sc-140yq7-0 dgBlAy" data-reactid="41">
                        <div className="UserVerification__ContentsBody-sc-1xwu76u-0 hXaxNc" data-reactid="42">
                          <h2 className="UserVerification__H2-sc-1xwu76u-1 lmiHEz" data-reactid="43">비밀번호 찾기</h2>
                          <div className="UserVerification__Div-sc-1xwu76u-4 gfLyCI" data-reactid="44">
                            <p data-reactid="45">
                              할사람 가입 시 사용하신 이메일을 입력하시면 새 비밀번호를 생성할 수 있는 링크를 보내드립니다.
                            </p>
                          </div>
                          <Form onSubmit={this.handleSubmit}>                                                   
                          <Form.Input
									placeholder='이메일 계정'
									label='이메일'
									name='mail'
									value={mail}
									type='email'
									onChange={this.handleChange}
								/><Button content='확인' primary />
                </Form> 
                <div>  
                <strong>onChange:</strong>
						<pre>{JSON.stringify({ mail }, null, 1)}</pre>
						<strong>onSubmit:</strong>
						<pre>{JSON.stringify({ submittedMail}, null, 1)}</pre>
                
                </div>
                        </div>
                      </div>
                            </div>

    ) // <strong>부터 입력된 값을 보여주는 부분 (나중에 삭제 예정)
    };
    




}
  
  export default Find;

  
    
      