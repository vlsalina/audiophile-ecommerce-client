import React, { useState, useEffect } from "react";
import "./category.css";
import Zone from "../zone/Zone";
import { useNavigate } from "react-router-dom";
import Button1 from "../../buttons/button1/Button1";
import LoadingBox from "../loading/LoadingBox";
import About from "../about/About";

const Featured = ({ product, navigate, idx }) => {
  const nav = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className={`featured-card ${idx % 2 === 0 ? "even" : "odd"} ${
        idx === 0 ? "featured-first" : ""
      }`}
    >
      <img
        className="featured-img featured-img-mobile"
        src={product.categoryImage.mobile.slice(1)}
        alt={`${product.name}`}
      />
      <img
        className="featured-img featured-img-tablet"
        src={product.categoryImage.tablet.slice(1)}
        alt={`${product.name}`}
      />
      <img
        className="featured-img featured-img-desktop"
        src={product.categoryImage.desktop.slice(1)}
        alt={`${product.name}`}
      />
      <div className="featured-content">
        <div>
          {product.new ? <p className="isNew">new product</p> : <div />}
        </div>
        <div className="product-name">
          <h2>{product.name}</h2>
        </div>
        <div className="product-desc">
          <p>{product.description}</p>
        </div>
        <div>
          <Button1 text={"See Product"} action={nav} />
        </div>
      </div>
    </div>
  );
};

const Category = ({ data }) => {
  const navigate = useNavigate();
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image.url);

        loadImg.onerror = (err) => reject(err);
      });
    };

    let products = [];
    let idx = 0;
    data.forEach((item) => {
      for (const prop in item.categoryImage) {
        products.push({ id: idx, url: item.categoryImage[prop].slice(1) });
        idx++;
      }
    });

    Promise.all(products.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, [data]);

  return (
    <div className="category">
      {!imgsLoaded && <LoadingBox />}
      {imgsLoaded && (
        <>
          <div className="category-header">
            <h2>{data[0].category.toUpperCase()}</h2>
          </div>
          <div className="category-content">
            <div>
              <ul>
                {data.map((product, idx) => (
                  <li key={product.id}>
                    <Featured product={product} navigate={navigate} idx={idx} />
                  </li>
                ))}
              </ul>
            </div>
            <Zone />
            <About />
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
