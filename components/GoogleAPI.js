import { Link } from 'next/link';
import React, { Component, useState, useEffect } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { inject, observer } from 'mobx-react'

import {
    Container,
    Divider,
    Dropdown,
    Button,
    Grid,
    Layout,
    Image,
    List,
    Menu,
    Segment,
    Icon, 
} from 'semantic-ui-react'



const clientId = '844532038841-bsgp4gd9fun13bmfa3f9rn1oh2ne0dpg.apps.googleusercontent.com'


const success = response => {
    console.log(response) // eslint-disable-line
}

const error = response => {
    console.error(response) // eslint-disable-line
}


//맨 윗 상단 오른쪽 마이페이지 메뉴바




// return (
//     <React.Fragment>
//         <Head>
//             <link
//                 rel="stylesheet"
//                 href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
//             />
//             </Head>
//     < Grid.Column >
//     <Button onClick={this.handleAnimationChange('overlay')}>|||</Button>
// <Link href='/후원현황'><a>My Dapp</a></Link>
// <Link href='/내가만든 프로젝트'><a>My Accounts</a></Link>
//             <Link as='/프로필 설정' href={{ pathname: '/project', query: { id: 'start', title: '프로젝트올리기' } }}>
//     <Link href='/로그아웃'><a>My Accounts</a></Link>
//         <Button inverted basic color="blue">
//             <a><p >프로젝트올리기</p></a>
//         </Button>
//     </Link>
//           </Grid.Column >
//                   </React.Fragment >




// import GoogleLogin, { GoogleLogout } from '../dist/google-login'
// import FontAwesome from 'react-fontawesome';








const MountTest = (props) => {
    const { userStore, web3, contract, coinbase } = props
    const [showButton, toggleShow] = useState(userStore.loggedIn)
    const [username, setUsername] = useState("")

    const [searchQuery,setsearchQuery] = useState("");
    const [selected,setselected] = useState("");

    const options = [
        { key: 'user', value: '내 후원현황', text: '내 후원현황', icon: 'user' },
        { key: 'product', value: '내가만든 프로젝트', text: '내가만든 프로젝트', icon: 'product hunt' },
        { key: 'settings', value: '프로필 설정', text: '프로필 설정', icon: 'settings' },
        { key: 'sign-out', value: '로그아웃', text: '로그아웃', icon: 'sign out' },
    ]

    const onChange = (e, { value }) => {
        console.log('data = ', value);
        if (value == '로그아웃') {
            console.log('로그아웃 됨');
        } else if (value == '내 후원현황') {
            console.log('내 후원현황 페이지 이동');
        } else if (value == '내가만든 프로젝트') {
            console.log('내가만든 프로젝트');
        }
        setselected(value)
    }

    const onSearchChange = (e, data) => {
        console.log('data11 =', data.searchQuery);
        setsearchQuery(data.searchQuery);
    }

   
    const trigger = (
        <span>
            <Icon name='big user' /> {userStore.user.userName} <Icon name='dropdown' />
        </span>
    )

    if (showButton) {
        return (
            <GoogleLogin
                buttonText="Login with Google"
                onSuccess={async (res) => {
                    toggleShow(false)
                    userStore.setLoggedIn(false)
                    console.log(res);
                    const { Eea='', U3='', ig='' } = res.w3 // Eea => googleId, U3 => userEmail, ig => userName
                    try {
                        await contract.methods.getMyaddr(U3).call({ from: coinbase })
                            .then(async (result) => {
                                const user = await contract.methods.getUser(result).call({ from: coinbase })
                                userStore.setUser(user);
                                //계정정보 가져오기
                                setUsername(userStore.user.userName)
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
            userStore.user.userName===undefined ? "loding..." : 
            <Dropdown
                trigger={trigger}
                options={options}
                value={selected}
                pointing='top left'
                icon={null}
                onChange={onChange}
                onSearchChange={onSearchChange}
            >
                <Dropdown.Menu>
                    <Dropdown.Item><Icon name='user' />내 후원현황</Dropdown.Item>
                    <Dropdown.Item><Icon name='user' />내가만든 프로젝트</Dropdown.Item>
                    <Dropdown.Item><Icon name='settings' />프로필 설정</Dropdown.Item>
                    <Dropdown.Item>
                        <GoogleLogout
                            buttonText='로그아웃'
                            onLogoutSuccess={res => {
                                userStore.setUser([]);
                                toggleShow(true)
                                userStore.setLoggedIn(true)
                                console.log('logout')
                            }}
                            onFailure={error}
                            clientId={clientId}
                        />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
                //   <GoogleLogout
                //         buttonText={userStore.user.userName}
                //         onLogoutSuccess={res => {
                //             userStore.setUser([]);
                //             toggleShow(true)
                //             userStore.setLoggedIn(true)
                //             console.log('logout')
                //         }}
                //         onFailure={error}
                //         clientId={clientId}
                //     />

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