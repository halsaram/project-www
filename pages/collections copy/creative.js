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