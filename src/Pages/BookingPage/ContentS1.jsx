import { createContext,useContext,useState,useEffect} from 'react'
import Tennis_logo from './img/tennis_2.png'
import Badminton_logo from './img/badminton_2.png'
import Yoga_logo from './img/yoga.png'
import Ping_pong from './img/ping-pong.png'
import Aerobic from './img/aerobic.png'
import {CustomContext} from './Booking'

const btn_sty = "flex items-center justify-left w-80 h-14 inline-flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"


// http://www.w3.org/2000/svg
function ContentS1({changeTostep2,changeContentS2}){
    const contextValue = useContext(CustomContext);
    const handleSport=(sport)=>{
        changeTostep2();
        changeContentS2(sport);
    }

    useEffect(()=>{
        //reset data
        const getUserName = "PP"

        contextValue.setbookdata((previousState)=>{
            return  {...previousState,
                user:getUserName,
                sport:"",
                location:"",
                day:"",     //[today,tomoror] //this point is dupication object for init value
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
                desc:""}
        });
    },[]);

    return (
        <div >
            <div className='m-2'>
                <button type="button" className={btn_sty} onClick={()=>handleSport("tennis")}>
                <img className='scale-50' src={Tennis_logo} alt="" />
                <div>
                    <span className='ms-2'>Tennis</span>
                </div>
                </button>
            </div>

            <div className='m-2'>
                <button type="button" className={btn_sty} onClick={()=>handleSport("badminton")}>
                <img className='scale-50' src={Badminton_logo} alt="" />
                <span className='ms-2'>Badminton</span> 
                </button>
            </div>
            <div className='m-2'>
                <button type="button" className={btn_sty} onClick={()=>handleSport("tabletennis")}>
                <img className='scale-50' src={Ping_pong} alt="" />
                <span className='ms-2'>Table tennis</span> 
                </button>
            </div>
            <div className='m-2'>
                <button type="button" className={btn_sty} onClick={()=>handleSport("yoga")}>
                <img className='scale-50' src={Yoga_logo} alt="" />
                <span className='ms-2'>Yoga</span> 
                </button>
            </div>
            <div className='m-2'>
                <button type="button" className={btn_sty} onClick={()=>handleSport("aerobic")}>
                <img className='scale-50' src={Aerobic} alt="" />
                <span className='ms-2'>Aerobic</span> 
                </button>
            </div>
            
        </div>
    );
}

export default ContentS1;