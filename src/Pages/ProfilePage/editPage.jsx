import { useState,useEffect} from 'react'
import axios from 'axios';

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

const inputStyle = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const inputStyleDis = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline";
const label = "flex text-sm font-medium mb-2 text-gray-900";
const inputDesc = "resize-none h-full mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const statusInit = true;
        const date_init = [
                {
                "startTime": "06:00",
                "endTime": "07:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "07:00",
                "endTime": "08:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "08:00",
                "endTime": "09:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "09:00",
                "endTime": "10:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "10:00",
                "endTime": "11:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "11:00",
                "endTime": "12:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "12:00",
                "endTime": "13:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "13:00",
                "endTime": "14:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "14:00",
                "endTime": "15:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "15:00",
                "endTime": "16:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "16:00",
                "endTime": "17:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "17:00",
                "endTime": "18:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "18:00",
                "endTime": "19:00",
                "isBooked": statusInit
              },
              {
                "startTime": "19:00",
                "endTime": "20:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "20:00",
                "endTime": "21:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "21:00",
                "endTime": "22:00",
                "isBooked": statusInit,
                "Booker": ""
              },
              {
                "startTime": "22:00",
                "endTime": "23:00",
                "isBooked": statusInit,
                "Booker": ""
              }
        ];

function editPage({tx_id,handleEndEdit,type}){
    const baseApi = "http://localhost:3000";
    // https://sportclubbackend.onrender.com
    const [datacourt,setDataCourt] = useState([]);
    const [showTime,setshowTime] = useState(date_init);
    const [dataCoach,setdataCoach] = useState([]);
    const getCourt = async(path) =>{
        try {
            const res = await axios.get(`${baseApi}/${path}/${getDate("today")}`);
            const data = res.data;
            setDataCourt(data);
            return;
        } catch (error) {
            console.log({measage:error.measage});
            return;
        }
    };
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
    };

    useEffect(()=>{
        console.log(tx_id);
        console.log(type);
        switch(type){
            case "tennis":
                getCourt("tennisCourt")
                // setlogo(courtTennislogo);
                break;
            case "badminton":
                getCourt("badmintonCourt")
                // setlogo(courtBad);
                break;
            case "tabletennis":
                getCourt("tabletennisCourt");
                // setlogo(table);
                break;
            case "yoga":
                getCourt("yogaCourt");
                // setlogo(roomYoga);
                break;
            case "aerobic":
                getCourt("aerobicCourt");
                // setlogo(location);
                break;
        }


    },[]);

    function handleBack(){
        handleEndEdit();
    }
    function handleSave(){
        console.log("save")

    }

    return(
        <div>
            <div className='flex flex-row justify-around'>
                <div>
                    <div>
                        <h1>Type:{type} #_id: {tx_id}</h1>
                    </div>
                    <div className='flex'>
                        {datacourt.map((eachcourt)=>( 
                            <div>
                                <button className={btn_def} onClick={()=>handelcourt(eachcourt.courtNumber,sport)}>
                                    {/* <img src={logo} alt="" /> */}
                                    <span className='ms-2'>{eachcourt.courtNumber}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='my-4' >
                            <div className="inline-flex">
                                <button id='btn_day' className={btn_select} onClick={(e)=>handleDay(e,"btn_day")}>
                                    {getDate("btn_day")}
                                </button>
                                <button id='btn_tow' className={btn_NotAva} onClick={(e)=>handleDay(e,"btn_tow")}>
                                    {getDate("btn_tow")}
                                </button>
                            </div>

                        </div>

                        <div>
                            <div className='grid grid-cols-4 gap-4'>
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
                <div>
                    <div className="inline-flex">
                        <button className={btn_defDayL} 
                        onClick={()=>handleCoach(true)}> 
                            <span>Coach</span> 
                        </button>
                        <button className={btn_defDayR}
                        onClick={()=>handleCoach(false)}>
                            <span>No Coach</span>
                        </button>
                    </div>
                    <div className='h-60 overflow-auto'>
                        <div className="flex justify-center m-3">
                            <div className="grid grid-cols-3 gap-3">
                            {/* overflow-auto border-solid border-2 border-gray-500 rounded-md */}
                                {dataCoach.map((eachcoach)=>(
                                    <a className={card_Ava} onClick={()=>handleWho(eachcoach)}>
                                        {/* <img src={eachcoach.image} alt="" className='h-14 w-14 rounded-full'/> */}
                                        <div className='flex flex-col justify-center bg-green'>
                                            <h2 className="mb-2 text-2xl font-bold tracking-tight :text-black"><span>{eachcoach.name}</span></h2>
                                            <p className="font-normal text-gray-700 dark:text-gray-400"><span>{eachcoach.des}</span></p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>  
                    </div>
                </div>
                </div>

                <div className=''>
                  <h1>Information</h1>
                    <div>
                        <label class={label}>Activity name</label>
                        <input type="text" id="activity" className={inputStyle} placeholder="Activity" value={""} onChange={
                            (e)=>contextValue.setbookdata((previousState)=>{ 
                                return {...previousState,activity:e.target.value}
                            })}/>
                    </div>

                    <div class="grid gap-1 md:grid-cols-3">
                        <div>
                            <label for="first_name" class={label}>First name</label>
                            <input type="text" id="first_name" class={inputStyle} placeholder="John" value={""} 
                            // onChange={
                            //     (e)=>contextValue.setbookdata((previousState)=>{ 
                            //         return {...previousState,fname:e.target.value}
                            //     })}
                            required/>
                        </div>
                        <div>
                            <label for="last_name" class={label}>Last name</label>
                            <input type="text" id="last_name" class={inputStyle} placeholder="Doe" value={""} 
                            // onChange={
                            //     (e)=>contextValue.setbookdata((previousState)=>{ 
                            //         return {...previousState,lname:e.target.value}
                            //     })}
                                required/>
                        </div>
                        <div>
                            <label for="phone" class={label}>Phone number</label>
                            <input type="tel" id="phone" class={inputStyle} placeholder="098xxxx123" pattern="[0-9]{10}" value={""} 
                            // onChange={
                            //     (e)=>contextValue.setbookdata((previousState)=>{ 
                            //         return {...previousState,phone:e.target.value}
                            //     })} 
                                required/>
                        </div>
                        
                    </div>
                    <div className="h-32"> 
                        <label class={label}>Description</label>
                        <textarea type="message" id="message" placeholder="description How can we help you?" className={inputDesc} value={""} 
                        // onChange={
                        //     (e)=>contextValue.setbookdata((previousState)=>{ 
                        //         return {...previousState,desc:e.target.value}
                        //     })}
                            />

                    </div>
            </div>
        </div>
            
            <div className="mb-10 flex justify-between">
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleSave()}>Save</button>
            </div>
        </div>
    );
}

export default editPage;