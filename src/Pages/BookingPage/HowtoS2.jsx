import { useState,useEffect} from 'react'
import meeting from './img/meeting.png'

function HowtoS2(){
    return (
        <div className='flex items-center justify-center flex-col'>
            <h2>Hi How to Step2</h2>
            <img src={meeting} alt="" />
            <h2>ขั้นตอนที่ 2:เลือกสนาม</h2>
            <h2>STEP 2:Choose Courts</h2>
        </div>
    );
}

export default HowtoS2;