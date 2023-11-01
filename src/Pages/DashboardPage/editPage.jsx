import { useState,useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import Layout from '../../Layout/Layout';
import useAPI_2 from '../../Hook/useAPI_2.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const btn_def = "flex items-center justify-left w-45 h-25 inline-flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
const btn_select = "flex items-center justify-left w-45 h-25 inline-flex bg-green-500  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow outline-none transform active:scale-75 transition-transform"
const btn_defDayL = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
const btn_defDayR = "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r shadow outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
const btn_day = "bg-green-300 text-gray-800 font-bold py-2 px-4 rounded"
const btn_dateAva = "w-30 bg-green-300 hover:bg-green-500 text-back font-bold py-2 px-4 border border-green-700 rounded"
const btn_dateNotAva = "w-30 bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 pointer-events-none"
const btn_dateSelect = "w-30 bg-green-900 text-back font-bold py-2 px-4 border border-green-700 rounded"

const btn_NotAva = "w-30 bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 pointer-events-none"

const card_Ava = "flex flex-row block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
const card_selected = "flex flex-row block max-w-sm p-6 bg-green-300 border border-gray-200 rounded-lg shadow"

const inputStyle = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const inputStyleDis = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline";
const label = "flex text-sm font-medium mb-2 text-gray-900 text-1xl";
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

function editPage(){
    const { editTxActivity } = useAPI_2();
    const navigate = useNavigate();
    const userid = localStorage.userId
    const { tx_id } = useParams();
    const { type } = useParams();
    const baseApi = import.meta.env.VITE_BACKEND_URL;
    // https://sportclubbackend.onrender.com
    const [bookdata,setbookdata] = useState({
                tx_id:tx_id,
                user:userid,
                sport:type,
                location:"",
                date:"",
                time:"",    //[time]
                coachId:"",
                iscoach:"",
                coachName:"",
                activity:"",
                information:{
                    user_id:"",
                    fname:"",
                    lname:"",
                    phone:"",
                    desc:""
                }
    });
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
            // console.log({measage:error.measage});
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

    const getTxAct = async (tx_id,type,userid)=>{
        try {
            const res =  await axios.get(`${baseApi}/activity/${tx_id}`);
            // console.log(tx_id);
            const data = res.data;
            // console.log(data);
            setbookdata(data);
            setbookdata((previousState)=>{
                return {...previousState,tx_id:tx_id,user:userid,sport:type}
            });
            return;
        } catch (error) {
            console.log({measage:error.measage});
            return;
        }
    }
    const handelcourt=(id)=>{
        setbookdata((previousState)=>{ 
            return {...previousState,location:id}
        });
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
        // console.log(sport , path)
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
    const handleDay=(e,day)=>{
        setbookdata((previousState)=>{ 
            return {...previousState,day:day}
        });
        switch(day){
            case "btn_day":
                const date_today = getDate("btn_day");
                //show time button
                TimeWithCourt(type,bookdata.location,date_today);

                //update date
                setbookdata((previousState)=>{
                    return {...previousState,date:date_today}
                });
                break;
            case "btn_tow":
                const date_tomr = getDate("btn_tow");
                // console.log(date_tomr);
                //show time button
                TimeWithCourt(type,bookdata.location,date_tomr);
                
                //update date
                setbookdata((previousState)=>{
                    return {...previousState,date:date_tomr}
                });
                break;
        }
    }
    const ISODate = (fdate)=>{
        // console.log("fdate:"+ fdate);
        // console.log(bookdata);
        const date_format = fdate.split('T')[0]
        return date_format;
    }
    const handleTime=(eachTime)=>{
        // console.log(`select:${time.id} and ${time.time}`)
        //update data context booking
        setbookdata((previousState)=>{ 
            return {...previousState,time:eachTime.startTime}
        });
    };
    const CoachList = async (type,date,Stime,whoid)=>{
        //get coach is avalible only,then isBooking = false.
        try {
            // console.log(type,date,Stime,whoid);
            let _sport = type;
            if(type == "tabletennis"){
                _sport = "table_tennis"
            }else if(type == "aerobic"){
                _sport = "aerobic_dance"
            }
            //for api find who avaible and old who booked
            const res = await axios.get(`${baseApi}/coachList/${_sport}/${date}/${Stime}/${whoid}`);
            const coach = res.data;
            // console.log(coach);
            setdataCoach(coach);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
    const handleCoach=(status)=>{
        switch(status){
            case true:
                CoachList(type,bookdata.date,bookdata.time,bookdata.coachId);
                        //update data context booking
                setbookdata((previousState)=>{ 
                    return {...previousState,iscoach:status}
                });
                break;
            case false:
                setdataCoach([]);
                setbookdata((previousState)=>{ 
                    return {...previousState,iscoach:status,coachName:""}
                });
                break;
        }
    }
    const handleWho=(coach)=>{
        //console.log(`coach:  ${coach.name} ${coach.id}`);
        setbookdata((previousState)=>{ 
            return {...previousState,coachId:coach.id,coachName:coach.name}
        });
    }
   
    function handleNext(){
        event.preventDefault();
        const data = 
        {
            "tx_id":bookdata.tx_id,
            "type":bookdata.sport,
            "location":bookdata.location,
            "date":bookdata.date,
            "day":bookdata.day,
            "time":bookdata.time,
            "iscoach":bookdata.iscoach,
            "coachId":bookdata.coachId,
            "coachName":bookdata.coachName,
            "activity":bookdata.activity,
            "information":{
                "user_id":bookdata.information.user_id,
                "fname":bookdata.information.fname,
                "lname":bookdata.information.lname,
                "phone":bookdata.information.phone,
                "desc":bookdata.information.desc
            }
        }
        try {
            // console.log(data);
            editTxActivity(data).then((res)=>{
                // console.log(res.data);
                if(res.data.success == true){
                    toast.success('Edit Success', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    setTimeout(() => {
                        navigate("/dashboard");
                        }, 2500);
                       
                }else{
                    toast.error('Sorry Edit error,please', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            })
            
        } catch (error) {
            console.log(error);
        }
        
    }
    const GetDisplayCourt = (type)=>{
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
    }

    useEffect(()=>{
        // console.log(tx_id);
        // console.log(type);
        // console.log(bookdata);
        try {
            //1.get court
            GetDisplayCourt(type);
            //2.get tz activity data
            getTxAct(tx_id,type,userid);
            //3.get time avalible
            // TimeWithCourt(type,bookdata.location,bookdata.date);
        } catch (error) {
            console.log("tx_data: " + error)
        }
    },[]);

    useEffect(()=>{
        TimeWithCourt(type,bookdata.location,bookdata.date);
    },[bookdata.location]);
    useEffect(()=>{
        if(bookdata.iscoach === true){
            handleCoach(true)
        }
    },[bookdata.time]);

    useEffect(()=>{
        // console.log(bookdata);
    },[bookdata]);

    function handleBack(){
        navigate("/dashboard");
    }
    function handleSave(){
        // console.log("save")
    }

    return(
        <Layout>
        <div className='my-10'>
            <ToastContainer />
            <div className='flex flex-col justify-center items-center lg:items-start h-fit lg:flex-row'>
                <div className='w-1/2'>
                    <div>
                        {/* <h1>Type:{type} #_id: {tx_id} :{bookdata.coachId}</h1> */}
                        <h1 className='text-2xl font-bold'>Location:</h1>
                    </div>
                    <div className='flex text-1xl gap-3'>
                        {datacourt.map((eachcourt)=>( 
                            <div>
                                <button className={bookdata.location==eachcourt.courtNumber? btn_select:btn_def} onClick={()=>handelcourt(eachcourt.courtNumber)}>
                                    {/* <img src={logo} alt="" /> */}
                                    <span className='p-1'>{eachcourt.courtNumber}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='my-4' >
                            <div>
                                <label className='text-2xl font-bold'>Date:</label>
                            </div>
                            <div className="inline-flex">
                                <button id='btn_day' className={bookdata.location!=""?((bookdata.date == getDate("btn_day"))? btn_day:btn_defDayL):btn_NotAva} onClick={(e)=>handleDay(e,"btn_day")}>
                                    {getDate("btn_day")}
                                </button>
                                <button id='btn_tow' className={bookdata.location!=""?((bookdata.date == getDate("btn_tow"))? btn_day:btn_defDayR):btn_NotAva} onClick={(e)=>handleDay(e,"btn_tow")}>
                                    {getDate("btn_tow")}
                                </button>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label className='text-2xl font-bold'>Time:</label>
                            </div>
                            <div className='grid grid-cols-4 gap-4'>
                                {showTime.map((eachTime)=>(
                                <div >
                                    <button className={eachTime.isBooked === false? (bookdata.time==eachTime.startTime?btn_dateSelect:btn_dateAva):btn_dateNotAva} onClick={()=>handleTime(eachTime)}>
                                        <span>{eachTime.startTime}-{eachTime.endTime} </span>
                                    </button>
                                </div>
                                ))}
                            </div>
                        </div>
                </div>
                <div>
                    <div>
                        <label className='text-2xl font-bold'>Coach:</label>
                    </div>
                    <div className="inline-flex my-5">
                        <button className={bookdata.time!=""?((bookdata.iscoach===true)? btn_day:btn_defDayL):btn_NotAva} 
                        onClick={()=>handleCoach(true)}> 
                            <span>Coach</span> 
                        </button>
                        <button className={bookdata.time!=""?((bookdata.iscoach===false)? btn_day:btn_defDayL):btn_NotAva}
                        onClick={()=>handleCoach(false)}>
                            <span>No Coach</span>
                        </button>
                    </div>
                    <div className='h-60 w-[900px]'>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-3 gap-3">
                            {/* overflow-auto border-solid border-2 border-gray-500 rounded-md */}
                                {dataCoach.map((eachcoach)=>(
                                    <a className={bookdata.coachId==eachcoach.id?card_selected:card_Ava} onClick={()=>handleWho(eachcoach)}>
                                        <img src={eachcoach.image} alt="" className='h-14 w-14 rounded-full'/>
                                        <div className='flex flex-col justify-center bg-green p-5'>
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

                <div className='w-1/2'>
                    <h1 className='text-2xl font-bold'>Information</h1>
                    <div>
                        <label class={label}>Activity name</label>
                        <input type="text" id="activity" className={inputStyle} placeholder="Activity" value={bookdata.activity} onChange={
                            (e)=>setbookdata((previousState)=>{ 
                                return {...previousState,activity:e.target.value}
                            })}/>
                    </div>
                    <div class="grid gap-1 md:grid-cols-3">
                        <div>
                            <label for="first_name" class={label}>First name</label>
                            <input type="text" id="first_name" class={inputStyle} placeholder="John" value={bookdata.information.fname} 
                            onChange={
                                (e)=>setbookdata((previousState)=>{ 
                                    return {...previousState,information:{...previousState.information,fname:e.target.value}}
                                })}
                            required/>
                        </div>
                        <div>
                            <label for="last_name" class={label}>Last name</label>
                            <input type="text" id="last_name" class={inputStyle} placeholder="Doe" value={bookdata.information.lname} 
                            onChange={
                                (e)=>setbookdata((previousState)=>{ 
                                    return {...previousState,information:{...previousState.information,lname:e.target.value}}
                                })}
                                required/>
                        </div>
                        <div>
                            <label for="phone" class={label}>Phone number</label>
                            <input type="tel" id="phone" class={inputStyle} placeholder="098xxxx123" pattern="[0-9]{10}" value={bookdata.information.phone} 
                            onChange={
                                (e)=>setbookdata((previousState)=>{ 
                                    return {...previousState,information:{...previousState.information,phone:e.target.value}}
                                })} 
                                required/>
                        </div>
                    </div>
                    <div className="h-32"> 
                        <label class={label}>Description</label>
                        <textarea type="message" id="message" placeholder="description How can we help you?" className={inputDesc} value={bookdata.information.desc} 
                        onChange={
                            (e)=>setbookdata((previousState)=>{ 
                                return {...previousState,information:{...previousState.information,desc:e.target.value}}
                            })}
                            />
                    </div>
            </div>
        </div>
        <form onSubmit={handleNext}>
            <div className="m-10 flex justify-between">
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                    <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform">Save Edit</button>
            </div>
        </form> 
        </div>
        </Layout>
    );
}

export default editPage;