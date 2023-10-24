import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import useAPI from "../Hook/useAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const inpStyle =
  "w-full border-b-2 p-2 bg-transparent focus:outline-none focus:border-blue-400 caret-blue-400 placeholder:italic placeholder:text-slate-500";

const FormRegistration = () => {
  const { register , usersData } = useAPI();
  const navigete = useNavigate();

  //เซ็ตตัวแปลที่จะรับข้อมูลส่งไปที่ Database
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirtday] = useState("1995-10-14");
  const [ageUser, setAgeUser] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //สร้างตัวแปลไว้แจ้งเตือนเงื่อนไขในการกรอก username และ password
  const [usernameValidation, setUsernameValidation] = useState("");
  const [styleUsernameValidation, setStyleUsernameValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState("");
  const [stylePasswordValidation, setStylePasswordValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState("");
  const [styleEmailValidation, setStyleEmailValidation] = useState(true);


  //สร้างตัวแปลสำหรับเปลี่ยน type ของ password และ confirm password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  //ฟังก์ชั่นสำหรับเปลี่ยน type ของ password
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  //ฟังก์ชั่นสำหรับรับ birthday มาคำนวนอายุของผู้กรอก
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

  //สร้าง useEffect เพื่อเช็ตค่าของ input ว่ากรอกตามเงื่อนไขไหม
  useEffect(() => {

    const validitomCharacterUsername = /[^a-zA-Z0-9]/;

    if (username === "") {
      setUsernameValidation("");
    } else if (validitomCharacterUsername.test(username)) {
      setUsernameValidation(
        "Special characters are not allowed"
      );
      setStyleUsernameValidation(false);
    } else if (username.length < 8) {
      setUsernameValidation("Please enter more than 8 characters.");
      setStyleUsernameValidation(false);
    } else {
      setUsernameValidation("Username ready to use");
      setStyleUsernameValidation(true);
    }

    const duplicateUser = usersData.find(user => user.username === username);
    if (duplicateUser) {
      setUsernameValidation("Username is already used");
      setStyleUsernameValidation(false);
    }

    const validationCharacterPassword = /[a-zA-Z]/g;

    if (password === "") {
      setPasswordValidation("");
    } else if (password.length < 8) {
      setPasswordValidation("Password more than 8 characters");
      setStylePasswordValidation(false);
    } else if (!password.match(validationCharacterPassword) || password.match(validationCharacterPassword).length < 3) {
      setPasswordValidation("Must have at least 3 characters");
      setStylePasswordValidation(false);
    } else {
      setPasswordValidation("Password successful");
      setStylePasswordValidation(true);
    }
    
    if (birthday) {
      const age = calculateAge(birthday);
      setAgeUser(age);
    }

    const validationEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email === '') {
      setEmailValidation('')
    } else if (validationEmail.test(email)) {
      setEmailValidation('Email is available')
      setStyleEmailValidation(true)
    } else if (!validationEmail.test(email)) {
      setEmailValidation('Invalid email format')
      setStyleEmailValidation(false)
    }

    const duplicateEmail = usersData.find(user => user.email === email);
    if (duplicateEmail) {
      setEmailValidation('Email is already used')
      setStyleEmailValidation(false)
    }

  }, [username, password, birthday , email]);

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

      setTimeout(() => {
        // const token = response.data.token;
        // window.location.reload();
        // localStorage.setItem('token', token);
        // history.push('/protected-route');
        navigete('/login')
      },3000)

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

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setFname('');
    setLname('');
    setGender('');
    setBirtday('');
    setAgeUser('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className="w-2/4 p-5">
      <h2 className="text-4xl font-bold text-center tracking-widest">
        Registration
      </h2>
      
      <form className="m-6" onSubmit={handleSubmit}>
        <div className="username mt-4 mb-4">
          <label htmlFor="username" className="mr-3 font-semibold">
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
          <span className={styleUsernameValidation ? "text-lime-500" : "text-red-500"}>
            {usernameValidation}
          </span>
        </div>
        <div className="password mt-4 mb-4">
          <label htmlFor="password" className="mr-3 font-semibold">
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
          <span className={stylePasswordValidation ? "text-lime-500" : "text-red-500"}>
            {passwordValidation}
          </span>
        </div>
        <div className="confirmPassword mt-4 mb-4">
          <label htmlFor="confirmPassword" className="mr-3 font-semibold">
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
          <label htmlFor="fname" className="mr-3 font-semibold">
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
          <label htmlFor="lname " className="mr-3 font-semibold">
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
          <label htmlFor="gender" className="mr-3 font-semibold">
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
          <label htmlFor="birthday" className="mr-3 font-semibold">
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
          <label htmlFor="age " className="mr-3 font-semibold">
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
          <label htmlFor="email" className="mr-3 font-semibold">
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
        <span className={styleEmailValidation ? "text-lime-500" : "text-red-500"}>
            {emailValidation}
          </span>
        <div className="phonenumber mt-4 mb-4">
          <label htmlFor="phonenumber" className="mr-3 font-semibold">
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
            className="w-40 font-bold p-1 drop-shadow-md border-solid border-2 rounded-full bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
          >
            Submit
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
          <button
            type="reset"
            className="w-40 font-bold text-white p-1 drop-shadow-md border-solid border-2 rounded-full bg-red-500 hover:bg-red-700 hover:text-slate-900"
            onClick={handleReset}
          >
            Clear
          </button>

        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
