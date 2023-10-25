import { useState,useEffect} from 'react'
import Imag_book from "./img/booking-online_64.png"

function HowtoS1(){
    return(
        <div>
            <div className='flex items-center justify-center flex-col '>
                <img className='m-5' src={Imag_book} alt="" />
                <h3>ขั้นตอนที่ 1:เลือกชนิดกีฬา</h3>
                <h3>STEP 1 Choose Sport</h3>
            </div>
        </div>
        
    );

}

export default HowtoS1