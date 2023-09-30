import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Layout = ({children}) => {
    return (
        <div className='layout min-h-screen bg-gradient-to-r from-emerald-400  to-blue-500'>
        {/* bg-gradient-to-r from-emerald-300 to-blue-400 */}
        <Navbar/>
        {children}
        <Footer/>
        </div>
    )
}

export default Layout