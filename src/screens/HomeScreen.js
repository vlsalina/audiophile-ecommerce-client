import React, { useState, useEffect } from "react";
import "../styles/HomeScreen.css";
import { useNavigate } from "react-router-dom";
import Button1 from "../buttons/button1/Button1";
import Button2 from "../buttons/button2/Button2";
import Button3 from "../buttons/button3/Button3";
import Zone from "../components/zone/Zone";
import LoadingBox from "../components/loading/LoadingBox";
import { homeImages } from "../data/images";
import About from "../components/about/About";

const featured = {
  yx1ep: {
    id: 1,
  },
  xx59hp: {
    id: 2,
  },
  xx99mk1hp: {
    id: 3,
  },
  xx9mk2hp: {
    id: 4,
  },
  zx7sp: {
    id: 5,
  },
  zx9sp: {
    id: 6,
  },
};

const HomeScreen = () => {
  const navigate = useNavigate();
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

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

    Promise.all(homeImages.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <main className="home">
      {!imgsLoaded ? (
        <LoadingBox />
      ) : (
        <>
          <div className="home-new">
            <img
              className="hero hero-mobile"
              alt="hero"
              src={homeImages[1].url}
            />
            <img
              className="hero hero-tablet"
              alt="hero"
              src={homeImages[5].url}
            />
            <img
              className="hero hero-desktop"
              alt="hero"
              src={homeImages[9].url}
            />
            <div className="home-new-content">
              <div>
                <p className="isNew" style={{ color: "#fff" }}>
                  New Product
                </p>
              </div>
              <div>
                <h1 className="home-new-content-name">
                  XX99 MARK II HEADPHONES
                </h1>
              </div>
              <div>
                <p>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <div className="home-new-btn-wrapper">
                  <Button1
                    text={"See Product"}
                    action={() => navigate(`/product/${featured.xx9mk2hp.id}`)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-content">
            <Zone />
            <div className="featured-wrapper">
              <div className="featured-product-wrapper featured-zx9">
                <img
                  className="circles"
                  alt="circles background"
                  src={homeImages[0].url}
                />
                <img
                  className="featured-zx9-speakers zx9-mobile"
                  src={homeImages[2].url}
                  alt="zx9 speakers"
                />
                <img
                  className="featured-zx9-speakers zx9-tablet"
                  src={homeImages[6].url}
                  alt="zx9 speakers"
                />
                <img
                  className="featured-zx9-speakers zx9-desktop"
                  src={homeImages[10].url}
                  alt="zx9 speakers"
                />
                <div className="font-white">
                  <div>
                    <h2 className="zx9-name">ZX9 SPEAKER</h2>
                  </div>
                  <div>
                    <p className="zx9-desc">
                      Upgrade to premium speakers that are phenomenally built to
                      deliver truly remarkable sound.
                    </p>
                  </div>
                  <div className="zx9-btn-wrapper">
                    <Button3
                      text={"See Product"}
                      action={() => navigate(`/product/${featured.zx9sp.id}`)}
                    />
                  </div>
                </div>
              </div>
              <div className="featured-product-wrapper featured-zx7">
                <img
                  className="featured-zx7-speakers zx7-mobile"
                  src={homeImages[3].url}
                  alt="zx7 speakers"
                />
                <img
                  className="featured-zx7-speakers zx7-tablet"
                  src={homeImages[7].url}
                  alt="zx7 speakers"
                />
                <img
                  className="featured-zx7-speakers zx7-desktop"
                  src={homeImages[11].url}
                  alt="zx7 speakers"
                />
                <div className="featured-zx7-speakers-info">
                  <div>
                    <h2>ZX7 SPEAKER</h2>
                  </div>
                  <div>
                    <Button2
                      text={"See Product"}
                      action={() => navigate(`/product/${featured.zx7sp.id}`)}
                    />
                  </div>
                </div>
              </div>
              <div className="featured-product-wrapper featured-yx1">
                <img
                  className="featured-yx1-earphones yx1-mobile"
                  src={homeImages[4].url}
                  alt="yx1 earphones"
                />
                <img
                  className="featured-yx1-earphones yx1-tablet"
                  src={homeImages[8].url}
                  alt="yx1 earphones"
                />
                <img
                  className="featured-yx1-earphones yx1-desktop"
                  src={homeImages[12].url}
                  alt="yx1 earphones"
                />
                <div className="featured-yx1-content">
                  <div className="featured-yx1-wrapper">
                    <div>
                      <h2>YX1 EARPHONES</h2>
                    </div>
                    <div>
                      <Button2
                        text={"See Product"}
                        action={() => navigate(`/product/${featured.yx1ep.id}`)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <About />
          </div>
        </>
      )}
    </main>
  );
};

export default HomeScreen;
