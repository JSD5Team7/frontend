import { useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import useAPI_2 from '../../Hook/useAPI_2.jsx';

function history({user_id}){
    const [txList, setUsers] = useState([]);
    const navigate = useNavigate();
    const { deleteTxActivity } = useAPI_2();
    const baseApi = import.meta.env.VITE_BACKEND_URL;
    // https://sportclubbackend.onrender.com
    useEffect(()=>{
        //get history with user_id find to tx_activity
        try {
            const getHistory = async ()=>{
                const userid = localStorage.userId
                console.log(userid)
                const res = await axios.get(`${baseApi}/user/history/${userid}`);
                const data = res.data;
                // console.log(data);
                setUsers(data);
                return;
            }
            getHistory();
        } catch (error) {
            console.log({measage:error.measage});
            return;
        }
    },[]);
      const BTNhandleEdit = (tx_id,type) => {
        //tx_id
        // console.log(`Edit:${_id} ${type}`);
        navigate(`/editdashboard/${tx_id}/${type}`);
        return;
      };
    
      const handleDelete = (tx_id) => {
        //delete  
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteTxActivity(tx_id).then((res)=>{
                    console.log(res.data);
                });
            

              Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
            }
          })
        
      };
    return (
        <div>
            <div className="justify-center">
          {txList.map((txListEach) => (
            <div className='flex flex-col'>
                <div className="drop-shadow-lg m-10 border-2 border-indigo-500/100 rounded-lg">
                <div className="m-5">
                        <div className ="flex justify-start">
                        <div className=' gap-3'><p1 className="font-bold">Name:</p1><span> {txListEach.information.fname}  {txListEach.information.lname}</span></div> 
                        </div>
                        <div>
                            <div className='gap-3'><p1 className="font-bold ">Type: </p1><span>{txListEach.type}</span></div> 
                            
                        </div>
                        <div>
                            <div className='gap-3'><p1 className="font-bold">Location:</p1><span>{txListEach.location}</span></div> 
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1>Date: </p1></div> 
                            <span>{txListEach.date}</span>
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1 >Time: </p1></div>
                            <span>{txListEach.time}</span>
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1 >Coach: </p1></div>
                            <span>{txListEach.coachName}</span>
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1>Description: </p1></div> 
                            <span>{txListEach.information.desc}</span>
                        </div>
                        </div>

                <div className="flex gap-5 p-3">
                    <button
                    className="drop-shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full"
                    onClick={() => BTNhandleEdit(txListEach._id,txListEach.type)}
                    >
                    Edit
                    </button>
                    <button
                    className="drop-shadow-lg bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full"
                    onClick={() => handleDelete(txListEach._id)}
                    >
                    Delete
                    </button>
                </div>
                </div> 
            </div>
          ))}
        </div>
        </div>
    );
}

export default history;