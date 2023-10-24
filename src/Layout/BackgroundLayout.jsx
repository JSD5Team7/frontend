import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NavbarMobile from '../Components/NavbarMobile';


const BackgroundLayout = ({ children }) => {
  return (
    <div className='container-full  max-w-[1980px] h-full bg-slate-100 mx-auto'>
      <Navbar>
        {/* <NavbarMobile> */}
        {children}
        {/* </NavbarMobile> */}
        <Footer/>
      </Navbar>
    </div>
  );
}

export default BackgroundLayout;