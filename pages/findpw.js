import Layout from '../components/Layout'

import Findpw from '../components/FIndpw'

import './style.css'

const FindPwContent = <div>
    <Findpw />
</div>;

export default function findpwpage() {
  return <Layout children={FindPwContent} title='Findpw' />;
};