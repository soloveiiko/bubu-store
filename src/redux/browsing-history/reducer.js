import { ADD_TO_HISTORY } from './action';

const initialState = {
  products: [],
};
const historyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_HISTORY:
      // Check if the product already exists in the list
      const existingProductIndex = state.products.findIndex((product) => product.id === payload.id);
      if (existingProductIndex !== -1) {
        // If it exists, remove it from the current position and add it to the end
        const updatedProducts = [...state.products];
        updatedProducts.splice(existingProductIndex, 1);
        return {
          ...state,
          products: [payload, ...updatedProducts],
        };
      } else {
        // If it doesn't exist, simply add it to the end
        return {
          ...state,
          products: [payload, ...state.products],
        };
      }
    default:
      return state;
  }
};
export default historyReducer;
