import axios from "axios";

const PENDING = "post/PENDING";
const SUCCESS = "post/SUCCESS";
const FAILURE = "post/FAILURE";

const getApi = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

// Action creators
export const postAction = (id) => (dispatch) => {
  dispatch({ type: PENDING });
  getApi(id)
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILURE,
        payload: err,
      });
    });
};

const initialState = {
  pending: false,
  error: false,
  title: "",
  body: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        pending: false,
        error: false,
        title: action.payload.title,
        body: action.payload.body,
      };
    case FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postReducer;
