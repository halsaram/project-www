/**************************************************************************************
 * 제목          : collections
 * 소스파일 이름  : pages/collections/index.js
 * 파일설명		   : 모든 collections 페이지를 연결시킨다
 * 작성자		     : 전새희
 * 버전		      : 1.0.0
 * 생성일자		   : 2019-10-11
 * 최종수정일자 	: 2019-10-11
 * 최종수정자	   : 전새희
 * 최종수정내용	  : collections 페이지 연결
**************************************************************************************/

import Layout from '../../components/Layout'
import Creative from './creative'
import Brand from './brands'
import Campaign from './campaigns'

const CollectionPage = (props) =>
    <div>
        {props.url.query.id == 'creative' && <Creative />}
        {props.url.query.id == 'brand' && <Brands />}
        {props.url.query.id == 'campaign' && <Campaigns />}
    </div>;

export default (props) => (
    <Layout title={props.url.query.title} >
        <CollectionPageContent url={props.url} />
    </Layout>
)