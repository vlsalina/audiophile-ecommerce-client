import React, { useState, useEffect } from "react";
import "./product.css";
import Selector from "../selector/Selector";
import Recommended from "../recommended/Recommended";
import Button5 from "../../buttons/button5/Button5";
import LoadingBox from "../loading/LoadingBox";
import Zone from "../zone/Zone";
import About from "../about/About";

const Product = ({ product, navigate }) => {
  const [quantity, setQuantity] = useState(0);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const increment = () => {
    setQuantity((prevState) => {
      if (prevState < 10) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

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

    const images = [
      {
        id: 0,
        url: product.image.mobile.slice(1),
      },
      {
        id: 1,
        url: product.gallery.first.mobile.slice(1),
      },
      {
        id: 2,
        url: product.gallery.second.mobile.slice(1),
      },
      {
        id: 3,
        url: product.gallery.third.mobile.slice(1),
      },
    ];

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, [
    product.image.mobile,
    product.gallery.first.mobile,
    product.gallery.second.mobile,
    product.gallery.third.mobile,
  ]);

  const styles = {
    buttons: {
      fontSize: "1rem",
      padding: "1.5rem 0",
    },
  };

  return (
    <div className="product">
      {!imgsLoaded && <LoadingBox />}
      {imgsLoaded && (
        <>
          <div>
            <Button5
              text={"Go Back"}
              action={() => window.history.back()}
              styles={styles.buttons}
            />
          </div>
          <div className="product-content-wrapper">
            <div className="product-img-wrapper">
              <img
                className="product-img product-img-main-mobile"
                src={product.image.mobile.slice(1)}
                alt={product.name}
              />
              <img
                className="product-img product-img-main-tablet"
                src={product.image.tablet.slice(1)}
                alt={product.name}
              />
              <img
                className="product-img product-img-main-desktop"
                src={product.image.desktop.slice(1)}
                alt={product.name}
              />
            </div>
            <div className="product-info">
              <div>
                {product.new ? (
                  <p className="isNew">{"new product".toUpperCase()}</p>
                ) : (
                  <div />
                )}
              </div>
              <div>
                <h1>{product.name}</h1>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <div>
                <h2>
                  <b>$ {product.price}</b>
                </h2>
              </div>
              <div className="select-wrapper">
                <Selector
                  quantity={quantity}
                  setQuantity={setQuantity}
                  increment={increment}
                  decrement={decrement}
                  product={product}
                />
              </div>
            </div>
          </div>
          <div className="product-features">
            <div>
              <h2>FEATURES</h2>
            </div>
            <div>
              <p>{product.features}</p>
            </div>
          </div>
          <div className="in-the-box">
            <div>
              <h2>IN THE BOX</h2>
            </div>
            <div>
              <ul>
                {product.includes.map((x, idx) => (
                  <li key={idx}>
                    <p>
                      <span className="product-qty">{x.quantity}x</span> &nbsp;
                      &nbsp; &nbsp;
                      {x.item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product-img-mobile">
            <div className="product-img-wrapper">
              <img
                className="product-img product-img-first-mobile"
                src={product.gallery.first.mobile.slice(1)}
                alt="gallery first mobile"
              />
            </div>
            <div className="product-img-wrapper">
              <img
                className="product-img product-img-second-mobile"
                src={product.gallery.second.mobile.slice(1)}
                alt="gallery second mobile"
              />
            </div>
            <div className="product-img-wrapper">
              <img
                className="product-img product-img-third-mobile"
                src={product.gallery.third.mobile.slice(1)}
                alt="gallery third mobile"
              />
            </div>
          </div>
          <div className="product-img-tablet-and-desktop">
            <div className="product-col product-col-1">
              <div>
                <img
                  className="product-img product-img-first-tablet"
                  src={product.gallery.first.tablet.slice(1)}
                  alt="gallery first tablet"
                />
                <img
                  className="product-img product-img-first-desktop"
                  src={product.gallery.first.desktop.slice(1)}
                  alt="gallery first desktop"
                />
              </div>
              <div>
                <img
                  className="product-img product-img-second-tablet"
                  src={product.gallery.second.tablet.slice(1)}
                  alt="gallery second tablet"
                />
                <img
                  className="product-img product-img-second-desktop"
                  src={product.gallery.second.desktop.slice(1)}
                  alt="gallery second desktop"
                />
              </div>
            </div>
            <div className="product-col product-col-2">
              <div>
                <img
                  className="product-img product-img-third-tablet"
                  src={product.gallery.third.tablet.slice(1)}
                  alt="gallery third tablet"
                />
                <img
                  className="product-img product-img-third-desktop"
                  src={product.gallery.third.desktop.slice(1)}
                  alt="gallery third desktop"
                />
              </div>
            </div>
          </div>
          <Recommended recommended={product.others} navigate={navigate} />
          <Zone />
          <About />
        </>
      )}
    </div>
  );
};

export default Product;
