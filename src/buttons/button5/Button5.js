import React from "react";
import "./Button5.css";
import "../../styles/Button.css";

const Button5 = ({ text, action, styles }) => {
  return (
    <button
      type="button"
      className="button clear"
      style={styles ? styles : null}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button5;
