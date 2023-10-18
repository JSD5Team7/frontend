import { useState,useEffect} from 'react'
import axios from 'axios';

function history({user_id,handleEdit}){
    const [userList, setUsers] = useState([]);
    
    const baseApi = "http://localhost:3000";
    // https://sportclubbackend.onrender.com
    useEffect(  ()=>{
        //get history with user_id find to tx_activity
        try {
            const getHistory = async (user_id)=>{
                const res = await axios.get(`${baseApi}/user/history/${user_id}`);
                const data = res.data;
                // console.log(data);
                setUsers(data);
                return;
            }
            getHistory(user_id);
        } catch (error) {
            console.log({measage:error.measage});
            return;
        }
    },[]);
      const BTNhandleEdit = (user_id,_id,type) => {
        // console.log(`Edit:${user_id},${_id}`);
        handleEdit(_id,type);
      };
    
      const handleDelete = (id) => {
        // console.log(id);
        // const filtered = userList.filter((user) => user.id !== id);
        // setUsers(filtered);
       
      };
    return (
        <div>
            <div className="justify-center">
          {userList.map((user) => (
            <div className='flex flex-col'>
                <div className="drop-shadow-lg m-5 border-2 border-indigo-500/100 rounded-lg">
                <div className="m-5">
                        <div className ="flex justify-start">
                        <div className=' gap-3'><p1 className="font-bold">Name:</p1><span> {user.information.fname}  {user.information.lname}</span></div> 
                        </div>
                        <div>
                            <div className='gap-3'><p1 className="font-bold ">Type: </p1><span>{user.type}</span></div> 
                            
                        </div>
                        <div>
                            <div className='gap-3'><p1 className="font-bold">Location:</p1><span>{user.location}</span></div> 
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1>Date: </p1></div> 
                            <span>{user.date}</span>
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1 >Time: </p1></div>
                            <span>{user.time}</span>
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1 >Coach: </p1></div>
                            <span>{user.coachName}</span>
                        </div>
                        <div className ="flex justify-start">
                            <div className='font-bold gap-3'><p1>Description: </p1></div> 
                            <span>{user.information.desc}</span>
                        </div>
                        </div>

                <div className="flex gap-5 p-3">
                    <button
                    className="drop-shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-full"
                    onClick={() => BTNhandleEdit(user.id,user._id,user.type)}
                    >
                    Edit
                    </button>
                    <button
                    className="drop-shadow-lg bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full"
                    onClick={() => handleDelete(user.id)}
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