import Layout from '../Layout/Layout'

const AboutUs = () => {
    return(
        <Layout>
            <div className="hero-img mt-16 w-full h-auto grid place-items-center">
                <img src="/src/assets/images/hero-image.jpeg" alt="sport club" className='relative top-1'/>
                <h2 className='absolute text-brown-800 text-7xl italic font-extrabold opacity-70'>Good vibes, Good health</h2>
            </div>
            <div className="about-us w-full mt-10 mb-10 p-10">
                <h2>Who are We?</h2>
                <p>We are who bring happiness to you. <span>Where Passion Meets Fun and Healthy.</span></p>
                <p>At our sport club, we are more than just a club; we are a community of like-minded individuals brought together by our shared passion for sports, fitness, and a healthy lifestyle. Here's a glimpse into what we do, what we serve, and what you can expect from this extraordinary place.</p>
                <div className="what-we-do-section">
                <p>What We Do:</p>
                <ol>
                    <li>Diverse Sporting Activities: We offer a wide array of sporting activities to cater to all fitness levels and interests. Whether you're into tennis, badminton, swimming, yoga, or the energetic rhythms of aerobic dance, we have something for everyone.</li>
                    <li>Expert Guidance: Our experienced coaches and instructors are dedicated to helping you achieve your fitness goals. They provide expert guidance, personalized training programs, and tips to enhance your skills.</li>
                    <li>Community Building: Beyond the physical aspect, we believe in the power of community. We foster a welcoming and supportive environment where you can meet like-minded individuals, make friends, and grow together on your fitness journey.</li>
                </ol>
                </div>
                <div className="service-section">
                <p>What We Serve:</p>
                <ol>
                    <li>State-of-the-Art Facilities: Our club boasts top-notch facilities equipped with the latest technology and safety measures. From well-maintained tennis courts to pristine swimming pools, we provide the ideal backdrop for your fitness endeavors.</li>
                    <li>Flexible Membership Options: We offer flexible membership options tailored to your needs. Whether you're a committed athlete or simply looking for a place to unwind, we have a membership plan that suits you.</li>
                    <li>Health and Wellness: At [Sport Club Name], we prioritize your well-being. Our on-site amenities include health-focused services like nutrition consultations, physiotherapy, and relaxation areas to help you unwind after a rigorous workout.</li>
                </ol>
                </div>
                <div className="advantage">
                <p>What You Get from This Place:</p>
                <ol>
                    <li>Fitness and Fun: Expect a place where you can get fit while having a blast. Whether you're sweating it out on the court or finding your inner peace during a yoga session, our club is where fitness becomes enjoyable.</li>
                    <li>Skill Enhancement: Our club is the perfect platform to hone your skills. From refining your tennis swing to perfecting your badminton serve, you'll see continuous improvement in your chosen sport.</li>
                    <li>A Healthier Lifestyle: Joining [Sport Club Name] is not just about exercise; it's a commitment to a healthier lifestyle. You'll gain access to resources and support that will empower you to make lasting, positive changes in your life.</li>
                    <li>New Connections: Expect to meet incredible people who share your passion. The friendships and connections you make here often extend beyond our facilities, creating a network of motivated individuals.</li>
                </ol>
                </div>
                <div className="summary">
                <p>In summary, [Sport Club Name] is more than a place to play sports; it's a destination for personal growth, fitness achievements, and lasting camaraderie. We invite you to be part of our vibrant community, where your well-being and fitness aspirations are our top priorities. Come, experience the magic of [Sport Club Name], and let's embark on this fitness journey together!</p>
                </div>
            </div>
        </Layout>

    )
}

export default AboutUs