import { fetchCatalogData } from '../../api/api';

export const GET_CATALOG_DATA = 'GET_CATALOG_DATA';
export const GET_CATALOG_DATA_SUCCESS = 'GET_CATALOG_DATA_SUCCESS';
export const GET_CATALOG_DATA_ERROR = 'GET_CATALOG_DATA_ERROR';

export const getCatalogData = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CATALOG_DATA });
    try {
      const response = await fetchCatalogData();
      dispatch({ type: GET_CATALOG_DATA_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: GET_CATALOG_DATA_ERROR, payload: error });
    }
  };
};
