import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom' 
import '../Pages/style.css'

const Navbar = () => {
    return (
       <div className="navigation top-0 left-0 right-0 flex p-3 w-full text-white justify-between items-center">
            <div className="nav-logo flex justify-center gap-2 items-center">
            <FontAwesomeIcon icon={faImage} size='2xl' className='hidden'/>
            <img src="/public/dev.png" alt="logo image" className='w-12' />
                <h1 className='text-3xl pl-3 '>Sport Club</h1>
            </div>
            <ul className="nav-link  flex justify-center gap-5 ">
                <li><NavLink to={'/'} activeClassName='active'   className='hover:text-blue-900 hover:font-bold ' >Home</NavLink></li>    {/* NavLink is use for Navbar link to style an active link */}   
                <li><NavLink to={'/booking'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>Booking</NavLink></li>
                <li><NavLink to={'/coach'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>Coach</NavLink></li>
                <li><NavLink to={'/about-us'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>About Us</NavLink></li>
                <li><NavLink to={'/contact-us'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>Contact Us</NavLink></li>
                <li ><NavLink to={'/login'} activeClassName='active'  className='hover:text-white hover:font-bold'><button className='w-20 rounded-full bg-white  hover:bg-gray-100  text-blue-900  hover:text-blue-950 text-base'>Log in</button></NavLink></li>
                <li><NavLink to={'/profile'}><FontAwesomeIcon icon={faCircleUser} size='xl' className='hover:text-blue-900' /></NavLink></li>
                <li><NavLink to={'/dashboard'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>Dash Board</NavLink></li>

            </ul>
       </div>
    )
}

export default Navbar