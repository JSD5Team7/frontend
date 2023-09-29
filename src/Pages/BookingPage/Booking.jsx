import { useState,useEffect} from 'react'
import './Booking.css'
import HowtoS1 from './HowtoS1';
import ContentS1 from './ContentS1';
import ContentS2 from './ContentS2';
import SummaryS1 from './SummaryS1';
import HowtoS2 from './HowtoS2';
import HowtoS3 from './HowtoS3';
import ContentS3 from './ContentS3';
import Layout from '../../Layout/Layout';

function Booking(){
    const [Howto,setHowto] = useState(<HowtoS1 />);
    const [Content,setContent] = useState(<ContentS1 
                                            changeTostep2={changeHowtoS2}
                                            changeContentS2={changeContentS2}
                                            />);
    const [Summary,setSummary] = useState(<SummaryS1 />);


    useEffect(()=>{
        
    },[]);

    function handleNext(){
        setHowto(<HowtoS1 />)
        setContent(<ContentS1 
            changeTostep2={changeHowtoS2}
            changeContentS2={changeContentS2}
            />)
    }

    function changeHowtoS2(){
        setHowto(<HowtoS2 />);
    }
    function changeContentS2(sport){
        setContent(<ContentS2 sport={sport} changeTostep3={changeHowtoS3} changeContentS3={changeContentS3}/>);
    }
    function changeHowtoS3(){
        setHowto(<HowtoS3 />);
    }
    function changeContentS3(data){
        setContent(<ContentS3 data={data}/>)
    }

    


    return(
        <Layout>
            <div>
                <div className='page_title'>
                    <h1>Booking</h1>
                </div>

                <div className='page_body h-[90vh]'>
                    <div className='bodyHowTo'>
                        <h1>how to book</h1>
                        {Howto}
                    </div>

                    <div className='bodyContent'>
                        <h1>Content</h1>
                        {Content}
                    </div>

                    <div className='bodySummary'>
                        <h1>Summary</h1>
                        {Summary}
                    </div>
                </div>

                <div >
                    <div className='page_footer flex justify-between'>
                        <button className='bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform' onClick={handleNext}>Booking</button>
                        {/* <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform' onClick={handleNext}>Next Step</button> */}
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export default Booking