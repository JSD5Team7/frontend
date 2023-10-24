
import axios from "axios";

const baseURL = 'http://localhost:3000'

const useAPI_2 = ()=>{

    const editTxActivity = async(value)=>{
        return await axios.put(`${baseURL}/activity/edit`,value,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
     }
     const deleteTxActivity = async(tx_id)=>{
        return await axios.delete(`${baseURL}/activity/deleteTx/${tx_id}`);
     }
    return {editTxActivity,deleteTxActivity}
}
export default useAPI_2;
