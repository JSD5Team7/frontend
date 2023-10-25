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