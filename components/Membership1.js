const Base = () => (
    <div>
        <div class="Wrapper__MembershipBody-sc-140yq7-0 dgBlAy">
            <div style="display: flex; flex-direction: column;">
                <a class="SocialButton__SocialLink-sc-7k5r2h-0 hKfrnB" href="/auth/facebook?from_pledge=false&amp;origin=%2F">
                    <i class="_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF"></i><!-- react-text: 2058 -->페이스북 아이디로 로그인<!-- /react-text --></a>
                <a class="SocialButton__SocialLink-sc-7k5r2h-0 eOCUid" href="/auth/naver?from_pledge=false&amp;origin=%2F">
                    <svg class="naverIcon" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 18.31">
                        <title>naverIcon</title>
                        <path d="M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z" transform="translate(0 -0.84)" fill="#fff"></path>
                    </svg><!-- react-text: 2063 -->네이버 아이디로 로그인<!-- /react-text --></a>
            </div>
            <div class="Divider-sc-1wyk970-0 uEieK">
                <span>
                    <span>또는</span>
                </span>
            </div>
            <form class="SignIn__Form-sc-9xfg6a-2 grrCSr" autocomplete="on">
                <label class="SignIn__HiddenLabel-sc-9xfg6a-0 gqtUOr" for="login">이메일</label>
                <input type="email" class="Input-sc-1x48dls-0 iWoXIb" id="login" placeholder="이메일 주소 입력" aria-label="이메일" name="email" autocomplete="email" required="" value="">
                    <label class="SignIn__HiddenLabel-sc-9xfg6a-0 gqtUOr" for="password">비밀번호</label>
                    <input type="password" class="Input-sc-1x48dls-0 iWoXIb" id="password" aria-label="비밀번호" placeholder="비밀번호 입력" autocomplete="current-password" required="" autocapitalize="off" autocorrect="off" spellcheck="off" name="password" value="">
                        <button class="Button-sc-1x93b2b-0 ijDFDl" type="submit" label="로그인하기" style="margin: 20px 0px; height: 45px;">로그인</button>
                        <a class="SignIn__StyledLink-sc-9xfg6a-1 bKTrQD" href="/join?redirection=/">
                            <span style="color: rgb(117, 117, 117);">아직 계정이 없으신가요?</span>
                            <!-- react-text: 2075 -->
            텀블벅 가입하기<!-- /react-text --></a>
            </form>
                    <div style="text-align: center; margin-top: 40px;">
                        <a href="/forgot-password">혹시 비밀번호를 잊으셨나요?</a>
                    </div>
        </div>
    </div>
            );
