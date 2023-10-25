import Footer from "./compoenents/footer/Footer";
import Header from "./compoenents/header/Header";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        {/* we can change anything inspite of this  */}
         <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;