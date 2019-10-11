/**************************************************************************************
 * 제목          : 회원가입 페이지
 * 소스파일 이름  : pages/join/join.js
 * 파일설명		   : 회원가입 페이지
 * 작성자		     : 전새희
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-02
 * 최종수정일자 	: 2019-10-07
 * 최종수정자	   : 전새희
 * 최종수정내용	  : 인덱스와 연결
**************************************************************************************/

import Link from 'next/link';

const MailLink = (props) => (
    <Link as='/join' href='/join?id=mailjoin'>
        <button className="Button-sc-1x93b2b-0 jQspcv">이메일로 가입하기</button>
    </Link>
)

const LoginLink = (props) => (
    <Link as='/log' href='/login?id=login'>
            <a href="/login">기존 계정으로 로그인하기</a>
    </Link>
)


const Join = () => (
    <div>
        <div className="Wrapper__MembershipBody-sc-140yq7-0 dgBlAy">
            <div>
                <a className="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB" href="/auth/facebook?from_pledge=false&amp;origin=%2F">
                    <i className="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF"></i>페이스북 아이디로 가입하기</a>
                <a className="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid" href="/auth/naver?from_pledge=false&amp;origin=%2F">
                    <svg className="naverIcon" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18.31">
                        <title>naverIcon</title>
                        <path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" fill="#fff"></path>
                    </svg>네이버 아이디로 가입하기</a>
            </div>
            <div className="Divider-sc-1wyk970-0 uEieK">
                <span>
                    <span>또는</span>
                </span>
            </div>
            <div>
                <MailLink />
            </div>
            <div className="SignUp__LoginLinkWrapper-k5h4n5-4 hQGkMf">
                <p>이미 계정이 있으신가요?</p>
                <LoginLink />
            </div>
        </div>
    </div>
);

export default Join;












// import Link from 'next/link';

// const MailLink = (props) => (
//     <Link as='/join' href='/join?id=mailjoin'>
//         <button className="Button-sc-1x93b2b-0 jQspcv" data-reactid="55">이메일로 가입하기</button>
//     </Link>
// )

// const LoginLink = (props) => (
//     <Link as='/log' href='/login?id=login'>
//         <a href="/login">기존 계정으로 로그인하기</a>
//     </Link>
// )


// const Join = () => (
//     <div>
//         <div className="Membership__MembershipWrapper-o1o1he-0 irjBzn" data-reactid="40">
//             <div className="Wrapper__MembershipBody-sc-140yq7-0 dgBlAy" data-reactid="41">
//                 <div  data-reactid="42">
//                     <a className="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB" data-reactid="43">
//                         <i className="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF" data-reactid="44">
//                             </i>페이스북 아이디로 가입하기</a>
//                     <a className="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid"  data-reactid="46">
//                         <svg className="naverIcon" width="1em" height="1em" 
//                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18.31" data-reactid="47">
//                             <title data-reactid="48">naverIcon</title>
//                             <path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 
//                             0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" 
//                             fill="#fff" data-reactid="49"></path>
//                         </svg>네이버 아이디로 가입하기</a>
//                 </div>
//                 <div className="Divider-sc-1wyk970-0 uEieK" data-reactid="51">
//                     <span data-reactid="52">
//                         <span data-reactid="53">또는</span>
//                     </span>
//                 </div>
//                 <div data-reactid="54">
//                     <MailLink />
//                 </div>
//                 <div className="SignUp__LoginLinkWrapper-k5h4n5-4 hQGkMf" data-reactid="56">
//                     <p  data-reactid="57">이미 계정이 있으신가요?</p>
//                     <LoginLink />
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// export default Join;