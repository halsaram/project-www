import React from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
import contractDefinition from '/home/admin/git/project-www/build/contracts/UserCrud.json'

export default class Web3Container extends React.Component {
    state = { web3: null, accounts: null, contract: null, coinbase: null };

    async componentDidMount() {
        try {
            const web3 = await getWeb3()
            console.log(web3.currentProvider)
            const accounts = await web3.eth.getAccounts()
            console.log('accounts ==> ',accounts)
            const contract = await getContract(web3, contractDefinition)
            console.log('contract ==> ',contract)
            const coinbase = await web3.eth.getCoinbase()
            console.log('coinbase ==> ', coinbase);
            
            
            this.setState({ web3, accounts, contract, coinbase })
        } catch (error) {
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`
            )
            console.log(error)
        }
    }

    render() {
        const { web3, accounts, contract, coinbase } = this.state
        return web3 && accounts
            ? this.props.render({ web3, accounts, contract, coinbase })
            : this.props.renderLoading()
    }
}