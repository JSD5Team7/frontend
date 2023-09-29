import { useState,useEffect} from 'react'
import courtTennislogo from './img/tennis-court.png'
import courtBad from './img/badminton-court.png'
import roomYoga from './img/yoga_room.png'
const getTennis = [
    {
        id:1,
        sportType:"tennis",
        court:"1"
    },
    {
        id:2,
        sportType:"tennis",
        court:"2"
    },
    {
        id:3,
        sportType:"tennis",
        court:"3"
    }
]
const getBadminton = [
    {
        id:1,
        sportType:"badminton",
        court:"1"
    },
    {
        id:2,
        sportType:"badminton",
        court:"2"
    },
    {
        id:3,
        sportType:"badminton",
        court:"3"
    },
    {
        id:4,
        sportType:"badminton",
        court:"4"
    },
    {
        id:5,
        sportType:"badminton",
        court:"5"
    },
]

const getYoga = [
    {
        id:1,
        sportType:"yoga",
        court:"1"
    }
]
const date_init = [
    { id:1,time: '06.00-07.00', status: '' },
    { id:2,time: '07.00-08.00', status: '' },
    { id:3,time: '08.00-09.00', status: '' },
    { id:4,time: '09.00-10.00', status: '' },
    { id:5,time: '10.00-11.00', status: '' },
    { id:6,time: '11.00-12.00', status: '' },
    { id:7,time: '12.00-13.00', status: '' },
    { id:8,time: '13.00-14.00', status: '' },
    { id:9,time: '14.00-15.00', status: '' },
    { id:10,time: '15.00-16.00', status: '' },
    { id:11,time: '16.00-17.00', status: '' },
    { id:12,time: '17.00-18.00', status: '' },
    { id:13,time: '18.00-19.00', status: '' },
    { id:14,time: '19.00-20.00', status: '' },
    { id:15,time: '20.00-21.00', status: '' },
    { id:16,time: '21.00-22.00', status: '' },
    { id:17,time: '22.00-23.00', status: '' }
];

const date_today = [
    { id:1,time: '06.00-07.00', status: 'none' },
    { id:2,time: '07.00-08.00', status: 'none' },
    { id:3,time: '08.00-09.00', status: 'available' },
    { id:4,time: '09.00-10.00', status: 'available' },
    { id:5,time: '10.00-11.00', status: 'available' },
    { id:6,time: '11.00-12.00', status: 'available' },
    { id:7,time: '12.00-13.00', status: 'available' },
    { id:8,time: '13.00-14.00', status: 'available' },
    { id:9,time: '14.00-15.00', status: 'available' },
    { id:10,time: '15.00-16.00', status: 'available' },
    { id:11,time: '16.00-17.00', status: 'available' },
    { id:12,time: '17.00-18.00', status: 'none' },
    { id:13,time: '18.00-19.00', status: '' },
    { id:14,time: '19.00-20.00', status: '' },
    { id:15,time: '20.00-21.00', status: 'available' },
    { id:16,time: '21.00-22.00', status: 'available' },
    { id:17,time: '22.00-23.00', status: 'available' }
];

const date_tomorrow = [
    { id:1,time: '06.00-07.00', status: 'available' },
    { id:2,time: '07.00-08.00', status: 'available' },
    { id:3,time: '08.00-09.00', status: 'available' },
    { id:4,time: '09.00-10.00', status: 'available' },
    { id:5,time: '10.00-11.00', status: 'available' },
    { id:6,time: '11.00-12.00', status: 'available' },
    { id:7,time: '12.00-13.00', status: 'available' },
    { id:8,time: '13.00-14.00', status: 'available' },
    { id:9,time: '14.00-15.00', status: 'available' },
    { id:10,time: '15.00-16.00', status: 'available' },
    { id:11,time: '16.00-17.00', status: 'available' },
    { id:12,time: '17.00-18.00', status: 'available' },
    { id:13,time: '18.00-19.00', status: 'available' },
    { id:14,time: '19.00-20.00', status: 'available' },
    { id:15,time: '20.00-21.00', status: '' },
    { id:16,time: '21.00-22.00', status: 'available' },
    { id:17,time: '22.00-23.00', status: 'available' }
];

const AvableCoachsTennis = [
    {
        id:1,
        name:"kru pp",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuNkPErNoNsBARXtXC6xwgpybAhySfGUPUg&usqp=CAU",
        des:"fast"
    },
    {
        id:2,
        name:"kru jame",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuNkPErNoNsBARXtXC6xwgpybAhySfGUPUg&usqp=CAU",
        des:"smart"
    },
    {
        id:3,
        name:"kru nont",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuNkPErNoNsBARXtXC6xwgpybAhySfGUPUg&usqp=CAU",
        des:"friend"
    },
    {
        id:4,
        name:"kru nana",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuNkPErNoNsBARXtXC6xwgpybAhySfGUPUg&usqp=CAU",
        des:"big think"
    },
];

const AvableCoachsBadminton = [
    {
        id:1,
        name:"kru pp_badminton",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuNkPErNoNsBARXtXC6xwgpybAhySfGUPUg&usqp=CAU",
        des:"fast"
    },
    {
        id:2,
        name:"kru jame_badminton",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuNkPErNoNsBARXtXC6xwgpybAhySfGUPUg&usqp=CAU",
        des:"smart"
    },
];

const AvableCoachsYoga = [
    {
        id:1,
        name:"kru Goland_yoga",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-YZtDIDmOGsFAsQCXIqc0wA-8jNIUuWInQ&usqp=CAU",
        des:"fast"
    }
];


