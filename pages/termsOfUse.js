import Layout from '../components/Layout'

import TermsOfUse from './main/TermsOfUse'

import './style.css'

const TermsOfUsePageContent = <div>
    <TermsOfUse />
</div>;

export default function TermsOfUsepage() {
  return <Layout children={TermsOfUsePageContent} title='TermsOfUse' />;
};