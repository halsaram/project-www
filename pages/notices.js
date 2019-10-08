import Layout from '../components/Layout'

import Notices from './main/Notices'

import './style.css'

const NoticesPageContent = <div>
    <Notices />
</div>;

export default function Noticespage() {
  return <Layout children={NoticesPageContent} title='Notices' />;
};