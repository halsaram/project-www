import React from 'react'
import { inject, observer } from 'mobx-react'
import Layout from './Layout'

@inject( 'web3', 'accounts', 'contract', 'coinbase')
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
                />
            </div>
        )
    }
}

export default Page