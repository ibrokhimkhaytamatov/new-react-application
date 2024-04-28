
import { Outlet, useNavigate,  } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function MainLayout() {
    return (
        <div className='main_layout'>
            <Navbar />
                <Outlet/>  
            <Footer/>
        </div>
    )
}
