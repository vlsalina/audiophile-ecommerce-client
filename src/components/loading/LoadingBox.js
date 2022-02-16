import React from "react";
import "./LoadingBox.css";

const LoadingBox = () => {
  return (
    <div className="loadingBox">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingBox;
