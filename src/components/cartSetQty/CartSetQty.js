import React, { useState, useEffect } from "react";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import "./cartSetQty.css";
import { useSelector, useDispatch } from "react-redux";
import { updateQty } from "../../actions/actions";

const CartSetQty = ({ id }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { items } = cart;
  const [quantity, setQuantity] = useState();

  const increment = () => {
    dispatch(updateQty({ id: id, change: "inc" }));
  };

  const decrement = () => {
    dispatch(updateQty({ id: id, change: "dec" }));
  };

  useEffect(() => {
    let product = items.find((x) => x.id === id);
    setQuantity(product.quantity);
  }, [cart, id, items]);

  return (
    <div className="cart-set-qty">
      <div>
        <button className="cart-set-qty-btn" type="button" onClick={decrement}>
          <TiMinus />
        </button>
      </div>
      <div>{quantity}</div>
      <div>
        <button className="cart-set-qty-btn" type="button" onClick={increment}>
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartSetQty;
