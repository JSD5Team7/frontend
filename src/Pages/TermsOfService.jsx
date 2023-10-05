import React from 'react'
import Layout from '../Layout/Layout'

const TermsOfService = () => {
    return(
        <Layout>
            <div className="terms-content m-10 p-10 text-lg leading-7 bg-white bg-opacity-30 rounded-xl ">
                <h2 className='text-center text-3xl font-bold mb-8'>Terms of services</h2>
                <h3 className='font-bold text-blue-600 '>1. Acceptance of Terms</h3>
                <p className='mt-3 pl-10'> Welcome to our sport club! By accessing and using our facilities for tennis, badminton, swimming, yoga, and aerobic dance, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>

                <h3 className='font-bold text-blue-600 mt-3'>2. Club Membership</h3>
                <p className='mt-3 pl-10'>- To access our facilities, you may be required to become a member of sport club. Membership details, including fees and benefits, can be found on our website or provided upon request.</p>
                <p className='mt-3 pl-10'>- Membership is open to individuals of all ages, subject to our membership criteria.</p>

                <h3 className='font-bold text-blue-600 mt-3'>3. Facility Booking</h3>
                <p className='mt-3 pl-10'>- Members may book facilities for tennis, badminton, swimming, yoga, or aerobic dance sessions through our booking system.</p>
                <p className='mt-3 pl-10'>- Bookings are subject to availability and may be subject to additional fees.</p>
                <p className='mt-3 pl-10'>- Cancellations and rescheduling are allowed within a specified timeframe. Please refer to our cancellation policy for details.</p>

                <h3 className='font-bold text-blue-600 mt-3'>4. Participation in Activities</h3>
                <p className='mt-3 pl-10'>- Participants in any sports or activities must adhere to safety guidelines and instructions provided by our staff.</p>
                <p className='mt-3 pl-10'>- Participants must be in good health and have the necessary skills and experience to participate safely in their chosen activities.</p>

                <h3 className='font-bold text-blue-600 mt-3'>5. Code of Conduct</h3>
                <p className='mt-3 pl-10'>- All members and participants are expected to conduct themselves in a respectful and sportsmanlike manner.</p>
                <p className='mt-3 pl-10'>- Any form of harassment, discrimination, or unsportsmanlike behavior will not be tolerated and may result in membership termination.</p>

                <h3 className='font-bold text-blue-600 mt-3'>6. Liability and Waiver</h3>
                <p className='mt-3 pl-10'>- Participation in sports and physical activities carries inherent risks. Our Sport Club is not liable for any injuries, accidents, or damages that may occur on our premises.</p>
                <p className='mt-3 pl-10'>- All members and participants are required to sign a liability waiver before engaging in any activities.</p>

                <h3 className='font-bold text-blue-600 mt-3'>7. Membership Termination</h3>
                <p className='mt-3 pl-10'>- Our Sport Club reserves the right to terminate the membership of any individual who violates these Terms of Service or engages in misconduct.</p>
                <p className='mt-3 pl-10'>- Membership termination may result in the forfeiture of any membership fees.</p>

                <h3 className='font-bold text-blue-600 mt-3'>8. Privacy</h3>
                <p className='mt-3 pl-10'>- We respect your privacy and will handle your personal information in accordance with our Privacy Policy, which can be found on our website.</p>

                <h3 className='font-bold text-blue-600 mt-3'>9. Changes to Terms</h3>
                <p className='mt-3 pl-10'>- Our Sport Club reserves the right to modify or update these Terms of Service at any time. Any changes will be effective upon posting on our website.</p>

                <h3 className='font-bold text-blue-600 mt-3'>10. Contact Information</h3>
                <p className='mt-3 pl-10'>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
                <p className='mt-4 text-xl pl-16'>sport club</p>
                <address className='mt-1 pl-16'> 4 Privet Drive, Little Whinging,</address>
                <address className='mt-1 pl-16'>Surrey, England</address>
                <a href="tel:+66812345678" className='hover:text-blue-600 pl-16'>+66812345678</a> <br></br>
                <a href="mailto:sportclub@example.com" className='hover:text-blue-600 pl-16'>sportclub@example.com</a>
                <p className='mt-3 pl-10'>By using our services, you acknowledge that you have read, understood, and agreed to these Terms of Service. Thank you for choosing Our Sport Club for your sporting and fitness needs. We look forward to providing you with a safe and enjoyable experience!</p>
            </div>
        </Layout>
    )
}

export default TermsOfService