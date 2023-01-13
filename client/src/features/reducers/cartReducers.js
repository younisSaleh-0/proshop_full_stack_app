import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constant/cartConstant";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existingItem = state.cartItems.find(
        (item) => item.product === action.payload.product
      );

      if (existingItem) {
        // If the item is already in the cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existingItem.product ? action.payload : item
          ),
        };
      } else {
        // If the item is not in the cart, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    // remove item
    case CART_REMOVE_ITEM:
      // Remove item from cart
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };

    // save shipping address
    case CART_SAVE_SHIPPING_ADDRESS:
      // Remove item from cart
      return {
        ...state,
        shippingAddress: action.payload, // Action.payload is the data we sent from the form
      };

    // save payment method
    case CART_SAVE_PAYMENT_METHOD:
      // Remove item from cart
      return {
        ...state,
        paymentMethod: action.payload, // Action.payload is the data we sent from the form
      };

    default:
      return state;
  }
};
