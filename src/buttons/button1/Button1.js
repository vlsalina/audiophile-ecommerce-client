import React from "react";
import "./Button1.css";
import "../../styles/Button.css";

const Button1 = ({ text, action, styles }) => {
  return (
    <button
      type="button"
      className="button orange"
      style={styles ? styles : null}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button1;
