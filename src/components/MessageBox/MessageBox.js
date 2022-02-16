import React from "react";
import "./MessageBox.css";

const MessageBox = ({ msg }) => {
  return (
    <div className="messagebox">
      <p>{msg}</p>
    </div>
  );
};

export default MessageBox;
