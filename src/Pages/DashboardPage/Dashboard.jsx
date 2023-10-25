import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import History from "./history";
import EditPage from "./editPage.jsx";
import { Link } from 'react-router-dom';

function Profile({user_id}) {
  
  return (
    <Layout>
      <div className='min-h-screen mb-10 pt-16 px-10 flex flex-col items-center'>
        <div className='w-[90%] flex items-center gap-10 py-5 pl-10 bg-lime-300 rounded-t-md shadow-black shadow-lg'>
          <img className="h-40 w-40 rounded-full shadow-black shadow-md" src="https://www.setforset.com/cdn/shop/articles/full_body_workout_on_machines_2000x.jpg?v=1660263618" alt="" />
          <h1 className='font-bold text-4xl text-slate-700'>My Dashbord</h1>
          <div className='btn-add-activity ml-auto mr-10'>
            <Link to={'/booking'}><button className='my-5 rounded-full w-[150px] text-lg text-white font-semibold bg-blue-700 hover:bg-blue-900 p-2 shadow-black shadow-md'>Add Activity</button></Link>
          </div>
        </div>
        <div className='container w-[90%] bg-slate-700 rounded-b-md shadow-black shadow-lg '>
              <History />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;