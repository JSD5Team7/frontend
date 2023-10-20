import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom' 
import '../Pages/style.css'

const Navbar = () => {
    return (
       <div className="navigation top-0 left-0 right-0 flex p-3 w-full text-slate-700 font-semibold justify-between items-center">
            <div className="nav-logo flex justify-center gap-2 items-center">
            <FontAwesomeIcon icon={faImage} size='2xl' className='hidden'/>
            <img src="/public/dev.png" alt="logo image" className='w-12' />
                <h1 className='text-3xl pl-3 text-slate-800 font-bold drop-shadow-lg'>Sport Club</h1>
            </div>
            <ul className="nav-link  flex justify-center gap-5 text-lg">
                <li><NavLink to={'/'} activeClassName='active'   className='hover:text-slate-900  ' >Home</NavLink></li>    {/* NavLink is use for Navbar link to style an active link */}   
                <li><NavLink to={'/booking'} activeClassName='active' className='hover:text-slate-900 '>Booking</NavLink></li>
                <li><NavLink to={'/coach'} activeClassName='active' className='hover:text-slate-900 '>Coach</NavLink></li>
                <li><NavLink to={'/about-us'} activeClassName='active' className='hover:text-slate-900'>About Us</NavLink></li>
                <li><NavLink to={'/contact-us'} activeClassName='active' className='hover:text-slate-900 '>Contact Us</NavLink></li>
                <li ><NavLink to={'/login'} activeClassName='active'  className='hover:text-slate-900'><button className='w-20 rounded-full bg-lime-300 hover:bg-lime-400  text-slate-800  hover:text-slate-900 text-base'>Log in</button></NavLink></li>
                <li><NavLink to={'/profile'}><FontAwesomeIcon icon={faCircleUser} size='xl' className='hover:text-late-900 ' /></NavLink></li>
                <li><NavLink to={'/dashboard'} activeClassName='active' className='hover:text-blue-900 hover:font-bold'>Dash Board</NavLink></li>
            </ul>
       </div>
    )
}

export default Navbar