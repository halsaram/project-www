import Layout from '../components/Layout'

import Login from '../components/Login'

import './style.css'

const loginPageContent = <div>
    <Login />
</div>;

export default function Loginpage() {
  return <Layout children={loginPageContent} title='Login' />;
};