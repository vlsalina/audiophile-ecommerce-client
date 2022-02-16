import React from "react";
import "./Button4.css";
import { IoIosArrowForward } from "react-icons/io";

const Button4 = ({ text, action }) => {
  return (
    <button type="button" className="shop" onClick={action}>
      {text} <IoIosArrowForward />
    </button>
  );
};

export default Button4;
