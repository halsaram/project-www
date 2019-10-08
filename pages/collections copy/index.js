import Layout from '../../components/Layout'
import Join from './Join'
import MailJoin from './mailjoin'

const JoinPageContent = (props) =>
    <div>
        {props.url.query.id == 'join' && <Join />}
        {props.url.query.id == 'mailjoin' && <MailJoin />}
    </div>;

export default (props) => (
    <Layout title={props.url.query.title} >
        <JoinPageContent url={props.url} />
    </Layout>
)