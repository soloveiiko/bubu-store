import { GET_CATALOG_DATA, GET_CATALOG_DATA_ERROR, GET_CATALOG_DATA_SUCCESS } from './action';

const initialState = {
  catalogs: [],
  isLoading: false,
  error: '',
};
const catalogReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATALOG_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATALOG_DATA_SUCCESS:
      return {
        ...state,
        catalogs: payload,
        isLoading: false,
        error: '',
      };
    case GET_CATALOG_DATA_ERROR:
      return {
        ...state,
        catalogs: [],
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default catalogReducer;
