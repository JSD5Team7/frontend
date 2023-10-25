import React from 'react'
import Layout from '../Layout/Layout'

const Privacy = () => {
    return(
        <Layout>
            <div className="privacy-content m-10 p-10 text-lg leading-7 bg-slate-200 rounded-xl drop-shadow-lg">
                <h2 className='text-center text-5xl font-bold text-slate-800 mb-8 drop-shadow-lg'>Privacy  Policy</h2>
                
                <h3 className='italic font-semibold '>Effective Date: 20 SEP 2023</h3>
                <p className='mt-3 pl-10 text-justify'>At Sport Club, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our services, book our facilities, or become a member of our club.</p>
                
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>1. Information We Collect</h3>
                <p className='mt-3 pl-10 text-lg'>We may collect the following types of personal information from you:</p>
                <ul className='info list-disc pl-16 text-lg'>
                    <li>Contact Information (e.g., name, email address, phone number)</li>
                    <li>Membership Information (e.g., membership status, payment details)</li>
                    <li>Booking Information (e.g., activity reservations, date, time)</li>
                    <li>Health and Safety Information (e.g., medical conditions, emergency contacts)</li>
                    <li>Usage Information (e.g., website usage, facility usage)</li>
                    <li>Communications (e.g., emails, feedback, inquiries)</li>
                </ul>
                
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>2. How We Use Your Information</h3>
                <p className='mt-3 pl-10'>We may use your personal information for the following purposes:</p>
                <ul className='info list-disc pl-16 text-lg'>
                    <li>To manage your membership and provide access to our facilities.</li>
                    <li>To process and confirm your bookings and reservations.</li>
                    <li>To communicate with you regarding your membership, bookings, or inquiries.</li>
                    <li>To improve our services, facilities, and website based on user feedback and usage patterns.</li>
                    <li>To send you updates, newsletters, and promotional offers (you can opt-out of these communications at any time).</li>
                    <li>To comply with legal obligations and respond to lawful requests.</li>
                </ul>
                
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>3. Disclosure of Information</h3>
                <p className='mt-3 pl-10'>We may share your personal information with third parties in the following circumstances:</p>
                <ul className='info list-disc pl-16'>
                    <li>With service providers who assist us in delivering our services (e.g., payment processors, booking platforms).</li>
                    <li>With legal authorities to comply with applicable laws and regulations.</li>
                    <li>In case of emergencies or medical incidents, with healthcare providers or emergency contacts as necessary.</li>
                    <li>With your consent, in circumstances not covered by this policy.</li>
                </ul>
                
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>4. Security Measures</h3>
                <p className='mt-3 pl-10 text-justify'>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include data encryption, access controls, and regular security assessments.</p>
                
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>5. Your Rights and Choices</h3>
                <ul className='info list-disc pl-16'>
                    <li>You have the right to access, correct, or delete your personal information.</li>
                    <li>You can opt-out of receiving promotional communications from us.</li>
                    <li>You may request a copy of the data we hold about you.</li>
                    <li>If you have concerns about our data processing practices, please contact us.</li>
                </ul>
                               
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>6. Changes to this Privacy Policy</h3>
                <p className='mt-3 pl-10'>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting on our website.</p>
                
                <h3 className='text-2xl font-semibold text-slate-800 mt-3'>7. Contact Us</h3>
                <p className='mt-3 pl-10'>If you have questions or concerns regarding our Privacy Policy or data practices, please contact us at:</p>
                <address className='pl-16 mt-5 font-semibold '>4 Privet Drive, Little Whinging,</address>
                <address className='pl-16 font-semibold '>Surrey, England</address>
                <a href="tel:+66812345678" className='pl-16 font-semibold text-slate-800'>+66812345678</a><br/>
                <a href="mailto:sportclub@example.com" className='pl-16 font-semibold text-slate-800'>sportclub@example.com</a>
                <p className='pl-10 mt-5 text-justify'>By using our services, you consent to the terms of this Privacy Policy and the collection and use of your personal information as described herein. Thank you for trusting Our Sport Club with your data, and we look forward to providing you with exceptional service.</p>
            </div>
        </Layout>
    )
}

export default Privacy