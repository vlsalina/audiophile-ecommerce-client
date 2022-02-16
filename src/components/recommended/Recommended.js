import React, { useEffect, useState } from "react";
import "./Recommended.css";
import Button1 from "../../buttons/button1/Button1";
import axios from "axios";
import data from "../../data.json";
import LoadingBox from "../loading/LoadingBox";

const Recommended = ({ recommended, navigate }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    let asyncCaller = async () => {
      try {
        await axios
          .get(`http://localhost:4242/api/product/getAllProducts`)
          .then((result) => setProducts(result.data))
          .catch((error) => console.log(error));
      } catch (error) {}
    };
    asyncCaller();

    return () => setProducts(null);
  }, []);

  // no idea why useNavigate doesn't work here. had to use window.location.href instead.
  const toProductPage = (slug) => {
    if (products) {
      let item = data.find((x) => x.slug === slug);
      window.location.href = `http://localhost:3000/product/${item.id}`;
    } else {
      navigate("/");
    }
  };

  return (
    <div className="recommended">
      {!products && <LoadingBox />}
      {products && (
        <>
          <div className="recommended-content">
            <h2>you may also like</h2>
          </div>
          <div>
            <ul className="recommended-list">
              {recommended.map((product) => (
                <li className="recommended-products" key={product.name}>
                  <div className="recommended-img-wrapper">
                    <img
                      className="recommended-img recommended-img-mobile"
                      src={product.image.mobile.slice(1)}
                      alt={product.name}
                    />
                    <img
                      className="recommended-img recommended-img-tablet"
                      src={product.image.tablet.slice(1)}
                      alt={product.name}
                    />
                    <img
                      className="recommended-img recommended-img-desktop"
                      src={product.image.desktop.slice(1)}
                      alt={product.name}
                    />
                  </div>
                  <div className="recommended-content">
                    <h2>{product.name}</h2>
                  </div>
                  <div className="recommended-btn">
                    <Button1
                      text={"SEE PRODUCT"}
                      action={() => toProductPage(product.slug)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Recommended;
