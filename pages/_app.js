import App from 'next/app'
import { fetchInitialStoreState, Store } from '../store'
import { Provider } from 'mobx-react'

import Web3Container from '../lib/web3/Web3Container'

class MyMobxApp extends App {
    state = {
        store: new Store(),
    }

    // Fetching serialized(JSON) store state
    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext)
        const initialStoreState = await fetchInitialStoreState()

        return {
            ...appProps,
            initialStoreState,
        }
    }

    // Hydrate serialized state to store
    static getDerivedStateFromProps(props, state) {
        state.store.hydrate(props.initialStoreState)
        return state
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Web3Container
                renderLoading={() => <div>Loading Dapp Page...</div>}
                render={({ web3, accounts, contract, coinbase }) => (
                    <Provider store={this.state.store} accounts={accounts} contract={contract} web3={web3} coinbase={coinbase}>
                        <Component {...pageProps} />
                    </Provider>
                )}
            />
        )
    }
}
export default MyMobxApp