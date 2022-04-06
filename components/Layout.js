import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import style from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={style.layout_container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
