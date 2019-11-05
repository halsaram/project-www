import React from 'react'
import { inject, observer } from 'mobx-react'
import Layout from './Layout'

@inject('store', 'web3', 'accounts', 'contract', 'coinbase', 'url')
@observer
class Page extends React.Component {
    componentDidMount() {
        this.props.store.start()
    }

    componentWillUnmount() {
        this.props.store.stop()
    }

    render() {
        console.log(this.props);
        
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