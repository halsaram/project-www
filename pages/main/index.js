import React, { Component } from 'react'
import Page from '../../components/Page'

import Privacy from './Privacy'
import Notices from './Notices'
import TermsOfUse from './TermsOfUse'
import Layout from '../../components/Layout'


const Contents = (props) => (
   <div>
    {props.id == 'Privacy' && <Privacy />}
    {props.id == 'Notices' && <Notices />}
    {props.id == 'TermsOfUse' && <TermsOfUse />}
    
  </div>
)

export default class extends Component {
  static getInitialProps({ query: { id, title } }) {
    return { id, title }
  }


    render() {
        return (
            <Page title={this.props.title} >
                <Contents {...this.props} />
            </Page>
        )
    }
}
