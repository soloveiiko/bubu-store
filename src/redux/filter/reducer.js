import { CLEAR_FILTER, UPDATE_FILTER } from './action';

const initialState = {
  filteredProducts: [],
  isFiltered: false,
  // categories: [],
  // isAvailable: false,
  // isDiscount: false,
  // producers: [],
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case UPDATE_FILTER:
    //   return {
    //     ...state,
    //     ...payload.filter,
    //   };
    case UPDATE_FILTER:
      return {
        ...state,
        filteredProducts: payload,
        isFiltered: true,
      };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
};
export default filterReducer;
