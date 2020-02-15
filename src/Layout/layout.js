import React from 'react';
import Header from './header'
import Footer from './footer';
import Navmobile from './navmobile'
const Layout = () =>{
    return(
        <div>
            <Navmobile/>
            {/* <Header/> */}
           <Footer/>
            </div>
    )
}
export default Layout;