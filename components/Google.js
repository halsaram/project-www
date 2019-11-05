import React, { useState } from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
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

const MountTest = () => {
    const [showButton, toggleShow] = useState(true)

    if (showButton) {
        return (
            <GoogleLogin
                buttonText="Login with Google"
                onSuccess={res => {
                    toggleShow(false)
                    success(res)
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

export default MountTest