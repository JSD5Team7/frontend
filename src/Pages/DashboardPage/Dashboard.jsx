import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import History from "./history";
import EditPage from "./editPage.jsx";
function Profile({user_id}) {

  const [edit,setEdit] = useState(false);
  const [sty,setSty] = useState("")
  const [page,setPage] = useState();

  function handleEdit(tx_id,type){
    setEdit(true);
    setPage(<EditPage tx_id={tx_id}
                      handleEndEdit={handleEndEdit} 
                      sport={type}
            />);
  }
  function handleEndEdit(){
    setEdit(false);
  }

  return (
    <Layout>
      <div>
          <div className='flex justify-between gap-10'>
            <img className="drop-shadow-lg flex flex-col h-40 w-40 rounded-full" src="https://www.setforset.com/cdn/shop/articles/full_body_workout_on_machines_2000x.jpg?v=1660263618" alt="" />
            <div>
              <h1 className='font-bold text-xl'>MY Dashbord</h1>
            </div>
          </div>
      </div>


      {edit ? 
        <div className='my-3'>
          {page}
        </div>
      :
        <div className='justify-center'>
        <div>
            <div>
              <History user_id={user_id}
                          handleEdit={handleEdit}/>
            </div>
        </div>
        </div>
      
      }
    </Layout>
  );
}

export default Profile;