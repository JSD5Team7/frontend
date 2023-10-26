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
  const userImg = user.img;

  const dispatch = useDispatch();
  const navigete = useNavigate();
  const idtoken = window.localStorage.token;
  const userId = window.localStorage.userId;

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigete("/");
  };
  const { currentUser } = useAPI();

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
    <section>
      <div className="flex w-full bg-slate-100 justify-between items-center px-4 xl:h-20 xl:min-w-[620px]">
        <div className="w-[150px]  min-h-[80px] xl:w-[300px] xl:min-w-[200px]">
          <NavLink to="/">
            <img src={Logo} alt="logo image" className="w-[145px]" />
          </NavLink>
        </div>

        <ul className="flex min-w-[100px] justify-center gap-1 xl:min-w-[550px]">
          <li className="flex-col w-[40px] h-8 justify-center items-center xl:flex xl:w-[100px] xl:border-x-4 xl:border-lime-300">
            <NavLink to={"/"} activeClassName="active" className="">
              <FontAwesomeIcon
                icon={faHouse}
                size="xl"
                className="visible xl:hidden"
              />
              <h3 className="invisible font-bold hover:text-xl hover:font-extrabold xl:visible">
                Home
              </h3>
            </NavLink>
          </li>
          <li className="flex-col w-[40px] h-8 justify-center items-center xl:flex xl:w-[100px] xl:border-r-4 xl:border-lime-300">
            <NavLink to={"/booking"} activeClassName="active" className="">
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="xl"
                className="visible xl:hidden"
              />
              <h3 className="invisible font-bold hover:text-xl hover:font-extrabold xl:visible">
                Booking
              </h3>
            </NavLink>
          </li>
          <li className="flex-col w-[40px] h-8 justify-center items-center xl:flex xl:w-[100px] xl:border-r-4 xl:border-lime-300">
            <NavLink to={"/coach"} activeClassName="active" className="">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                size="xl"
                className="visible xl:hidden"
              />
              <h3 className="invisible font-bold hover:text-xl hover:font-extrabold xl:visible">
                Coach
              </h3>
            </NavLink>
          </li>
          <li className="flex-col w-[40px] h-8 justify-center items-center xl:flex xl:w-[100px] xl:border-r-4 xl:border-lime-300">
            <NavLink to={"/about-us"} activeClassName="active" className="">
              <FontAwesomeIcon
                icon={faBuilding}
                size="xl"
                className="visible xl:hidden"
              />
              <h3 className="invisible font-bold hover:text-xl hover:font-extrabold xl:visible">
                About Us
              </h3>
            </NavLink>
          </li>
          <li className="flex-col w-[40px] h-8 justify-center items-center xl:flex xl:w-[100px] xl:border-r-4 xl:border-lime-300">
            <NavLink to={"/contact-us"} activeClassName="active" className="">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="visible xl:hidden"
              />
              <h3 className="invisible font-bold hover:text-xl hover:font-extrabold xl:visible">
                Contact
              </h3>
            </NavLink>
          </li>
        </ul>

        {!idtoken ? (
          <ul className="flex w-[150px] justify-end items-center gap-3 xl:min-w-[300px]">
            <li>
              <NavLink to={"/login"} activeClassName="active" className="">
                <button className="w-20 font-bold p-1 hover:w-25  drop-shadow-md border-solid border-2 rounded-full bg-lime-300 hover:bg-lime-400 hover:text-slate-900">
                  Log in
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/register"} activeClassName="active" className="">
                <button className="w-20 font-bold p-1 drop-shadow-md border-solid border-2 rounded-full bg-lime-300 hover:bg-lime-400 hover:text-slate-900">
                  Sign up
                </button>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="flex w-[150px] justify-end items-center gap-3 xl:min-w-[300px]">
            <li className="flex-col w-[40px] h-8 justify-center items-center">
              <NavLink to={"/profile"}>
                <div className="min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] relative overflow-hidden rounded-full">
                <img
                  src={userImg}
                  className="drop-shadow-lg bg-slate-100 object-cover w-full h-full rounded-full "
                />
                </div>
               
                {/* <FontAwesomeIcon
                icon={faCircleUser}
                size="xl"
                className="w-10 py-2"
              /> */}
              </NavLink>
            </li>
            <li className="flex items-center xl:items-start xl:min-w-[125px] xl:max-h-20 xl:flex-col">
              <NavLink to={"/profile"}>
                <h1 className="invisible w-0 font-bold xl:w-[150px] xl:max-h-6 xl:overflow-hidden xl:mb-1 xl:visible">
                  {userFname} {userLname}
                </h1>
              </NavLink>
              <NavLink to={"/dashboard"} activeClassName="active">
                <h1 className="font-bold ">Dashboard</h1>
              </NavLink>
            </li>
            <li>
              <button
                onClick={logout}
                className="w-20 p-1 font-bold drop-shadow-md border-solid border-2 rounded-full bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              >
                Log out
              </button>
            </li>
          </ul>
        )}
      </div>
      {children}
    </section>
  );
};

export default Navbar;
