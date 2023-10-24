import React, { useState, useEffect } from "react";
import LoadingGif from "../assets/gif/Ripple-2.6s-204px.gif";

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
        <img
          src={LoadingGif}
          alt="Loading"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;
