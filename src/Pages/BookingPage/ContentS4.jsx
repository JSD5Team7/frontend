import { useContext,useState,useEffect} from 'react'
import {CustomContext} from './Booking'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

function ContentS4({changeHowtoS1,changeContentS1,changeHowtoS3,changeContentS3}){
    const [btnDisable,setbtnDisable] = useState(false);
    const navigate = useNavigate();
    const contextValue = useContext(CustomContext);
    const baseApi = import.meta.env.VITE_BACKEND_URL;
    // https://sportclubbackend.onrender.com
    function handleBack(){
        changeHowtoS3();
        changeContentS3();
    }
    function handleSumit(){
        try {
            //set disable button
            setbtnDisable(true);
            //
            const createTx = async ()=>{
                try {
                    await axios.post(`${baseApi}/activity/${contextValue.bookdata.sport}`,{
                        "type":contextValue.bookdata.sport,
                        "location":contextValue.bookdata.location,
                        "date":contextValue.bookdata.date,
                        "day":contextValue.bookdata.day,
                        "time":contextValue.bookdata.time,
                        "iscoach":contextValue.bookdata.coach,
                        "coachId":contextValue.bookdata.who.id,
                        "coachName":contextValue.bookdata.who.name,
                        "activity":contextValue.bookdata.activity,
                        "information":{
                            "user_id":contextValue.bookdata.user,
                            "fname":contextValue.bookdata.fname,
                            "lname":contextValue.bookdata.lname,
                            "phone":contextValue.bookdata.phone,
                            "desc":contextValue.bookdata.desc
                        }
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }); 
                    return true;
                } catch (error) {
                    console.log(error)
                    return error;
                }
                
            }
            //
            createTx();
            //summit commplete
            toast.success('Booking is complete.', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(() => {
                    navigate("/dashboard");
                  }, 2500);
        } catch (error) {
            console.log(error);
            toast.error('Sorry! failed Booking, I will check for you.', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            return false;
        }
    }

    return (
        <div>
            <ToastContainer />
            <div>
                <h1 className='text-2xl font-bold '>Summary Booking</h1>
            </div>
            <div>
                {/* <div className="text-2xl mb-10">
                    <label>User Name: {contextValue.bookdata.user}</label>
                </div> */}
                <div className='m-5 p-2 rounded-lg bg-slate-700'>
                    <div className='mb-5'>
                        <label className='text-2xl font-semibold text-white'>Sport: {contextValue.bookdata.sport}</label>
                    </div>
                    <div className="flex flex-row justify-center text-xl font-semibold text-white">
                        <div className="border-4 border-lime-500">
                            <label className='m-4'>Location: {contextValue.bookdata.location}</label>
                        </div>
                        <div className='border-4 border-lime-500'>
                            <label className='m-4'>Date: {contextValue.bookdata.date}</label>
                        </div>
                        <div className='border-4 border-lime-500'>
                            <label className='m-4'>Time: {contextValue.bookdata.time}</label>
                        </div>
                    </div>
                </div>
                <div className='m-5 p-2 rounded-lg bg-slate-700'>
                    <h1 className='text-2xl font-bold text-white'>Coach</h1>
                    <div className="flex flex-row justify-center text-white">
                        <img className='h-20 w-20 rounded ml-5' src={contextValue.bookdata.who.image} alt="" />
                        <div className="flex flex-col justify-center m-4">
                            <label className='border-4 border-red-500 p-1 text-xl font-bold'>Name: <span className='text-xl'>{contextValue.bookdata.who.name}</span> </label>
                        </div>
                    </div>
                </div>
                <div className='m-5 p-2 rounded-lg text-left bg-slate-700'>
                    <h1 className='text-2xl mb-2 font-bold text-white'>Activity:</h1>
                    <label className='text-xl text-white'>{contextValue.bookdata.activity}</label>
                </div>
                <div className='m-5 p-2 rounded-lg text-left bg-slate-700'>
                    <h1 className='text-2xl mb-2 font-bold text-white'>Information</h1>
                    <div className='flex flex-col text-left text-xl text-white'>
                        <label>First Name: {contextValue.bookdata.fname}</label>
                        <label>Last Name: {contextValue.bookdata.lname}</label>
                        <label>Phone: {contextValue.bookdata.phone}</label>
                        <label>Description: {contextValue.bookdata.desc}</label>
                    </div>
                    
                </div>

            </div>
            <div className="m-10 flex justify-between">
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                <button type="submit" disabled={btnDisable} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleSumit()}>Submit</button>
            </div>
        </div>
    );
}

export default ContentS4;