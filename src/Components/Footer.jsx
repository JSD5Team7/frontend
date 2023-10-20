import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Pages/style.css'

const Footer = () => {
    return (
       <footer className="fixed bottom-0 left-0 right-0 mb-0 flex w-full justify-between items-center p-5 text-white">
            <p>&copy; 2023 All right reserved | Sportclub.com </p>
            <div className="footer-link flex justify-center items-center gap-5">
                <NavLink to={'/terms-of-service'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>Terms of Service</NavLink>
                <NavLink to={'/privacy'} activeClassName='active'  className='hover:text-blue-900 hover:font-bold'>Privacy</NavLink>
            </div>
       </footer>
    )
}

export default Footer