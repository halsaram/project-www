import Layout from '../../components/Layout'
import Start from './Start'
import Agreements from './Agreements'
import Summary from './Summary'
// import Account from './Account'
// import Storytelling from './Storytelling'

const Content = (props) => (
  <div>
    {props.url.query.id == 'start' && <Start />}
    {props.url.query.id == 'agreements' && <Agreements />}
    {props.url.query.id == 'summary' && <Summary />}
    {/* {props.url.query.id == 'account' && <Account />} */}
    {/* {props.url.query.id == 'storytelling' && <Storytelling />} */}
  </div>
);

export default (props) => (
  <Layout title={props.url.query.title} >
    <Content url={props.url}/>
  </Layout>
)