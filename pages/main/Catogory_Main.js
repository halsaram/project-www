import Main_Banner from './main/Main_Banner'
import HeaderBar from '../components/Header'
import CatoList from './CatoList'


// 카테고리 페이지
const Catogory_Main=()=>{

    return(
        <div>
            <HeaderBar />
            <Main_Banner />
            <CatoList dataType="AllData"/>

        </div>
    )
}
 

export default Catogory_Main;




