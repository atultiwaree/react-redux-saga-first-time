import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
} from "./constant";

export const addToCart = (data) => {
  console.log("action is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.warn("action removeToCart", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.warn("action emptyCart");
  return {
    type: EMPTY_CART,
  };
};

export const searchProduct = (data) => {
  console.log("search action called");
  return {
    type: SEARCH_PRODUCTS,
    data,
  };
};
