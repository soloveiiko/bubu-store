import { GET_PRODUCTS_DATA, GET_PRODUCTS_DATA_ERROR, GET_PRODUCTS_DATA_SUCCESS } from './action';

const initialState = {
  products: [],
  isLoading: false,
  error: '',
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        error: '',
      };
    case GET_PRODUCTS_DATA_ERROR:
      return {
        ...state,
        products: [],
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
