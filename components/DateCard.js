import React from "react";
import moment from "moment";

const DateCard = () => {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return (
    <div>
      <div className="day">
        {day}/{month}/{year}
      </div>
    </div>
  );
};

export default DateCard;
