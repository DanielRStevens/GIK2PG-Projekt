
import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // add to cart
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (product) => product._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((product) =>
            product._id === existItem._id ? newItem : product
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (product) => product._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreContext.Provider value={value}>{props.children} </StoreContext.Provider>;
}
