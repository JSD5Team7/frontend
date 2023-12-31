import SlideImage from '../Components/SlideImage'
import Layout from '../Layout/Layout'
import ContactBanner from '../assets/images/heroimage.jpeg'


const AboutUs = () => {
    return(
        <Layout>
            <>
            <div className="hero-img mt-6 p-10 w-full h-auto grid place-items-center  "> 
            {/* relative top-1 z-0 */}
                <img src={ContactBanner} alt="sport club" className='rounded-2xl shadow-black shadow-md contrast-125'/>
                <h2 className='absolute text-brown-700 text-8xl italic font-extrabold opacity-70'>Good vibes, Good health</h2>
            </div>
            <div className="about-us w-full mt-6 mb-10 p-10 text-lg text-white bg-slate-700 rounded-lg shadow-black shadow-md">
                <h2 className='text-5xl text-center font-bold drop-shadow-md text-lime-300  mb-6'>Who are We?</h2>
                <p className='text-center text-2xl mb-3 '><em>We are who bring happiness to you. <span className='text-lime-300 font-semibold'>" Where Passion Meets Fun and Healthy ".</span></em></p>
                <p className='mb-10 indent-10 text-justify'>At our sport club, we are more than just a club we are a community of like-minded individuals brought together by our shared passion for sports, fitness, and a healthy lifestyle. Here's a glimpse into what we do, what we serve, and what you can expect from this extraordinary place.</p>
                <div className="first-section w-full flex gap-3 items-center justify-center">
                <ol className='w-3/4'>
                    <p className='text-2xl text-lime-300 font-semibold'>What We Do :</p>
                    <li className='indent-10 text-justify'>&#127934;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Diverse Sporting Activities </em>: We offer a wide array of sporting activities to cater to all fitness levels and interests. Whether you're into tennis, badminton, swimming, yoga, or the energetic rhythms of aerobic dance, we have something for everyone.</li>
                    <li className='indent-10 text-justify'>&#127934;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Expert Guidance</em> : Our experienced coaches and instructors are dedicated to helping you achieve your fitness goals. They provide expert guidance, personalized training programs, and tips to enhance your skills.</li>
                    <li className='indent-10 text-justify'>&#127934;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Community Building</em> : Beyond the physical aspect, we believe in the power of community. We foster a welcoming and supportive environment where you can meet like-minded individuals, make friends, and grow together on your fitness journey.</li>
                </ol>
                <div className="img-first-section w-3/4 pl-6">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D" alt="tennis courts" style={{height:'400px'}}  className='w-full rounded-lg shadow-lg contrast-125 ' />
                </div>
                </div>
                <div className="serveice-section w-full mt-10 flex gap-3 items-center justify-center">
                <ol className='w-1/2 order-1 text-right'>
                    <p className='text-2xl text-lime-300 font-semibold text-right mt-6'>What We Serve:</p>
                    <li className='indent-10 text-justify'>&#127955;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>State-of-the-Art Facilities</em> : Our club boasts top-notch facilities equipped with the latest technology and safety measures. From well-maintained tennis courts to pristine swimming pools, we provide the ideal backdrop for your fitness endeavors.</li>
                    <li className='indent-10 text-justify'>&#127955;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Flexible Membership Options</em> : We offer flexible membership options tailored to your needs. Whether you're a committed athlete or simply looking for a place to unwind, we have a membership plan that suits you.</li>
                    <li className='indent-10 text-justify'>&#127955;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Health and Wellness</em> : At Our Sport Club, we prioritize your well-being. Our on-site amenities include health-focused services like nutrition consultations, physiotherapy, and relaxation areas to help you unwind after a rigorous workout.</li>
                </ol>
                <div className="img-first-section w-1/2 pr-6">
                    <img src="https://images.unsplash.com/photo-1617962529235-262e8e777e48?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D" alt="tennis courts" style={{height:'400px'}} className='w-full rounded-lg shadow-lg contrast-125' />
                </div>
                </div>
                <div className="advantage-section w-full mt-10 flex gap-3 items-center justify-center">
                <ol className='w-1/2'>
                    <p className='text-2xl text-lime-300 font-semibold mt-6'>What You Get from This Place:</p>
                    <li className='indent-10 text-justify'>&#127992;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Fitness and Fun</em> : Expect a place where you can get fit while having a blast. Whether you're sweating it out on the court or finding your inner peace during a yoga session, our club is where fitness becomes enjoyable.</li>
                    <li className='indent-10 text-justify'>&#127992;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>Skill Enhancement</em> : Our club is the perfect platform to hone your skills. From refining your tennis swing to perfecting your badminton serve, you'll see continuous improvement in your chosen sport.</li>
                    <li className='indent-10 text-justify'>&#127992;&nbsp;&nbsp;&nbsp;<em className='text-lime-300'>A Healthier Lifestyle</em> : Joining our Sport Club is not just about exercise; it's a commitment to a healthier lifestyle. You'll gain access to resources and support that will empower you to make lasting, positive changes in your life.</li>
                    <li className='indent-10 text-justify'>&#127992;&nbsp;&nbsp;&nbsp;<em className='text-lime-300 '>New Connections</em> : Expect to meet incredible people who share your passion. The friendships and connections you make here often extend beyond our facilities, creating a network of motivated individuals.</li>
                </ol>
                <div className="img-first-section w-1/2 p-6 ">
                    <img src="https://images.unsplash.com/photo-1618548723848-1b339b8a7999?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRlbm5pcyUyMGNvdXJ0fGVufDB8fDB8fHww" alt="tennis courts" className='w-full h-[400px] rounded-lg shadow-lg contrast-125' />
                </div>
                </div>
                <div className="summary mt-6">
                <p className='indent-10 text-justify'>In summary, Our Sport Club is more than a place to play sports. it's a destination for personal growth, fitness achievements, and lasting camaraderie. We invite you to be part of our vibrant community, where your well-being and fitness aspirations are our top priorities. Come, experience the magic of the Sport Club, and let's embark on this fitness journey together!</p>
                </div>
            </div>
                <SlideImage/>
            </>
        </Layout>

    )
}

export default AboutUs