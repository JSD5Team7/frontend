import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/icons/logo.png";

const NavbarMobile = ({children}) => {
  return (
    <>
      <div className="flex justify-between items-center px-4 h-20 absolute top-0 right-0 left-0 z-10 bg-slate-100">
        <div className="w-[80px]">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>

        <div className="w-[145px]">
          <NavLink to="/">
            <img src={Logo} alt="logo image" className="w-[145px]" />
          </NavLink>
        </div>

        <ul className="w-[80px]">
          <li className="flex justify-end">
            <NavLink to={"/profile"}>
              <FontAwesomeIcon icon={faCircleUser} size="2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="w-[300px] h-screen bg-slate-100 absolute z-10 left-0 mt-20">
          <li className="px-8 py-5 border-b-4 border-lime-400">
            <NavLink to={"/"} activeClassName="active" className="">
              <h3>Home</h3>
            </NavLink>
          </li>
          <li className="px-8 py-5 border-b-4 border-lime-400">
            <NavLink to={"/booking"} activeClassName="active" className="">
              <h3>Booking</h3>
            </NavLink>
          </li>
          <li className="px-8 py-5 border-b-4 border-lime-400">
            <NavLink to={"/coach"} activeClassName="active" className="">
              <h3>Coach</h3>
            </NavLink>
          </li>
          <li className="px-8 py-5 border-b-4 border-lime-400">
            <NavLink to={"/about-us"} activeClassName="active" className="">
              <h3>About Us</h3>
            </NavLink>
          </li>
          <li className="px-8 py-5 border-b-4 border-lime-400">
            <NavLink to={"/contact-us"} activeClassName="active" className="">
              <h3>Contact</h3>
            </NavLink>
          </li>
          <li className="px-8 py-5 border-b-4 border-lime-400">
            <NavLink to={"/register"} activeClassName="active" className="">
              <h3>Register</h3>
            </NavLink>
          </li>
          <li className="px-8 py-5  ">
            <NavLink to={"/login"} activeClassName="active" className="">
              <h3>Log in</h3>
            </NavLink>
          </li>

        </ul>
      </div>
      <div className="p-20">
        {children}
      </div>
      
    </>
  );
};

export default NavbarMobile;
