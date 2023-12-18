/* eslint-disable prettier/prettier */

export const initialState = { cartItems: [] };

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // handle other actions if needed
    default:
      return state;
  }
};
