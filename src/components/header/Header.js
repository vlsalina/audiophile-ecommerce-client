import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import SocialLinks from "../socialLinks/SocialLinks";

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const body = document.querySelector("body");
  // When the user clicks the button, open the modal
  const openHandler = () => {
    const modal = document.getElementById("myModal");
    body.style.overflow = "hidden";
    modal.style.display = "block";
  };

  useEffect(() => {
    let menu = document.getElementsByClassName("menu")[0];
    let header = document.getElementsByClassName("header")[0];
    if (menuDisplay) {
      menu.style.display = "block";
      menu.style.top = header.clientHeight + "px";
    } else {
      menu.style.display = "none";
      menu.style.top = "0px";
    }
  }, [menuDisplay]);

  return (
    <header className="header">
      <div className="header-responsive-logo">
        <button type="button" onClick={() => setMenuDisplay(!menuDisplay)}>
          <IconContext.Provider
            value={{ size: "2rem", className: "menu-items" }}
          >
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>
      </div>
      <div>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/shared/desktop/logo.svg"}
            alt="logo"
          />
        </Link>
      </div>
      <SocialLinks />
      <div>
        <button type="button" onClick={openHandler}>
          <IconContext.Provider
            value={{ size: "2rem", className: "menu-items" }}
          >
            <AiOutlineShoppingCart />
          </IconContext.Provider>
        </button>
      </div>
    </header>
  );
};

export default Header;
