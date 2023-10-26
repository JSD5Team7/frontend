import { useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import useAPI_2 from '../../Hook/useAPI_2.jsx';
import TennisIcon from '../../assets/icons/icons8-tennis-100 (1).png';
import BatmintonIcon from '../../assets/icons/icons8-badminton-100.png';
import TebleTennisIcon from '../../assets/icons/icons8-table-tennis-64.png';
import YogaIcon from '../../assets/icons/icons8-yoga-100.png';
import AerobicIcone from '../../assets/icons/icons8-dancing-100.png'

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
                });
            

              Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
              setTimeout(() => {
                window.location.reload();
              },2000)
              
            }
          })
          
      };

      const sportTypeImages = {
        tennis: TennisIcon,
        tabletennis: TebleTennisIcon,
        badminton: BatmintonIcon,
        yoga: YogaIcon,
        aerobic: AerobicIcone,
        // Add more sport types as needed
      };

     

    return (
        <div className='container py-10 px-16 flex flex-wrap gap-x-5 gap-y-5 justify-items-start '>
            
                {txList.map((txListEach) => (
                    <div className='card w-[350px] h-[400px] bg-slate-400 rounded-md shadow-black shadow-md'>
                        <div className='bg-lime-300 h-[50px] pl-3 rounded-t-md flex items-center justify-center gap-5'>
                            <h3 className='font-bold text-xl '>Activity Details</h3>
                            <img
                            src={sportTypeImages[txListEach.type.toLowerCase()]}
                            alt={`Image for ${txListEach.type}`}
                            className='h-8 w-8 '
                            />
                        </div>
                        
                            <div className="px-5 pt-3 h-[280px] text-lg ">
                                <p className="font-semibold">Name : <span className='font-thin'> {txListEach.information.fname}  {txListEach.information.lname}</span></p>
                                <p className="font-semibold">Type : <span className='font-thin'>{txListEach.type}</span></p>
                                <p className="font-semibold">{txListEach.type === 'yoga' || txListEach.type === 'aerobic' ? 'Room :' : 'Court :'} <span className='font-thin text-lime-300'>{txListEach.location}</span></p>
                                <p className='font-semibold'>Date : <span className='font-thin text-lime-300'>{txListEach.date}</span></p>
                                <p className='font-semibold'>Time : <span className='font-thin text-lime-300'>{txListEach.time}</span> </p>
                                <p className='font-semibold'>Duration : <span className='font-thin t'> 60 minutes </span> </p>
                                <p className='font-semibold'>Coach : <span className='font-thin'>{txListEach.coachName ? txListEach.coachName : 'No Coach' }</span></p>
                                <p className='font-semibold'>Description : <span className='font-thin'>{txListEach.information.desc}</span></p>
                            </div>
                            

                            <div className="flex gap-3 justify-end m-5">
                                <button
                                className="w-[100px] drop-shadow-lg border-2 bg-lime-300 hover:bg-lime-400 font-bold py-1 px-6 rounded-full"
                                onClick={() => BTNhandleEdit(txListEach._id,txListEach.type)}
                                >
                                Edit
                                </button>
                                <button
                                className="w-[100px] drop-shadow-lg border-2 bg-red-400 hover:bg-red-500 hover:text-slate-900 font-bold py-1 px-4 rounded-full"
                                onClick={() => handleDelete(txListEach._id)}
                                >
                                Delete
                                </button>
                            </div>
                        
                    </div>
                ))}
            
        </div>
    );
}

export default history;
