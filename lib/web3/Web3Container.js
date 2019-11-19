import React from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
import contractDefinition from '../../truffle/v4/build/contracts/UserCrud.json'
import crowd_json from '../../truffle/v5/build/contracts/Crowdfunding.json'
import crowdfundProject from '../../truffle/v5/build/contracts/Project.json'


'use strict'
export default class Web3Container extends React.Component {
    state = { web3: null, crowd_web3:null, accounts: null, contract: null, campaign: null, coinbase: null, crowdfundProject: crowdfundProject };

    async componentDidMount() {
        try {
            const web3 = await getWeb3('https://71f9ffc7.ngrok.io')
            const crowd_web3 = await getWeb3('http://114.108.177.193:25000')
            const accounts = await web3.eth.getAccounts()
            const contract = await getContract(web3, contractDefinition)
            const campaign = await getContract(crowd_web3, crowd_json)
            const coinbase = await web3.eth.getCoinbase()
            console.log('Halsaram Coinbase ===> ', coinbase);
            
        
            this.setState({ web3, crowd_web3, accounts, contract, campaign, coinbase })
        } catch (error) {
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`
            )
            console.log(error)
        }
    }

    render() {
        const { web3, accounts } = this.state
        return web3 && accounts
            ? this.props.render({ ...this.state })
            : this.props.renderLoading()
    }
}