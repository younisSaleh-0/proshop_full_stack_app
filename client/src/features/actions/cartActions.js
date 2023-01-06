import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // getState. will allows us to get anything form the reducer in store.js (productList, productDetail)
  const { data } = await axios.get(`http://localhost:3100/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id, // product is our id
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // Save it into local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // Update the local storage after our action
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};
