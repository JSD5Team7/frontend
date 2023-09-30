import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Pages/Footer'


const Layout = ({children}) => {
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout