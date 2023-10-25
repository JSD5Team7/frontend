import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Banner from "../assets/images/loginbanner.jpg";
import "react-toastify/dist/ReactToastify.css";

import Layout from "../Layout/Layout";
import useAPI from "../Hook/useAPI";

const Login = () => {
  const { login } = useAPI();
  const [valueLogin, setValueLogin] = useState({
    username: "",
    password: "",
  });

  const [disabledButton, setDisabledButton] = useState(false);

  const dispatch = useDispatch();

  const navigete = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setValueLogin({
      ...valueLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(valueLogin);

      dispatch({
        type: "LOGIN",
        payload: {
          token: response.data.token,
          userId: response.data.payload.user.userId,
          username: response.data.payload.user.username,
          role: response.data.payload.user.role,
        },
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.payload.user.userId);

      const idtoken = localStorage.token;
      toast.success("Login Success!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDisabledButton(true);
      setTimeout(() => {
        if (idtoken) {
          navigete("/");
        }
      }, 3000);
    } catch (err) {
      toast.error(err.response.data, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Layout>
      <div className="h-screen my-7 flex justify-center items-center m-auto">
        <div className="flex mix-w-[300px] max-w-[1080px] h-[720px] drop-shadow-2xl rounded-3xl bg-slate-100 justify-between items-center">
          <div className="rounded-l-3xl h-[720px] overflow-hidden">
            <img src={Banner} alt="banner" className="w-full h-full" />
          </div>
          <div className="login-container p-20 flex-col flex items-center justify-center">
            <h3 className="text-center text-2xl font-bold pb-5">
              Welcome to Groot Club!
            </h3>
            <h1 className="text-6xl font-bold mb-12">LOG IN</h1>

            <img src="" alt="" />

            <form
              className="login flex flex-col w-[300px] gap-3"
              onSubmit={handleSubmit}
            >
              <input
                className="border-solid border-2 w-[300px] border-lime-500 rounded-xl p-2 drop-shadow-md"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <div className="flex justify-end items-center">
                <input
                  className="border-solid w-[300px] border-2 border-lime-500 rounded-xl p-2 drop-shadow-md"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*********"
                  onChange={handleChange}
                  required
                ></input>
                {showPassword ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-gray-600 absolute z-10 p-4"
                    onClick={PasswordVisibility}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="text-gray-600 absolute z-10 p-4"
                    onClick={PasswordVisibility}
                  />
                )}
              </div>

              <div className="flex justify-end">
                <p className="px-3">Forget password?</p>
              </div>
              <button
                className="rounded-full font-bold py-2 drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
                disabled={disabledButton}
              >
                Login
              </button>
            </form>
            <div className="w-[300px]">
              <NavLink to={"/register"} activeClassName="active">
                <button className="w-full font-bold rounded-full py-2 drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900">
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
};

export default Login;
