import { useContext,useState,useEffect} from 'react'
import {CustomContext} from './Booking'
import axios from 'axios';

function ContentS4({changeHowtoS1,changeContentS1,changeHowtoS3,changeContentS3}){
    const contextValue = useContext(CustomContext);
    const baseApi = "https://localhost:3000";
    // https://sportclubbackend.onrender.com
    function handleBack(){
        changeHowtoS3();
        changeContentS3();
    }
    function handleSumit(){
        try {
            const createTx = async ()=>{
                await axios.post(`${baseApi}/activity`,{
                "tx_id":999,
                "type":contextValue.bookdata.sport,
                "location":contextValue.bookdata.location,
                "date":contextValue.bookdata.date,
                "time":contextValue.bookdata.time,
                "iscoach":contextValue.bookdata.coach,
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
            }
            // const data = JSON.stringify({
            //     "tx_id":1,
            //     "type":contextValue.bookdata.sport,
            //     "location":contextValue.bookdata.location,
            //     "date":contextValue.bookdata.date,
            //     "time":contextValue.bookdata.time,
            //     "iscoach":contextValue.bookdata.coach,
            //     "coachName":contextValue.bookdata.who.name,
            //     "activity":contextValue.bookdata.activity,
            //     "information":{
            //         "user_id":contextValue.bookdata.user,
            //         "fname":contextValue.bookdata.fname,
            //         "lname":contextValue.bookdata.lname,
            //         "phone":contextValue.bookdata.phone,
            //         "desc":contextValue.bookdata.desc
            //     }
            // })
            // console.log(data);
        
            createTx(); 
        } catch (error) {
            console.log(error.response.data);
            return false;
        }


        

    }

    return (
        <div>
            <div>
                <h1>Summary Booking</h1>
            </div>
            <div>
                {/* <div className="text-2xl mb-10">
                    <label>User Name: {contextValue.bookdata.user}</label>
                </div> */}
                <div className='border-dotted border-2 border-sky-500 m-5 p-2 rounded-lg'>
                    <div className='text-2xl mb-5'>
                        <label >Sport: {contextValue.bookdata.sport}</label>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className="border-double border-4 border-sky-500">
                            <label className='m-4'>Location: {contextValue.bookdata.location}</label>
                        </div>
                        <div className='border-double border-4 border-sky-500'>
                            <label className='m-4'>Date: {contextValue.bookdata.date}</label>
                        </div>
                        <div className='border-double border-4 border-sky-500'>
                            <label className='m-4'>Time: {contextValue.bookdata.time}</label>
                        </div>
                    </div>
                </div>
                
                
                <div className='border-dotted border-2 border-red-500 m-5 p-2 rounded-lg'>
                    <h1 className='text-2xl'>Coach</h1>
                    <div className="flex flex-row justify-center">
                        <img className='h-20 w-20 rounded ml-5' src={contextValue.bookdata.who.image} alt="" />
                        <div className="flex flex-col justify-center m-4">
                            <label className='border-double border-4 border-red-500 p-1'>Name: {contextValue.bookdata.who.name}</label>
                        </div>
                    </div>
                </div>
                <div className='border-dotted border-2 border-green-500 m-5 p-2 rounded-lg text-left'>
                    <h1 className='text-2xl mb-2'>Activity</h1>
                    <label>{contextValue.bookdata.activity}</label>
                </div>
                <div className=' border-dotted border-2 border-black m-5 p-2 rounded-lg text-left'>
                    <h1 className='text-2xl mb-2'>Information</h1>
                    <div className='flex flex-col text-left'>
                        <label>First Name: {contextValue.bookdata.fname}</label>
                        <label>Last Name: {contextValue.bookdata.lname}</label>
                        <label>Phone: {contextValue.bookdata.phone}</label>
                        <label>Description: {contextValue.bookdata.desc}</label>
                    </div>
                    
                </div>

            </div>
            

            <div className="m-10 flex justify-between">
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleSumit()}>Submit</button>
            </div>
        </div>
    );
}

export default ContentS4;