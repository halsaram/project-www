/**************************************************************************************
 * 제목          : 회원가입 페이지
 * 소스파일 이름  : pages/join/mailjoin.js
 * 파일설명		   : 회원가입 페이지
 * 작성자		     : 전새희
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-07
 * 최종수정일자 	: 2019-10-07
 * 최종수정자	   : 전새희
 * 최종수정내용	  : 이메일로 가입하기 화면
**************************************************************************************/
import Link from 'next/link';

const LoginLink = (props) => (
    <Link as='/log' href='/login?id=login'>
        <a href="/login">기존 계정으로 로그인하기</a>
    </Link>
)


const Mailjoin = () => (
    <div>
        <div>
            <a className="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB" href="https://tumblbug.com/auth/facebook?from_pledge=false&amp;origin=%2F">
                <i className="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF"></i>페이스북 아이디로 가입하기</a>
            <a className="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid" href="https://tumblbug.com/auth/naver?from_pledge=false&amp;origin=%2F">
                <svg className="naverIcon" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 18.31">
                    <title>naverIcon</title>
                    <path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" fill="#fff"></path>
                </svg>네이버 아이디로 가입하기</a>
        </div>
        <div className="Divider-sc-1wyk970-0 uEieK">
            <span>
                <span>또는</span>
            </span>
        </div>
        <form autocomplete="on">
            <div className="SignUp__InputDiv-k5h4n5-0 VpHEi">
                <label className="SignUp__InputLabel-k5h4n5-1 bpYHsq" for="user_fullname">이름</label>
                <input type="text" className="Input-sc-1x48dls-0 cbPtEV" id="user_fullname" name="nickname" autocomplete="username" placeholder="사용하실 이름을 입력해주세요" value="" required="" />
            </div>
            <div className="SignUp__InputDiv-k5h4n5-0 VpHEi">
                <label className="SignUp__InputLabel-k5h4n5-1 bpYHsq" for="user_login">이메일 주소</label>
                <input type="email" className="Input-sc-1x48dls-0 cbPtEV" id="user_login" name="email" placeholder="이메일 주소를 입력해주세요" autocomplete="email" value="" required="" />
                <input type="email" className="Input-sc-1x48dls-0 cbPtEV" id="user_login_confirmation" name="emailConfirm" autocomplete="email" required="" placeholder="이메일 주소를 확인합니다" value="" />
                <span className="SignUp__ErrorMessage-k5h4n5-3 gLiNzH"></span>
            </div>
            <div className="SignUp__InputDiv-k5h4n5-0 VpHEi">
                <label className="SignUp__InputLabel-k5h4n5-1 bpYHsq" for="user_password">비밀번호</label>
                <input type="password" className="Input-sc-1x48dls-0 cbPtEV" id="user_password" required="" name="password" placeholder="비밀번호를 입력해주세요" autocomplete="new-password" autocapitalize="off" autocorrect="off" spellcheck="off" value="" />
                <input type="password" className="Input-sc-1x48dls-0 cbPtEV" id="user_password_confirmation" required="" name="passwordConfirm" autocapitalize="off" autocorrect="off" autocomplete="new-password" spellcheck="off" placeholder="비밀번호를 확인합니다" value="" />
                <span className="SignUp__ErrorMessage-k5h4n5-3 gLiNzH"></span><br /><span className="SignUp__ErrorMessage-k5h4n5-3 gLiNzH"></span>
            </div>
            <button className="SignUp__SignUpButton-k5h4n5-2 hvvhkh Button-sc-1x93b2b-0 ijDFDl" label="다음">다음</button>
        </form>
        <div className="SignUp__LoginLinkWrapper-k5h4n5-4 hQGkMf">
            <p>이미 계정이 있으신가요?</p>
            <LoginLink />
        </div>
    </div>
);

export default Mailjoin;