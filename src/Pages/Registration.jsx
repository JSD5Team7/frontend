import React from "react";
import Layout from "../Layout/Layout";
import FormRegistration from "../Components/FormRegistration";
import SignBanner from '../assets/images/sign-up-photocut.jpg'

const Registration = () => {

  return (
    <Layout>
      <div className="flex flex-col h-fit justify-center items-center mb-10 xl:w-[1200px] m-auto xl:min-w-[600px] ">
        <h1 className="text-center text-6xl font-bold p-5 mb-10">
          Welcome to Groot Club!
        </h1>
          <div className="form-signup w-[600px] flex items-center gap-3 mt-5 bg-emerald-200 bg-opacity-10 shadow-md shadow-black rounded-lg xl:w-[1200px]">
            <div className="signup-image order-1 w-0 invisible xl:w-[600px] xl:visible">
              <img
                src={SignBanner}
                alt="Image signup page"
                className="rounded-e-lg contrast-125"
              />
            </div>
            <FormRegistration />
          </div>
     
      </div>
    </Layout>
  );
};

export default Registration;
