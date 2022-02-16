import React from "react";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const SetQty = ({ quantity, increment, decrement }) => {
  return (
    <div className="selector-quantity">
      <div>
        <button type="button" onClick={decrement}>
          <TiMinus />
        </button>
      </div>
      <div>{quantity}</div>
      <div>
        <button type="button" onClick={increment}>
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default SetQty;
