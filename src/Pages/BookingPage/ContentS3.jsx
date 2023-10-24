import { useContext,useState,useEffect} from 'react'
import {CustomContext} from './Booking'

const inputStyle = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const inputStyleDis = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline";
const label = "flex text-sm font-medium mb-2 text-gray-900";
const inputDesc = "resize-none h-full mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
function ContentS3({changeTostep2,changeContentS2,changeTostep4,changeContentS4}){
    const contextValue = useContext(CustomContext);

    // useEffect(()=>{        
    // },[]);

    function handleNext(){
        //summary page
        changeTostep4();
        changeContentS4();
    }

    function handleBack(){
        changeTostep2();
        changeContentS2(contextValue.bookdata.sport);
    }


    return(
        <div>
            <div>
                <h5>Contract Information</h5>
            </div>
           <form className='p-5' onSubmit={handleNext}>
                <div>
                        <div class="grid gap-1 md:grid-cols-2">
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Sport</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.sport} disabled/>
                            </div>
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Location</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.location} disabled/>
                            </div>
                        </div>
                        
                        <div class="grid gap-1 md:grid-cols-2">
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Date</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.date} disabled/>
                            </div>
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Time (From-To)</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.time} disabled/>
                            </div>
                        </div>
                        <div>
                            <label class="flex text-sm font-medium mb-2 text-gray-900">Coach</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.who.name} disabled/>
                        </div>
                </div>

                <div>
                    <label class={label}>Activity name</label>
                    <input type="text" id="activity" className={inputStyle} placeholder="Activity" value={contextValue.bookdata.activity} onChange={
                        (e)=>contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,activity:e.target.value}
                        })}/>
                </div>

                <div class="grid gap-1 md:grid-cols-3">
                    <div>
                        <label for="first_name" class={label}>First name</label>
                        <input type="text" id="first_name" class={inputStyle} placeholder="John" value={contextValue.bookdata.fname} onChange={
                            (e)=>contextValue.setbookdata((previousState)=>{ 
                                return {...previousState,fname:e.target.value}
                            })}
                        required/>
                    </div>
                    <div>
                        <label for="last_name" class={label}>Last name</label>
                        <input type="text" id="last_name" class={inputStyle} placeholder="Doe" value={contextValue.bookdata.lname} onChange={
                            (e)=>contextValue.setbookdata((previousState)=>{ 
                                return {...previousState,lname:e.target.value}
                            })}
                            required/>
                    </div>
                    <div>
                        <label for="phone" class={label}>Phone number</label>
                        <input type="tel" id="phone" class={inputStyle} placeholder="098xxxx123" pattern="[0-9]{10}" value={contextValue.bookdata.phone} onChange={
                            (e)=>contextValue.setbookdata((previousState)=>{ 
                                return {...previousState,phone:e.target.value}
                            })} 
                            required/>
                    </div>
                    
                </div>
                <div className="h-32 mb-10">
                    <label class={label}>Description</label>
                    <textarea type="message" id="message" placeholder="description How can we help you?" className={inputDesc} value={contextValue.bookdata.desc} onChange={
                        (e)=>contextValue.setbookdata((previousState)=>{ 
                            return {...previousState,desc:e.target.value}
                        })}
                        />

                </div>

            <div className="m-10 flex justify-between">
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform">Next</button>
            </div>

           </form>
        </div>
    );
}

export default ContentS3;

