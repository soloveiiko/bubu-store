import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_SUCCESS,
  SIGN_UP_USER,
  SIGN_UP_USER_ERROR,
  SIGN_UP_USER_SUCCESS,
} from './action';

const initialState = {
  user: [],
  isAuth: false,
  isLoading: false,
  error: '',
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP_USER:
    case GET_USER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_USER_SUCCESS:
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
        error: '',
      };
    case SIGN_UP_USER_ERROR:
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        user: [],
        isAuth: false,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
