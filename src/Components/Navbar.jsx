import React from 'react'

import { Link } from 'react-router-dom' //use <a></a> instead of <Link></Link> because don't use router now
import '../Pages/style.css'





const Navbar = () => {
    return (
       <div className="navigation fixed top-0 left-0 right-0 bg-blue-700 flex p-3 w-full text-white justify-between items-center">
            <div className="nav-logo flex justify-between items-center">
                <img src="/src/assets/icons/image-logo.png" alt="Logo Website" className="logo-icon w-11 h-11 " />
                <h2 className='text-3xl pl-3 '>Sport Club</h2>
            </div>
            <ul className="nav-link w-2/4 flex justify-between ">
                <li><Link to={'/'} className='hover:text-emerald-400 hover:font-bold'>Home</Link></li>
                <li><Link to={'/booking'} className='hover:text-emerald-400 hover:font-bold'>Booking</Link></li>
                <li><Link to={'/coach'} className='hover:text-emerald-400 hover:font-bold'>Coach</Link></li>
                <li><Link to={'/about-us'} className='hover:text-emerald-400 hover:font-bold'>About Us</Link></li>
                <li><Link to={'/contact-us'} className='hover:text-emerald-400 hover:font-bold'>Contact Us</Link></li>
                <li><Link to={'/profile'}><img src="/src/assets/icons/login-icon.png" alt="" className="login-icon w-8" /></Link></li>
                <li><Link to={'/login'} className='hover:text-white hover:font-bold'><button className='w-20 rounded-lg border-2 border-emerald-400 hover:bg-emerald-400'>Log in</button></Link></li>

            </ul>
       </div>
    )
}

export default Navbar