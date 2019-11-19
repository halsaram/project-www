import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Layout from './Layout'

@inject('web3', 'accounts', 'contract', 'campaign', 'coinbase', 'crowdfundProject', 'crowd_web3')
@observer
class Page extends Component {
    
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <Layout {...this.props} />
        )
    }
}

export default Page