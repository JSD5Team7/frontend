import React from "react";
import BackgroundLayout from "./BackgroundLayout";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import NavbarMobile from "../Components/NavbarMobile";

const Layout = ({ children }) => {
  return <BackgroundLayout>{children}</BackgroundLayout>;
};

export default Layout;
