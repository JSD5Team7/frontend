import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAPI from '../Hook/useAPI'
const Navbar = () => {
    const { user } = useAPI();
    const dispatch = useDispatch();
    const navigete = useNavigate();
    const idtoken = window.localStorage.token;
    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null
        })
        navigete('/')
    }
    return (
       <div className="h-20 flex justify-between items-center">
            <div className="w-[250px]">
                <NavLink to='/'>
                    <img src="/src/assets/icons/groot-logo.PNG" alt="logo image" className='w-12'/>
                </NavLink>
            </div>
            <ul className="flex justify-center gap-7 font-semibold text-xl text-slate-800 dropshadow-lg">
                <li>
                    <NavLink
                        to={'/'}
                        activeClassName='active'
                        className='font-semibold'>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/booking'}
                        activeClassName='active'
                        className=''>Booking
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/coach'}
                        activeClassName='active'
                        className=''>Coach
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about-us'}
                        activeClassName='active'
                        className=''>About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/contact-us'}
                        activeClassName='active'
                        className=''>Contact Us
                    </NavLink>
                </li>
            </ul>
            {!idtoken ?
            (
            <ul className='flex justify-end gap-5 w-[250px]'>
                <li>
                    <NavLink
                        to={'/login'}
                        activeClassName='active'
                        className=''>
                            <button
                                className='w-20 rounded-full bg-lime-300 hover:bg-lime-400 text-slate-800 hover:text-slate-900 font-semibold dropshadow-lg border-2 border-lime-500 hover:border-lime-600'>
                                Log in
                            </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/register'}
                        activeClassName='active'
                        className=''>
                            <button
                                className='w-20 rounded-full bg-lime-300 hover:bg-lime-400 text-slate-800 hover:text-slate-900 font-semibold dropshadow-lg border-2 border-lime-500 hover:border-lime-600'>
                                Sign up
                            </button>
                    </NavLink>
                </li>
            </ul>
            ) : (
            <ul className='flex justify-end gap-3 w-[250px]'>
                <li>
                    <NavLink
                        to={'/profile'}>
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                size='xl' className=''/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/dashboard'}
                        activeClassName='active'
                        className=''>Dash Board
                    </NavLink>
                </li>
                <li>
                    <button
                        onClick={logout}
                        className='w-20 rounded-full bg-white'>
                            Log out
                    </button>
                </li>
            </ul>
            )}
       </div>
    )
}
export default Navbar