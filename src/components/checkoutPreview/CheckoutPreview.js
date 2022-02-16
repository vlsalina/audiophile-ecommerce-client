import React, { useState, useEffect } from "react";
import "./checkoutPreview.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../actions/actions";
import CartSetQty from "../cartSetQty/CartSetQty";
import { useNavigate } from "react-router-dom";
import { getCartImg } from "../../utils";
import Button1 from "../../buttons/button1/Button1";
import Button5 from "../../buttons/button5/Button5";
import LoadingBox from "../loading/LoadingBox";
import Button6 from "../../buttons/button6/Button6";

const CheckoutPreview = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const body = document.querySelector("body");
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const products = cart.items.map((item) => {
    return {
      id: item.id,
      url: getCartImg(item.id),
      slug: item.slug,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    };
  });

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

    Promise.all(products.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, [products]);

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      body.style.overflow = "auto";
      modal.style.display = "none";
    }
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const checkoutHandler = () => {
    const modal = document.getElementById("myModal");

    navigate("/checkout");
    body.style.overflow = "auto";
    modal.style.display = "none";
  };

  useEffect(() => {
    let cost = cart.items.reduce((a, c) => {
      return (a += c.price * c.quantity);
    }, 0);
    setTotal(cost);
  }, [cart.items]);

  const styles = {
    checkout: {
      width: "100%",
    },
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-top">
          <div className="modal-items-count">
            <h2>CART ({cart.items.length > 0 ? cart.items.length : "0"})</h2>
          </div>
          <div>
            <Button5 text={"REMOVE ALL"} action={clearCartHandler} />
          </div>
        </div>
        <div>
          <ul>
            {products.map((item) => (
              <li className="modal-cart-item" key={item.id}>
                <div className="modal-item-block">
                  {!imgsLoaded && <LoadingBox />}
                  {imgsLoaded && (
                    <img
                      className="modal-item-img"
                      alt={item.name}
                      src={getCartImg(item.id)}
                    />
                  )}
                </div>
                <div className="modal-item-block modal-item">
                  <div className="modal-item-name modal-bold">
                    <p>{item.name}</p>
                  </div>
                  <div className="modal-item-price modal-bold">
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="modal-item-block">
                  <CartSetQty id={item.id} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="modal-cart-details">
          <div className="modal-cart-total modal-bold">
            <p>Total</p>
          </div>
          <div className="modal-cart-amt modal-bold">
            <p>${total}</p>
          </div>
        </div>
        <div>
          {cart.items.reduce((a, c) => (a += c.price * c.quantity), 0) > 0 ? (
            <Button1
              text={"CHECKOUT"}
              action={checkoutHandler}
              styles={styles.checkout}
            />
          ) : (
            <Button6 text={"0 items"} styles={styles.checkout} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPreview;
