import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
       <footer className="footer fixed bottom-0 right-0 left-0 flex w-full justify-between p-5 border border-blue-800 bg-blue-700 text-white">
            <p>&copy; 2023 All right reserved | Sportclub.com </p>
            <div className="footer-link w-1/5 flex justify-between">
                <Link to={'/'} className='hover:text-emerald-400 hover:font-bold'>Terms of Service</Link>
                <Link to={'/'} className='hover:text-emerald-400 hover:font-bold'>Privacy</Link>
            </div>
       </footer>
    )
}

export default Footer