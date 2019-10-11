import Layout from '../../components/Layout'
import Login from './Login'
import Find from './find'


const LoginPageContent = (props) => (
   <div>
    {props.url.query.id == 'login' && <Login />}
    {props.url.query.id == 'find' && <Find />}
  </div>
);

export default (props) => (
  <Layout title={props.url.query.title} >
    <LoginPageContent url={props.url}/>
  </Layout>
);