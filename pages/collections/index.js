import Layout from '../../components/Layout'
import Creative from './creative'
import Brands from './brands'
import Campaigns from './campaigns'

const CollectionsPageContent = (props) =>
    <div>
        {props.url.query.id == 'creative' && <Creative />}
        {props.url.query.id == 'brands' && <Brands />}
        {props.url.query.id == 'campaigns' && <Campaigns />}
    </div>;

export default (props) => (
    <Layout title={props.url.query.title} >
        <JoinPageContent url={props.url} />
    </Layout>
)