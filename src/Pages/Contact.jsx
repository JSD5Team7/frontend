import React from 'react'
import { useState } from 'react';
import Layout from '../Layout/Layout'

const inputStyle = 'border border-gray-400 rounded-md p-2 focus:outline-none focus:border-emerald-400 caret-emerald-400 placeholder:italic placeholder:text-slate-300 ';


const ContactUs = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [message,setMessage] = useState('');
    const [displayValue,setDisplayValue] = useState('');

    const handleSubmit = (e) => {
        alert('send this message ?');
        e.preventDefault();
        const info = {firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, message: message};
        setDisplayValue(info)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setMessage('')
        return info
    }

    return(
        <Layout>
            <div className="contact-container mt-28 p-10 w-full h-4/5 flex justify-center items-stretch  bg-sky-100">
                <div className="contact-content flex bg-white m-0 p-0 rounded-md shadow-xl">
            <div className="get-intouch w-3/4 rounded-md text-gray-900 m-0 p-10 flex flex-col justify-center items-start bg-center bg-no-repeat " style={{backgroundImage : 'url(/src/assets/images/bg-contact.jpeg)'}}>
                <div className="content-contact w-full h-full m-0 p-10 bg-blue-200 bg-opacity-70">
                <h2 className='title font-san font-semibold text-4xl text-gray-900 '>Get in Touch with Us!</h2>
                <h3 className='text-lg mt-6'>Hello,</h3>
                <p className='font-sans text-light text-lg'> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We appreciate your interest in our website and are excited to hear from you. Whether you have questions, suggestions, or just want to connect, we encourage you to reach out. Your input and engagement are essential to us.</p>
                <p className='font-sans text-light text-lg'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please feel free to send us a message through this platform or reach out via email at sportclub@example.com. </p>
                <p className='font-sans text-light text-lg'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're looking forward to hearing from you and engaging in meaningful discussions. Your involvement is highly valued.</p><br />
                <p className='font-sans text-light text-lg'>Best regards,</p><br />
                <p className='font-sans text-light text-lg'>Sportclub Adminstration Team</p>
                <div className="address flex mt-5 items-center ">
                    <img src="/src/assets/icons/location.png" alt="address icon" className='w-6 h-6 mr-4'/>
                    <div className="address-info">
                        <p>4 Privet Drive, Little Whinging,</p>
                        <p>Surrey, England</p>
                    </div>
                </div>
                <div className="contact-call flex mt-5 items-center ">
                    <img src="/src/assets/icons/call.png" alt="call icon" className='w-5 h-5 mr-5'/>
                    <a href="tel:+66812345678" className='call text-gray-900 hover:text-emerald-400'>Call : +66 8 1234 5678</a>
                </div>
                <div className="contact-email flex mt-6 mb-20 items-center">
                    <img src="/src/assets/icons/address.png" alt="email icon" className='w-6 h-6 mr-4'/>
                    <a href="mailto:sportclub@example.com" className='call text-gray-900 hover:text-emerald-400'>sportclub@example.com</a>
                </div>
                </div>
            </div>
            {/* form */}
            <div className="form-contact w-2/4 text-gray-700 mt-0 ml-8 pt-8 text-lg grid place-items-center " >
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 pt-10 pb-24' >
                    <div className="first-name flex flex-col">
                        <label htmlFor="firstname" className='relative'>First name</label>
                        <input type="text" name="firstname" id="firstname" placeholder='Jonn' className={inputStyle} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="last-name flex flex-col">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" name="lastname" id="lastname" placeholder='Doe' className={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="email-contact flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='JohnDoe@example.com' className={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="phone-contact flex flex-col">
                        <label htmlFor="phone-number">Phone number</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder='+66 8 1234 5678' className={inputStyle} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className="message flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder='How can we help you?' cols="30" rows="3" className={inputStyle} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="btn-send-message flex justify-end">
                        <button type='submit' className='w-40 border border-emrald-400 rounded-md bg-emerald-400 p-2 text-lg text-white shadow-md  hover:bg-emerald-600 hover:border-emerald-600' >Send Message</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            <div className="show-data m-10 mb-24">
                <p>First name : {displayValue.firstName} </p>
                <p>Last name : {displayValue.lastName}</p>
                <p>Email : {displayValue.email} </p>
                <p>Phone number : {displayValue.phoneNumber} </p>
                <p>Message : <span className='text-red-600'>{displayValue.message}</span></p>
            </div>
        </Layout>
    )
}

export default ContactUs