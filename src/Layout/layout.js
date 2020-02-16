import React from 'react';
import {useState, useEffect} from "react";
import Header from './header'
import Footer from './footer';
import Navmobile from './navmobile'
const Layout = () =>{

    const [state, setState] = useState(window.innerWidth);
    
    const resize = () => {
          setState(window.innerWidth);
      };
      window.addEventListener("resize", resize);
      console.log(state);
      
     
     
    return(
        <div>
          {state < 750 ? <Navmobile/> : <Header />}
           <Footer/>
            </div>
    )
}
export default Layout;