function ContentS2({sport,changeTostep3,changeContentS3}) {
    const [data,setdata] = useState([]);
    const [logo,setlogo] = useState();
    const [selectCourt,setselectCourt] = useState({court:"",sportype:sport});
    const [selectday,setselectday] = useState({day:""});
    const [selectTime,setselectTime] = useState({id:"",time:""});
    const [showTime,setshowTime] = useState(date_init);
    const [selectcoach,setselectcoach] = useState({status:"btn_Nocoach"});
    const [selectwho,setselectwho] = useState({id:"",name:"",des:""})
    const [dataCoach,setdataCoach] = useState([]); 

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

    const handelcourt=(id,sport)=>{
        setselectCourt({court:id,})
    }
    const handleDay=(e,day)=>{
        setselectday({day:day})
        // const btn = e.target.id;
        // console.log(btn)
        switch(day){
            case "btn_day":
                // setshowTime(<ObjShowtime propdata={date_today}/>);
                setshowTime(date_today);
                break;
            case "btn_tow":
                // setshowTime(<ObjShowtime propdata={date_tomorrow}/>);
                setshowTime(date_tomorrow);
                break;
        }
    }
    const handleTime=(time)=>{
        // console.log(`select:${time.id} and ${time.time}`)
        setselectTime({id:time.id,time:time.time});
    };
    const handleCoach=(status)=>{
        switch(status){
            case "btn_coach":
                setselectcoach({status:"btn_coach"});
                switch(sport){
                    case "tennis":
                        setdataCoach(AvableCoachsTennis);
                        break;
                    case "badminton":
                        setdataCoach(AvableCoachsBadminton);
                        break;
                    case "yoga":
                        setdataCoach(AvableCoachsYoga);
                        break;
                }
                
                break;
            case "btn_Nocoach":
                setselectcoach({status:"btn_Nocoach"});
                setdataCoach([]);
                setselectwho({});
                break;
        }
    }
    const handleWho=(coach)=>{
        // console.log(`coach:  ${coach.name} ${coach.id}`);
        setselectwho({id:coach.id,name:coach.name,des:coach.des})
    }
    const handleNext=()=>{
        const getDataPage2 = {
            getSport:sport,
            getCourt:selectCourt.court,
            getDay:selectday.day,
            getTime:selectTime,
            getCoach:selectcoach.status,
            getWho:selectwho
        };
        //console.log(getDataPage2);
        console.log("Next")
        changeTostep3();
        changeContentS3(getDataPage2);
        
    }

    useEffect(()=>{
        switch(sport){
            case "tennis":
                setdata(getTennis);
                setlogo(courtTennislogo);
                break;
            case "badminton":
                setdata(getBadminton);
                setlogo(courtBad);
                break;
            case "yoga":
                setdata(getYoga);
                setlogo(roomYoga);
                break;
        }

    },[]);  

    return(
        <>
        <div>
            <div>
                <h1>SPORT: {sport}</h1>
            </div>

            <div className='m-2 grid grid-cols-3 gap-3'>
                {data.map((eachcourt)=>( 
                    <div>
                        <button className={selectCourt.court==eachcourt.court? btn_select:btn_def} onClick={()=>handelcourt(eachcourt.id,eachcourt.sportType)}>
                            <img src={logo} alt="" />
                            <span className='ms-2'>{eachcourt.court}</span>
                        </button>
                    </div>
                ))}
            </div>

            <div >
                <div >
                    <div className="inline-flex">
                        <button id='btn_day' className={selectCourt.court!=""?((selectday.day=="btn_day")? btn_day:btn_defDayL):btn_NotAva} onClick={(e)=>handleDay(e,"btn_day")}>
                            To day
                        </button>
                        <button id='btn_tow' className={selectCourt.court!=""?((selectday.day=="btn_tow")? btn_day:btn_defDayR):btn_NotAva} onClick={(e)=>handleDay(e,"btn_tow")}>
                            Tomorrow
                        </button>
                        </div>
                    </div>
                    <div>
                        <div className='m-2 grid grid-cols-4 gap-3'>
                            {showTime.map((eachTime)=>(
                            <div >
                                <button className={eachTime.status == "available"? (selectTime.id==eachTime.id?btn_dateSelect:btn_dateAva):btn_dateNotAva} onClick={()=>handleTime(eachTime)}>
                                    <span>{eachTime.time}</span>
                                </button>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            <div/>

            <div>
                <div className="inline-flex">
                    <button className={selectTime.time!=""?((selectcoach.status=="btn_coach")? btn_day:btn_defDayL):btn_NotAva} 
                    onClick={()=>handleCoach("btn_coach")}> 
                        <span>Coach</span> 
                    </button>
                    <button className={selectTime.time!=""?((selectcoach.status=="btn_Nocoach")? btn_day:btn_defDayL):btn_NotAva}
                    onClick={()=>handleCoach("btn_Nocoach")}>
                        <span>No Coach</span>
                    </button>
                </div>

                <div className="flex justify-center m-3">
                    <div className="h-80 w-96 overflow-auto border-solid border-2 border-gray-500 rounded-md">
                        {dataCoach.map((eachcoach)=>(
                            <a href="#" className={selectwho.id==eachcoach.id?card_selected:card_Ava} onClick={()=>handleWho(eachcoach)}>
                                <img src={eachcoach.image} alt="" className='h-16 w-16 rounded-full'/>
                                <div className='flex flex-col justify-center'>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight :text-black"><span>{eachcoach.name}</span></h2>
                                    <p className="font-normal text-gray-700 dark:text-gray-400"><span>{eachcoach.des}</span></p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>

            <div className="m-10 flex justify-end">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleNext()}>Next</button>
            </div>
            
        </div>
    </>
    );
}

export default ContentS2;