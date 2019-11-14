import { Link } from 'next/link';
import Router from 'next/router';
import React, { Component, useState } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { inject, observer, useObserver } from 'mobx-react'
import { Dropdown, Button, Icon, Image } from 'semantic-ui-react'



const clientId = '844532038841-bsgp4gd9fun13bmfa3f9rn1oh2ne0dpg.apps.googleusercontent.com'


const success = response => {
    console.log(response) // eslint-disable-line
}

const error = response => {
    console.error(response) // eslint-disable-line
}

const onClick = (e,value)=>{
    switch (value.children[1]){
        case "내가만든 프로젝트":
            Router.push('/mypage?id=myproject')
            break;
        case "내 후원현황":
            Router.push('/mypage?id=mysupport')
            break;
        case "프로필 설정":
            Router.push('/mypage?id=myprofile')
            break;
    }
}

const MountTest = (props) => {
    const { userStore, web3, contract, coinbase } = props
    const _user = useObserver(() => (userStore.user))
    const _profileImage = useObserver(() => (userStore.profileImage))
    const _loggedIn = useObserver(() => (userStore.loggedIn))
   
    const trigger = (
        <span>
            <Image avatar src={_profileImage} /> {_user.userName} <Icon name='dropdown' />
        </span>
    )

    if (_loggedIn) {
        return (
            <GoogleLogin
                buttonText="Login with Google"
                onSuccess={async (res) => {
                    console.log(res);
                    const { Eea='', U3='', ig='', Paa='' } = res.w3 // Eea => googleId, U3 => userEmail, ig => userName
                    userStore.setLoggedIn(false)
                    userStore.setProfileImage(Paa)
                    await contract.methods.getMyaddr(U3).call({ from: coinbase })
                        .then(async (res) => {
                            userStore.setUser(await contract.methods.getUser(res).call({ from: coinbase }))
                        })
                        .then(async (res) => {})
                        .catch(async (err) => {
                            const myAddr = await web3.eth.personal.newAccount(Eea)
                            await contract.methods.insertUser(myAddr, U3, ig, 0).send({ from: coinbase, gas: 4500000 })
                        })
                        .finally(() => {
                            console.log(U3, '===> ', userStore.user)
                        })
                }}
                onFailure={error}
                clientId={clientId}
                cookiePolicy={'single_host_origin'}
            />
        )
    } else {
        return (
            _user.userName === undefined ? <Button loading>Loading</Button> : 
            <Dropdown trigger={trigger} pointing='top left' icon={null}>
                <Dropdown.Menu>
                        <Dropdown.Item onClick={onClick}><Icon name='big won' />내 후원현황</Dropdown.Item>
                        <Dropdown.Item onClick={onClick}><Icon name='big product hunt' />내가만든 프로젝트</Dropdown.Item>
                        <Dropdown.Item onClick={onClick}><Icon name='big user' />프로필 설정</Dropdown.Item>
                    {/* <Dropdown.Item onClick={onClick}><Icon name='user' /><a as='/내후원현황' href='/project?id=start&title=공지사항'>내 후원현황</a></Dropdown.Item>
                        <Dropdown.Item onClick={onClick}><Icon name='user' /><a as='/내후원현황' href='/myapge/Myproject'>내가만든 프로젝트</a></Dropdown.Item>
                        <Dropdown.Item onClick={onClick}> <Icon name='settings' /><a as='/내후원현황' href='/mypage/MyProfile'>프로필 설정</a></Dropdown.Item> */}
                    <Dropdown.Item>
                        <GoogleLogout
                            buttonText='로그아웃'
                            onLogoutSuccess={res => {
                                userStore.setUser([]);
                                userStore.setLoggedIn(true)
                                console.log('logout')
                            }}
                            onFailure={error}
                            clientId={clientId}
                        />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
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