import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

import Main_Banner from '../components/Main_Banner'
import Lower_Banner from '../components/Lower_Banner'

import './style.css'

const Index = () => {
    return (
        <div>
            <div id="react-view">
                <Header />        
                <Main_Banner />
                <Main />
            </div>
            <Lower_Banner />
            <Footer />
        </div >
    )
}

export default Index;