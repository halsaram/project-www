import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/web3/Web3Container'

class Dapp extends React.Component {
  state = {
    balance: undefined,
    ethBalance: undefined,
    myaddr: undefined,
    userPoint: undefined,
    userEmail: undefined
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
      // await web3.eth.personal.unlockAccount(myaddr,'!@superpassword')
      //   .then(console.log('unlockAccount ==> Ture'))
      const user = await contract.methods.insertUser(myaddr, "b@a.com", 10, 0).send({ from: coinbase, gas: 4500000})
      console.log(user);
      this.getUser()
      // await web3.eth.personal.lockAccount(myaddr, '!@superpassword')
      //   .then(console.log('lockAccount ==> Ture'))
    }
    catch (exception) {
        console.log(exception);
    }
  }

  updateUserPoint = async (point) => {
    const { contract, coinbase } = this.props
    const { myaddr } = this.state
    const response = await contract.methods.updateUserPoint(myaddr, point).send({ from: coinbase })
    console.log(response);
    this.getUser()
  }

  getUser = async () => {
    const { contract, coinbase } = this.props
    const { myaddr } = this.state
    const response = await contract.methods.getUser(myaddr).call({ from: coinbase })
    this.setState({ userPoint: response.userPoint, userEmail: response.userEmail })
    console.log(response);
  }

  getTotal = async () => {
    const { contract } = this.props
    const { myaddr } = this.state
    const response = await contract.methods.getUserCount().call()
    console.log(response);
  }


  render () {
    const { coinbase } = this.props
    
    const { balance = 'N/A', ethBalance = 'N/A', myaddr = 'N/A', userPoint = 'N/A', userEmail = 'N/A' } = this.state
    return (
      <div>
        <h1>User Dapp</h1>
        {/* <button onClick={this.storeValue}>Store 5 into account balance</button>
        <button onClick={this.getValue}>Get account balance</button>
        <button onClick={this.getEthBalance}>Get ether balance</button> */}
        <button onClick={this.isNewAccount}>Is new Account</button>
        <button onClick={this.insertUser}>Insert User</button>
        <button onClick={this.getUser}>Get User</button>
        <button onClick={this.getTotal}>User Count</button>
        <button onClick={() => {this.updateUserPoint(1000)}}>+1000</button>
        <button onClick={() => {this.updateUserPoint(-1000)}}>-1000</button>
        <div>Coinbase: {coinbase}</div>
        <div>My Addres: {myaddr}</div>
        <div>My userPoint: {userPoint}</div>
        <div>My userEmail: {userEmail}</div>
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
    render={({ web3, contract, coinbase }) => (
      <Dapp contract={contract} web3={web3} coinbase={coinbase} />
    )}
  />
)