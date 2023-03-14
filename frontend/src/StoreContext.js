
import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},

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
      console.log("new item");
      console.log(newItem);
      const existItem = state.cart.cartItems.find(
        (product) => product.Id === newItem.Id
      );
      console.log("exist item");
      console.log(existItem);

      const cartItems = existItem
        ? state.cart.cartItems.map((product) =>
            product.Id === existItem.Id ? newItem : product
          )
        : [...state.cart.cartItems, newItem];
        
      console.log("cart items");
      console.log(cartItems);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (product) => product.Id !== action.payload.Id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CLEAR_CART': {
      // clear the cart
      localStorage.removeItem('cartItems');
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    }
    case 'SAVE_SHIPPING_ADDRESS': 
    return{
      ...state, 
      cart: {
        ...state.cart, 
        shippingAddress: action.payload,
      },
    };

    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreContext.Provider value={value}>{props.children} </StoreContext.Provider>;
}
