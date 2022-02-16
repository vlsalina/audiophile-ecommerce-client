import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toFixedDecimal, getCartImg } from "../utils";
import "../styles/OrderScreen.css";
import Button1 from "../buttons/button1/Button1";
import Button5 from "../buttons/button5/Button5";
import { useNavigate } from "react-router-dom";
import Button3 from "../buttons/button3/Button3";
import MessageBox from "../components/MessageBox/MessageBox";

const OrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { items } = cart;
  const styles = {
    checkout: {
      width: "100%",
    },
    buttons: {
      fontSize: "1rem",
      padding: "1.5rem 0",
    },
  };

  const [total, setTotal] = useState();
  const [shipping, setShipping] = useState();
  const [vat, setVat] = useState();
  const [grandTotal, setGrandTotal] = useState();
  const [error, setError] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const tel = useRef(null);
  const address = useRef(null);
  const zip = useRef(null);
  const city = useRef(null);
  const country = useRef(null);
  const enumber = useRef(null);
  const epin = useRef(null);

  useEffect(() => {
    let calcTotal, calcShipping, calcVat, calcGrandTotal;

    if (items) {
      calcTotal = items.reduce((a, c) => (a += c.price * c.quantity), 0);
      calcShipping = calcTotal > 3000 ? 0 : calcTotal === 0 ? 0 : 50;
      calcVat = calcTotal * 0.1;
      calcGrandTotal = calcTotal + calcShipping + calcVat;

      setTotal(toFixedDecimal(calcTotal));
      setShipping(toFixedDecimal(calcShipping));
      setVat(toFixedDecimal(calcVat));
      setGrandTotal(toFixedDecimal(calcGrandTotal));
    }
  }, [items]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name.current.value) {
      setError("Name is required.");
      return;
    }

    if (!email.current.value) {
      setError("Email is required.");
      return;
    }

    if (!tel.current.value) {
      setError("Telephone # is required.");
      return;
    }

    if (!address.current.value) {
      setError("Address is required.");
      return;
    }

    if (!zip.current.value) {
      setError("Zip code is required.");
      return;
    }

    if (!city.current.value) {
      setError("City is required.");
      return;
    }

    if (!country.current.value) {
      setError("Country is required.");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="order">
      <div>
        <Button5
          text={"Go Back"}
          action={() => window.history.back()}
          styles={styles.buttons}
        />
      </div>
      <main className="order-responsive">
        <div className="order-responsive-large">
          <form className="order-form">
            <div className="order-checkout">
              <h1>CHECKOUT</h1>
            </div>

            <div className="order-status">
              <p>BILLING STATUS</p>
            </div>

            <div className="order-responsive-wrapper">
              <div className="formdata order-responsive-item">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" ref={name} required />
              </div>

              <div className="formdata order-responsive-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  ref={email}
                  required
                />
              </div>
            </div>

            <div className="formdata">
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" id="tel" name="tel" ref={tel} required />
            </div>

            <div className="formdata">
              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                id="address"
                name="address"
                ref={address}
                required
              />
            </div>

            <div className="order-responsive-wrapper">
              <div className="formdata order-responsive-item">
                <label htmlFor="zip">ZIP Code</label>
                <input type="number" id="zip" name="zip" ref={zip} required />
              </div>

              <div className="formdata order-responsive-item">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" ref={city} required />
              </div>
            </div>

            <div className="formdata">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                ref={country}
                required
              />
            </div>

            <div>
              <p>Payment Method</p>
            </div>

            <div className="order-responsive-wrapper">
              <div className="order-responsive-item" />

              <div className="order-responsive-item">
                <div className="formdata-radio">
                  <input
                    type="radio"
                    id="emoney"
                    name="payment"
                    value="e-Money"
                  />
                  &nbsp; &nbsp;
                  <label htmlFor="emoney">e-Money Number</label>
                </div>

                <div className="formdata-radio">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="Cash on Delivery"
                  />
                  &nbsp; &nbsp;
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>

            <div className="order-responsive-wrapper">
              <div className="formdata order-responsive-item">
                <label htmlFor="eMoney">e-Money Number</label>
                <input type="number" id="eMoney" name="eMoney" ref={enumber} />
              </div>

              <div className="formdata order-responsive-item">
                <label htmlFor="ePin">e-Money PIN</label>
                <input type="number" id="ePin" name="ePin" ref={epin} />
              </div>
            </div>
          </form>
        </div>

        <div className="order-responsive-desktop">
          <div className="order-summary">
            <h3>SUMMARY</h3>
            <ul>
              {items.map((product) => (
                <li className="order-preview" key={product.id}>
                  <div className="order-preview-content">
                    <img alt={product.name} src={getCartImg(product.id)} />
                  </div>
                  <div className="order-preview-content order-preview-info">
                    <div>
                      <p>{product.name.toUpperCase()}</p>
                    </div>
                    <div className="order-preview-price">
                      <p>${product.price}</p>
                    </div>
                  </div>
                  <div className="order-preview-content order-preview-quantity">
                    <div>
                      <p>x{product.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              {total && (
                <div className="order-details">
                  <div className="order-details-desc">
                    <p>TOTAL</p>
                  </div>
                  <div className="order-details-value">
                    <p>${total}</p>
                  </div>
                </div>
              )}
              {shipping && (
                <div className="order-details">
                  <div className="order-details-desc">
                    <p>SHIPPING</p>
                  </div>
                  <div className="order-details-value">
                    <p>${shipping}</p>
                  </div>
                </div>
              )}
              {vat && (
                <div className="order-details">
                  <div className="order-details-desc">
                    <p>VAT (INCLUDED)</p>
                  </div>
                  <div className="order-details-value">
                    <p>${vat}</p>
                  </div>
                </div>
              )}
              <br />
              {grandTotal && (
                <div className="order-details">
                  <div className="order-details-desc">
                    <p>GRAND TOTAL</p>
                  </div>
                  <div className="order-details-total">${grandTotal}</div>
                </div>
              )}
            </div>
          </div>
          <div className="order-pay">
            {items.reduce((a, c) => (a += c.price * c.quantity), 0) > 50 ? (
              <Button1
                text={"CONINUTE & PAY"}
                action={(e) => submitHandler(e)}
                styles={styles.checkout}
              />
            ) : (
              <Button3
                text={"0 items in cart. Return to home."}
                action={() => navigate("/")}
                styles={styles.checkout}
              />
            )}
            {error ? <MessageBox msg={error} /> : <div />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderScreen;
