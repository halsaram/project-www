/**************************************************************************************
 * 제목		      : 메인 이미지 슬라이드 배너
 * 소스파일 이름	: Main_Banner.js
 * 파일설명		   : 메인화면에서 이미지가 슬라이드처럼 보여지는 컴포넌트
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10~
 * 최종수정일자 	: 2019-10-03
 * 최종수정자	   : 금정민
 * 최종수정내용	    : 이미지 슬라이드 코드 주석으로 추가 및 import 대기
 * https://www.npmjs.com/package/react-slideshow-image
**************************************************************************************/



import React from "react";
import { Carousel } from "react-responsive-carousel";
import style from './onlySilder.css'

const Banner=() => (
  <div>
    <Carousel autoPlay style={style}>
      <div>
        <img src="../../static/test/1.png" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="../../static/test/2.png" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="../../static/test/3.png" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="../../static/test/4.png" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
    </Carousel>
  </div>
);

 export default Banner;