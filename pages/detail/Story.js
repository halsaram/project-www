/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지(Story)
 * 소스파일 이름  : pages/deteile/Story.js
 * 파일설명		   : 프로젝트 상세 스토리 소개
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-11
 * 최종수정일자 	: 2019-11-02
 * 최종수정자	   : 이은미
 * 최종수정내용	  : import react 추가
**********************************************************************************/

import React, { Component } from 'react'
import Link from 'next/link';
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'
import DetailLink from './DetailLink'
import DetailHeader from './DetailHeader'
import { useState, useEffect } from 'react';

const Story = () => (
    <div>
        <DetailHeader />
        <DetailLink />
        <br /><br />

        </div>
    );

export default Story;
