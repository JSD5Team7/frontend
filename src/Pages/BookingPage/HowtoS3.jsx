import { useState,useEffect} from 'react'
import Info_logo from './img/personal-information.png'

function HowtoS3(){
    return(
        <div>
            <div className='flex items-center justify-center flex-col'>
                <img className='m-5' src={Info_logo} alt="" />
                <h3>ขั้นตอนที่ 3:กรอกข้อมูลผู้ทำการจอง</h3>
                <h3>STEP 3 Information</h3>
            </div>
            
        </div>
    );
}

export default HowtoS3;

