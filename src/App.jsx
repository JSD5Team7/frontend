import React, { useState, useEffect } from "react";

import useAPI from "./Hook/useAPI.jsx";
import { useDispatch } from "react-redux";
import LoadingGif from "./assets/gif/Ripple-2.6s-204px.gif";

import './App.css'
import Layout from './Layout/Layout.jsx'
import SildeTrainer from './Components/SildeTrainer';
import BookingTable from './Components/TimeTable';
import { Rules } from './Components/Rules.jsx';
import { OpenTime } from './Components/OpenTime.jsx';
import SlideImage from './Components/SlideImage.jsx'

function App() {
  const { currentUser } = useAPI();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  
  const dispatch = useDispatch();

  const idtoken = window.localStorage.token;
  const userId = window.localStorage.userId;

  if (idtoken) {
    currentUser(idtoken);
    try {
      dispatch({
        type: "LOGIN",
        payload: {
          token: idtoken,
          userId: userId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {loading ? ( // Display the loading spinner when loading is true
        <img
          src={LoadingGif}
          alt="Loading"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      ) : (
        <Layout>
          <OpenTime/>
          <BookingTable/>
          <SlideImage/>
          <SildeTrainer/>
          <Rules/>
        </Layout>
      )}
    </>
  );
}

export default App;