/**************************************************************************************
 * 제목		      : 메인 리스트화면
 * 소스파일 이름	: MainList.js
 * 파일설명		   : 메인 화면에서 리스트를 보여주는 컴포넌트
 * 작성자		   : 금정민
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-03
 * 최종수정자	   : 금정민
 * 최종수정내용	    : class->className으로 변경 및 props값이 전달되는지 임시 코드 테스트
**************************************************************************************/
import React from 'react';
import Link from 'next/link';

const MainList=(props)=> (
        <div>
        <div className="Container-gci8y7-0 MskhC" data-reactid="92">
            <div data-reactid="93">
                <div className="Carousel__CarouselHeader-sc-72guw4-1 DOQRx" data-reactid="94">
                    <span className="Carousel__CarouselTitle-sc-72guw4-2 dcUXGJ" data-reactid="95">
                        <a className="Carousel__Link-sc-72guw4-0 kCEWtQ" href="collections/editorspick.html" data-reactid="96">
                            {props.MainTitle} </a>
                        <i className="yv2X_NOjMYirwH0R23J17 WU1ox0-AeDX_zneKjnNMO _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="97"></i></span>
                                            
                    <div className="Carousel__CarouselButtons-sc-72guw4-3 lmJehc" data-reactid="98">
                        <button className="Button-sc-1x93b2b-0 hioDQR"  data-reactid="99">
                            <i className="_36JoJH6uhmIKdE1bWDYUlM _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="100"></i></button>
                        <button className="Button-sc-1x93b2b-0 hioDQR" data-reactid="101">
                            <i className="WU1ox0-AeDX_zneKjnNMO _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="102"></i></button>
                    </div>
                </div>
                
                <div className="react-swipe-container carousel" data-reactid="103">
                    <div data-reactid="104">
                        <div className="Carousel__CarouselContents-sc-72guw4-4 ibmRNI" data-reactid="105">
                            <div className="Carousel__Column-sc-72guw4-5 fpWFDE" data-reactid="106">
                                <Link as='/d' href='/d?id=story'>
                                <a className="ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG" data-reactid="107">
                                    <img className="ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM" src="" alt="별토끼, 달토끼 일러스트 2020 캘린더 이미지" data-reactid="108"/>
                                    <div className="ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu" data-reactid="109">
                                        <div className="ProjectItem__FundingTitle-j9emyg-9 bPQPya" data-reactid="110">
                                            <div data-reactid="111">
                                                <h1 className="ProjectItem__ProjectTitle-j9emyg-2 fYikfb" data-reactid="112">
                                                    {props.value.a.name}
                                                </h1>
                                            </div>
                                            <p className="ProjectItem__CreatorName-j9emyg-3 kwVXIK" data-reactid="113">
                                            {props.value.a.editor}</p>
                                        </div>
                                        <svg className="ProjectItem__PercentageLine-j9emyg-5 uGYjB" xmlns="http://www.w3.org/2000/svg" data-reactid="114">
                                            <rect x="0" y="0" fill="#efefef" height="2" width="100%" data-reactid="115"></rect>
                                            <rect x="0" y="0" height="2" width="55%" fill="#fa6462" data-reactid="116"></rect>
                                        </svg>
                                    
                                        <div className="ProjectItem__FundingInfo-j9emyg-7 eGfkCC" data-reactid="117">
                                            <span data-reactid="118">
                                                <span data-reactid="119">
                                                    <i className="_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="120"></i>
                                                    <span data-reactid="121">
                                                        {props.value.a.day}
                                                    </span>
                                                    일 남음
                                            </span></span>
                                            
                                        <div data-reactid="124">
                                            <span className="ProjectItem__FundingMoney-j9emyg-8 eFNjaj" data-reactid="125">
                                                {props.value.a.money}원
                                            </span>
                                            <span className="ProjectItem__FundingRate-j9emyg-4 ldNMzx" data-reactid="128">
                                                {props.value.a.percent}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                            <div className="Carousel__Column-sc-72guw4-5 fpWFDE" data-reactid="106">
                                <a className="ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG" href="rabbit_calenderf09f.html?utm_source=tumblbug&amp;utm_medium=internal&amp;utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c" data-reactid="107">
                                    <img className="ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM" src="" alt="별토끼, 달토끼 일러스트 2020 캘린더 이미지" data-reactid="108"/>
                                    
                                    <div className="ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu" data-reactid="109">
                                        <div className="ProjectItem__FundingTitle-j9emyg-9 bPQPya" data-reactid="110">
                                            <div data-reactid="111">
                                                <h1 className="ProjectItem__ProjectTitle-j9emyg-2 fYikfb" data-reactid="112">별토끼, 달토끼 일러스트 2020 캘린더</h1>
                                            </div>
                                            <p className="ProjectItem__CreatorName-j9emyg-3 kwVXIK" data-reactid="113">
                                                즈세
                                            </p>
                                        </div>
                                        <svg className="ProjectItem__PercentageLine-j9emyg-5 uGYjB" xmlns="http://www.w3.org/2000/svg" data-reactid="114"><rect x="0" y="0" fill="#efefef" height="2" width="100%" data-reactid="115"></rect>
                                            <rect x="0" y="0" height="2" width="55%" fill="#fa6462" data-reactid="116">
                                            </rect>
                                        </svg>
                                        <div className="ProjectItem__FundingInfo-j9emyg-7 eGfkCC" data-reactid="117">
                                        <span data-reactid="118">
                                            <span data-reactid="119">
                                                <i className="_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="120"></i>
                                                <span data-reactid="121">30</span>일 남음
                                            </span>
                                        </span>
                                        
                                        <div data-reactid="124">
                                        <span className="ProjectItem__FundingMoney-j9emyg-8 eFNjaj" data-reactid="125">
                                        1,952,000
                                        원
                                        </span><span className="ProjectItem__FundingRate-j9emyg-4 ldNMzx" data-reactid="128">
                                        55
                                        %
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="Carousel__Column-sc-72guw4-5 fpWFDE" data-reactid="106">
                                <a className="ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG" href="rabbit_calenderf09f.html?utm_source=tumblbug&amp;utm_medium=internal&amp;utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c" data-reactid="107"><img className="ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM" src="../tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/007b6da4e73604f590568620636df9f45c1c385b/013ee619070f0e6d633fbff30e37b2c225628ba3/6b95e896-230e-46a9-9798-71934a6178a63e9d.jpg?ixlib=rb-1.1.0&amp;w=620&amp;h=465&amp;auto=format%2Ccompress&amp;lossless=true&amp;fit=crop&amp;s=500f5ccf67b471573672d80f9b615b93" alt="별토끼, 달토끼 일러스트 2020 캘린더 이미지" data-reactid="108"/>
                                    <div className="ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu" data-reactid="109">
                                        <div className="ProjectItem__FundingTitle-j9emyg-9 bPQPya" data-reactid="110">
                                            <div data-reactid="111">
                                                <h1 className="ProjectItem__ProjectTitle-j9emyg-2 fYikfb" data-reactid="112">별토끼, 달토끼 일러스트 2020 캘린더</h1>
                                            </div>
                                            <p className="ProjectItem__CreatorName-j9emyg-3 kwVXIK" data-reactid="113">
                                                즈세
                                            </p>
                                        </div>
                                        <svg className="ProjectItem__PercentageLine-j9emyg-5 uGYjB" xmlns="http://www.w3.org/2000/svg" data-reactid="114">
                                            <rect x="0" y="0" fill="#efefef" height="2" width="100%" data-reactid="115"></rect>
                                            <rect x="0" y="0" height="2" width="55%" fill="#fa6462" data-reactid="116"></rect> 
                                            {/* 몇 퍼센트를 차지 하는지  - 두 번째 줄에 있는 width에 대해 변수를 받아서 진행해야함*/} 
                                        </svg>
                                        <div className="ProjectItem__FundingInfo-j9emyg-7 eGfkCC" data-reactid="117">
                                    <span data-reactid="118"><span data-reactid="119"><i className="_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="120"></i><span data-reactid="121">30</span>
                                    일
                                        남음
                                    </span></span>
                                            <div data-reactid="124">
                                        <span className="ProjectItem__FundingMoney-j9emyg-8 eFNjaj" data-reactid="125">
                                        1,952,000
                                        원
                                        </span><span className="ProjectItem__FundingRate-j9emyg-4 ldNMzx" data-reactid="128">
                                        55
                                        %
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MainList;


/**************************************************************************************
* css변경사항
: img의 css 변경
/* sc-component-id: ProjectItem__ProjectCoverimage-j9emyg-6 */
//     .eaBarM{min-width:120px;width:120px;height:90px;margin-right:1rem;background-color:#efefef;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease;}
//     @media (max-width:320px){.eaBarM{margin-right:0;min-width:95px;width:95px;height:65px;}}
  
//   /* 수정 */
//     @media (min-width:1080px){
//       .eaBarM{width:320px;height:180px;border-radius:2px 2px 0 0;margin-right:0;}}
//       @media (max-width:1080px){
//         .eaBarM{margin-right:0;position:relative;top:0;bottom:0;margin:auto 0;left:0;}}
//**************************************************************************************/
