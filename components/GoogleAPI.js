import React, { Component, useState } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { inject, observer } from 'mobx-react'


// import GoogleLogin, { GoogleLogout } from '../dist/google-login'
// import FontAwesome from 'react-fontawesome';

const clientId = '844532038841-bsgp4gd9fun13bmfa3f9rn1oh2ne0dpg.apps.googleusercontent.com'

const success = response => {
    console.log(response) // eslint-disable-line
}

const error = response => {
    console.error(response) // eslint-disable-line
}

const loading = () => {
    console.log('loading') // eslint-disable-line
}

const logout = () => {
    console.log('logout') // eslint-disable-line
}


const MountTest = (props) => {
    const [showButton, toggleShow] = useState(true)
    const inject = props;
    if (showButton) {
        return (
            <GoogleLogin
                buttonText="Login with Google"
                onSuccess={async (res) => {
                    toggleShow(false)
                    console.log(res)
                    const { Eea, U3, ig } = res.w3 // Eea => googleId, U3 => userEmail, ig => userName
                    const { store, web3, contract, coinbase } = inject
                    
                    try {
                        await contract.methods.getMyaddr(U3).call({ from: coinbase })
                            .then(async (result) => {
                                const user = await contract.methods.getUser(result).call({ from: coinbase })
                                store.user = user
                                return console.log(U3, '===> ', store.user)
                            })
                    }
                    catch {
                        const myAddr = await web3.eth.personal.newAccount(Eea)
                        await contract.methods.insertUser(myAddr, U3, ig, 0).send({ from: coinbase, gas: 4500000 })
                        return console.log(U3, '===> ', await contract.methods.getUser(myAddr).call({ from: coinbase }));
                    }
                }}
                onFailure={error}
                clientId={clientId}
                cookiePolicy={'single_host_origin'}
            />
        )
    } else {
        return (
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={res => {
                    toggleShow(true)
                    logout
                }}
                onFailure={error}
                clientId={clientId}
            />
        )
    }
}


@inject('store', 'web3', 'accounts', 'contract', 'coinbase')
@observer
class GoogleAPI extends Component {
    render() {
        return(
            <MountTest {...this.props}/>
        )
    }
}

export default GoogleAPI