import React from "react";
import "./socialLinks.css";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <ul className="socialLinks">
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
  );
};

export default SocialLinks;
