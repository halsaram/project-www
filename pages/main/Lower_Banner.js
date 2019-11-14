/**************************************************************************************
 * 제목		      : 메인화면의 배너
 * 소스파일 이름	: Lower_Banner.js
 * 파일설명		   : 메인화면에서 보이는 배너
 * 작성자		   : 
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10~
 * 최종수정일자 	: 2019-10-31
 * 최종수정자	   : 정휘선
 * 최종수정내용	    : import react 추가
**************************************************************************************/
import React from 'react'
import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react'

const BannerLink = (props) => (
    <div>
        <Grid.Column textAlign="center">
        <Link as='/p' href={`/project?id=start&title=프로젝트 시작하기`}><a>
            <Image src="../../static/test/5.png" />
            </a>
            </Link>
            
        </Grid.Column>
    </div>
    // <Link as='/p' href={`/project?id=start&title=프로젝트 시작하기`}>
    //     <a href="https://tumblbug.com/start" data-reactid="513">
    //         <div className="ProjectStartBanner__ProjectStartBannerWrapper-i0c0cd-0 gOFdsx" data-reactid="514">
    //             <div className="ProjectStartBanner-i0c0cd-1 iNfKax" data-reactid="515">
    //                 <div className="ProjectStartBanner__BannerBackground-i0c0cd-2 elUVQa" data-reactid="516">
    //                 </div>
    //                 <h2 className="ProjectStartBanner__Title-i0c0cd-3 caJFok" data-reactid="517"><span data-reactid="518">마음 속 프로젝트 아이디어,&nbsp;</span><span data-reactid="519">텀블벅에서 현실로</span></h2>
    //                 <p className="ProjectStartBanner__Description-i0c0cd-4 BBLfj" data-reactid="520">
    //                     <span data-reactid="521">프로젝트를 위한 자금도 마련하고,&nbsp;</span><span data-reactid="522">든든한 후원자 네트워크도 확보하세요</span>
    //                 </p>
    //             </div>
    //         </div>
    //     </a>
    // </Link>
)

const Banner = () => (
    <div>
        <BannerLink />
    </div>
  );
  
  export default Banner;