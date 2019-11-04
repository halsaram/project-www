/**************************************************************************************
 * 제목          : 프로젝트 올리기 정책 페이지
 * 소스파일 이름  : pages/project/Agreements.js
 * 파일설명		   : 프로젝트 시작하기 전 정책을 준수하는지 확인하는 페이지
 * 작성자		   : 정휘선
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-11-04
 * 최종수정자	   : 최다올
 * 최종수정내용	  : console log
**************************************************************************************/
import React, { Component } from 'react'
import Link from 'next/link';
import { Checkbox, Grid, Segment, Button  } from 'semantic-ui-react'
import { inherits } from 'util';
import {useState} from 'react';

const ProjectLink = (props) => (
    <Link as='/p' href={`/project?id=${props.id}&title=프로젝트개요`}>
        <Button type='submit' fluid size="large">
            <a>{props.title}</a></Button>
    </Link>

    
)



const Agreements = () => {
    // 체크 여부를 정하는 변수
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    console.log("checked1==>", checked1);
    console.log("checked2==>", checked2);
    console.log("checked3==>", checked3);
    console.log("checked4==>", checked4);
    console.log("checked5==>", checked5);
    console.log("checked6==>", checked6);

    return(
<div>
        <Grid columns='equal'>
            <Grid.Column /> 
            <Grid.Column width={8}>   
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Grid reversed='tablet vertically' textAlign="center" divided='vertically'>
                            <Grid.Row >
                                <Grid.Column>
                                <br /><br />
                                    <h2>프로젝트 업로드 전 확인해 주세요</h2>
                                    <p>프로젝트 시작전 아래 사항을 확인해주세요</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Checkbox  onChange={() => {setChecked1(!checked1);}} label='펀딩 진행 중에는 제공할 리워드를 다른 온라인, 오프라인에서 펀딩하거나 판매하지 않습니다.'/><br /><br />
                        <Checkbox  onChange={() => {setChecked2(!checked2);}} label='제공할 리워드는 현금, 지분 등의 수익이 아닌 제품 또는 서비스입니다.' /><br /><br />
                        <Checkbox  onChange={() => {setChecked3(!checked3);}} label='진행할 프로젝트가 지적 재산권을 침해하지 않습니다.' /><br /><br />
                        <Checkbox  onChange={() => {setChecked4(!checked4);}} label='서포터에게 프로젝트 진행 과정을 안내하고, 배송 약속을 지킬 수 있습니다.' /><br /><br />
                        <Checkbox  onChange={() => {setChecked5(!checked5);}} label='서포터와의 신뢰를 위한 펀딩 진행, 제품 제작, 배송 등 모든 과정에서 겪는 어려움들을 서포터에게 진솔하게 전달하고 문제를 해결합니다.' /><br /><br />
                        <Checkbox  onChange={() => {setChecked6(!checked6);}} label='해당 프로젝트 종료 후 서포터들의 신고 누적시 정산에 패널티를 부여합니다.' /><br /><br /><br /> 

                    </Grid.Column>

                    {/* 체크가 true여야 버튼이 보임 */}
                    {checked1 && checked2 && checked3 &&checked4 &&checked5 &&checked6 && true?
                    <Link as='/프로젝트개요' href={{ pathname: '/project', query: { id: 'summary', title: '프로젝트개요' } }}>
                        <Button onClick={(e)=>{console.log("개요로 넘어감",e);}
                    } type='submit' fluid size="large">
                            <a>프로젝트개요</a>
                        </Button>
                    </Link>
                    :<Button type='submit' fluid size="large" disabled>프로젝트 진행하기</Button>}
                    
                </Grid.Row>
             </Grid>
            </Grid.Column>
            <Grid.Column/>
        </Grid>
        <br/><br/><br/><br/>
    </div>

    )
    

};

export default Agreements;






//--------리액트 UI 적용전 코드--------------------------------------------------------

  // <div className="ProjectStartAgreements__ContentsBody-sc-1vrd6a2-1 hMCHfF" data-reactid="41">
    //     <h2 className="ProjectStartAgreements__Header-sc-1vrd6a2-2 gAoVXO" data-reactid="42"># 프로젝트를 올리기 전에 확인해 주세요.</h2>
    //     <div className="ProjectStartAgreements__Guidance-sc-1vrd6a2-3 ipkmcm" data-reactid="43">
    //         텀블벅은 공개 검토 절차를 통해 창작자님이 작성한 프로젝트가 텀블벅의 정책을 준수하는지 확인하고 있습니다. <br data-reactid="45" />
    //         아래 사항들을 확인한 후 프로젝트를 올려 주세요.
    //         <ul data-reactid="47">
    //             <li data-reactid="48"><a href="https://help.tumblbug.com/hc/ko/articles/115006302047" target="_blank" rel="noopener noreferrer" data-reactid="49">공개 검토 절차 및 기준</a></li>
    //             <li data-reactid="50"><a href="https://help.tumblbug.com/hc/ko/articles/115007487228" target="_blank" rel="noopener noreferrer" data-reactid="51">창작자 자격 요건</a></li>
    //         </ul>
    //     </div>
    //     <form autocomplete="on" data-reactid="52">
    //         <ul data-reactid="53">
    //             <li data-reactid="54">
    //                 <div className="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="55">
    //                     <input type="checkbox" id="2871e" required="" data-reactid="56" value='on'/><label for="2871e" data-reactid="57">새로운 아이디어를 실현하기 위한 프로젝트입니다.</label>
    //                 </div>
    //             </li>
    //             <li data-reactid="58">
    //                 <div className="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="59">
    //                     <input type="checkbox" id="ceec9" required="" data-reactid="60" /><label for="ceec9" data-reactid="61">이미 시판된 제품, 현금이나 지분 등 수익 제공, 선물 없는 단순 기부, 성인 인증이 필요한 콘텐츠 등 기준에 맞지 않는 선물을 제공하지 않습니다.</label>
    //                 </div>
    //             </li>
    //             <li data-reactid="62">
    //                 <div className="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="63">
    //                     <input type="checkbox" id="5f0fa" required="" data-reactid="64" /><label for="5f0fa" data-reactid="65">창작자의 신분증 혹은 사업자등록증, 국내 은행 계좌, 연락 가능한 본인 휴대폰 번호가 있습니다.</label>
    //                 </div>
    //             </li>
    //             <li data-reactid="66">
    //                 <div className="_13KHfN73YmQgsYHxXvuh_J _3bQlo02zZkYjUBehiAWUDX ProjectStartAgreements__ServiceAgreementCheckbox-sc-1vrd6a2-4 iQcbCy" data-reactid="67">
    //                     <input type="checkbox" id="679fd" required="" data-reactid="68" /><label for="679fd" data-reactid="69">창작자 대표자는 19세 이상 성인입니다. (미성년자 참여 방법은 자격 요건을 참고해 주세요)</label>
    //                 </div>
    //             </li>
    //         </ul>
    //         <ProjectLink id='summary' title='계속하기' />
    //     </form>
    // </div>