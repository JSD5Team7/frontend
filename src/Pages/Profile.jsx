import React, { useState } from 'react';
import Layout from '../Layout/Layout';

  const [edit,setEdit] = useState(false);
  const [sty,setSty] = useState("")
  const [page,setPage] = useState();

  function handleEdit(tx_id,type){
    setEdit(true);
    setPage(<EditPage tx_id={tx_id}
                      handleEndEdit={handleEndEdit} 
                      type={type}
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
              <h1 className='font-bold text-xl'>MY PROFILE</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem libero asperiores. Hic optio eius porro exercitationem sunt rem excepturi possimus quia? Quae omnis corrupti deleniti accusantium dicta, molestias error.</p>
            </div>
          </div>
      </div>


      {edit ? 
        <div>
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

export default Profile;