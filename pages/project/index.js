import { Fragment } from 'react';

import Layout from '../../components/Layout'
import Start from './Start'

const indexPageContent = <div>
    <Start />
</div>;

export default function Index() {
  return <Fragment>
    <Layout children={indexPageContent} title='Start'></Layout>
  </Fragment>;
};