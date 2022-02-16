import React from "react";
import "./zone.css";
import { useNavigate } from "react-router-dom";
import Button4 from "../../buttons/button4/Button4";

const Subheader = ({ text }) => {
  return (
    <div>
      <p className="zone-categories-subheader">{text}</p>
    </div>
  );
};

const Zone = ({ styles }) => {
  const navigate = useNavigate();

  return (
    <div className="zone" style={styles ? styles.background : null}>
      <ul className="zone-featured">
        <li className="zone-categories">
          <div className="zone-img-wrapper">
            <img
              className="zone-categories-preview"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="headphones category"
            />
          </div>
          <Subheader text="HEADPHONES" />
          <div>
            <Button4
              text={`SHOP`}
              action={() => navigate("/category/headphones")}
            />
          </div>
        </li>
        <li className="zone-categories">
          <div className="zone-img-wrapper">
            <img
              className="zone-categories-preview"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="speakers category"
            />
          </div>
          <Subheader text="SPEAKERS" />
          <div>
            <Button4
              text={`SHOP`}
              action={() => navigate(`/category/speakers`)}
            />
          </div>
        </li>
        <li className="zone-categories">
          <div className="zone-img-wrapper">
            <img
              className="zone-categories-preview"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="earphones"
            />
          </div>
          <Subheader text="EARPOHONES" />
          <div>
            <Button4
              text={`SHOP`}
              action={() => navigate(`/category/earphones`)}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Zone;
