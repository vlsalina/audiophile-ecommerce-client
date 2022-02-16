import React from "react";
import "./Button2.css";
import "../../styles/Button.css";

const Button2 = ({ text, action }) => {
  return (
    <button type="button" className="button outline" onClick={action}>
      {text}
    </button>
  );
};

export default Button2;
