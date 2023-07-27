import { authAPI as authApi } from '../../api';

export const SIGN_UP_USER = 'SIGN_UP_USER';
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';
export const SIGN_UP_USER_ERROR = 'SIGN_UP_USER_ERROR';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';

export const signUpUser = () => {
  return {
    type: SIGN_UP_USER,
  };
};

export const signUpUserSuccess = (user) => {
  return {
    type: SIGN_UP_USER_SUCCESS,
    payload: user,
  };
};
export const signUpUserError = (errorMessage) => {
  return {
    type: SIGN_UP_USER_ERROR,
    payload: errorMessage,
  };
};

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  };
};

export const getUserDataSuccess = (user) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: user,
  };
};
export const getUserDataError = (errorMessage) => {
  return {
    type: GET_USER_DATA_ERROR,
    payload: errorMessage,
  };
};

export const signUpUserAsync = (userData) => {
  return (dispatch) => {
    dispatch(signUpUser());
    authApi
      .login(userData)
      .then((response) => {
        const user = response.data;
        dispatch(signUpUserSuccess(user));
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(signUpUserError(errorMessage));
      });
  };
};
export const getUserDataAsync = (userData) => {
  return (dispatch) => {
    dispatch(getUserData());
    authApi
      .signup(userData)
      .then((response) => {
        const user = response.data;
        dispatch(getUserDataSuccess(user));
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getUserDataError(errorMessage));
      });
  };
};
