import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import History from "./history";
import EditPage from "./editPage.jsx";
function Profile({user_id}) {
  
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
        <div className='justify-center'>
        <div>
            <div>
              <History />
            </div>
        </div>
        </div>
    </Layout>
  );
}

export default Profile;