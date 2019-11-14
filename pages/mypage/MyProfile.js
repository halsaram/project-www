/**************************************************************************************
 * 제목          : 마이페이지 프로필 변경
 * 소스파일 이름  : pages/mypage/MyProfile.js
 * 파일설명		   : 마이페이지 프로필 변경
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-11
 * 최종수정일자 	: 2019-11-11
 * 최종수정자	   : 이은미
 * 최종수정내용	  : 
**************************************************************************************/

import React, { Component } from 'react'
import Link from 'next/link';
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'
import { useState, useEffect } from 'react';


function useLocalstorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
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

const buttonText = {
    color: "white"
}

const MyProfile = () => {

    // 카테고리항목변수
    const options = [
        { key: '건강', value: '건강', text: '건강' },
        { key: '생활', value: '생활', text: '생활' }
    ]


    // 작은 안내문 글자
    const fontSize = {
        fontSize: 12,
        color: "gray"
    }

    const [projectTitle, setProjectTitle] = useLocalstorage('프로젝트명', '')
    const [keyword, setKeyword] = useLocalstorage('짧은제목', '')
    const [fundingGoal, setFundingGoal] = useLocalstorage('목표금액', '')
    const [category, setCategory] = useLocalstorage('카테고리', '')
    const [deadline, setDeadline] = useLocalstorage('종료일', '')
    const [creator, setCreator] = useLocalstorage('창작자명', '')
    const [websites1, setWebsites1] = useLocalstorage('창작자소셜주소1', '')
    const [websites2, setWebsites2] = useLocalstorage('창작자소셜주소2', '')


    const handleChange = (e, { value }) => setCategory(value)

    return (

        <div>
            <Form>
                {/* 프로젝트의 소제목을 배치한 부분 */}
                <Grid columns='equal'>
                    <Grid.Column />
                    <Grid.Column width={10}>
                        <h1><p>프로필 설정</p></h1>
                    </Grid.Column>
                    <Grid.Column />
                </Grid>


                {/* 프로젝트 입력폼 */}
                <Grid columns='equal'>
                    <Grid.Column />
                    <Grid.Column width={10}>
                        {/* 이미지를 등록하는 요소 */}
                        <Segment>
                            <Grid>
                                {/* 프로젝트 정보폼 */}
                                <Grid.Column width={12}>
                                    <p>이름<span style={fontSize}>
                                        &nbsp; 구글 아이디로 로그인 시 구글 닉네임으로 최초 지정됩니다.
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={projectTitle}
                                            name="projectTitle"
                                            onChange={e => setProjectTitle(e.target.value)} maxlength="40" fluid />
                                    </Form.Field>

                                    <br />
                                    <p>지역<span style={fontSize}>
                                       &nbsp; 실제 배송 받으실 주소
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={keyword}
                                            name="keyword"
                                            onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
                                    </Form.Field>

                                    <br />
                                    <p>소개<span style={fontSize}>
                                        &nbsp; 300자 이내의 자기소개를 입력해주세요.
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={keyword}
                                            name="keyword"
                                            onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
                                    </Form.Field>

                                    <br />
                                    <p>웹사이트<span style={fontSize}>
                                        &nbsp; 웹사이트가 있다면 주소를 입력해주세요.
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={keyword}
                                            name="keyword"
                                            onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
                                    </Form.Field>

                                    <br />
                                    <p>전화번호<span style={fontSize}>
                                        &nbsp; 전화번호를 입력해주세요. ex)000-0000-0000
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={keyword}
                                            name="keyword"
                                            onChange={e => setKeyword(e.target.value)} maxlength="8" fluid />
                                    </Form.Field>
                                    
                                </Grid.Column>
                            </Grid>

                            
                        </Segment>
                        
                    </Grid.Column>
                    <Grid.Column />
                </Grid>
            </Form>
            <div>
            <Grid columns='equal'>
                <Grid.Column />
                <Grid.Column textAlign="center" width={16}>
                        <Link as='/프로필 설정' href={{ pathname: '/mypage', query: { id: 'myprofile', title: '프로필 설정' } }}>
                    <button class="ui blue button">수정하기</button>
                    </Link>

                </Grid.Column>
                <Grid.Column />
            </Grid>
        </div>
        </div>
    );
}

export default MyProfile;
