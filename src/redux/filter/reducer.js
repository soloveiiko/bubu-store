import { UPDATE_FILTER } from './action';

const initialState = {
  categories: [],
  isAvailable: false,
  isDiscount: false,
  producers: [],
};

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        ...payload.filter,
      };
    default:
      return state;
  }
};
export default filterReducer;
