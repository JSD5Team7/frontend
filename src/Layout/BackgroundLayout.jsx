import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const BackgroundLayout = ({ children }) => {
  return (
    <div className='container-full min-w-[1024px] max-w-[1980px] h-full bg-slate-100 mx-auto'>
      <Navbar>
        {children}
        <Footer/>
      </Navbar>
    </div>
  );
}

export default BackgroundLayout;