import { GET_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_SUCCESS } from './action';

const initialState = {
  comments: [],
  isLoading: false,
  error: '',
};
const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS:
      return {
        isLoading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        isLoading: false,
        comments: payload,
        error: '',
      };
    case GET_COMMENTS_ERROR:
      return {
        isLoading: false,
        comments: [],
        error: payload,
      };
    default:
      return state;
  }
};
export default commentsReducer;
