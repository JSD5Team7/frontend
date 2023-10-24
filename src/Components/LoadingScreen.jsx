import React, { useState, useEffect } from "react";
import LoadingGif from "../assets/gif/Ripple-3s-204px.gif";

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <>
      {loading ? (
        // <Spinner className="h-12 w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" color="teal"/>
        <div className="h-screen">
        <img
          src={LoadingGif}
          alt="Loading"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;
