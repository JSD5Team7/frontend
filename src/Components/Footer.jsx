import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Pages/style.css'

const Footer = () => {
    return (
       <footer className="bottom-0 left-0 right-0 mb-0 flex justify-between items-center p-5 ">
            <p>&copy; 2023 All right reserved | Sportclub.com </p>
            <div className="footer-link flex justify-center items-center gap-10">
                <NavLink to={'/terms-of-service'} activeClassName='active' className='hover:text-blue-900 '>Terms of Service</NavLink>
                <NavLink to={'/privacy'} activeClassName='active'  className='hover:text-blue-900 '>Privacy</NavLink>
            </div>
       </footer>
    )
}

export default Footer