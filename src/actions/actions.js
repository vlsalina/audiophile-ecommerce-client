import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR,
} from "../actionTypes/actionTypes";

export const addItem = (product) => async (dispatch, getState) => {
  const itemExists =
    getState().cart.items.length > 0
      ? getState().cart.items.find((x) => x.id === product.id)
      : undefined;
  if (itemExists) {
    let newCart = getState().cart.items.map((item) => {
      if (item.id === itemExists.id) {
        return product;
      }
      return item;
    });
    dispatch({ type: CART_ADD_ITEM, payload: newCart });
    localStorage.setItem("cart", JSON.stringify(getState().cart.items));
  } else {
    dispatch({
      type: CART_ADD_ITEM,
      payload: [...getState().cart.items, product],
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.items));
  }
};

export const removeItem = (id) => async (dispatch, getState) => {
  if (getState().cart.items.length > 0) {
    let newCart = getState().cart.items.filter((item) => {
      return item.id !== id;
    });
    dispatch({ type: CART_REMOVE_ITEM, payload: newCart });
    localStorage.setItem("cart", JSON.stringify(getState().cart.items));
  }
};

export const clearCart = () => async (dispatch, getState) => {
  if (getState().cart.items.length > 0) {
    dispatch({ type: CART_CLEAR });
  }
  localStorage.removeItem("cart");
};

export const updateQty = (data) => async (dispatch, getState) => {
  let product = getState().cart.items.find((x) => x.id === data.id);
  if (product) {
    if (data.change === "inc") {
      if (product.quantity < 10) {
        product.quantity += 1;
      }
    } else if (data.change === "dec") {
      if (product.quantity > 0) {
        product.quantity -= 1;
      }
    }
    let newCart = getState().cart.items.map((item) => {
      if (item.id === data.id) {
        return product;
      }
      return item;
    });
    dispatch({ type: CART_ADD_ITEM, payload: newCart });
    localStorage.setItem("cart", JSON.stringify(getState().cart.items));
  } else {
    dispatch({ error: "No such item found in cart." });
  }
};
