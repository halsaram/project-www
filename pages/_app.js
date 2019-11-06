import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react'

import initializeStore from '../lib/mobx/stores';
import Web3Container from '../lib/web3/Web3Container'

class CustomApp extends App {
    static async getInitialProps(appContext) {
        const mobxStore = initializeStore();
        appContext.ctx.mobxStore = mobxStore;
        const appProps = await App.getInitialProps(appContext);
        return {
            ...appProps,
            initialMobxState: mobxStore,
        };
    }

    constructor(props) {
        super(props);
        const isServer = typeof window === 'undefined';
        this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Web3Container
                renderLoading={() => (
                    <div>Loading, please wait ...</div>
                    // <Provider store={this.state.store} accounts='' contract='' web3='' coinbase=''>
                    //     <Component {...pageProps} />
                    // </Provider>
                )}
                render={({ web3, accounts, contract, coinbase }) => (
                    <Provider {...this.mobxStore} accounts={accounts} contract={contract} web3={web3} coinbase={coinbase}>
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </Provider>
                )}
            />
        )
    }
}
export default CustomApp