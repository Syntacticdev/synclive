import React from "react";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="copyright">
        <span>Copyright &copy; {new Date().getFullYear()} SYNCLIVE.COM</span>
      </div>
    </div>
  );
};

export default Footer;
