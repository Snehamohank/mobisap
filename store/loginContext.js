/* eslint-disable prettier/prettier */
/* eslint-disable no-fallthrough */
// CartContext.js
import React, {createContext, useContext, useReducer} from 'react';

const CartContext = createContext();

export const initialState = {
  cart: [],
  wishlist: [],
  orderHistory: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const isProductInCart = state.cart.some(
        item => item.id === action.payload.id,
      );
      if (!isProductInCart) {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      }

    case 'REMOVE_FROM_CART':
      const newCart = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };

    case 'PLACE_ORDER':
      return {
        ...state,
        orderedItems: state.cart,
        cart: [],
      };

    case 'WISH_LIST':
      const isProductInWishlist = state.wishlist.some(
        item => item.id === action.payload.id,
      );
      if (!isProductInWishlist) {
        return {
          ...state,
          wishlist: [...state.wishlist, {...action.payload, quantity: 1}],
        };
      }

    case 'REMOVE_WISHLIST':
      const updateWishlist = state.wishlist.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        wishlist: updateWishlist,
      };

    case 'ADD_TO_ORDER_HISTORY':
      const {cart, count} = action.payload;
      const orderItems = cart.map(item => {
        return {
          name: item.name,
          image: item.image,
          total: count[item.id] * item.charge || item.charge,
          quantity: count[item.id] || 1,
        };
      });
      return {
        ...state,
        orderHistory: [...state.orderHistory, ...orderItems],
      };

    default:
      return state;
  }
};

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{...state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
