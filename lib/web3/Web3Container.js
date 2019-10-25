import React from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
import contractDefinition from '/home/admin/git/project-www/build/contracts/UserCrud.json'

'use strict'
export default class Web3Container extends React.Component {
    state = { web3: null, accounts: null, contract: null };

    async componentDidMount() {
        try {
            const web3 = await getWeb3()
            console.log(web3.currentProvider)
            const accounts = await web3.eth.getAccounts()
            console.log(accounts)
            const contract = await getContract(web3, contractDefinition)
            this.setState({ web3, accounts, contract })
        } catch (error) {
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`
            )
            console.log(error)
        }
    }

    render() {
        const { web3, accounts, contract } = this.state
        return web3 && accounts
            ? this.props.render({ web3, accounts, contract })
            : this.props.renderLoading()
    }
}