/**************************************************************************************
 * 제목          : 마이페이지 프로필 변경
 * 소스파일 이름  : pages/mypage/MyProfile.js
 * 파일설명		   : 마이페이지 프로필 변경
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-11-11
 * 최종수정일자 	: 2019-11-19
 * 최종수정자	   : 전새희
 * 최종수정내용	  : useLocalstorage
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


    // 작은 안내문 글자
    const fontSize = {
        fontSize: 12,
        color: "gray"
    }

    const [myname, setMyname] = useLocalstorage('이름', '')
    const [address, setAddress] = useLocalstorage('지역', '')
    const [describe, setDescribe] = useLocalstorage('소개', '')
    const [mysite, setMysite] = useLocalstorage('웹사이트', '')
    const [mynumber, setMynumber] = useLocalstorage('전화번호', '')


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
                                        <Input placeholder='사용하실 이름을 입력해주세요'
                                            value={myname}
                                            name="myname"
                                            onChange={e => setMyname(e.target.value)} fluid />
                                    </Form.Field>

                                    <br />
                                    <p>지역<span style={fontSize}>
                                       &nbsp; 실제 배송 받으실 주소
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={address}
                                            name="address"
                                            onChange={e => setAddress(e.target.value)} fluid />
                                    </Form.Field>

                                    <br />
                                    <p>소개<span style={fontSize}>
                                        &nbsp; 300자 이내의 자기소개를 입력해주세요.
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='입력해주세요'
                                            value={describe}
                                            name="describe"
                                            onChange={e => setDescribe(e.target.value)} maxlength="600" fluid />
                                    </Form.Field>

                                    <br />
                                    <p>웹사이트<span style={fontSize}>
                                        &nbsp; SNS 계정을 연동하시면 더욱 신뢰할 수 있는 프로필 카드를 만들 수 있습니다.
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='웹사이트가 있다면 주소를 입력해주세요'
                                            value={mysite}
                                            name="mysite"
                                            onChange={e => setMysite(e.target.value)} fluid />
                                    </Form.Field>

                                    <br />
                                    <p>전화번호<span style={fontSize}>
                                        &nbsp; 전화번호를 입력해 주세요. 밀어주기 및 후원 선물 배송 시 연락을 위해 사용됩니다.
											</span></p>
                                    <Form.Field inline>
                                        <Input placeholder='전화번호를 입력해주세요. ex)000-0000-0000'
                                            value={mynumber}
                                            name="mynumber"
                                            onChange={e => setMynumber(e.target.value)} fluid />
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
