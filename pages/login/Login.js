/**************************************************************************************
 * 제목          : 로그인 메인
 * 소스파일 이름  : pages/login/Login.js
 * 파일설명		   : 로그인 메인화면페이지
 * 작성자		     : 최다올
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-07
 * 최종수정자	   : 최다올
 * 최종수정내용	  : 인덱스와 연결
**************************************************************************************/


import Link from 'next/link';

const Login = () => (
    <div>
		<div className="Membership__MembershipWrapper-o1o1he-0 irjBzn" data-reactid="40">
					<div className="Wrapper__MembershipBody-sc-140yq7-0 dgBlAy" data-reactid="41">
						<div data-reactid="42">
							<a className="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB"  data-reactid="43"><i class="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="44"></i>
							페이스북 아이디로 로그인
							
							</a><a className="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid" data-reactid="46"><svg class="naverIcon" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 18.31" data-reactid="47"><title data-reactid="48">naverIcon</title><path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" fill="#fff" data-reactid="49"></path></svg>
							
							네이버 아이디로 로그인
							
							</a>
						</div>
						<div className="Divider-sc-1wyk970-0 uEieK" data-reactid="51">
							<span data-reactid="52"><span data-reactid="53">또는</span></span>
						</div>
						<form className="SignIn__Form-sc-9xfg6a-2 grrCSr" autocomplete="on" data-reactid="54">
							<label className="SignIn__HiddenLabel-sc-9xfg6a-0 gqtUOr" for="login" data-reactid="55">이메일</label>
							<input type="email" class="Input-sc-1x48dls-0 iWoXIb" id="login" placeholder="이메일 주소 입력" aria-label="이메일" name="email" autocomplete="email" required="" value="" data-reactid="56"/>
							<label class="SignIn__HiddenLabel-sc-9xfg6a-0 gqtUOr" for="password" data-reactid="57">비밀번호</label>
							<input type="password" class="Input-sc-1x48dls-0 iWoXIb" id="password" aria-label="비밀번호" placeholder="비밀번호 입력" autocomplete="current-password" required="" autocapitalize="off" autocorrect="off" spellcheck="off" name="password" value="" data-reactid="58"/>
							<button class="Button-sc-1x93b2b-0 ijDFDl" type="submit" label="로그인하기"  data-reactid="59">로그인</button>
							<Link as='/join' href='/join?id=join'><a class="SignIn__StyledLink-sc-9xfg6a-1 bKTrQD" data-reactid="60"><span data-reactid="61">아직 계정이 없으신가요?</span>
							
							 할사람 가입하기
				   	
							</a></Link>
						</form>
						<div data-reactid="63">
							<Link as='log' href='/login?id=find&title=비밀번호찾기'><a data-reactid="64">혹시 비밀번호를 잊으셨나요?</a></Link>
						</div>
					</div>
				</div>
    </div>
);
  
export default Login;