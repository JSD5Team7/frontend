import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const inputStyle = 'text-white border-b-2 border-white p-2 bg-transparent focus:outline-none focus:border-emerald-400 caret-emerald-400 placeholder:italic placeholder:text-slate-500 ';

export const FormContact = () => {
   
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kr47zrv', 'template_c1etpq3', form.current, 'SaZ-Z93sbl8o83lLC')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert('message sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="form-contact w-2/4 text-gray-900 mt-0 ml-8 pt-8 pr-6 text-lg grid place-items-center " >
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 pb-24' >
                    <h2 className='text-3xl text-white text-center pb-6'>Contact US</h2>
                    <div className="first-name flex flex-col">
                        <label htmlFor="firstname" className='text-white'>First name</label>
                        <input type="text" name="firstname" id="firstname" placeholder='Jonn' className={inputStyle} />
                    </div>
                    <div className="last-name flex flex-col">
                        <label htmlFor="lastname" className='text-white'>Last name</label>
                        <input type="text" name="lastname" id="lastname" placeholder='Doe' className={inputStyle} />
                    </div>
                    <div className="email-contact flex flex-col">
                        <label htmlFor="email" className='text-white'>Email</label>
                        <input type="email" name="email" id="email" placeholder='JohnDoe@example.com' className={inputStyle} />
                    </div>
                    <div className="phone-contact flex flex-col">
                        <label htmlFor="phone-number" className='text-white'>Phone number</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder='+66 8 1234 5678' className={inputStyle} />
                    </div>
                    <div className="message flex flex-col">
                        <label htmlFor="message" className='text-white'>Message</label>
                        <textarea name="message" id="message" placeholder='How can we help you?' cols="30" rows="1" className={inputStyle} ></textarea>
                    </div>
                    <div className="btn-send-message flex justify-end mt-6">
                        <button type='submit' value="send" className='w-40 border border-blue-700 rounded-full bg-blue-700 p-2 text-lg text-white shadow-md  hover:bg-blue-900 hover:border-blue-900 hover:font-bold' >Send Message</button>
                    </div>
                </form>
            </div>
    )
}
