import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
       <footer className="footer flex w-full justify-between items-center p-5 text-white">
            <p>&copy; 2023 All right reserved | Sportclub.com </p>
            <div className="footer-link flex justify-center items-center gap-10">
                <Link to={'/terms-of-service'} className='hover:text-blue-900 hover:font-bold'>Terms of Service</Link>
                <Link to={'/privacy'} className='hover:text-blue-900 hover:font-bold'>Privacy</Link>
            </div>
       </footer>
    )
}

export default Footer