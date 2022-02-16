import React from "react";
import "./selector.css";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/actions";
import Button1 from "../../buttons/button1/Button1";

const Selector = ({
  quantity,
  setQuantity,
  increment,
  decrement,
  product: x,
}) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (quantity > 0) {
      const product = {
        id: x.id,
        slug: x.slug,
        name: x.name,
        price: x.price,
        quantity: quantity,
      };
      dispatch(addItem(product));
    }
  };

  return (
    <div className="selector">
      <div className="selector-quantity">
        <div>
          <button className="selector-btn" type="button" onClick={decrement}>
            <TiMinus />
          </button>
        </div>
        <div>{quantity}</div>
        <div>
          <button className="selector-btn" type="button" onClick={increment}>
            <TiPlus />
          </button>
        </div>
      </div>
      <div className="selector-addTo">
        <Button1 text={"ADD TO CART"} action={clickHandler} />
      </div>
    </div>
  );
};

export default Selector;
