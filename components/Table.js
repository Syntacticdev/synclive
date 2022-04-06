import React from "react";
import Link from "next/link";
import style from "../styles/Table.module.css";

const Table = () => {
  return (
    <div className={style.score_table}>
      <div className={style.head}>
        <span className="country">England:</span>
        <span className={style.division}>Premiere League</span>
      </div>
      <div className={style.content}>
        <span>12:00</span>
        <div className={style.score_display}>
          <Link href="/match/{id}">
            <a>
              <span className="home">Home</span>
              <span className="score">- : -</span>
              <span className="away">Away</span>
            </a>
          </Link>
        </div>
        <div className={style.ht_score}>
          <span className={style.label}>HT</span>
          <div className={style.ht_board}>
            <span className="home">-</span>
            <span className="score">:</span>
            <span className="away">-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
