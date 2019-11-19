/**************************************************************************************
 * 제목          : 상세페이지 화면 중 상품 옵션 선택 부분(오른쪽 고정)
 * 소스파일 이름  : pages/detail/DetailCato.js
 * 파일설명		   : 상세페이지 화면에서 가장 오른쪽에 고정된다.
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-20
 * 최종수정일자 	: 2019-11-14
 * 최종수정자	   : 전새희
 * 최종수정내용	  : Base
**************************************************************************************/
import { Grid, Dropdown, Segment, Button, Form, Input, Select, Header, Icon, Image, Label } from 'semantic-ui-react'

const Base = () => (
    <Segment>
        <h3>10000가격</h3>
        <p>이 펀딩 제품에 대한 설명</p>
        <h3>상품명</h3>
        <p>예상 전달일 <span>2017.01.02</span></p>
        <Button color="blue" fluid>프로젝트 밀어주기</Button>
</Segment>

);

export default Base;