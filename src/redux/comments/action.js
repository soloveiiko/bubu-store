import { commentsAPI } from '../../api/api';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';
export const getCommentsData = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS });
    commentsAPI
      .getComments(id)
      .then((response) => {
        const comments = response.data;
        dispatch({ type: GET_COMMENTS_SUCCESS, payload: comments });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({ type: GET_COMMENTS_ERROR, payload: errorMessage });
      });
  };
};
