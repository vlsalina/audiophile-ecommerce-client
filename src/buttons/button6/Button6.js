import React from "react";
import "./Button6.css";
import "../../styles/Button.css";

const Button6 = ({ text, styles }) => {
  return (
    <button
      type="button"
      className="button disabled"
      style={styles ? styles : null}
      disabled
    >
      {text}
    </button>
  );
};

export default Button6;
