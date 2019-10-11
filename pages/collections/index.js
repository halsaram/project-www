import Layout from '../../components/Layout'
import Creative from './creative'
import Brand from './brands'
import Campaign from './campaigns'

const CollectionPageContent = (props) =>
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