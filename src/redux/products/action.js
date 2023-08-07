import { productsList } from '../../utils/data';

export const GET_PRODUCTS_DATA = 'GET_PRODUCTS_DATA';
export const GET_PRODUCTS_DATA_SUCCESS = 'GET_PRODUCTS_DATA_SUCCESS';
export const GET_PRODUCTS_DATA_ERROR = 'GET_PRODUCTS_DATA_ERROR';

export const getProductsData = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_DATA });
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(productsList);
        }, 1000);
      });
      dispatch({ type: GET_PRODUCTS_DATA_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_DATA_ERROR, payload: error });
    }
  };
};
