import { authAPI as authApi } from '../../api';

export const SIGN_UP_USER = 'SIGN_UP_USER';
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';
export const SIGN_UP_USER_ERROR = 'SIGN_UP_USER_ERROR';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';
export const GET_AUTH_STATUS = 'GET_AUTH_STATUS';

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

export const setAuthStatus = (isAuth) => {
  return {
    type: GET_AUTH_STATUS,
    payload: isAuth,
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
        localStorage.setItem('user', response.data);
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
        localStorage.setItem('user', user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getUserDataError(errorMessage));
      });
  };
};
