import React from 'react'
import BackgroundLayout from './BackgroundLayout'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'




const Layout = ({children}) => {
    return (

        <BackgroundLayout>
            <Navbar/>
                {children}
            <Footer/>
        </BackgroundLayout>
        
    )
}

export default Layout