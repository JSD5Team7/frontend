import { useState,useEffect} from 'react'
import axios from 'axios';

function editPage(){
    return(
        <div>
            <div className='w-1/2'>
                <span>Gu edit</span>
                <input type="text" placeholder='name'/>
            </div>
        </div>
    );
}

export default editPage;