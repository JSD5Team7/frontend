import { useState,useEffect} from 'react'

const data = {
    name:"pp",
    sport:"tennis",
    timeF:"6.00",
    timeT:"9.00"
};

function SummaryS1(){
    return (
        
        <div>
            <h3>Customer--------<span>{data.name}</span> </h3>
        </div>
        
    );
}

export default SummaryS1;