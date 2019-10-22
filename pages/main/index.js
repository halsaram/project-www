import Privacy from './Privacy'
import Notices from './Notices'
import TermsOfUse from './TermsOfUse'
import Layout from '../../components/Layout'


const MainPageContent = (props) => (
   <div>
    {props.url.query.id == 'Privacy' && <Privacy />}
    {props.url.query.id == 'Notices' && <Notices />}
    {props.url.query.id == 'TermsOfUse' && <TermsOfUse />}
    
  </div>
);

export default (props) => (
  <Layout title={props.url.query.title} >
    <MainPageContent url={props.url}/>
  </Layout>
);