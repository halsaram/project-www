/**************************************************************************************
 * 제목          : 프로젝트 상세 페이지(Community)
 * 소스파일 이름  : pages/deteile/Community.js
 * 파일설명		   : 프로젝트 상세 커뮤니티 공간(댓글달기 기능)
 * 작성자		   : 이은미
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-11
 * 최종수정일자 	:
 * 최종수정자	   :
 * 최종수정내용	  :
**************************************************************************************/

import React from 'react'
import Link from 'next/link';
import React from 'react'

const Community = () => (
// 	<Link as='/d' href={`/community?id=${props.id}&title=펀딩가이드`}>
// 		<button className="sc-1x93b2b-0-Button-kDSBcD jxJcyR" data-reactid="57">{props.title}</button>
// 	</Link>

			<div>
				<div className="ProjectIntroduction__ProjectIntroductionBackground-sc-1o2ojgb-0 gsZkXT">
					<div className="Container-gci8y7-0 MskhC">
						<div className="ProjectIntroduction__ProjectIntroductionWrapper-sc-1o2ojgb-1 bnFLKn">
							<div className="ProjectIntroduction__ProjectOutline-sc-1o2ojgb-2 jbdzfG">
								<div className="ProjectIntroduction__ProjectOutlineInner-sc-1o2ojgb-3 fFIyMZ">
									<a href="https://tumblbug.com/discover?category=product-design"><span className="ProjectIntroduction__ProjectCategory-sc-1o2ojgb-4 fNvuiJ">제품디자인</span></a>
									<h1 className="ProjectIntroduction__ProjectTitle-sc-1o2ojgb-5 cWQlcy">말로 된 타로카드, 말로(Malrot) - 오리지널 에디션</h1>
									<div className="ProjectIntroduction__Creators-sc-1o2ojgb-6 fsPnxP">
										<span className="ProfileImg-sc-1vio56c-0 haDBpL"></span><a className="ProjectIntroduction__CreatorName-sc-1o2ojgb-7 jDbkqK" href="https://tumblbug.com/u/bareunenter/projects" target="_blank" rel="noopener noreferrer">바른 엔터테인먼트</a>
									</div>
								</div>
							</div>
							<div className="ProjectIntroduction__ProjectIntroductionMainColumn-sc-1o2ojgb-8 ZOwbJ">
								<figure className="ProjectIntroduction__ProjectCoverImageFigure-sc-1o2ojgb-9 fUBtAC"><img className="ProjectIntroduction__ProjectCoverImage-sc-1o2ojgb-11 hGsHpc" src="./펀딩안내_files/888816b9-5f9b-4a67-904d-91256c71b632.jpg" alt="프로젝트 커버 이미지" /></figure>
							</div>
							<aside className="ProjectIntroduction__ProjectIntroductionSubColumn-sc-1o2ojgb-12 fHdIrJ">
							<div className="ProjectIntroduction__FundingStatus-sc-1o2ojgb-13 gGVEjs">
								<div className="ProjectIntroduction__Metric-sc-1o2ojgb-14 cZUBTY">
									<div className="ProjectIntroduction__StatusTitle-sc-1o2ojgb-15 hrvSQV">
										모인금액
									</div>
									<div className="ProjectIntroduction__StatusValue-sc-1o2ojgb-16 lgJcVA">
								    	4,494,000
								    <span className="ProjectIntroduction__Small-sc-1o2ojgb-18 lnSbIU">원</span><span className="ProjectIntroduction__FundingRate-sc-1o2ojgb-17 cNDicH">
								        224
									    %
								    </span>
									</div>
								</div>
								<div className="ProjectIntroduction__Metric-sc-1o2ojgb-14 cZUBTY">
									<div className="ProjectIntroduction__StatusTitle-sc-1o2ojgb-15 hrvSQV">
										남은시간
									</div>
									<div className="ProjectIntroduction__StatusValue-sc-1o2ojgb-16 lgJcVA">
								        58
								    <span className="ProjectIntroduction__Small-sc-1o2ojgb-18 lnSbIU">일</span>
									</div>
								</div>
								<div className="ProjectIntroduction__Metric-sc-1o2ojgb-14 cZUBTY">
									<div className="ProjectIntroduction__StatusTitle-sc-1o2ojgb-15 hrvSQV">
										후원자
									</div>
									<div className="ProjectIntroduction__StatusValue-sc-1o2ojgb-16 lgJcVA">
								        179
									<span className="ProjectIntroduction__Small-sc-1o2ojgb-18 lnSbIU">명</span>
									</div>
								</div>
							</div>
							<div className="FundingInformation-cjd67l-0 lZmZZ">
								<div className="FundingInformation__FundingInformationInner-cjd67l-1 ccBEhl">
									<a className="move-to-helpcenter" target="_blank" href="https://help.tumblbug.com/hc/ko/categories/115001047348--%ED%9B%84%EC%9B%90%EC%9E%90-%EC%84%BC%ED%84%B0" title="후원자 센터 바로가기">후원자 센터 이동</a>
									<div>
										펀딩 진행중
									</div>
									<span>
								        목표 금액인 
								        2,000,000
							            원이 모여야만 결제됩니다.
								    <br />
								        결제는 
								        2019년 12월 9일
						                에 다함께 진행됩니다.
							        </span>
								</div>
							</div>
							<div className="ProjectIntroduction__ProjectButtons-sc-1o2ojgb-19 fHOYOE">
								<div className="ProjectIntroduction__ProjectButtonsInner-sc-1o2ojgb-20 frPGIq">
									<div className="ProjectIntroduction__PrimaryButton-sc-1o2ojgb-21 lcgtza">
										<button className="Button-sc-1x93b2b-0 KCBYB">프로젝트 밀어주기</button>
									</div>
									<div className="ProjectIntroduction__SecondaryButton-sc-1o2ojgb-22 cbkMWz">
										<button className="Button-sc-1x93b2b-0 fVHsGg"><i className="_1QY7TzdLHKX3-BKPDNNYKF"></i><svg width="20px" height="22px" viewbox="0 0 20 22" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>ic_share_B</title><g id="PC" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Asset" transform="translate(-152.000000, -414.000000)"><g id="btn_share-copy-2" transform="translate(131.000000, 399.000000)"><g id="ic_share_B" transform="translate(19.000000, 14.000000)"><g id="ic_share"><rect id="Rectangle-Copy-9" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect><g id="share-2" transform="translate(3.000000, 2.000000)" stroke="#5C5C5C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle id="Oval" cx="15" cy="3" r="3"></circle><circle id="Oval" cx="3" cy="10" r="3"></circle><circle id="Oval" cx="15" cy="17" r="3"></circle><path d="M5.59,11.51 L12.42,15.49" id="Path"></path><path d="M12.41,4.51 L5.59,8.49" id="Path"></path></g></g></g></g></g></g></svg></button>
									</div>
								</div>
							</div>
							</aside>
						</div>
					</div>
				</div>
				<div id="contentsNavigation">
					<nav className="ContentsNavigation__ProjectContentsNavigation-mwsx7i-1 jABjId">
					<div className="ContentsNavigation__ProjectContentsNavigationInner-mwsx7i-2 OvVKa">
						<div className="ContentsNavigation__NavLeft-mwsx7i-3 buZwam">
                        <Link as='/d' href='/detail?id=story&title=스토리'>
							<a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">스토리</a>
                            </Link>
						<Link as='/d' href='/detail?id=Community&title=커뮤니티'>
                                <a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">커뮤니티</a>
                            </Link>
						<Link as='/d' href='/detail?id=FundingG</Link>uide&title=펀딩안내'>
							<a className="ContentsNavigation__NavItem-mwsx7i-0 cjInbB">펀딩 안내</a>
                            </Link>
						</div>
					</div>
					</nav>
				</div>
				<div className="ProjectPage__ProjectContentsBackground-f3cisk-0 bIXbv">
					<div className="Container-gci8y7-0 MskhC">
						<div className="ProjectPage__ProjectContents-f3cisk-1 dqKUJc">
							<div className="ProjectPage__ProjectContentsMainColumn-f3cisk-2 hzJfoW">
								<div className="ProjectPage__MainColumnInner-f3cisk-4 kGPPtA">
									<div>
										<div className="Card-sc-1sgtmvk-0 gBrdMC">
											<div className="PolicyCard__PolicyCardInner-sc-1wv4nt7-0 cJHfnu">
												<div className="PolicyCard__PolicyCardLabel-sc-1wv4nt7-1 inGkRv">
													이 프로젝트의 환불 및 교환 정책
												</div>
												<div className="PolicyCard__PolicyContents-sc-1wv4nt7-2 cZReci">
													<p className="PolicyCard__RefundExchangePolicyText-sc-1wv4nt7-4 kgMZP">
														- 프로젝트 마감일 후에는 즉시 제작 및 실행에 착수하는 프로젝트 특성상 단순 변심에 의한 후원금 환불이 불가능합니다. - 예상 전달일로부터 30일 이상 선물 전달이 이뤄지지 않을 경우, 환불을 원하시는 분들께는 수수료를 포함한 후원금을 환불해 드립니다. (플랫폼 수수료: 모금액의 5%, 부가세 별도 / 결제 수수료: 결제 성공액의 3%, 부가세 별도 ) - 선물 전달을 위한 배송지는 2019년 12월 02일에 일괄 취합할 예정입니다. - 이후 배송지 변경이나 서베이 답변 변경을 원하실 때에는 '창작자에게 문의하기'로 개별 문의하셔야 합니다. - 파손 또는 불량품 수령 시 7일 이내로 교환이 가능합니다. - 교환 및 AS 문의는 '창작자에게 문의하기'로 신청해 주세요. - 파손이나 불량품 교환시 발생하는 비용은 창작자가 부담합니다. 선물 확인을 위한 포장 훼손 외에 아이템의 가치가 훼손된 경우에는 교환 및 환불이 불가합니다. - 후원자가 배송지를 잘못 기재하거나 창작자에게 사전 고지 없이 배송지를 수정하여 배송사고가 발생할 경우 창작자는 최대 1번까지 재발송 해드립니다. 배송비 부담은 후원자에게 있습니다.
													</p>
												</div>
											</div>
										</div>
										<div className="PolicyCard__CardWrapper-sc-1wv4nt7-3 eZqIa">
											<div className="Card-sc-1sgtmvk-0 gBrdMC">
												<div className="RewardNoticeInfo__CardInner-pgi65e-0 gRekFj">
													<div className="RewardNoticeInfo__CardLabel-pgi65e-1 hFSZNB">
														상품정보 고시
													</div>
													<div className="RewardNoticeInfo__Contents-pgi65e-2 iFlbFU">
														<div>
															<h4>기타 재화</h4>
															<dl>
																<dt>품명 및 모델명</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">말로카드 오리지널 에디션</dd>
															</dl>
															<dl>
																<dt>법에 의한 인증・허가 등을 받았음을 확인할 수 있는 경우 그에 대한 사항</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">해당사항 없음</dd>
															</dl>
															<dl>
																<dt>제조국 또는 원산지</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">중국</dd>
															</dl>
															<dl>
																<dt>제조자(수입자)</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">바른컴퍼니</dd>
															</dl>
														</div>
														<div>
															<h4>기타 재화</h4>
															<dl>
																<dt>품명 및 모델명</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">말로카드 배지</dd>
															</dl>
															<dl>
																<dt>법에 의한 인증・허가 등을 받았음을 확인할 수 있는 경우 그에 대한 사항</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">해당사항 없음</dd>
															</dl>
															<dl>
																<dt>제조국 또는 원산지</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">대한민국</dd>
															</dl>
															<dl>
																<dt>제조자(수입자)</dt>
																<dd className="RewardNoticeInfo__DataValue-pgi65e-3 kiZFJy">세인메탈</dd>
															</dl>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="PolicyCard__CardWrapper-sc-1wv4nt7-3 eZqIa">
											<div className="Card-sc-1sgtmvk-0 gBrdMC">
												<div className="CreatorContactCard__CreatorContactCardInner-d74dzt-0 bIZJBU">
													<div className="CreatorContactCard__CreatorContactContents-d74dzt-1 wDwZe">
														<div className="CreatorContactCard__CreatorContactCardLabel-d74dzt-2 brUPuY">
															프로젝트에 대해 문의사항이 있으신가요?
														</div>
														<div className="CreatorContactCard__CreatorContactButton-d74dzt-3 cxbMTb">
															<button className="Button-sc-1x93b2b-0 jQspcv"><i className="_3YmAkQhwzI7o-uUWz_8Mp4 _1QY7TzdLHKX3-BKPDNNYKF"></i>
												
															창작자에게 문의하기
															
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="ProjectPage__ProjectContentsSubColumn-f3cisk-3 DiwhK">
								<div className="ProjectPage__SubColumnInner-f3cisk-5 eAojiy">
									<div className="Card-sc-1sgtmvk-0 gBrdMC">
										<div className="CreatorCard__CreatorCardInner-sc-1ifohey-0 iubrbI">
											<div className="CreatorCard__CreatorCardLabel-sc-1ifohey-1 erXxPv">
												창작자 소개
											</div>
											<div className="CreatorCard__CreatorProfile-sc-1ifohey-2 buiMEG">
												<span className="ProfileImg-sc-1vio56c-0 hPSMtC"></span><a href="https://tumblbug.com/u/bareunenter/projects"><span className="CreatorCard__CreatorName-sc-1ifohey-3 ksslMx">바른 엔터테인먼트</span></a>
											</div>
											<div className="CreatorCard__CreatorBiography-sc-1ifohey-4 kTXqqU">
												항상 새롭고 재밌는 것을 찾아 여행하는 탐험가들의 회사
											</div>
											<div className="Divider-sc-17hnup0-0 cRAxcq">
											</div>
											<div className="CreatorCard__CreatorStats-sc-1ifohey-5 dhVdtT">
												<div>
										            마지막 로그인&nbsp;&nbsp;
												    <b>9시간 전</b>
												</div>
									                진행한 프로젝트&nbsp;&nbsp;
												    <b>8</b>
									
												&nbsp;&nbsp;&nbsp;&nbsp; 밀어준 프로젝트&nbsp;&nbsp;
												
												<b>1</b>
											</div>
											<div className="CreatorCard__CreatorContactButton-sc-1ifohey-6 jpHksr">
												<button className="Button-sc-1x93b2b-0 jQspcv"><i className="_3YmAkQhwzI7o-uUWz_8Mp4 _1QY7TzdLHKX3-BKPDNNYKF"></i>
								                	창작자에게 문의하기
											    </button>
											</div>
										</div>
									</div>
									<div className="Rewards-c484ad-0 flLtKW">
										<div className="Rewards__RewardsLabel-c484ad-1 eUKlkT">
								        	선택할 수 있는 
										<b>4</b>
						                    개의 선물이 있습니다
										</div>
										<div className="RewardCard__RewardCardWrapper-sc-1u66tc0-0 dHxsUr">
											<div className="Card-sc-1sgtmvk-0 gBrdMC">
												<div className="RewardCard__RewardCardInner-sc-1u66tc0-1 cUrXrg">
													<div className="RewardCard__RewardHeader-sc-1u66tc0-2 iynKOC">
														<span className="RewardCard__PledgeAmount-sc-1u66tc0-3 MLabx"><i className="-o8oGI_QAOKsVIJOUOUmV _1QY7TzdLHKX3-BKPDNNYKF"></i>
							                                50
						                                    명이 선택
													</span><span className="RewardCard__RewardQuantityLimit-sc-1u66tc0-4 mYUqu"><span className="RewardCard__SoldoutLabel-sc-1u66tc0-6 bOOXjF">선착순 마감</span></span>
													</div>
													<div className="RewardCard__RewardContents-sc-1u66tc0-7 jSudED">
														<div className="RewardCard__RewardMinimumPledgeAmount-sc-1u66tc0-8 kwNvmv">
											                21,000
											                원 +
												        </div>
														<div className="RewardCard__RewardDescription-sc-1u66tc0-9 iwlqIk">
															얼리버드, 배송비 포함
														</div>
													</div>
													<div className="RewardCard__Items-sc-1u66tc0-10 hOUlxo">
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
												            말로 오리지널
											            &nbsp;
												    	<span>( x 1 )</span></li>
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
											                파우치
											            &nbsp;
														
														<span>( x 1 )</span></li>
													</div>
													<div className="RewardCard__DeliveryDate-sc-1u66tc0-12 eshybT">
														<span>
											                예상 전달일 &nbsp;
													    <b>2020년 1월 14일</b></span>
													</div>
													<div className="Divider-sc-17hnup0-0 cRAxcq">
													</div>
													<button className="Button-sc-1x93b2b-0 fJuasH" disabled="">선물 선택하고 밀어주기</button>
												</div>
											</div>
										</div>
										<div className="RewardCard__RewardCardWrapper-sc-1u66tc0-0 dHxsUr">
											<div className="Card-sc-1sgtmvk-0 gBrdMC">
												<div className="RewardCard__RewardCardInner-sc-1u66tc0-1 cUrXrg">
													<div className="RewardCard__RewardHeader-sc-1u66tc0-2 iynKOC">
														<span className="RewardCard__PledgeAmount-sc-1u66tc0-3 MLabx"><i className="-o8oGI_QAOKsVIJOUOUmV _1QY7TzdLHKX3-BKPDNNYKF"></i>
										                    50
											                명이 선택
													</span><span className="RewardCard__RewardQuantityLimit-sc-1u66tc0-4 mYUqu"><span className="RewardCard__SoldoutLabel-sc-1u66tc0-6 bOOXjF">선착순 마감</span></span>
													</div>
													<div className="RewardCard__RewardContents-sc-1u66tc0-7 jSudED">
														<div className="RewardCard__RewardMinimumPledgeAmount-sc-1u66tc0-8 kwNvmv">
											                26,000
												            원 +
													        </div>
														<div className="RewardCard__RewardDescription-sc-1u66tc0-9 iwlqIk">
															얼리버드, 배송비 포함
														</div>
													</div>
													<div className="RewardCard__Items-sc-1u66tc0-10 hOUlxo">
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
										                    말로 오리지널
											                &nbsp;
													    <span>( x 1 )</span></li>
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
												            파우치
											
														&nbsp;
													    <span>( x 1 )</span></li>
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
											                말로 배지
											
														&nbsp;
														
														<span>( x 1 )</span></li>
													</div>
													<div className="RewardCard__DeliveryDate-sc-1u66tc0-12 eshybT">
														<span>
													
														예상 전달일 &nbsp;
														
														<b>2020년 1월 14일</b></span>
													</div>
													<div className="Divider-sc-17hnup0-0 cRAxcq">
													</div>
													<button className="Button-sc-1x93b2b-0 fJuasH" disabled="">선물 선택하고 밀어주기</button>
												</div>
											</div>
										</div>
										<div className="RewardCard__RewardCardWrapper-sc-1u66tc0-0 dHxsUr">
											<div className="Card-sc-1sgtmvk-0 dEGWGh">
												<div className="RewardCard__RewardCardInner-sc-1u66tc0-1 cUrXrg">
													<div className="RewardCard__RewardHeader-sc-1u66tc0-2 iynKOC">
														<span className="RewardCard__PledgeAmount-sc-1u66tc0-3 MLabx"><i className="-o8oGI_QAOKsVIJOUOUmV _1QY7TzdLHKX3-BKPDNNYKF"></i>
												
														61
											
														명이 선택
														
														</span>
													</div>
													<div className="RewardCard__RewardContents-sc-1u66tc0-7 jSudED">
														<div className="RewardCard__RewardMinimumPledgeAmount-sc-1u66tc0-8 kwNvmv">
												
															26,000
													
															원 +
															
														</div>
														<div className="RewardCard__RewardDescription-sc-1u66tc0-9 iwlqIk">
															배송비 포함
														</div>
													</div>
													<div className="RewardCard__Items-sc-1u66tc0-10 hOUlxo">
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
											
														말로 오리지널
									
														&nbsp;
														
														<span>( x 1 )</span></li>
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
										
														파우치
						
														&nbsp;
														
														<span>( x 1 )</span></li>
													</div>
													<div className="RewardCard__DeliveryDate-sc-1u66tc0-12 eshybT">
														<span>
									
														예상 전달일 &nbsp;
														
														<b>2020년 1월 14일</b></span>
													</div>
													<div className="Divider-sc-17hnup0-0 cRAxcq">
													</div>
													<button className="Button-sc-1x93b2b-0 jQspcv">선물 선택하고 밀어주기</button>
												</div>
											</div>
										</div>
										<div className="RewardCard__RewardCardWrapper-sc-1u66tc0-0 dHxsUr">
											<div className="Card-sc-1sgtmvk-0 dEGWGh">
												<div className="RewardCard__RewardCardInner-sc-1u66tc0-1 cUrXrg">
													<div className="RewardCard__RewardHeader-sc-1u66tc0-2 iynKOC">
														<span className="RewardCard__PledgeAmount-sc-1u66tc0-3 MLabx"><i className="-o8oGI_QAOKsVIJOUOUmV _1QY7TzdLHKX3-BKPDNNYKF"></i>
								
														18
								
														명이 선택
														
														</span>
													</div>
													<div className="RewardCard__RewardContents-sc-1u66tc0-7 jSudED">
														<div className="RewardCard__RewardMinimumPledgeAmount-sc-1u66tc0-8 kwNvmv">
											
															31,000
												
															원 +
															
														</div>
														<div className="RewardCard__RewardDescription-sc-1u66tc0-9 iwlqIk">
															배송비 포함
														</div>
													</div>
													<div className="RewardCard__Items-sc-1u66tc0-10 hOUlxo">
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
											
														말로 오리지널
									
														&nbsp;
														
														<span>( x 1 )</span></li>
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
												
														파우치
									
														&nbsp;
														
														<span>( x 1 )</span></li>
														<li className="RewardCard__ItemList-sc-1u66tc0-11 jkPMDd">
													
														말로 배지
												
														&nbsp;
														
														<span>( x 1 )</span></li>
													</div>
													<div className="RewardCard__DeliveryDate-sc-1u66tc0-12 eshybT">
														<span>
												
														예상 전달일 &nbsp;
														
														<b>2020년 1월 14일</b></span>
													</div>
													<div className="Divider-sc-17hnup0-0 cRAxcq">
													</div>
													<button className="Button-sc-1x93b2b-0 jQspcv">선물 선택하고 밀어주기</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
);

export default Community;