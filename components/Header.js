import React from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";
import DateCard from "./DateCard";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.title_wrapper}>
        <Link href="/">
          <a>
            <h2 className={style.logo_text}>
              <span className={style.sync_text}>SYNC</span>LIVE
            </h2>
          </a>
        </Link>

        <DateCard />
      </div>
      <nav className={style.nav_wrapper}>
        <li>
          <Link href="/">
            <a className={style.today}>TODAY</a>
          </Link>
        </li>
        <li>
          <Link href="/live">
            <a className={style.live}>LIVE</a>
          </Link>
        </li>
        <li>
          <Link href="/finished">
            <a>FINISHED</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>NEWS</a>
          </Link>
        </li>
        <li>
          <Link href="/predicts">
            <a>PREDICTS</a>
          </Link>
        </li>
        <li>
          <Link href="/leage-tables">
            <a className={style.table}>TABLE</a>
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
