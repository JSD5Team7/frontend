import { createContext,useState,useEffect} from 'react'
import './Booking.css'
import HowtoS1 from './HowtoS1';
import ContentS1 from './ContentS1';
import ContentS2 from './ContentS2';
import SummaryS1 from './SummaryS1';
import HowtoS2 from './HowtoS2';
import HowtoS3 from './HowtoS3';
import ContentS3 from './ContentS3';
import Layout from '../../Layout/Layout';
import HowtoS4 from './HowtoS4';
import ContentS4 from './ContentS4';
import { useNavigate } from 'react-router-dom';

const CustomContext = createContext({});

function Booking(){

    const navigete = useNavigate()
    const idtoken = localStorage.token
    console.log(idtoken)
    if (idtoken) {
      
    } 
    
    const [Howto,setHowto] = useState(<HowtoS1 />);
    const [Content,setContent] = useState(<ContentS1 
                                            changeTostep2={changeHowtoS2}
                                            changeContentS2={changeContentS2}
                                            />);
    const [Summary,setSummary] = useState(<SummaryS1 />);
    //state นี้เป็นชุดข้อมูลใหญ่ที่ทำการเก็บข้อมูลการจองทั้งหมดไว้ ใช้ในการ booking ทั้งหมด
    //เพื่อการ back หรือ forword และสรุปจบ
    const [bookdata,setbookdata] = useState(
        {
            user:"",
            sport:"",
            location:"",
            day:"",     //[today,tomoror]
            date:"",
            time:"",    //[time]
            coach:"",
            who:{
                id:"",
                name:"",
                image:"",
                des:""
            },
            activity:"",
            fname:"",
            lname:"",
            phone:"",
            desc:""
        });

    useEffect(()=>{

    },[])

    function handleNext(){
        setHowto(<HowtoS1 />)
        setContent(<ContentS1 
            changeTostep2={changeHowtoS2}
            changeContentS2={changeContentS2}
            />)
    }

    function changeHowtoS1(){
        setHowto(<HowtoS1 />);
    }
    function changeContentS1(){
        setContent(
            <ContentS1 
                changeTostep2={changeHowtoS2}
                changeContentS2={changeContentS2}
                />
        );
    }
    function changeHowtoS2(){
        setHowto(<HowtoS2 />);
    }
    function changeContentS2(sport){
        setContent(<ContentS2   sport={sport} 
                                changeTostep3={changeHowtoS3} 
                                changeContentS3={changeContentS3} //Next

                                changeHowtoS1={changeHowtoS1}
                                changeContentS1={changeContentS1} //Back
                                />);
    }
    function changeHowtoS3(){
        setHowto(<HowtoS3 />);
    }
    function changeContentS3(data){
        setContent(<ContentS3 data={data}
                    changeTostep2={changeHowtoS2}
                    changeContentS2={changeContentS2} //Back

                    changeTostep4={changeHowtoS4}
                    changeContentS4={changeContentS4}
                    />)
    }
    function changeHowtoS4(){
        setHowto(<HowtoS4 />)
    }

    function changeContentS4(){
        setContent(<ContentS4 
                changeHowtoS1={changeHowtoS1}
                changeContentS1 = {changeContentS1}

                changeHowtoS3={changeHowtoS3}
                changeContentS3={changeContentS3}

                    />)
    }
    return(
        <Layout>
            <CustomContext.Provider
            value={{
                bookdata:bookdata,
                setbookdata:setbookdata
            }}
                >
            <div className='mt-20'>
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
        </CustomContext.Provider>
        </Layout>

    );
}


export default Booking
export {CustomContext};