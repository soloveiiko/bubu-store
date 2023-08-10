import { fetchProductData } from '../../api/api';

export const GET_PRODUCTS_DATA = 'GET_PRODUCTS_DATA';
export const GET_PRODUCTS_DATA_SUCCESS = 'GET_PRODUCTS_DATA_SUCCESS';
export const GET_PRODUCTS_DATA_ERROR = 'GET_PRODUCTS_DATA_ERROR';
export const UPDATE_FILTER = 'APPLY_FILTERS_SUCCESS';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const getProductsData = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_DATA });
    try {
      const response = await fetchProductData();
      dispatch({ type: GET_PRODUCTS_DATA_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_DATA_ERROR, payload: error });
    }
  };
};
export const updateFilters = (filteredProducts) => {
  return {
    type: UPDATE_FILTER,
    payload: filteredProducts,
  };
};
export const clearFilters = () => {
  return {
    type: CLEAR_FILTER,
  };
};
