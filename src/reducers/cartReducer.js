import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR,
} from "../actionTypes/actionTypes";

const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { items: action.payload };
    case CART_REMOVE_ITEM:
      return { items: action.payload };
    case CART_CLEAR:
      return { items: [] };
    default:
      return state;
  }
};

export { cartReducer };
