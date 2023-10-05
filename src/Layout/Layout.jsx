import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className='box-border flex flex-col justify-center items-center'>
        {children}
        </div>
        <Footer/>
        </>
    )
}

export default Layout