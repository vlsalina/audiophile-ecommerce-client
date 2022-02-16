import React from "react";
import "./Button3.css";
import "../../styles/Button.css";

const Button3 = ({ text, action, styles }) => {
  return (
    <button
      type="button"
      className="button black"
      onClick={action}
      style={styles}
    >
      {text}
    </button>
  );
};

export default Button3;
