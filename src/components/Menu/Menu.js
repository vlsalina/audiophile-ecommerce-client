import React from "react";
import Zone from "../zone/Zone";
import "./Menu.css";

const Menu = () => {
  const styles = {
    background: {
      backgroundColor: "#fff",
      marginTop: "0",
      padding: "48px 0",
    },
  };

  return (
    <div className="menu">
      <Zone styles={styles} />
    </div>
  );
};

export default Menu;
