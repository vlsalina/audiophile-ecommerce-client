import React, { useState, useEffect } from "react";
import "../styles/SuccessScreen.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getCartImg } from "../utils";
import Button1 from "../buttons/button1/Button1";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../actions/actions";
import Metadata from "../components/Metadata/Metadata";

const SuccessScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [grandTotal, setGrandTotal] = useState();
  const { items } = cart;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    let result = items.reduce((a, c) => (a += c.price * c.quantity), 0);
    setGrandTotal(result);
  }, [items]);

  const styles = {
    success: {
      width: "100%",
    },
  };

  const toHomeScreen = () => {
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div id="success" className="success">
      <Metadata
        title={`Order Successfully Made!`}
        description={`Order Success Screen`}
      />
      <div className="success-content">
        <div>
          <BsCheckCircleFill size="5rem" color={"#D87D4A"} />
        </div>
        <div>
          <h1>THANK YOU FOR YOUR ORDER</h1>
        </div>
        <div className="success-confirmation-msg">
          <p>You will recieve an email confirmation shortly.</p>
        </div>
        <div>
          <ul>
            {items.map((item) => (
              <li className="success-preview" key={item.id}>
                <div className="success-info success-product-img">
                  <img alt={item.name} src={getCartImg(item.id)} />
                </div>
                <div className="success-info success-product-name">
                  <p>{item.name}</p>
                </div>
                <div className="success-info success-product-quantity">
                  <p>x{item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="success-gtotal">
          <div>GRAND TOTAL</div>
          <div>${grandTotal}</div>
        </div>
        <div>
          <Button1
            text={"BACK TO HOME"}
            action={toHomeScreen}
            styles={styles.success}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
