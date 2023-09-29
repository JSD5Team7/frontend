import { useState,useEffect} from 'react'


const inputStyle = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const inputStyleDis = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline";
const label = "flex text-sm font-medium mb-2 text-gray-900"
function ContentS3({data}){
    const [dataf2,setdataf2] = useState({});

    useEffect(()=>{
        console.log(data);
        // switch(data.getSport){
        //     case "tennis":

        //         break;
        //     case "badminton":
        //         break;
        //     case "yoga":
        //         break;
        // }
        // const date = new Date();
        // new Date(Date.now()).toLocaleString().split(',')[0]
        // new Date(Date.now()).toLocaleString();
        const today = new Date(Date.now()).toLocaleString().split(',')[0];
        // console.log(today);
        const preData = {
            sport:data.getSport,
            location:data.getCourt,
            date:today,
            time:data.getTime.time,
            coach:data.getWho.name
        }
        setdataf2(preData);
    },[]);


    return(
        <div>
            <div>
                <h5>Contract Information</h5>
            </div>
           <form className='p-5'>
                <div>
                        <div class="grid gap-1 md:grid-cols-2">
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Sport</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.sport} disabled/>
                            </div>
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Location</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.location} disabled/>
                            </div>
                        </div>
                        
                        <div class="grid gap-1 md:grid-cols-2">
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Date</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.date} disabled/>
                            </div>
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Time (From-To)</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.time} disabled/>
                            </div>
                        </div>
                        <div>
                            <label class="flex text-sm font-medium mb-2 text-gray-900">Coach</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.coach} disabled/>
                        </div>
                </div>
            <div class="grid gap-1 md:grid-cols-3">
                    <div>
                        <label for="first_name" class={label}>First name</label>
                        <input type="text" id="first_name" class={inputStyle} placeholder="John" required/>
                    </div>
                    <div>
                        <label for="last_name" class={label}>Last name</label>
                        <input type="text" id="last_name" class={inputStyle} placeholder="Doe" required/>
                    </div>
                    <div>
                        <label for="phone" class={label}>Phone number</label>
                        <input type="tel" id="phone" class={inputStyle} placeholder="1234567890" pattern="[0-9]{10}" required/>
                    </div>
                    <div>
                        <label for="visitors" class={label}>Visitors</label>
                        <input type="number" id="visitors" class={inputStyle} placeholder="" required/>
                    </div>

                </div>
            <div>
                <input class="flex items-center justify-left w-45 h-25 bg-blue-500 hover:bg-blue-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" type="submit" />
            </div>
           </form>
        </div>
    );
}

export default ContentS3;

