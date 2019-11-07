import Main_Banner from './main/Main_Banner'
import HeaderBar from '../components/Header'
import CatoList from '../pages/main/CatoList';


const Catogory_Main=()=>{
    return(
        <div>
            <HeaderBar/>
            <Main_Banner />
            <CatoList/>
        </div>

    );
}

export default Catogory_Main;