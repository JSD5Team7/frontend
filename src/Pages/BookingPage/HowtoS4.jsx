import { useContext,useState,useEffect} from 'react'
import {CustomContext} from './Booking'
import ImgSummary from './img/summary.png'


function HowtoS4(){
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                <img className='m-5' src={ImgSummary} alt="" />
                <h1>Summary</h1>
                <h3>ขั้นตอนที่ 4:สรุปข้อมูลการลงทะเบียน</h3>
                <h3>STEP 4 Booking Infomation</h3>
            </div>
            
        </div>
    );
}

export default HowtoS4;