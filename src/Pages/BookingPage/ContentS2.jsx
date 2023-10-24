import { useContext,useState,useEffect} from 'react'
import courtTennislogo from './img/tennis-court.png'
import courtBad from './img/badminton-court.png'
import roomYoga from './img/yoga_room.png'
import table from './img/ping_pong.png'
import location from './img/location.png'
import {CustomContext} from './Booking'

import axios from 'axios';

function ContentS2({sport,changeTostep3,changeContentS3,changeHowtoS1,changeContentS1}) {
    const contextValue = useContext(CustomContext);
    const baseApi = import.meta.env.VITE_BACKEND_URL;
    // https://sportclubbackend.onrender.com
    const [data,setdata] = useState([]);
    const [logo,setlogo] = useState();
    const [selectCourt,setselectCourt] = useState({court:"",sportype:sport});
    const [selectday,setselectday] = useState({day:""});
    const [selectTime,setselectTime] = useState({id:"",time:""});
    const [showTime,setshowTime] = useState(contextValue.date_init_time);
    const [selectcoach,setselectcoach] = useState({status:"btn_Nocoach"});
    const [selectwho,setselectwho] = useState({id:"",name:"",des:""})
    const [dataCoach,setdataCoach] = useState([]); 

    const getCourt = async(path) =>{
        try {
            const res = await axios.get(`${baseApi}/${path}/${getDate("today")}`);
            const data = res.data;
            setdata(data);
            return;
        } catch (error) {
            console.log({measage:error.measage});
            return;
        }
    }
    const TimeWithCourt = async (sport,court,date)=>{
        // console.log("read: ",court);
        let path = "";
        switch(sport){
            case "tennis":
                path = "tennisCourt"
                break;
            case "badminton":
                path = "badmintonCourt"
                break;
            case "yoga":
                path = "yogaCourt"
                break;
            case "tabletennis":
                path = "tabletennisCourt"
                break;
            case "aerobic":
                path = "aerobicCourt"
                break;
        }
        console.log(sport , path)
        const res = await axios.get(`${baseApi}/${path}/${court}/${date}`);
        if(res.status ===200 && res.data){
            const time = res.data;
            // console.log(time);
            setshowTime(time);
            return true;
        }else{
            console.log(`error get`);
            return false;
        }
    }
    
    const CoachList = async (type,date,Stime)=>{
        //get coach is avalible only,then isBooking = false.
        try {
            console.log(type,date,Stime);
            const res = await axios.get(`${baseApi}/coachList/coachAva/${type}/${date}/${Stime}`);
            const coach = res.data;
            // console.log(coach);
            setdataCoach(coach);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(()=>{
        console.log(contextValue.date_init_time);
        console.log(sport);
        switch(sport){
            case "tennis":
                getCourt("tennisCourt")
                setlogo(courtTennislogo);
                break;
            case "badminton":
                getCourt("badmintonCourt")
                setlogo(courtBad);
                break;
            case "tabletennis":
                getCourt("tabletennisCourt");
                setlogo(table);
                break;
            case "yoga":
                getCourt("yogaCourt");
                setlogo(roomYoga);
                break;
            case "aerobic":
                getCourt("aerobicCourt");
                setlogo(location);
                break;
        }
        //init display time
        console.log(contextValue.bookdata.time)
        if(contextValue.bookdata.time !== ""){
            TimeWithCourt(sport,contextValue.bookdata.location,contextValue.bookdata.date);
        }else{
            setshowTime(contextValue.date_init_time);
        }
    },[]);

    //State Stytle
    const btn_def = "flex items-center justify-left w-45 h-25 inline-flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
    const btn_select = "flex items-center justify-left w-45 h-25 inline-flex bg-purple-300  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow outline-none transform active:scale-75 transition-transform hover:bg-purple-100"
    const btn_defDayL = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
    const btn_defDayR = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
    const btn_day = "bg-green-300 text-gray-800 font-bold py-2 px-4 rounded"
    const btn_dateAva = "w-30 bg-green-300 hover:bg-green-500 text-back font-bold py-2 px-4 border border-green-700 rounded"
    const btn_dateNotAva = "w-30 bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 pointer-events-none"
    const btn_dateSelect = "w-30 bg-purple-300 hover:bg-purple-100 text-back font-bold py-2 px-4 border border-green-700 rounded"

    const btn_NotAva = "w-30 bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 pointer-events-none"

    const card_Ava = "flex flex-row block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    const card_selected = "flex flex-row block max-w-sm p-6 bg-purple-300 border border-gray-200 rounded-lg shadow hover:bg-purple-100"

    const getDate =(day)=>{
        if(day == "btn_tow"){
            // tomorow
            const today = new Date(Date.now());
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            const year = tomorrow.getFullYear();
            const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
            const day = tomorrow.getDate().toString().padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;

        }else{
            //today
            const now = new Date(Date.now());
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
        }
    }


    const handelcourt=(id,sport)=>{
        setselectCourt({court:id,});

        //update data context booking
        contextValue.setbookdata((previousState)=>{ 
            return {...previousState,sport:sport,location:id}
        });
    }
    const handleDay=(e,day)=>{
        setselectday({day:day});
        contextValue.setbookdata((previousState)=>{ 
            return {...previousState,day:day}
        });

        switch(day){
            case "btn_day":
                const date_today = getDate("btn_day");
                //show time button
                TimeWithCourt(sport,contextValue.bookdata.location,date_today);

                //update date
                contextValue.setbookdata((previousState)=>{
                    return {...previousState,date:date_today}
                });
                break;
            case "btn_tow":
                const date_tomr = getDate("btn_tow");
                //show time button
                TimeWithCourt(sport,contextValue.bookdata.location,date_tomr);
                
                //update date
                contextValue.setbookdata((previousState)=>{
                    return {...previousState,date:date_tomr}
                });
                break;
        }
    }
    const handleTime=(eachTime)=>{
        // console.log(`select:${time.id} and ${time.time}`)
        setselectTime({time:eachTime.startTime});
        //update data context booking
        contextValue.setbookdata((previousState)=>{ 
            return {...previousState,time:eachTime.startTime}
        });
    };
    const handleCoach=(status)=>{
        switch(status){
            case true:
                setselectcoach({status:"btn_coach"});
                switch(sport){
                    case "tennis":
                        CoachList(sport,contextValue.bookdata.date,contextValue.bookdata.time);
                        //update data context booking
                        contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,coach:status}
                        });
                        break;
                    case "badminton":
                        CoachList(sport,contextValue.bookdata.date,contextValue.bookdata.time);
                        contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,coach:status}
                        });
                        break;
                    case "tabletennis":
                        CoachList(sport,contextValue.bookdata.date,contextValue.bookdata.time);
                        contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,coach:status}
                        });
                        break;
                    case "yoga":
                        CoachList(sport,contextValue.bookdata.date,contextValue.bookdata.time);
                        contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,coach:status}
                        });
                        break;
                    case "aerobic":
                        CoachList(sport,contextValue.bookdata.date,contextValue.bookdata.time);
                        contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,coach:status}
                        });
                        break;
                }
                break;
            case false:
                setselectcoach({status:"btn_Nocoach"});
                setdataCoach([]);
                setselectwho({});

                contextValue.setbookdata((previousState)=>{ 
                    return {...previousState,coach:status}
                });
                contextValue.setbookdata((previousState)=>{ 
                    return {...previousState,who:{id:"",name:"",des:"",image:""}}
                });
                break;
        }
    }
    const handleWho=(coach)=>{
        // console.log(`coach:  ${coach.name} ${coach.id}`);
        setselectwho({id:coach.id,name:coach.name,des:coach.des})
        contextValue.setbookdata((previousState)=>{ 
            return {...previousState,who:{id:coach.id,name:coach.name,des:coach.des,image:coach.image}}
        });
    }
    const handleNext=()=>{
        //console.log(getDataPage2);
        console.log("Next")
        changeTostep3();
        changeContentS3();
    }

    const handleBack =()=>{
        console.log("Back");
        changeHowtoS1();
        changeContentS1();
    }

    return(
        <div>
            <div>
                <h1>SPORT: {sport}</h1>
            </div>
            <div className='m-2 grid grid-cols-3 gap-3'>
                {data.map((eachcourt)=>( 
                    <div>
                        <button className={contextValue.bookdata.location==eachcourt.courtNumber? btn_select:btn_def} onClick={()=>handelcourt(eachcourt.courtNumber,sport)}>
                            <img src={logo} alt="" />
                            <span className='ms-2'>{eachcourt.courtNumber}</span>
                        </button>
                    </div>
                ))}
            </div>

            <div >
                <div >
                    <div className="inline-flex">
                        <button id='btn_day' className={contextValue.bookdata.location!=""?((contextValue.bookdata.day=="btn_day")? btn_day:btn_defDayL):btn_NotAva} onClick={(e)=>handleDay(e,"btn_day")}>
                            To day
                        </button>
                        <button id='btn_tow' className={contextValue.bookdata.location!=""?((contextValue.bookdata.day=="btn_tow")? btn_day:btn_defDayR):btn_NotAva} onClick={(e)=>handleDay(e,"btn_tow")}>
                            Tomorrow
                        </button>
                    </div>
                </div>

                <div>
                    <div className='m-2 grid grid-cols-4 gap-3'>
                        {showTime.map((eachTime)=>(
                        <div >
                            <button className={eachTime.isBooked === false? (contextValue.bookdata.time==eachTime.startTime?btn_dateSelect:btn_dateAva):btn_dateNotAva} onClick={()=>handleTime(eachTime)}>
                                <span>{eachTime.startTime}-{eachTime.endTime} </span>
                            </button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div/>

            <div>
                <div className="inline-flex">
                    <button className={contextValue.bookdata.time!=""?((contextValue.bookdata.coach===true)? btn_day:btn_defDayL):btn_NotAva} 
                    onClick={()=>handleCoach(true)}> 
                        <span>Coach</span> 
                    </button>
                    <button className={contextValue.bookdata.time!=""?((contextValue.bookdata.coach===false)? btn_day:btn_defDayL):btn_NotAva}
                    onClick={()=>handleCoach(false)}>
                        <span>No Coach</span>
                    </button>
                </div>
                <div className='h-60 overflow-auto'>
                    <div className="flex justify-center m-3">
                        <div className="grid grid-cols-3 gap-3">
                        {/* overflow-auto border-solid border-2 border-gray-500 rounded-md */}
                            {dataCoach.map((eachcoach)=>(
                                <a className={contextValue.bookdata.who.id==eachcoach.id?card_selected:card_Ava} onClick={()=>handleWho(eachcoach)}>
                                    <img src={eachcoach.image} alt="" className='h-14 w-14 rounded-full'/>
                                    <div className='flex flex-col justify-center '>
                                        <h2 className="mb-2 text-2xl font-bold tracking-tight :text-black"><span>{eachcoach.name}</span></h2>
                                        <p className="font-normal text-gray-700 dark:text-gray-400"><span>{eachcoach.des}</span></p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>  
                </div>
            </div>

            <div className="mb-10 flex justify-between">
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleNext()}>Next</button>
            </div>
        </div>
    );
}

export default ContentS2;