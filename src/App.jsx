import React, { useState, useEffect } from "react";

// import useAPI from "./Hook/useAPI.jsx";
// import { useDispatch } from "react-redux";

import './App.css'
import Layout from './Layout/Layout.jsx'
import SildeTrainer from './Components/SildeTrainer';
import BookingTable from './Components/TimeTable';
import { Rules } from './Components/Rules.jsx';
import { OpenTime } from './Components/OpenTime.jsx';
import SlideImage from './Components/SlideImage.jsx'

import LoadingScreen from "./Components/LoadingScreen.jsx";


function App() {
  // const { currentUser } = useAPI();
    
  // const dispatch = useDispatch();

  // const idtoken = window.localStorage.token;
  // const userId = window.localStorage.userId;

  // if (idtoken) {
  //   currentUser(idtoken);
  //   try {
  //     dispatch({
  //       type: "LOGIN",
  //       payload: {
  //         token: idtoken,
  //         userId: userId,
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
      <LoadingScreen>
        <Layout>
          <OpenTime/>
          <BookingTable/>
          <SlideImage/>
          <SildeTrainer/>
          <Rules/>
        </Layout>
      </LoadingScreen>
  );
}

export default App;