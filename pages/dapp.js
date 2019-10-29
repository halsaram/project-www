import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/web3/Web3Container'

class Dapp extends React.Component {
  state = {
    balance: undefined,
    ethBalance: undefined,
    myaddr: undefined
  };

  // storeValue = async () => {
  //   const { accounts, contract } = this.props
  //   await contract.methods.set(5).send({ from: myaddr })
  //   alert('Stored 5 into account')
  // };

  // getValue = async () => {
  //   const { accounts, contract, myaddr } = this.props
  //   const response = await contract.methods.get().call({ from: myaddr })
  //   this.setState({ balance: response })
  // };

  // getEthBalance = async () => {
  //   const { web3, accounts, myaddr } = this.props
  //   const balanceInWei = await web3.eth.getBalance(myaddr)
  //   this.setState({ ethBalance: balanceInWei / 1e18 })
  // };

  isNewAccount = async () => {
    const { web3 } = this.props
    await web3.eth.personal.newAccount('!@superpassword')
      .then((result) => {
        console.log(result)
        this.setState({ myaddr: result })
      });
  };

  insertUser = async () => {
    const { web3, contract, coinbase } = this.props
    const { myaddr } = this.state
    
    try {
      //var inst = contract;
      // await web3.eth.personal.unlockAccount(myaddr,'!@superpassword')
      //   .then(console.log('unlockAccount ==> Ture'))
      const user = await contract.methods.insertUser(myaddr, "b@a.com", 10, 1000).send({ from: coinbase, gas: 4500000})
      console.log(user);
      // await web3.eth.personal.lockAccount(myaddr, '!@superpassword')
      //   .then(console.log('lockAccount ==> Ture'))
    }
    catch (exception) {
        console.log(exception);
    }
  }

  getUser = async () => {
    const { contract, coinbase } = this.props
    const { myaddr } = this.state
    const user = await contract.methods.getUser(myaddr).call({ from: coinbase })
    console.log(user);
  }

  getTotal = async () => {
    const { contract } = this.props
    const { myaddr } = this.state
    const total = await contract.methods.getUserCount().call()
    console.log(total);
  }

  render () {
    const { coinbase } = this.props
    
    const { balance = 'N/A', ethBalance = 'N/A', myaddr = 'N/A' } = this.state
    return (
      <div>
        <h1>My Dapp</h1>
        {/* <button onClick={this.storeValue}>Store 5 into account balance</button>
        <button onClick={this.getValue}>Get account balance</button>
        <button onClick={this.getEthBalance}>Get ether balance</button> */}
        <button onClick={this.isNewAccount}>Is new Account</button>
        <button onClick={this.insertUser}>Insert User</button>
        <button onClick={this.getUser}>Get User</button>
        <button onClick={this.getTotal}>User Count</button>
        <div>Coinbase: {coinbase}</div>
        <div>My Addres: {myaddr}</div>
        {/* <div>Account Balance: {balance}</div>
        <div>Ether Balance: {ethBalance}</div> */}
        <div>
          <Link href='/accounts'>
            <a>My Accounts</a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, accounts, contract, coinbase }) => (
      <Dapp accounts={accounts} contract={contract} web3={web3} coinbase={coinbase} />
    )}
  />
)