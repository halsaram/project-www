import Privacy from '../pages/main/Privacy'
import Notices from '../pages/main/Notices'
import TermsOfUse from '../pages/main/TermsOfUse'
import Layout from './Layout'


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