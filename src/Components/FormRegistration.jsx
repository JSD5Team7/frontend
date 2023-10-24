import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import useAPI from "../Hook/useAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const inpStyle =
  "w-full border-b-2 p-2 bg-transparent text-white focus:outline-none focus:border-blue-400 caret-blue-400 placeholder:italic placeholder:text-slate-500";

const FormRegistration = () => {
  const { register } = useAPI();
  const navigete = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirtday] = useState("");
  const [ageUser, setAgeUser] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [usernameValidation, setUsernameValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [styleValidation, setStyleValidation] = useState(true);
  
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDate;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getFullYear() - 1970);
    // การใช้ Math.abs(ageDate.getUTCFullYear() - 1970) เป็นการคำนวณอายุจากวันเกิดในหนึ่งลำดับการทำงานต่อไปนี้:
    // ageDate.getUTCFullYear() คำนวณปีปัจจุบัน (ปีที่ผู้ใช้กรอกวันเกิด) ในรูปแบบ UTC (Universal Coordinated Time) โดยเริ่มนับจาก 1970 ปี (Unix Epoch) และส่งค่าอายุที่ได้กลับมาในรูปของจำนวนเต็มบวกหรือลบ ซึ่งบ่งบอกว่าผู้ใช้เกิดก่อนหรือหลัง 1970 ปี.
    // Math.abs() ถูกใช้เพื่อแปลงค่าที่ได้ให้เป็นค่าบวกเสมอ โดยไม่คำนึงถึงว่าผู้ใช้เกิดก่อนหรือหลัง 1970 ปี.
    // ข้อสรุปคือการใช้ Math.abs(ageDate.getUTCFullYear() - 1970) คือวิธีในการคำนวณอายุจากวันเกิดและทำให้ค่าอายุเป็นค่าบวกเสมอ ไม่คำนึงถึงว่าผู้ใช้เกิดก่อนหรือหลัง 1970 ปี (Unix Epoch). การใช้ Math.abs ทำให้ค่าที่คำนวณได้มีความบวกเสมอหลังจากคำนวณจาก UTC และ 1970 ปี.
  };

  useEffect(() => {
    if (username === "") {
      setUsernameValidation("");
    } else if (/[^a-zA-Z0-9]/.test(username)) {
      setUsernameValidation(
        "Username contains special characters. Special characters are not allowed."
      );
      setStyleValidation(false);
    } else if (username.length < 8) {
      setUsernameValidation("Please enter more than 8 characters.");
      setStyleValidation(false);
    } else {
      setUsernameValidation("Username successful");
      setStyleValidation(true);
    }
    if (password === "") {
      setPasswordValidation("");
    } else if (password.length < 8) {
      setPasswordValidation("Password more than 8 characters");
      setStyleValidation(false);
    } else {
      setPasswordValidation("Password successful");
      setStyleValidation(true);
    }
    if (birthday) {
      const age = calculateAge(birthday);
      setAgeUser(age);
    }
  }, [username, password, birthday]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password not match"', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return
    }
    try {
      const userData = {
        username: username,
        password: password,
        fname: fname,
        lname: lname,
        gender: gender,
        birthday: birthday,
        age: ageUser,
        email: email,
        phone: phoneNumber,
      };
      const response = await register(userData);
      toast.success("Register Success!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const token = response.data.token;
      window.location.reload();
      localStorage.setItem('token', token);
      history.push('/protected-route');
      navigete('/')
    } catch (error) {
      toast.error('User already exists"', {
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
    <div className="w-2/4 p-5">
      <h2 className="text-3xl text-white text-center tracking-widest">
        Registration
      </h2>
      
      <form className="m-6" onSubmit={handleSubmit}>
        <div className="username mt-4 mb-4">
          <label htmlFor="username" className="mr-3 text-white">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            className={inpStyle}
            required
          />
          <span className={styleValidation ? "text-lime-500" : "text-red-500"}>
            {usernameValidation}
          </span>
        </div>
        <div className="password mt-4 mb-4">
          <label htmlFor="password" className="mr-3 text-white">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="inp-toggle flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="********"
              className={inpStyle}
              required
            />
            {showPassword ? (
              <FontAwesomeIcon
              icon={faEye}
              className="text-gray-600"
              onClick={PasswordVisibility}
            />
              
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-gray-600"
                onClick={PasswordVisibility}
              />
            )}
          </div>
          <span className={styleValidation ? "text-lime-500" : "text-red-500"}>
            {passwordValidation}
          </span>
        </div>
        <div className="confirmPassword mt-4 mb-4">
          <label htmlFor="confirmPassword" className="mr-3 text-white">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="inp-toggle flex items-center">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              id="confirm-password"
              placeholder="********"
              className={inpStyle}
              required
            />
            {showConfirmPassword ? (
               <FontAwesomeIcon
               icon={faEye}
               className="text-gray-600"
               onClick={ConfirmPasswordVisibility}
             />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-gray-600"
                onClick={ConfirmPasswordVisibility}
              />
             
            )}
          </div>
        </div>
        <div className="fname mt-4 mb-4">
          <label htmlFor="fname" className="mr-3 text-white">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={(e) => setFname(e.target.value)}
            value={fname}
            placeholder="First name"
            className={inpStyle}
            required
          />
        </div>
        <div className="lname mt-4 mb-4">
          <label htmlFor="lname " className="mr-3 text-white">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
            placeholder="Last Name"
            className={inpStyle}
            required
          />
        </div>
        <div className="gender mt-4 mb-4">
          <label htmlFor="gender" className="mr-3 text-white">
            Gender
          </label>
          <select
            className="p-1"
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            required
          >
            <option value="">Gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="prefernottosay">Prefer not to say</option>
          </select>
        </div>
        <div className="birthday mt-4 mb-4">
          <label htmlFor="birthday" className="mr-3 text-white">
            Birth Day <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            onChange={(e) => setBirtday(e.target.value)}
            value={birthday}
            className={inpStyle}
            required
          />
        </div>
        <div className="age mt-4 mb-4">
          <label htmlFor="age " className="mr-3 text-white">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="age"
            id="age"
            onChange={(e) => setAgeUser}
            placeholder="25"
            className={inpStyle}
            value={ageUser}
            disabled
            required
          />
        </div>
        <div className="email mt-4 mb-4">
          <label htmlFor="email" className="mr-3 text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="JohnDoe@example.com"
            className={inpStyle}
            required
          />
        </div>
        <div className="phonenumber mt-4 mb-4">
          <label htmlFor="phonenumber" className="mr-3 text-white">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="09xxxxxxxx"
            className={inpStyle}
            required
          />
        </div>
        <div className="btn mt-10 mb-10 flex justify-center">
          <button
            type="submit"
            className="w-40 border border-emerald-600 rounded-full bg-emerald-600 p-2 text-lg text-white shadow-md  hover:bg-emerald-500 hover:border-emerald-500 hover:font-bold"
          >
            Submit
          </button>
          <button
            type="reset"
            className="w-40 ml-2 border border-red-500 rounded-full bg-red-500 p-2 text-lg text-white shadow-md  hover:bg-red-700 hover:border-red-700 hover:font-bold"
          >
            Clear
          </button>
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
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
