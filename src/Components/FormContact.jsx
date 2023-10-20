import { useState } from 'react';

const inputStyle = ' border-b-2 border-lime-300 p-2 bg-transparent focus:outline-none focus:border-emerald-300 caret-emerald-400 placeholder:italic placeholder:text-slate-30 ';

export const FormContact = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [message,setMessage] = useState('');
    // const [displayValue,setDisplayValue] = useState('');

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

    return (
        <div className="form-contact w-2/4 text-slate-800 mt-0 ml-8 pt-8 pr-6 text-lg grid place-items-center border-solid border-4 border-lime-400 rounded-xl " >
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 pb-24' >
                    <h2 className='font-bold text-4xl text-slate-800 text-center pb-6 drop-shadow-md'>Contact Us</h2>
                    <div className="first-name flex flex-col">
                        <label htmlFor="firstname" className='font-semibold text-slate-800'>First name</label>
                        <input type="text" name="firstname" id="firstname" placeholder='Jonn' className={inputStyle} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="last-name flex flex-col">
                        <label htmlFor="lastname" className='font-semibold text-slate-800'>Last name</label>
                        <input type="text" name="lastname" id="lastname" placeholder='Doe' className={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="email-contact flex flex-col">
                        <label htmlFor="email" className='font-semibold text-slate-800'>Email</label>
                        <input type="email" name="email" id="email" placeholder='JohnDoe@example.com' className={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="phone-contact flex flex-col">
                        <label htmlFor="phone-number" className='font-semibold text-slate-800'>Phone number</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder='+66 8 1234 5678' className={inputStyle} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className="message flex flex-col">
                        <label htmlFor="message" className='font-semibold text-slate-800'>Message</label>
                        <textarea name="message" id="message" placeholder='How can we help you?' cols="30" rows="1" className={inputStyle} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="btn-send-message flex justify-end mt-6">
                        <button type='submit' className='font-bold w-40 rounded-full bg-blue-700 p-2 text-lg  shadow-md  drop-shadow-md text-slate-800 hover:text-slate-900 border-solid border-2 bg-lime-400 hover:bg-lime-500 ' >Send Message</button>
                    </div>
                </form>
                {/* test send data */}
                {/* <div className="show-data m-10 mb-24">
                <p>First name : {displayValue.firstName} </p>
                <p>Last name : {displayValue.lastName}</p>
                <p>Email : {displayValue.email} </p>
                <p>Phone number : {displayValue.phoneNumber} </p>
                <p>Message : <span className='text-red-600'>{displayValue.message}</span></p>
                </div> */}
            </div>
    )
}
