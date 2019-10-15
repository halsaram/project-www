/**************************************************************************************
 * 제목          : 회원가입 페이지
 * 소스파일 이름  : pages/join/join.js
 * 파일설명		   : 회원가입 페이지
 * 작성자		     : 전새희
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-15
 * 최종수정자	   : 전새희
 * 최종수정내용	  : state 적용
**************************************************************************************/

import { Grid, Segment, Input, Form, Button} from 'semantic-ui-react'
import React, { Component } from 'react'

const fontstyle={
    fontSize : 12,
    color : "gray"
}


class Join extends Component {
    state = { mail: '', username: '', passwd: '', checkpasswd: '', submittedMail: '', submittedUsername: '', submittedPasswd: '', submittedCheckPasswd: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { username, mail, passwd, checkpasswd } = this.state

        this.setState({ submittedMail: mail, submittedUsername: username, submittedPasswd: passwd, submittedCheckPasswd: checkpasswd })
    }

    render() {
        const { mail, username, passwd, checkpasswd, submittedMail, submittedUsername, submittedPasswd, submittedCheckPasswd } = this.state
        return (
            <Segment placeholder>
                <Grid columns='equal'>
                        <Grid.Column />
                        <Grid.Column width={6}>
                            <br /><br />
                            <h3>회원가입</h3>
                            <Form> 
                                <Grid columns='equal'>
                                    <Grid.Column width={12}>
                                    <Form.Input
                                        placeholder='이메일 계정'
                                        name='mail'
                                        value={mail}
                                        type='email'
                                        onChange={this.handleChange}
                                        fluid
                                    />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button >인증하기</Button>
                                    </Grid.Column>
                                </Grid>
                                <p style={fontstyle}>위 이메일로 인증번호가 발송됩니다.</p> <br />
                                <Form.Field>
                                    <Form.Input
                                        placeholder='사용할실 이름을 입력해주세요'
                                        label='이름'
                                        name='username'
                                        value={username}
                                        type='text'
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        placeholder='비밀번호를 입력해주세요'
                                        label='비밀번호'
                                        name='passwd'
                                        value={passwd}
                                        type='password'
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        placeholder='비밀번호를 확인합니다'
                                        name='checkpasswd'
                                        value={checkpasswd}
                                        type='password'
                                        onChange={this.handleChange}
                                    />
                                    <p style={fontstyle}>영문, 숫자, 특수문자(!@#$%)를 조합한 8자 이상</p>
                                </Form.Field> <br />
                                <Button type='submit' fluid size="large">완료</Button>
                                <br /><br /><br />
                            </Form>
                            </Grid.Column>
                        <Grid.Column />
                    </Grid>

                <strong>onChange:</strong>
                <pre>{JSON.stringify({ mail, username, passwd, checkpasswd }, null, 4)}</pre>
                <strong>onSubmit:</strong>
                <pre>{JSON.stringify({ submittedMail, submittedUsername, submittedPasswd, submittedCheckPasswd }, null, 4)}</pre>

            </Segment>
        );
	}
}

export default Join;