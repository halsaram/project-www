import React from 'react'
import { inject, observer } from 'mobx-react'
import Layout from './Layout'

@inject('store', 'web3', 'accounts', 'contract', 'coinbase')
@observer
class Page extends React.Component {
    
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Layout
                    {...this.props}
                    lastUpdate={this.props.store.lastUpdate}
                    light={this.props.store.light}
                />
            </div>
        )
    }
}

export default Page