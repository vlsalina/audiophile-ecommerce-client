import React from "react";
import { Link } from "react-router-dom";
import Social from "../social/Social";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-responsive footer-responsive-wrapper-desktop">
        <div className="footer-logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/shared/desktop/logo.svg"}
            alt="logo"
          />
        </div>
        <div className="footer-links-wrapper">
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/headphones">Headphones</Link>
            </li>
            <li>
              <Link to="/category/speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/category/earphones">Earphones</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div className="footer-responsive footer-responsive-wrapper-tablet">
        <div>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
