import React from "react";
import "./social.css";
import { IconContext } from "react-icons";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Social = () => {
  const links = [
    { name: "facebook", icon: <AiFillFacebook /> },
    { name: "twitter", icon: <FaTwitterSquare /> },
    { name: "instagram", icon: <AiOutlineInstagram /> },
  ];

  return (
    <div>
      <ul className="social">
        {links.map((link) => (
          <li key={link.name}>
            <IconContext.Provider value={{ size: "2rem" }}>
              {link.icon}
            </IconContext.Provider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
