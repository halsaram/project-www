import React, { Component, useState, useEffect } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { inject, observer } from 'mobx-react'

import { Dropdown, Icon } from 'semantic-ui-react'


const clientId = '844532038841-bsgp4gd9fun13bmfa3f9rn1oh2ne0dpg.apps.googleusercontent.com'


const success = response => {
    console.log(response) // eslint-disable-line
}

const error = response => {
    console.error(response) // eslint-disable-line
}



const options = [
    { key: 'user', text: '프로필 설정', icon: '프로필 설정' },
    { key: 'settings', text: '내가 만든 프로젝트', icon: '내가 만든 프로젝트' },
    { key: 'sign-out', text: '로그아웃', icon: '로그아웃 ' },
]

// import GoogleLogin, { GoogleLogout } from '../dist/google-login'
// import FontAwesome from 'react-fontawesome';






const onchangecheck =(e,data)=>{
    console.log(data.value);

}


const MountTest = (props) => {
    const { userStore, web3, contract, coinbase } = props
    const [showButton, toggleShow] = useState(userStore.loggedIn)
    const [username, setusername] = useState("")

    useEffect(()=>{

    },[])

    
    const trigger = (
        <span>
            {console.log('user name =', username)}
            <Icon disabled name='sign language' /> {username}
        </span>
    )

    if (showButton) {
        return (
            <GoogleLogin
                buttonText="Login with Google"
                onSuccess={async (res) => {
                    toggleShow(false)
                    userStore.setLoggedIn(false)
                    const { Eea, U3, ig } = res.w3 // Eea => googleId, U3 => userEmail, ig => userName
                    try {
                        await contract.methods.getMyaddr(U3).call({ from: coinbase })
                            .then(async (result) => {
                                const user = await contract.methods.getUser(result).call({ from: coinbase })
                                userStore.setUser(user);
                                //계정정보 가져오기
                                setusername(userStore.user.userName)
                                return console.log(U3, '===> ', user)
                            })
                    }
                    catch {
                        const myAddr = await web3.eth.personal.newAccount(Eea)
                        await contract.methods.insertUser(myAddr, U3, ig, 0).send({ from: coinbase, gas: 4500000 })
                        const user = await contract.methods.getUser(result).call({ from: coinbase })
                        userStore.setUser(user);
                        return console.log(U3, '===> ', user)
                    }
                }}
                onFailure={error}
                clientId={clientId}
                cookiePolicy={'single_host_origin'}
            />
        )
    } else {
        return (
            userStore.user.userName === undefined ? "loding..." : <Dropdown
                trigger={trigger}
                options={options}
                pointing='top left'
                icon={null}
                onChange={onchangecheck}
            />
            
                 /* <GoogleLogout
                        buttonText={userStore.user.userName}
                        onLogoutSuccess={res => {
                            userStore.setUser([]);
                            toggleShow(true)
                            userStore.setLoggedIn(true)
                            console.log('logout')
                        }}
                        onFailure={error}
                        clientId={clientId}
                    /> */

          
                    

        )
    }
}


@inject('userStore', 'web3', 'accounts', 'contract', 'coinbase')
@observer
class GoogleAPI extends Component {
    render() {
        return(
            <MountTest {...this.props}/>
        )
    }
}

export default GoogleAPI