import { createContext,useContext,useState,useEffect} from 'react'
import {CustomContext} from './Booking'


// {
//     sport:"",
//     day:"",     //[today,tomoror]
//     time:"",    //[time]
//     coach:"",
//     who:{
//         id:"",
//         name:"",
//         image:"",
//         des:""
//     }
// }

function SummaryS1(){
    const contextValue = useContext(CustomContext)

    return (
        
        <div>
            <h1>Customer:<span>{contextValue.bookdata.user}</span> </h1>
            <h1>{contextValue.bookdata.sport}</h1>
            <h1>Location: {contextValue.bookdata.location}</h1>
            <h1>{contextValue.bookdata.day}</h1>
            <h1>{contextValue.bookdata.date}</h1>
            <h1>{contextValue.bookdata.time}</h1>
            <h1>{contextValue.bookdata.coach}</h1>

            <h1>{contextValue.bookdata.who.id}</h1>
            <h1>{contextValue.bookdata.who.name}</h1>
            <h1>{contextValue.bookdata.who.image}</h1>
            <h1>{contextValue.bookdata.who.des}</h1>

            <h1>{contextValue.bookdata.activity}</h1>
            <h1>{contextValue.bookdata.fname}</h1>
            <h1>{contextValue.bookdata.lname}</h1>
            <h1>{contextValue.bookdata.phone}</h1>
            <h1>{contextValue.bookdata.desc}</h1>
        </div>
        
    );
}

export default SummaryS1;