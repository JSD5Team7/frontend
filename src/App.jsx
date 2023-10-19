import React from 'react'

import useAPI from './Hook/useAPI.jsx'
import { useDispatch } from 'react-redux'


import './App.css'
import Layout from './Layout/Layout.jsx'
import SildeTrainer from './Components/SildeTrainer';




function App() {
  const { currentUser } = useAPI()
  const dispatch = useDispatch()


  const idtoken = window.localStorage.token;
  const userId = window.localStorage.userId;

  if (idtoken) {
    currentUser(idtoken);
    try {
      dispatch({
        type: 'LOGIN',
        payload: {
            token: idtoken,
            userId: userId
        }
    });
    } catch(err) {
      console.log(err)
    }
  }
  
  return (
    <Layout>


      <SildeTrainer/>

     

    </Layout>
    
  )
}

export default App
