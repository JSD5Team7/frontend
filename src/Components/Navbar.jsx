import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useAPI from "../Hook/useAPI";
import Logo from "../assets/icons/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ children }) => {
  const { user } = useAPI();
  const userFname = user.fname;
  const userLname = user.lname;

  const dispatch = useDispatch();
  const navigete = useNavigate();
  const idtoken = window.localStorage.token;

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigete("/");
  };
  return (
    <>
    <div className="flex min-w-[620px] bg-slate-100 justify-between items-center px-4 md:h-20">
      <div className="w-[150px]  min-h-[80px] md:w-[300px] md:min-w-[200px]">
        <NavLink to="/">
          <img src={Logo} alt="logo image" className="w-[145px]" />
        </NavLink>
      </div>

      <ul className="flex min-w-[100px] justify-center gap-1 md:min-w-[550px]">
        <li className="flex-col w-[40px h-8 justify-center items-center md:flex md:w-[100px] md:border-x-4 md:border-lime-400">
          <NavLink to={"/"} activeClassName="active" className="">
            <FontAwesomeIcon
              icon={faHouse}
              size="xl"
              className="visible md:hidden"
            />
            <h3 className="invisible font-bold hover:text-xl hover:font-extrabold md:visible">Home</h3>
          </NavLink>
        </li>
        <li className="flex-col w-[40px] h-8 justify-center items-center md:flex md:w-[100px] md:border-r-4 md:border-lime-400">
          <NavLink to={"/booking"} activeClassName="active" className="">
            <FontAwesomeIcon
              icon={faCalendarDays}
              size="xl"
              className="visible md:hidden"
            />
            <h3 className="invisible font-bold hover:text-xl hover:font-extrabold md:visible">Booking</h3>
          </NavLink>
        </li>
        <li className="flex-col w-[40px h-8 justify-center items-center md:flex md:w-[100px] md:border-r-4 md:border-lime-400">
          <NavLink to={"/coach"} activeClassName="active" className="">
          <FontAwesomeIcon
              icon={faPeopleGroup}
              size="xl"
              className="visible md:hidden"
            />
            <h3 className="invisible font-bold hover:text-xl hover:font-extrabold md:visible">Coach</h3>
          </NavLink>
        </li>
        <li className="flex-col w-[40px] h-8 justify-center items-center md:flex md:w-[100px] md:border-r-4 md:border-lime-400">
          <NavLink to={"/about-us"} activeClassName="active" className="">
          <FontAwesomeIcon
              icon={faBuilding}
              size="xl"
              className="visible md:hidden"
            />
            <h3 className="invisible font-bold hover:text-xl hover:font-extrabold md:visible">About Us</h3>
          </NavLink>
        </li>
        <li className="flex-col w-[40px] h-8 justify-center items-center md:flex md:w-[100px] md:border-r-4 md:border-lime-400">
          <NavLink to={"/contact-us"} activeClassName="active" className="">
          <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="visible md:hidden"
            />
            <h3 className="invisible font-bold hover:text-xl hover:font-extrabold md:visible">Contact</h3>
          </NavLink>
        </li>
      </ul>

      {!idtoken ? (
        <ul className="flex w-[150px] justify-end items-center gap-3 md:min-w-[300px]">
          <li>
            <NavLink to={"/login"} activeClassName="active" className="">
              <button className="w-20 font-bold p-1 hover:w-25  drop-shadow-md border-solid border-2 rounded-full bg-lime-400 hover:bg-lime-500 hover:text-slate-900">
                Log in
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"} activeClassName="active" className="">
              <button className="w-20 font-bold p-1 drop-shadow-md border-solid border-2 rounded-full bg-lime-400 hover:bg-lime-500 hover:text-slate-900">
                Sign up
              </button>
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="flex w-[150px] justify-end items-center gap-3 md:min-w-[300px]">
          <li className="flex-col w-[40px] h-8 justify-center items-center">
            <NavLink to={"/profile"}>
              <FontAwesomeIcon
                icon={faCircleUser}
                size="xl"
                className="w-10 py-2"
              />
            </NavLink>
          </li>
          <li className="flex items-center md:items-start md:min-w-[125px] md:max-h-20 md:flex-col">
            <NavLink to={"/profile"}>
              <h1 className="invisible w-0 md:w-[150px] md:max-h-5 md:overflow-hidden md:mb-1 md:visible">{userFname} {userLname}</h1>
            </NavLink>
            <NavLink to={"/dashboard"} activeClassName="active">
                <h1 className="">Dashboard</h1>
            </NavLink>
          </li>
          <li>
            <button
              onClick={logout}
              className="w-20 p-1 font-bold drop-shadow-md border-solid border-2 rounded-full bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
            >
              Log out
            </button>
          </li>
        </ul>
      )}
      
    </div>
    { children }
</>
  );
};

export default Navbar;
